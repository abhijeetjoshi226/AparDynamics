import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureCard, IndustryCard, ServiceCard } from "@/components/ui/Cards";
import { Section, SectionHeading } from "@/components/ui/Section";
import { homeIndustries } from "@/data/industries";
import { justPorta, portaProducts } from "@/data/just-porta";
import { processSteps, whyChoose } from "@/data/process";
import { featuredServices } from "@/data/services";
import { galleryItems } from "@/data/gallery";

export function SolutionsSection() {
  return (
    <Section tone="surface" labelledBy="solutions-title">
      <SectionHeading
        id="solutions-title"
        eyebrow="What we do"
        title="Our Engineering Solutions"
        description="Custom-engineered equipment and fabrication for production, assembly, handling and inspection."
        action={
          <Link href="/engineering-solutions" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue hover:text-navy">
            View all solutions <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        }
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service) => (
          <li key={service.slug}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function JustPortaShowcase() {
  return (
    <Section tone="porta" labelledBy="porta-title">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card-hover">
            <Image src="/images/just-porta/hero-cabin.webp" alt="Brown and yellow Just Porta portable cabin with serving windows" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 right-4 rounded-xl bg-white p-3 shadow-card-hover sm:right-6">
            <Image src={justPorta.logo} alt="Just Porta — perfectly portable logo" width={242} height={197} sizes="110px" className="h-16 w-auto sm:h-20" />
          </div>
        </div>
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-porta">A brand of Apar Dynamics</p>
          <h2 id="porta-title" className="title-bar text-balance text-2xl sm:text-3xl lg:text-4xl">
            Just Porta — Portable Cabins &amp; Modular Structures
          </h2>
          <p className="mt-4 text-base text-ink sm:text-lg">
            {justPorta.slogan}. Customizable cabins for every need — strong, durable, flexible and built for your space.
          </p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {portaProducts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/just-porta/${p.slug}`}
                  className="flex items-center gap-2.5 rounded-lg border border-porta/20 bg-white px-4 py-3 text-sm font-bold text-navy transition hover:border-porta hover:text-porta"
                >
                  <Check className="size-4 shrink-0 text-porta" aria-hidden="true" />
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/just-porta" variant="porta" size="lg">
              Explore Just Porta <ArrowRight className="size-5" aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function IndustriesSection() {
  return (
    <Section labelledBy="industries-title">
      <SectionHeading
        id="industries-title"
        eyebrow="Industries"
        title="Industries We Serve"
        description="Solutions for automotive plants through to pharmaceutical and food-handling environments."
        action={
          <Link href="/industries" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue hover:text-navy">
            All industries <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        }
      />
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {homeIndustries.map((industry) => (
          <li key={industry.slug}>
            <IndustryCard industry={industry} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section tone="surface" labelledBy="process-title">
      <SectionHeading id="process-title" eyebrow="How we work" title="Our Engineering Process" align="center" description="One team from first conversation to delivery." />
      <ol className="grid gap-6 md:grid-cols-5">
        {processSteps.map((step, i) => (
          <li key={step.title} className="relative rounded-[--radius-card] border border-line bg-white p-5 shadow-card">
            <span className="grid size-10 place-items-center rounded-full bg-navy text-base font-extrabold text-accent">{i + 1}</span>
            <h3 className="mt-4 text-base">{step.title}</h3>
            <p className="mt-2 text-sm text-ink-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function WhyChooseSection() {
  return (
    <Section labelledBy="why-title">
      <SectionHeading id="why-title" eyebrow="Why Apar Dynamics" title="Why Choose Apar Dynamics?" align="center" />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {whyChoose.map((f) => (
          <li key={f.title}>
            <FeatureCard {...f} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function GalleryPreview() {
  const picks = ["laser", "welding", "cad-rotary", "ss-hopper", "jp-site-office", "cnc"].map((id) => galleryItems.find((g) => g.id === id)).filter((g) => !!g);
  return (
    <Section tone="surface" labelledBy="gallery-title">
      <SectionHeading
        id="gallery-title"
        eyebrow="Projects & gallery"
        title="From Our Facility and Product Range"
        description="Machinery, engineering designs, fabrication and portable cabins. Each image is labelled by type."
        action={
          <ButtonLink href="/projects" variant="outline">
            View full gallery <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
        }
      />
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {picks.map((item) => (
          <li key={item.id} className="group relative overflow-hidden rounded-xl border border-line bg-white shadow-card">
            <div className="relative aspect-[4/3]">
              <Image src={item.src} alt={item.alt} fill sizes="(min-width:1024px) 33vw, 50vw" className={item.fit === "contain" ? "object-contain p-3" : "object-cover transition-transform duration-500 group-hover:scale-105"} />
            </div>
            <p className="flex items-center justify-between gap-2 border-t border-line px-3 py-2 text-xs font-bold text-navy sm:text-sm">
              <span className="truncate">{item.title}</span>
              <span className="shrink-0 rounded-full bg-blue-50 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-blue">{item.kind}</span>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
