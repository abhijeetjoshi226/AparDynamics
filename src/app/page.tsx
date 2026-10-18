import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import {
  AboutIntro,
  CapabilitiesBand,
  EnquirySection,
  GalleryPreview,
  IndustriesSection,
  JustPortaShowcase,
  ProcessSection,
  SolutionsSection,
  WhyChooseSection,
} from "@/components/home/HomeSections";
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
      <AboutIntro />
      <SolutionsSection />
      <CapabilitiesBand />
      <IndustriesSection />
      <ProcessSection />
      <JustPortaShowcase />
      <WhyChooseSection />
      <GalleryPreview />
      <EnquirySection />
    </>
  );
}
