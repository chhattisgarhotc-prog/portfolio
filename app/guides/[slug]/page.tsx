import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header, JsonLd, TradeBar, TradeButtons, eyebrow } from "@/components/chrome";
import { GUIDES } from "@/lib/guides";
import { guideJsonLd } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const g = guideBySlug((await params).slug);
  if (!g) return {};
  const title = `${g.title} | USDT Chhattisgarh`;
  return {
    title,
    description: g.description,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { type: "article", url: `/guides/${g.slug}`, title, description: g.description, modifiedTime: g.updated },
  };
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const g = guideBySlug((await params).slug);
  if (!g) notFound();
  return (
    <>
      <JsonLd data={guideJsonLd(g)} />
      <Header />
      <main id="main" tabIndex={-1} className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
        <p className={eyebrow}>
          <Link href="/guides" className="hover:text-emerald">Guides</Link> · Updated {g.updated}
        </p>
        <article>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">{g.title}</h1>
          <p className="mt-6 rounded-2xl border border-line bg-panel/70 p-6 text-lg leading-relaxed text-ink">{g.answer}</p>
          {g.sections.map((s) => (
            <section key={s.heading} className="mt-12">
              <h2 className="font-display text-2xl font-semibold tracking-tight">{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p} className="mt-4 leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
          {g.sources.length > 0 && (
            <section className="mt-12 border-t border-line pt-8">
              <h2 className="font-display text-lg font-semibold tracking-tight">Sources</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {g.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} rel="noopener" target="_blank" className="text-muted underline decoration-line underline-offset-4 hover:text-emerald">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
        <div className="mt-12 flex flex-wrap gap-3">
          <TradeButtons location="guide" className="px-6 py-3 text-base" />
        </div>
        <nav aria-label="More guides" className="mt-12">
          <ul className="space-y-2">
            {GUIDES.filter((o) => o.slug !== g.slug).map((o) => (
              <li key={o.slug}>
                <Link href={`/guides/${o.slug}`} className="text-muted underline decoration-line underline-offset-4 hover:text-emerald">
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <Footer />
      <TradeBar />
    </>
  );
}
