import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/Cards";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MachineGrid } from "@/components/ui/MachineGrid";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { capabilities, machinery } from "@/data/site";
import { services } from "@/data/services";
import { quoteHref } from "@/data/navigation";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, itemListJsonLd } from "@/lib/structured-data";
import { Check, Cog } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Engineering & Automation Solutions, Pune",
  description:
    "Material handling, assembly fixtures and lines, robotic welding, testing and inspection fixtures, vision systems and MS & SS fabrication in Pune.",
  path: "/engineering-solutions",
});

export default function EngineeringSolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Engineering Solutions", path: "/engineering-solutions" }])} />
      <JsonLd data={itemListJsonLd("Engineering solutions", services.map((x) => ({ name: x.title, path: `/engineering-solutions/${x.slug}` })))} />
      <PageHero
        eyebrow="Engineering solutions"
        title="Custom Engineering Built Around Your Production Needs"
        description="Complete packages from 3D CAD design and engineering development to manufacture — across material handling, assembly, robotic automation, inspection and fabrication."
        crumbs={[{ name: "Home", href: "/" }, { name: "Engineering Solutions" }]}
        actions={<ButtonLink href={quoteHref} variant="accent" size="lg">Request a Quote</ButtonLink>}
      />

      <Section labelledBy="all-solutions">
        <SectionHeading id="all-solutions" title="What We Engineer & Manufacture" description="Select a solution to see what is included and how we approach it." />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" labelledBy="capabilities-title">
        <SectionHeading id="capabilities-title" eyebrow="Capabilities" title="Operations We Support" description="The tasks our fixtures, automation and equipment are built to perform." />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <li key={cap.title} className="rounded-[--radius-card] border border-line bg-white p-5 shadow-card">
              <h3 className="flex items-center gap-2 text-base">
                <Cog className="size-4 text-accent-600" aria-hidden="true" /> {cap.title}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="size-3.5 shrink-0 text-blue" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="machinery-title">
        <SectionHeading id="machinery-title" eyebrow="In-house manufacturing" title="Machinery at Our Dehu Road Unit" description="Our 10,000 sq ft working area, set up in 2024, houses the following equipment." />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {machinery.map((m) => (
            <li key={m.name} className="rounded-[--radius-card] border-l-4 border-accent bg-surface p-5">
              <p className="font-extrabold text-navy">{m.name}</p>
              <p className="mt-1 text-sm text-ink-muted">{m.detail}</p>
            </li>
          ))}
        </ul>
        <h3 className="mb-5 mt-12 text-xl">Machines available</h3>
        <MachineGrid />
      </Section>

      <CtaBanner />
    </>
  );
}
