import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/data/site";
import { flattenErrors, quoteCategories, quoteSchema, validateFile } from "@/lib/quote-schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Best-effort, per-instance rate limit. For stronger protection add Vercel Firewall / WAF rules.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [key, times] of hits) if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
  return recent.length > MAX_PER_WINDOW;
}

const esc = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);

const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  const from = process.env.QUOTE_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[quote] Email delivery is not configured. Set RESEND_API_KEY, QUOTE_TO_EMAIL and QUOTE_FROM_EMAIL.");
    return json(
      {
        ok: false,
        error: `Online enquiries are not available right now. Please contact us on ${company.phoneDisplay} or ${company.email}.`,
      },
      503,
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return json({ ok: false, error: "Too many enquiries from your connection. Please try again in a few minutes." }, 429);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: "We could not read your submission. Please try again." }, 400);
  }

  // Honeypot — pretend success so bots learn nothing, but send nothing.
  if (String(form.get("website") ?? "").trim() !== "") return json({ ok: true }, 200);

  const parsed = quoteSchema.safeParse({
    name: form.get("name"),
    company: form.get("company"),
    email: form.get("email"),
    phone: form.get("phone"),
    category: form.get("category"),
    message: form.get("message"),
    consent: form.get("consent"),
  });
  if (!parsed.success) {
    return json({ ok: false, error: "Please correct the highlighted fields.", fieldErrors: flattenErrors(parsed.error) }, 422);
  }
  const data = parsed.data;

  const fileEntry = form.get("file");
  const file = fileEntry instanceof File && fileEntry.size > 0 ? fileEntry : null;
  const fileError = validateFile(file);
  if (fileError) return json({ ok: false, error: fileError, fieldErrors: { file: fileError } }, 422);

  const categoryLabel = quoteCategories.find((c) => c.value === data.category)?.label ?? data.category;
  const reference = `AD-${Date.now().toString(36).toUpperCase()}`;
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Company", data.company],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Category", categoryLabel],
  ];

  const html = `<div style="font-family:Arial,sans-serif;color:#1f2937;max-width:640px">
    <h2 style="color:#0b2d5c;margin:0 0 12px">New quote request <small style="color:#6b7280">${reference}</small></h2>
    <table style="border-collapse:collapse;width:100%">${rows
      .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;vertical-align:top;white-space:nowrap">${k}</td><td style="padding:6px 0">${esc(v)}</td></tr>`)
      .join("")}</table>
    <h3 style="color:#0b2d5c;margin:20px 0 6px">Project description</h3>
    <p style="white-space:pre-wrap;margin:0">${esc(data.message)}</p>
    ${file ? `<p style="margin-top:16px;color:#6b7280">Attachment: ${esc(file.name)} (${Math.round(file.size / 1024)} KB)</p>` : ""}
  </div>`;
  const text = `New quote request ${reference}\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nProject description:\n${data.message}\n${file ? `\nAttachment: ${file.name}` : ""}`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      replyTo: data.email,
      subject: `Quote request ${reference}: ${oneLine(categoryLabel)} — ${oneLine(data.company)}`,
      html,
      text,
      attachments: file ? [{ filename: file.name.replace(/[^\w.\- ]/g, "_"), content: Buffer.from(await file.arrayBuffer()) }] : undefined,
    });
    if (error) {
      console.error("[quote] Resend rejected the message:", error.name, error.message);
      return json({ ok: false, error: "We could not send your enquiry right now. Please try again, or contact us directly." }, 502);
    }
  } catch (err) {
    console.error("[quote] Unexpected failure while sending:", err);
    return json({ ok: false, error: "We could not send your enquiry right now. Please try again, or contact us directly." }, 502);
  }

  return json({ ok: true, reference }, 200);
}

export function GET() {
  return json({ ok: false, error: "Method not allowed" }, 405);
}
