import type { Metadata } from "next";
import Image from "next/image";
import { Check, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ProductCard } from "@/components/ui/Cards";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ButtonLink } from "@/components/ui/Button";
import { InstagramIcon, YouTubeIcon } from "@/components/ui/icons";
import { JsonLd } from "@/components/seo/JsonLd";
import { justPorta, portaProducts } from "@/data/just-porta";
import { portaApplications } from "@/data/industries";
import { socials } from "@/data/site";
import { quoteHref } from "@/data/navigation";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Just Porta — Portable Cabins, Security Cabins & Modular Structures",
  description:
    "Just Porta by Apar Dynamics: portable security cabins, site offices, toilet cabins, shop and canteen cabins, modular cabins and premium portable cottages. Customizable and quick to install.",
  path: "/just-porta",
  image: "/images/just-porta/hero-cabin.webp",
});

export default function JustPortaPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Just Porta", path: "/just-porta" }])} />
      <PageHero
        tone="porta"
        eyebrow="A brand of Apar Dynamics"
        title="Just Porta — Your Portable Space Partner"
        description="Customized portable cabins and modular structures. Strong, durable and flexible — built for your space, designed for your needs."
        crumbs={[{ name: "Home", href: "/" }, { name: "Just Porta" }]}
        actions={
          <>
            <ButtonLink href={`${quoteHref}?service=just-porta/security-cabins`} variant="accent" size="lg">
              Request a Quote
            </ButtonLink>
            <ButtonLink href="#range" variant="outline-light" size="lg">
              View the range
            </ButtonLink>
          </>
        }
        aside={
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
              <Image src="/images/just-porta/hero-cabin.webp" alt="Brown and yellow Just Porta portable cabin with serving windows" fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <Image src={justPorta.logo} alt="Just Porta — perfectly portable logo" width={242} height={197} sizes="110px" className="absolute -bottom-4 -left-2 h-16 w-auto rounded-xl bg-white p-2 shadow-xl sm:h-20" />
          </div>
        }
      />

      <Section labelledBy="intro-title">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 id="intro-title" className="title-bar text-2xl sm:text-3xl">
              Built Strong. Installed Fast.
            </h2>
            <p className="mt-5 text-base text-ink sm:text-lg">{justPorta.intro}</p>
            <p className="mt-3 text-base text-ink">
              Just Porta products are designed and manufactured by the Apar Dynamics team — the same engineering and fabrication capability behind our industrial solutions.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {justPorta.commonFeatures.map((f) => (
              <li key={f.title} className="rounded-xl border border-porta/20 bg-porta-50 p-4">
                <p className="flex items-center gap-2 font-extrabold text-navy">
                  <Check className="size-4 text-porta" aria-hidden="true" />
                  {f.title}
                </p>
                <p className="mt-1 text-sm text-ink-muted">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="range" tone="surface" labelledBy="range-title">
        <SectionHeading id="range-title" eyebrow="Product range" title="Cabins for Every Need" description="Select a category to see features, ideal uses and customization options." />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portaProducts.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-muted">Images show representative models. Final dimensions, finishes and fittings are agreed with you for each order.</p>
      </Section>

      <Section labelledBy="uses-title">
        <SectionHeading id="uses-title" eyebrow="Ideal for" title="Where Just Porta Works" />
        <ul className="flex flex-wrap gap-2.5">
          {portaApplications.map((a) => (
            <li key={a} className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-bold text-navy">
              {a}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="porta" labelledBy="connect-title">
        <SectionHeading id="connect-title" title="Follow Just Porta" description="See more of the range on the Just Porta website and social channels." />
        <ul className="flex flex-wrap gap-3">
          <li>
            <a href={socials.justPortaWebsite} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-porta/30 bg-white px-4 py-3 text-sm font-bold text-navy hover:border-porta">
              <ExternalLink className="size-4 text-porta" aria-hidden="true" /> justporta.com
            </a>
          </li>
          <li>
            <a href={socials.justPortaYoutube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-porta/30 bg-white px-4 py-3 text-sm font-bold text-navy hover:border-porta">
              <YouTubeIcon className="size-5 text-porta" /> YouTube
            </a>
          </li>
          <li>
            <a href={socials.justPortaInstagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-porta/30 bg-white px-4 py-3 text-sm font-bold text-navy hover:border-porta">
              <InstagramIcon className="size-5 text-porta" /> Instagram
            </a>
          </li>
        </ul>
      </Section>

      <CtaBanner
        title="Need a Portable Cabin?"
        description="Tell us how you plan to use it and we will suggest the right size, layout and finish."
        whatsappMessage="Hello Just Porta, I would like to enquire about a portable cabin."
        primaryHref={`${quoteHref}?service=just-porta/security-cabins`}
      />
    </>
  );
}
