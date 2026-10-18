import type { Metadata } from "next";
import { Clock, FileText, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/data/site";
import { quoteCategories } from "@/lib/quote-schema";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Request a Quote — Engineering Solutions & Portable Cabins",
  description:
    "Request a quote from Apar Dynamics for material handling, assembly fixtures, robotic automation, testing fixtures, fabrication or Just Porta portable cabins.",
  path: "/request-a-quote",
});

type Props = { searchParams: Promise<{ service?: string | string[] }> };

export default async function RequestQuotePage({ searchParams }: Props) {
  const { service } = await searchParams;
  const requested = Array.isArray(service) ? service[0] : service;
  const defaultCategory = quoteCategories.some((c) => c.value === requested) ? (requested as string) : "";

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Request a Quote", path: "/request-a-quote" }])} />
      <PageHero
        eyebrow="Request a quote"
        title="Tell Us About Your Requirement"
        description="Share your application, drawings and timelines. Our team will review the details and respond."
        crumbs={[{ name: "Home", href: "/" }, { name: "Request a Quote" }]}
      />
      <Section labelledBy="form-title">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-8">
            <h2 id="form-title" className="title-bar mb-6 text-2xl">
              Quote request form
            </h2>
            <QuoteForm defaultCategory={defaultCategory} />
          </div>
          <aside className="space-y-5">
            <div className="rounded-[--radius-card] bg-surface p-6">
              <h3 className="text-lg">Helpful to include</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink">
                <li className="flex gap-3">
                  <FileText className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                  Part drawings, sketches or specifications
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                  Quantities and target delivery timeline
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                  Material, environment and any standards to follow
                </li>
              </ul>
            </div>
            <div className="rounded-[--radius-card] border border-line p-6">
              <h3 className="text-lg">Prefer to talk?</h3>
              <p className="mt-3 text-sm text-ink">
                Call <a className="font-bold text-blue underline underline-offset-4" href={`tel:${company.phoneTel}`}>{company.phoneDisplay}</a> or email{" "}
                <a className="font-bold text-blue underline underline-offset-4 break-all" href={`mailto:${company.email}`}>{company.email}</a>.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
