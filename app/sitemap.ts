import type { MetadataRoute } from "next";
import { DOCS } from "@/lib/pages";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-11-13"),
      changeFrequency: "monthly",
      priority: 1,
      images: ["usdt-chhattisgarh-desk.jpg", "cdm-counter-cash-settlement.jpg", "chhattisgarh-usdt-coverage-map.jpg", "usdt-otc-trade-process.jpg"].map((f) => `${SITE_URL}/images/${f}`),
    },
    ...Object.entries(DOCS).map(([slug, d]) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: new Date(d.updated),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
