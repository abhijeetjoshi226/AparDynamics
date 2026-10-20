import type { MetadataRoute } from "next";
import { portaProducts } from "@/data/just-porta";
import { services } from "@/data/services";
import { SITE_URL } from "@/data/site";

// Fixed at build time so lastmod only changes when the site is redeployed.
const lastModified = new Date();

const abs = (src: string) => `${SITE_URL}${src}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly", images: string[] = []) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
    ...(images.length ? { images: images.map(abs) } : {}),
  });

  return [
    entry("/", 1, "weekly", ["/images/brand/logo.png"]),
    entry("/about", 0.7),
    entry("/engineering-solutions", 0.9),
    ...services.map((s) => entry(`/engineering-solutions/${s.slug}`, 0.8, "monthly", [s.image.src, ...s.gallery.map((g) => g.src)])),
    entry("/industries", 0.6),
    entry("/projects", 0.6),
    entry("/just-porta", 0.9),
    ...portaProducts.map((p) => entry(`/just-porta/${p.slug}`, 0.8, "monthly", [p.image.src, ...p.gallery.map((g) => g.src)])),
    entry("/contact", 0.8),
    entry("/request-a-quote", 0.8),
    entry("/privacy-policy", 0.2, "yearly"),
  ];
}
