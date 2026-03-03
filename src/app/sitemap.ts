import type { MetadataRoute } from "next";
import { SITE_URL, SUPPORTED_LOCALES } from "@/lib/seo";

const ROUTES = ["", "/about", "/products", "/projects", "/contacts"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return SUPPORTED_LOCALES.flatMap((locale) =>
    ROUTES.map((route) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
