import { z } from "zod";
import { portaProducts } from "@/data/just-porta";
import { services } from "@/data/services";

/** Options shown in the "Service or product category" select. */
export const quoteCategories = [
  ...services.map((s) => ({ value: s.slug, label: s.shortTitle, group: "Engineering solutions" })),
  ...portaProducts.map((p) => ({ value: `just-porta/${p.slug}`, label: p.title, group: "Just Porta" })),
  { value: "other", label: "Other / not sure", group: "Other" },
];

const categoryValues = quoteCategories.map((c) => c.value);

export const MAX_FILE_BYTES = 4 * 1024 * 1024; // Vercel serverless request bodies are limited to ~4.5 MB
export const ALLOWED_FILE_EXTENSIONS = ["pdf", "png", "jpg", "jpeg", "dwg", "dxf", "step", "stp", "doc", "docx", "xls", "xlsx", "zip"];

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name is too long."),
  company: z.string().trim().min(2, "Please enter your company name.").max(150, "Company name is too long."),
  email: z.string().trim().min(1, "Please enter your business email.").max(254).pipe(z.email("Please enter a valid email address.")),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter your phone number.")
    .max(25, "Phone number is too long.")
    .regex(/^[+\d][\d\s()-]{6,}$/, "Please enter a valid phone number."),
  category: z.string().refine((v) => categoryValues.includes(v), "Please choose a service or product category."),
  message: z
    .string()
    .trim()
    .min(20, "Please describe your requirement in at least 20 characters.")
    .max(4000, "Description is too long (4,000 characters maximum)."),
  consent: z.literal("true", "Please agree so we can contact you about this enquiry."),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
export type QuoteFieldErrors = Partial<Record<keyof QuoteInput | "file", string>>;

export function validateFile(file: { name: string; size: number } | null | undefined): string | null {
  if (!file || file.size === 0) return null;
  if (file.size > MAX_FILE_BYTES) return "The file is larger than 4 MB. Please send it by email instead.";
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_FILE_EXTENSIONS.includes(ext)) return `Unsupported file type. Allowed: ${ALLOWED_FILE_EXTENSIONS.join(", ")}.`;
  return null;
}

export function flattenErrors(error: z.ZodError): QuoteFieldErrors {
  const out: QuoteFieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof QuoteFieldErrors | undefined;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
