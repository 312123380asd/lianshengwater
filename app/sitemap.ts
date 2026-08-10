import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(); const pages = ["", "/product", "/applications", "/partner", "/documents"];
  return ["ru", "en", "zh"].flatMap(locale => pages.map((page, index) => ({ url: `${siteUrl}/${locale}${page}`, lastModified: now, changeFrequency: "monthly" as const, priority: index === 0 ? 1 : index === 1 ? .9 : .8 })));
}
