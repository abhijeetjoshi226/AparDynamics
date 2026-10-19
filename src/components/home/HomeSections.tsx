import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureCard, IndustryCard } from "@/components/ui/Cards";
import { FlipCard } from "@/components/ui/FlipCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import { homeIndustries } from "@/data/industries";
import { justPorta, portaProducts } from "@/data/just-porta";
import { processSteps, whyChoose } from "@/data/process";
import { featuredServices } from "@/data/services";
import { galleryItems } from "@/data/gallery";
import { capabilities, company, fullAddress, machinery, whatsappLink } from "@/data/site";
import { ButtonAnchor } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { MachineGrid } from "@/components/ui/MachineGrid";

export function SolutionsSection() {
  return (
    <Section tone="surface" labelledBy="solutions-title">
      <SectionHeading
        id="solutions-title"
        eyebrow="What we do"
        title="Our Engineering Solutions"
        description="Custom-engineered equipment and fabrication for production, assembly, handling and inspection. Hover or tap a card for details."
        action={
          <Link href="/engineering-solutions" className="inline-flex items-center gap-1.5 text-sm font-bold text-blue hover:text-navy">
            View all solutions <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        }
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service) => (
          <li key={service.slug}>
            <FlipCard service={service} />
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
          <li key={step.title} className="reveal relative rounded-[--radius-card] border border-line border-t-4 border-t-navy bg-white p-5 shadow-card">
            <span className="text-3xl font-extrabold leading-none text-accent-600">{String(i + 1).padStart(2, "0")}</span>
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
  const picks = ["floor", "eq-weld-table", "tr-4", "cad-rotary", "m-press-brake", "jp-site-office"].map((id) => galleryItems.find((g) => g.id === id)).filter((g) => !!g);
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

export function AboutIntro() {
  const points = [
    { title: "Complete fabrication packages", text: "3D CAD design, engineering development and manufacture to your process and product requirements." },
    { title: "Fixtures, automation & handling", text: "Material handling, assembly, robotic and testing solutions for automotive and other industries." },
    { title: "Constantly improving", text: "We keep applying new methods to offer innovative and intelligent solutions." },
  ];
  return (
    <Section labelledBy="intro-title" className="pt-20 sm:pt-24 lg:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div className="reveal relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-line shadow-card-hover">
            <Image src="/images/facility/factory-floor.webp" alt="Interior of the Apar Dynamics 10,000 sq ft manufacturing unit" fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 right-4 rounded-md border-l-4 border-accent bg-navy px-5 py-4 text-white shadow-card-hover sm:right-6">
            <p className="text-2xl font-extrabold leading-none text-accent">20+ years</p>
            <p className="mt-1 text-xs font-semibold text-white/85">of experience in manufacturing &amp; assembly solutions</p>
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow mb-3">About Apar Dynamics</p>
          <h2 id="intro-title" className="text-[1.75rem] sm:text-4xl lg:text-[2.5rem]">
            Your Engineering Partner for Manufacturing &amp; Assembly
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink sm:text-lg">
            Apar Dynamics specialises in material handling, assembly, robotic automation and testing solutions. From a 10,000 sq ft unit at Dehu Road, Pune, we help customers with end-to-end MS &amp; SS fabrication and engineered systems.
          </p>
          <ul className="mt-7 space-y-4">
            {points.map((p) => (
              <li key={p.title} className="flex gap-3.5">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-sm bg-accent text-navy">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-extrabold text-navy">{p.title}</p>
                  <p className="text-sm leading-relaxed text-ink-muted">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/about" variant="primary" size="lg">
              About Us <ArrowRight className="size-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" size="lg">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function CapabilitiesBand() {
  return (
    <Section tone="navy" labelledBy="caps-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="reveal">
          <p className="eyebrow eyebrow-light mb-3">Manufacturing capability</p>
          <h2 id="caps-title" className="text-[1.75rem] !text-white sm:text-4xl lg:text-[2.5rem]">
            In-House Machinery for Precision Fabrication
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Our extensive range of machinery lets us meet a wide variety of fabrication requirements under one roof.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {machinery.map((m) => (
              <li key={m.name} className="rounded-md border border-white/15 border-l-4 border-l-accent bg-white/5 p-4">
                <p className="font-extrabold text-white">{m.name}</p>
                <p className="mt-1 text-sm text-white/75">{m.detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal">
          <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] !text-accent">Operations we support</h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <div key={cap.title} className="rounded-md border border-white/15 bg-white/5 p-5">
                <p className="font-extrabold text-white">{cap.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{cap.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="reveal mt-14">
        <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] !text-accent">Machines available</h3>
        <MachineGrid className="mt-5" />
      </div>
    </Section>
  );
}

export function EnquirySection() {
  const row = "flex items-start gap-3.5";
  const icon = "mt-0.5 grid size-10 shrink-0 place-items-center rounded-md bg-white/10 text-accent";
  return (
    <section id="enquiry" aria-labelledby="enquiry-title" className="bg-blueprint py-16 text-white sm:py-20 lg:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="reveal">
          <p className="eyebrow eyebrow-light mb-3">Get in touch</p>
          <h2 id="enquiry-title" className="text-[1.75rem] !text-white sm:text-4xl lg:text-[2.5rem]">
            Have an Engineering Challenge?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
            Share your requirements with our team and explore a solution tailored to your application.
          </p>
          <ul className="mt-8 space-y-5">
            <li className={row}>
              <span className={icon}><Phone className="size-5" aria-hidden="true" /></span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/60">Phone</p>
                <a href={`tel:${company.phoneTel}`} className="font-bold hover:text-accent">{company.phoneDisplay}</a>
              </div>
            </li>
            <li className={row}>
              <span className={icon}><Mail className="size-5" aria-hidden="true" /></span>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-white/60">Email</p>
                <a href={`mailto:${company.email}`} className="break-all font-bold hover:text-accent">{company.email}</a>
              </div>
            </li>
            <li className={row}>
              <span className={icon}><MapPin className="size-5" aria-hidden="true" /></span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/60">Address</p>
                <p className="text-sm leading-relaxed text-white/90">{fullAddress}</p>
              </div>
            </li>
          </ul>
          <div className="mt-8">
            <ButtonAnchor href={whatsappLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg">
              <WhatsAppIcon className="size-5" /> Chat on WhatsApp
            </ButtonAnchor>
          </div>
        </div>
        <div className="reveal rounded-lg border-t-4 border-accent bg-white p-6 text-ink shadow-2xl sm:p-8">
          <h3 className="mb-6 text-xl">Request a quote</h3>
          <QuoteForm compact />
        </div>
      </div>
    </section>
  );
}
