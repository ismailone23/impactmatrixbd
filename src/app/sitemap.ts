import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const pages: [string, number][] = [
  ["/", 1],
  ["/domains", 0.8],
  ["/about", 0.7],
  ["/contact", 0.7],
  ["/privacy", 0.3],
  ["/terms", 0.3],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(([path, priority]) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
