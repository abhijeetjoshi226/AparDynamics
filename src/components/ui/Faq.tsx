import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqJsonLd } from "@/lib/structured-data";
import type { Faq } from "@/data/faq";
import { Section, SectionHeading } from "./Section";

/** Native <details> accordion (no JavaScript) with matching FAQPage structured data. */
export function FaqSection({ faqs, title = "Frequently Asked Questions", tone = "white" }: { faqs: Faq[]; title?: string; tone?: "white" | "surface" }) {
  return (
    <Section tone={tone} labelledBy="faq-title">
      <JsonLd data={faqJsonLd(faqs)} />
      <SectionHeading id="faq-title" eyebrow="FAQ" title={title} />
      <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-[--radius-card] border border-line bg-white shadow-card">
        {faqs.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left font-bold text-navy marker:hidden hover:bg-surface [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDown className="size-5 shrink-0 text-blue transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <p className="px-5 pb-5 text-sm leading-relaxed text-ink sm:text-base">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
