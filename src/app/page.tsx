import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import {
  GalleryPreview,
  IndustriesSection,
  JustPortaShowcase,
  ProcessSection,
  SolutionsSection,
  WhyChooseSection,
} from "@/components/home/HomeSections";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Apar Dynamics — Industrial Automation, Material Handling & Fabrication in Pune",
  description:
    "Apar Dynamics engineers material handling equipment, assembly fixtures, robotic automation, testing fixtures and MS & SS fabrication in Pune. Home of Just Porta portable cabins.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <SolutionsSection />
      <IndustriesSection />
      <ProcessSection />
      <JustPortaShowcase />
      <WhyChooseSection />
      <GalleryPreview />
      <CtaBanner />
    </>
  );
}
