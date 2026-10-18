import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Media } from "@/components/ui/Media";
import { ServiceCard } from "@/components/ui/Cards";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/ui/CtaBanner";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getService, services } from "@/data/services";
import { quoteHref } from "@/data/navigation";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({ title: service.seoTitle, description: service.seoDescription, path: `/engineering-solutions/${service.slug}`, image: service.image.src.startsWith("/images/facility") ? service.image.src : undefined });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/engineering-solutions/${service.slug}`;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Engineering Solutions", path: "/engineering-solutions" },
            { name: service.title, path },
          ]),
          serviceJsonLd({ name: service.title, description: service.seoDescription, path, image: service.image.src }),
        ]}
      />
      <PageHero
        eyebrow="Engineering solution"
        title={service.title}
        description={service.summary}
        crumbs={[{ name: "Home", href: "/" }, { name: "Engineering Solutions", href: "/engineering-solutions" }, { name: service.shortTitle }]}
        actions={
          <>
            <ButtonLink href={`${quoteHref}?service=${service.slug}`} variant="accent" size="lg">
              Request a Quote
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-light" size="lg">
              Discuss Your Project
            </ButtonLink>
          </>
        }
        aside={<Media image={service.image} aspect="aspect-[4/3]" sizes="(min-width:1024px) 40vw, 100vw" priority className="rounded-2xl border border-white/20 shadow-2xl" />}
      />

      <Section labelledBy="overview">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 id="overview" className="title-bar text-2xl sm:text-3xl">
              Overview
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink sm:text-lg">{service.intro}</p>
            <h3 className="mt-9 text-xl">What is included</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.offerings.map((o) => (
                <li key={o} className="flex gap-3 rounded-xl border border-line bg-white p-4 text-sm font-semibold text-navy shadow-card">
                  <Check className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-[--radius-card] bg-surface p-6">
            <h3 className="text-lg">Typical industries</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.industries.map((i) => (
                <li key={i} className="rounded-full border border-line bg-white px-3 py-1.5 text-sm font-semibold text-navy">
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-muted">Every solution is engineered to your drawings, process and site requirements.</p>
            <Link href="/industries" className="mt-3 inline-block text-sm font-bold text-blue underline underline-offset-4">
              All industries we serve
            </Link>
          </aside>
        </div>
      </Section>

      <Section tone="surface" labelledBy="benefits">
        <SectionHeading id="benefits" title="Why this approach works" />
        <ul className="grid gap-5 md:grid-cols-3">
          {service.benefits.map((b, i) => (
            <li key={b.title} className="rounded-[--radius-card] border border-line bg-white p-6 shadow-card">
              <span className="grid size-10 place-items-center rounded-full bg-navy text-base font-extrabold text-accent">{i + 1}</span>
              <h3 className="mt-4 text-lg">{b.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{b.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {service.gallery.length > 0 && (
        <Section labelledBy="examples">
          <SectionHeading id="examples" title="Visuals" description="CAD renders, product range images and facility photographs related to this solution." />
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {service.gallery.map((img) => (
              <li key={img.src + img.alt} className="overflow-hidden rounded-xl border border-line shadow-card">
                <Media image={img} aspect="aspect-[4/3]" sizes="(min-width:1024px) 25vw, 50vw" />
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section tone="surface" labelledBy="related">
        <SectionHeading id="related" title="Related solutions" />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <li key={s.slug}>
              <ServiceCard service={s} />
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner whatsappMessage={`Hello Apar Dynamics, I would like to discuss ${service.title}.`} />
    </>
  );
}
