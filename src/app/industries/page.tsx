import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Media } from "@/components/ui/Media";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { industries, portaApplications } from "@/data/industries";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve — Automotive, Pharma, Food & More",
  description:
    "Apar Dynamics serves automotive, engineering and manufacturing, electrical and electronics, pharmaceutical, food processing and healthcare industries from Pune.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />
      <PageHero
        eyebrow="Industries"
        title="Solutions for Demanding Industrial Environments"
        description="Our fixtures, automation and fabrication support automobile manufacturing as well as other industries with stringent quality and hygiene needs."
        crumbs={[{ name: "Home", href: "/" }, { name: "Industries" }]}
      />

      <Section labelledBy="industries-list">
        <SectionHeading id="industries-list" title="Where Our Work Is Used" description="Products and services drawn from our company profile, grouped by the industries they serve." />
        <ul className="space-y-6">
          {industries.map((industry, i) => (
            <li key={industry.slug} id={industry.slug} className="scroll-mt-28 overflow-hidden rounded-[--radius-card] border border-line bg-white shadow-card">
              <div className={`grid items-stretch md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div>
                  <Media image={industry.image} aspect="aspect-[4/3] md:h-full md:aspect-auto md:min-h-64" sizes="(min-width:768px) 40vw, 100vw" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="title-bar text-xl sm:text-2xl">{industry.name}</h3>
                  <p className="mt-4 text-ink">{industry.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {industry.products.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm font-semibold text-navy">
                        <Check className="size-4 shrink-0 text-blue" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-ink-muted">
          Our company profile also refers to &ldquo;many more&rdquo; industries. If your sector is not listed, <Link href="/contact" className="font-bold text-blue underline underline-offset-4">tell us about your application</Link>.
        </p>
      </Section>

      <Section tone="porta" labelledBy="porta-apps">
        <SectionHeading id="porta-apps" eyebrow="Just Porta" title="Where Just Porta Cabins Are Used" description="Application areas listed in the Just Porta product brochures." />
        <ul className="flex flex-wrap gap-2.5">
          {portaApplications.map((a) => (
            <li key={a} className="rounded-full border border-porta/30 bg-white px-4 py-2 text-sm font-bold text-navy">
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/just-porta" className="font-bold text-porta underline underline-offset-4">
            Explore the Just Porta range →
          </Link>
        </p>
      </Section>

      <CtaBanner />
    </>
  );
}
