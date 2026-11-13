import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const searchBots = ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User"];
const trainingBots = ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended", "CCBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/md/" },
      { userAgent: searchBots, allow: "/", disallow: "/md/" },
      { userAgent: trainingBots, allow: "/", disallow: "/md/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
