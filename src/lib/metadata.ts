import type { Metadata } from "next";
import { SITE_URL, company } from "@/data/site";

type PageMeta = {
  title: string;
  description: string;
  /** Path beginning with "/" — used for the canonical URL and Open Graph URL. */
  path: string;
  image?: string;
  noIndex?: boolean;
  /** Use the title as-is instead of applying the "| Apar Dynamics" template (home page). */
  absolute?: boolean;
};

export function buildMetadata({ title, description, path, image = "/og-image.png", noIndex, absolute }: PageMeta): Metadata {
  const fullTitle = absolute ? title : `${title} | ${company.name}`;
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: `${company.name} — ${company.tagline}` }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
