import type { MetadataRoute } from "next";
import { GUIDES } from "@/lib/guides";
import { DOCS } from "@/lib/pages";
import { CITIES, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-11-13"),
      changeFrequency: "monthly",
      priority: 1,
      images: ["usdt-chhattisgarh-desk.jpg", "cdm-counter-cash-settlement.jpg", "chhattisgarh-usdt-coverage-map.jpg", "usdt-otc-trade-process.jpg"].map((f) => `${SITE_URL}/images/${f}`),
    },
    ...CITIES.map((c) => ({
      url: `${SITE_URL}/usdt/${c.slug}`,
      lastModified: new Date("2026-11-13"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/guides`, lastModified: new Date("2026-11-13"), changeFrequency: "weekly" as const, priority: 0.6 },
    ...GUIDES.map((g) => ({
      url: `${SITE_URL}/guides/${g.slug}`,
      lastModified: new Date(g.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...Object.entries(DOCS).map(([slug, d]) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: new Date(d.updated),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
