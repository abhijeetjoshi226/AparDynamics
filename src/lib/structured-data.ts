import { portaProducts } from "@/data/just-porta";
import { services } from "@/data/services";
import { SITE_URL, company, socials } from "@/data/site";

/** LocalBusiness data uses only details verified in the supplied company profile. */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: company.name,
    slogan: company.tagline,
    description: company.description,
    url: SITE_URL,
    logo: `${SITE_URL}/images/brand/logo.png`,
    image: `${SITE_URL}/og-image.png`,
    email: company.email,
    telephone: company.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.streetAddress,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.countryCode,
    },
    areaServed: { "@type": "Country", name: "India" },
    brand: { "@type": "Brand", name: "Just Porta", url: socials.justPortaWebsite },
    sameAs: [socials.justPortaYoutube],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: company.phoneTel,
      email: company.email,
      areaServed: "IN",
    },
    knowsAbout: [
      "Material handling equipment",
      "Assembly fixtures and assembly lines",
      "Robotic welding and automation",
      "Testing and inspection fixtures",
      "Vision systems",
      "MS and SS fabrication",
      "Portable cabins",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering solutions and Just Porta portable cabins",
      itemListElement: [
        ...services.map((svc) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: svc.title, url: `${SITE_URL}/engineering-solutions/${svc.slug}` },
        })),
        ...portaProducts.map((p) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: `${p.title} — Just Porta`, url: `${SITE_URL}/just-porta/${p.slug}` },
        })),
      ],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.name,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function itemListJsonLd(name: string, items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceJsonLd(opts: { name: string; description: string; path: string; image?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    ...(opts.image ? { image: `${SITE_URL}${opts.image}` } : {}),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
  };
}
