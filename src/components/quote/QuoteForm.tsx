"use client";

import { useId, useRef, useState } from "react";
import { CircleAlert, CircleCheck, FileUp, Loader2, Mail, Phone } from "lucide-react";
import { company, whatsappLink } from "@/data/site";
import {
  ALLOWED_FILE_EXTENSIONS,
  flattenErrors,
  quoteCategories,
  quoteSchema,
  validateFile,
  type QuoteFieldErrors,
} from "@/lib/quote-schema";
import { WhatsAppIcon } from "@/components/ui/icons";
import { buttonClasses } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; reference?: string }
  | { state: "error"; message: string };

const fieldBase =
  "mt-1.5 block w-full rounded-lg border bg-white px-3.5 py-2.5 text-base text-ink shadow-sm placeholder:text-ink-muted/70 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30";

function Field({ id, label, required, error, hint, children }: { id: string; label: string; required?: boolean; error?: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold text-navy">
        {label} {required ? <span aria-hidden="true" className="text-porta">*</span> : <span className="font-normal text-ink-muted">(optional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-ink-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm font-semibold text-[#b42318]">
          {error}
        </p>
      )}
    </div>
  );
}

export function QuoteForm({ defaultCategory = "", compact = false }: { defaultCategory?: string; compact?: boolean }) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<QuoteFieldErrors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [fileName, setFileName] = useState("");

  const id = (name: string) => `${uid}-${name}`;
  const aria = (name: keyof QuoteFieldErrors, hint = false) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id(name)}-error` : hint ? `${id(name)}-hint` : undefined,
  });
  const input = (name: keyof QuoteFieldErrors) => cn(fieldBase, errors[name] ? "border-[#b42318]" : "border-line");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.state === "submitting") return;
    const form = event.currentTarget;
    const data = new FormData(form);

    const parsed = quoteSchema.safeParse({
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      phone: data.get("phone"),
      category: data.get("category"),
      message: data.get("message"),
      consent: data.get("consent") === "on" ? "true" : "",
    });
    const next: QuoteFieldErrors = parsed.success ? {} : flattenErrors(parsed.error);
    const file = data.get("file");
    const fileError = file instanceof File ? validateFile(file) : null;
    if (fileError) next.file = fileError;

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus({ state: "idle" });
      const first = (Object.keys(next)[0] as string) === "consent" ? "consent" : Object.keys(next)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    if (file instanceof File && file.size === 0) data.delete("file");
    data.set("consent", "true");
    setStatus({ state: "submitting" });
    try {
      const res = await fetch("/api/quote", { method: "POST", body: data });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fieldErrors?: QuoteFieldErrors; reference?: string };
      if (res.ok && json.ok) {
        setStatus({ state: "success", reference: json.reference });
        form.reset();
        setFileName("");
        return;
      }
      if (json.fieldErrors) setErrors(json.fieldErrors);
      setStatus({
        state: "error",
        message: json.error ?? "We could not send your enquiry. Please try again, or contact us by phone, WhatsApp or email.",
      });
    } catch {
      setStatus({ state: "error", message: "Network error — your enquiry was not sent. Please check your connection and try again, or contact us directly." });
    }
  }

  if (status.state === "success") {
    return (
      <div role="status" className="rounded-2xl border border-green-200 bg-green-50 p-6 sm:p-8">
        <CircleCheck className="size-10 text-green-700" aria-hidden="true" />
        <h2 className="mt-3 text-xl text-green-900">Enquiry sent — thank you.</h2>
        <p className="mt-2 text-green-900/90">
          Our team has received your requirement and will get back to you by email or phone. For anything urgent, call {company.phoneDisplay}.
        </p>
        {status.reference && <p className="mt-2 text-sm text-green-900/80">Reference: {status.reference}</p>}
        <button type="button" onClick={() => setStatus({ state: "idle" })} className={cn(buttonClasses("outline", "md"), "mt-5")}>
          Send another enquiry
        </button>
      </div>
    );
  }

  const busy = status.state === "submitting";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate encType="multipart/form-data" aria-describedby={`${id("status")}`} className="space-y-5">
      {/* Honeypot: hidden from people and assistive tech, bots tend to fill it */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <Field id={id("name")} label="Full name" required error={errors.name}>
          <input id={id("name")} name="name" type="text" autoComplete="name" required className={input("name")} {...aria("name")} />
        </Field>
        <Field id={id("company")} label="Company name" required error={errors.company}>
          <input id={id("company")} name="company" type="text" autoComplete="organization" required className={input("company")} {...aria("company")} />
        </Field>
        <Field id={id("email")} label="Business email" required error={errors.email}>
          <input id={id("email")} name="email" type="email" autoComplete="email" inputMode="email" required className={input("email")} {...aria("email")} />
        </Field>
        <Field id={id("phone")} label="Phone number" required error={errors.phone}>
          <input id={id("phone")} name="phone" type="tel" autoComplete="tel" inputMode="tel" required placeholder="+91" className={input("phone")} {...aria("phone")} />
        </Field>
      </div>

      <Field id={id("category")} label="Service or product category" required error={errors.category}>
        <select id={id("category")} name="category" defaultValue={defaultCategory} required className={input("category")} {...aria("category")}>
          <option value="" disabled>
            Select a category…
          </option>
          {["Engineering solutions", "Just Porta", "Other"].map((group) => (
            <optgroup key={group} label={group}>
              {quoteCategories
                .filter((c) => c.group === group)
                .map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
            </optgroup>
          ))}
        </select>
      </Field>

      <Field id={id("message")} label="Project description" required error={errors.message} hint="Part or product, quantities, materials, timelines — whatever helps us understand the requirement.">
        <textarea id={id("message")} name="message" rows={5} required maxLength={4000} className={input("message")} {...aria("message", true)} />
      </Field>

      <Field id={id("file")} label="Drawings or specifications" error={errors.file} hint={`PDF, images, DWG/DXF/STEP, Office files or ZIP — up to 4 MB (${ALLOWED_FILE_EXTENSIONS.length} formats).`}>
        <label
          htmlFor={id("file")}
          className={cn("mt-1.5 flex cursor-pointer items-center gap-3 rounded-lg border-2 border-dashed bg-surface px-4 py-3.5 text-sm text-ink hover:border-blue focus-within:outline focus-within:outline-[3px] focus-within:outline-accent", errors.file ? "border-[#b42318]" : "border-line")}
        >
          <FileUp className="size-5 shrink-0 text-blue" aria-hidden="true" />
          <span className="truncate font-semibold">{fileName || "Choose a file to attach"}</span>
        </label>
        <input
          id={id("file")}
          name="file"
          type="file"
          accept={ALLOWED_FILE_EXTENSIONS.map((e) => `.${e}`).join(",")}
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          {...aria("file", true)}
        />
      </Field>

      <div>
        <div className="flex items-start gap-3">
          <input id={id("consent")} name="consent" type="checkbox" required className="mt-1 size-5 shrink-0 rounded border-line accent-navy" {...aria("consent")} />
          <label htmlFor={id("consent")} className="text-sm text-ink">
            I agree that Apar Dynamics may use these details to respond to my enquiry, as described in the{" "}
            <a href="/privacy-policy" target="_blank" className="font-bold text-blue underline underline-offset-2">
              Privacy Policy
            </a>
            . <span aria-hidden="true" className="text-porta">*</span>
          </label>
        </div>
        {errors.consent && <p id={`${id("consent")}-error`} className="mt-1 text-sm font-semibold text-[#b42318]">{errors.consent}</p>}
      </div>

      <div id={id("status")} aria-live="polite">
        {status.state === "error" && (
          <div role="alert" className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900">
            <CircleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            <div>
              <p className="font-bold">{status.message}</p>
              <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                <a className="inline-flex items-center gap-1.5 font-semibold underline" href={`tel:${company.phoneTel}`}>
                  <Phone className="size-4" aria-hidden="true" /> {company.phoneDisplay}
                </a>
                <a className="inline-flex items-center gap-1.5 font-semibold underline" href={`mailto:${company.email}`}>
                  <Mail className="size-4" aria-hidden="true" /> {company.email}
                </a>
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" disabled={busy} className={cn(buttonClasses("accent", "lg"), "sm:min-w-48")}>
          {busy ? (
            <>
              <Loader2 className="size-5 animate-spin" aria-hidden="true" /> Sending…
            </>
          ) : (
            "Send enquiry"
          )}
        </button>
        <a href={whatsappLink("Hello Apar Dynamics, I would like a quote for: ")} target="_blank" rel="noopener noreferrer" className={buttonClasses("whatsapp", "lg")}>
          <WhatsAppIcon className="size-5" /> Enquire on WhatsApp
        </a>
      </div>
    </form>
  );
}
