import type { MetadataRoute } from "next";
import { portaProducts } from "@/data/just-porta";
import { services } from "@/data/services";
import { SITE_URL } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entry = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("/", 1, "weekly"),
    entry("/about", 0.7),
    entry("/engineering-solutions", 0.9),
    ...services.map((s) => entry(`/engineering-solutions/${s.slug}`, 0.8)),
    entry("/industries", 0.6),
    entry("/projects", 0.6),
    entry("/just-porta", 0.9),
    ...portaProducts.map((p) => entry(`/just-porta/${p.slug}`, 0.8)),
    entry("/contact", 0.8),
    entry("/request-a-quote", 0.8),
    entry("/privacy-policy", 0.2, "yearly"),
  ];
}
