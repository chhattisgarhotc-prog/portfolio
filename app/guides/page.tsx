import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header, JsonLd } from "@/components/chrome";
import { GUIDES } from "@/lib/guides";
import { guidesHubJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "USDT Guides for India | USDT Chhattisgarh",
  description: "Plain guides to USDT tax and TDS, cash deposit settlement and avoiding bank freezes in India.",
  alternates: { canonical: "/guides" },
};

export default function GuidesHub() {
  return (
    <>
      <JsonLd data={guidesHubJsonLd()} />
      <Header />
      <main id="main" tabIndex={-1} className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">USDT guides</h1>
        <ul className="mt-10 space-y-4">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <Link href={`/guides/${g.slug}`} className="block rounded-2xl border border-line bg-panel/70 p-6 transition hover:border-emerald">
                <h2 className="font-display text-xl font-semibold tracking-tight">{g.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
