import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ButtonAnchor } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { company, fullAddress, whatsappLink } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Apar Dynamics, Dehu Road, Pune",
  description:
    "Contact Apar Dynamics at Vitthal Nagar, Dehu Road, Dehugoan, Pune 412114. Call +91 75073 61156 or email info@apardynamics.com.",
  path: "/contact",
});

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${company.address.streetAddress}, ${company.address.locality} ${company.address.postalCode}`)}`;

export default function ContactPage() {
  const card = "flex gap-4 rounded-[--radius-card] border border-line bg-white p-5 shadow-card";
  const iconWrap = "grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue";
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero
        eyebrow="Contact"
        title="Let's Discuss Your Project"
        description="Reach our team by phone, WhatsApp or email, or send an enquiry using the form."
        crumbs={[{ name: "Home", href: "/" }, { name: "Contact" }]}
      />
      <Section labelledBy="contact-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            <h2 id="contact-title" className="title-bar mb-6 text-2xl">
              Get in touch
            </h2>
            <address className="space-y-4 not-italic">
              <div className={card}>
                <span className={iconWrap}><MapPin className="size-5" aria-hidden="true" /></span>
                <div>
                  <p className="font-extrabold text-navy">Address</p>
                  <p className="mt-1 text-sm text-ink">{fullAddress}</p>
                  <a href={mapsHref} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-bold text-blue underline underline-offset-4">
                    Open in Google Maps
                  </a>
                </div>
              </div>
              <div className={card}>
                <span className={iconWrap}><Phone className="size-5" aria-hidden="true" /></span>
                <div>
                  <p className="font-extrabold text-navy">Phone &amp; WhatsApp</p>
                  <a href={`tel:${company.phoneTel}`} className="mt-1 block text-sm font-bold text-blue underline underline-offset-4">{company.phoneDisplay}</a>
                </div>
              </div>
              <div className={card}>
                <span className={iconWrap}><Mail className="size-5" aria-hidden="true" /></span>
                <div className="min-w-0">
                  <p className="font-extrabold text-navy">Email</p>
                  <a href={`mailto:${company.email}`} className="mt-1 block break-all text-sm font-bold text-blue underline underline-offset-4">{company.email}</a>
                </div>
              </div>
            </address>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <ButtonAnchor href={`tel:${company.phoneTel}`} variant="primary" size="lg">
                <Phone className="size-5" aria-hidden="true" /> Call now
              </ButtonAnchor>
              <ButtonAnchor href={whatsappLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg">
                <WhatsAppIcon className="size-5" /> WhatsApp
              </ButtonAnchor>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-white p-5 shadow-card sm:p-8">
            <h2 className="title-bar mb-6 text-2xl">Send an enquiry</h2>
            <QuoteForm />
          </div>
        </div>
      </Section>
    </>
  );
}
