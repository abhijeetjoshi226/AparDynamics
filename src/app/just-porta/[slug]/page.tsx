import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Media } from "@/components/ui/Media";
import { ProductCard } from "@/components/ui/Cards";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPortaProduct, portaProducts } from "@/data/just-porta";
import { quoteHref } from "@/data/navigation";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portaProducts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getPortaProduct(slug);
  if (!product) return {};
  return buildMetadata({ title: product.seoTitle, description: product.seoDescription, path: `/just-porta/${product.slug}`, image: product.image.src });
}

export default async function PortaProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getPortaProduct(slug);
  if (!product) notFound();

  const path = `/just-porta/${product.slug}`;
  const related = portaProducts.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Just Porta", path: "/just-porta" },
            { name: product.title, path },
          ]),
          serviceJsonLd({ name: `${product.title} — Just Porta`, description: product.seoDescription, path, image: product.image.src }),
        ]}
      />
      <PageHero
        tone="porta"
        eyebrow={`Just Porta · ${product.tagline}`}
        title={product.title}
        description={product.summary}
        crumbs={[{ name: "Home", href: "/" }, { name: "Just Porta", href: "/just-porta" }, { name: product.title }]}
        actions={
          <>
            <ButtonLink href={`${quoteHref}?service=just-porta/${product.slug}`} variant="accent" size="lg">
              Request a Quote
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-light" size="lg">
              Talk to our team
            </ButtonLink>
          </>
        }
        aside={<Media image={product.image} aspect="aspect-[4/3]" sizes="(min-width:1024px) 40vw, 100vw" priority className="rounded-2xl border border-white/20 shadow-2xl" />}
      />

      <Section labelledBy="overview">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 id="overview" className="title-bar text-2xl sm:text-3xl">
              Overview
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink sm:text-lg">{product.intro}</p>
          </div>
          <div className="rounded-[--radius-card] border border-line bg-surface p-6">
            <h3 className="text-lg">Key features</h3>
            <ul className="mt-4 space-y-2.5">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm font-semibold text-navy">
                  <Check className="mt-0.5 size-4 shrink-0 text-porta" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[--radius-card] border border-porta/20 bg-porta-50 p-6">
            <h3 className="text-lg">Ideal for</h3>
            <ul className="mt-4 space-y-2.5">
              {product.idealFor.map((f) => (
                <li key={f} className="flex gap-2.5 text-sm font-semibold text-navy">
                  <Check className="mt-0.5 size-4 shrink-0 text-porta" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {product.gallery.length > 0 && (
        <Section tone="surface" labelledBy="gallery-title">
          <SectionHeading id="gallery-title" title={`${product.title} — more views`} />
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {product.gallery.map((img) => (
              <li key={img.src} className="overflow-hidden rounded-xl border border-line bg-white shadow-card">
                <Media image={img} aspect="aspect-[4/3]" sizes="(min-width:1024px) 25vw, 50vw" />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section labelledBy="options-title">
        <SectionHeading id="options-title" title="Customization options" description="Confirmed with you for each order." />
        <ul className="flex flex-wrap gap-2.5">
          {product.options.map((o) => (
            <li key={o} className="rounded-full border border-porta/30 bg-porta-50 px-4 py-2 text-sm font-bold text-navy">
              {o}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-muted">Images show representative models. Specifications, dimensions and finishes are confirmed in your quotation.</p>
      </Section>

      <Section tone="surface" labelledBy="related-title">
        <SectionHeading id="related-title" title="More from Just Porta" action={<Link href="/just-porta" className="text-sm font-bold text-porta underline underline-offset-4">View all categories</Link>} />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title={`Interested in ${product.title}?`}
        description="Share your site, size and usage requirements and we will respond with options."
        primaryHref={`${quoteHref}?service=just-porta/${product.slug}`}
        whatsappMessage={`Hello Just Porta, I would like to enquire about ${product.title}.`}
      />
    </>
  );
}
