import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const searchBots = ["Googlebot", "Bingbot", "OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User"];
const other = { "Content-Signal": "search=yes, ai-input=yes, ai-train=yes" };
const trainingBots = ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended", "CCBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", other },
      { userAgent: searchBots, allow: "/", other },
      { userAgent: trainingBots, allow: "/", other },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
