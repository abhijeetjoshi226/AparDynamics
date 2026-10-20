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
  title: "Industrial Automation & Fabrication in Pune | Apar Dynamics",
  description:
    "Apar Dynamics in Pune designs and builds material handling equipment, assembly fixtures, robotic welding and MS & SS fabrication. Request a quote.",
  path: "/",
  absolute: true,
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
