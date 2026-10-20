import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eye, Target } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { MachineGrid } from "@/components/ui/MachineGrid";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { company, machinery, mission, values, vision, fullAddress } from "@/data/site";
import { justPorta } from "@/data/just-porta";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "About Us – Engineering Company in Pune",
  description:
    "Apar Dynamics: 20+ years of manufacturing and assembly experience, a 10,000 sq ft unit at Dehu Road, Pune, and an ISO certified company.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }])} />
      <PageHero
        eyebrow="About Apar Dynamics"
        title="Engineering Partner for Manufacturing & Assembly Solutions"
        description="Specialists in material handling, assembly, robotic automation and testing solutions — designed and manufactured in Pune."
        crumbs={[{ name: "Home", href: "/" }, { name: "About Us" }]}
      />

      <Section labelledBy="story">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-ink sm:text-lg">
            <h2 id="story" className="title-bar text-2xl sm:text-3xl">
              Who We Are
            </h2>
            <p>
              At Apar Dynamics, we are professionals with more than 20 years of experience in manufacturing and assembly solutions. We established a 10,000 sq ft set-up in 2024, and focus on providing customers with exceptional service and attention to detail.
            </p>
            <p>
              We assist customers with complete fabrication packages, including 3D CAD design, engineering development and manufacture as per process and product requirements.
            </p>
            <p>
              As an ISO certified company, we offer a vast range of end-to-end MS &amp; SS fabrication services — material handling trolleys and equipment, assembly fixtures and solutions, robotic solutions, and testing and inspection fixtures for the automobile industry as well as others.
            </p>
            <p>
              We have an extensive range of machinery to meet a wide variety of fabrication requirements, and we constantly apply new methods to improve our services and offer innovative and intelligent solutions.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card-hover">
            <Image src="/images/facility/factory-floor.webp" alt="Interior of the Apar Dynamics 10,000 sq ft manufacturing unit" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Section>

      <Section tone="surface" labelledBy="vision-mission">
        <h2 id="vision-mission" className="sr-only">
          Vision and mission
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[--radius-card] border border-line bg-white p-7 shadow-card">
            <Eye className="size-9 text-blue" aria-hidden="true" />
            <h3 className="mt-3 text-xl">Our Vision</h3>
            <p className="mt-3 text-ink">&ldquo;{vision}&rdquo;</p>
          </div>
          <div className="rounded-[--radius-card] border border-line bg-white p-7 shadow-card">
            <Target className="size-9 text-blue" aria-hidden="true" />
            <h3 className="mt-3 text-xl">Our Mission</h3>
            <p className="mt-3 text-ink">{mission}</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="values-title">
        <SectionHeading id="values-title" eyebrow="What guides us" title="Our Values" align="center" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.title} className="rounded-[--radius-card] border-t-4 border-accent bg-surface p-5">
              <h3 className="text-base">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" labelledBy="facility-title">
        <SectionHeading id="facility-title" eyebrow="Our facility" title="10,000 Sq Ft Manufacturing Set-up" description={`Located at ${fullAddress}.`} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {machinery.map((m) => (
            <li key={m.name} className="rounded-[--radius-card] border border-line border-t-4 border-t-accent bg-white p-5 shadow-card">
              <p className="font-extrabold text-navy">{m.name}</p>
              <p className="mt-1.5 text-sm text-ink-muted">{m.detail}</p>
            </li>
          ))}
        </ul>
        <h3 className="mb-5 mt-12 text-xl">Machines available</h3>
        <MachineGrid />
      </Section>

      <Section labelledBy="brands-title">
        <div className="grid items-center gap-8 rounded-2xl border border-porta/20 bg-porta-50 p-6 sm:p-10 md:grid-cols-[auto_1fr]">
          <Image src={justPorta.logo} alt="Just Porta — perfectly portable logo" width={242} height={197} sizes="180px" className="mx-auto h-28 w-auto rounded-xl bg-white p-2 sm:h-36" />
          <div>
            <h2 id="brands-title" className="text-2xl">
              Apar Dynamics &amp; Just Porta
            </h2>
            <p className="mt-3 text-ink">
              Apar Dynamics is the parent engineering and manufacturing company. <strong>Just Porta</strong> is our portable structures brand — security cabins, site offices, toilet cabins, shop and canteen cabins, modular cabins and premium portable cottages.
            </p>
            <div className="mt-5">
              <ButtonLink href="/just-porta" variant="porta">
                Explore Just Porta
              </ButtonLink>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm text-ink-muted">
          Contact us at <a className="font-bold text-blue underline underline-offset-4" href={`mailto:${company.email}`}>{company.email}</a> or visit the <Link href="/contact" className="font-bold text-blue underline underline-offset-4">contact page</Link>.
        </p>
      </Section>

      <CtaBanner />
    </>
  );
}
