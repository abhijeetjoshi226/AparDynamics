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
