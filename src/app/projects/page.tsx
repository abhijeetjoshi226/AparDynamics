import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Projects & Gallery — Facility, Fixtures, Fabrication & Cabins",
  description:
    "Browse Apar Dynamics machinery, CAD renders of fixtures and assembly stations, SS fabrication range and Just Porta portable cabins.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Projects & Gallery", path: "/projects" }])} />
      <PageHero
        eyebrow="Projects & gallery"
        title="A Look at Our Facility, Designs and Product Range"
        description="Machinery from our Dehu Road unit, engineering renders, fabrication range and Just Porta cabins."
        crumbs={[{ name: "Home", href: "/" }, { name: "Projects & Gallery" }]}
      />
      <Section labelledBy="gallery-heading">
        <h2 id="gallery-heading" className="sr-only">
          Gallery
        </h2>
        <div className="mb-8 flex gap-3 rounded-xl border border-blue/20 bg-blue-50 p-4 text-sm text-navy">
          <Info className="mt-0.5 size-5 shrink-0 text-blue" aria-hidden="true" />
          <p>
            Each image is labelled by type. <strong>Facility photos</strong> show our own machinery; <strong>CAD renders</strong> are design illustrations; <strong>Product range</strong> images are representative of the equipment we fabricate; <strong>Just Porta cabin</strong> images show the product range. None is presented as a specific customer project. Please ask us about references and case studies relevant to your industry.
          </p>
        </div>
        <GalleryGrid />
      </Section>
      <CtaBanner />
    </>
  );
}
