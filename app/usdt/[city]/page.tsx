import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "@phosphor-icons/react/ssr";
import { Footer, Header, JsonLd, TradeBar, TradeButtons, eyebrow } from "@/components/chrome";
import { FaqItem } from "@/components/client";
import { cityAnswer, cityBySlug, cityNearby, cityDescription, cityFaqs, cityTitle } from "@/lib/cities";
import { cityJsonLd } from "@/lib/schema";
import { CITIES, COMPLIANCE, SERVICES, STEPS } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/usdt/[city]">): Promise<Metadata> {
  const c = cityBySlug((await params).city);
  if (!c) return {};
  const title = `${cityTitle(c)} | USDT Chhattisgarh`;
  return {
    title,
    description: cityDescription(c),
    alternates: { canonical: `/usdt/${c.slug}` },
    openGraph: { type: "website", url: `/usdt/${c.slug}`, title, description: cityDescription(c) },
  };
}

export default async function CityPage({ params }: PageProps<"/usdt/[city]">) {
  const c = cityBySlug((await params).city);
  if (!c) notFound();
  const h2 = "font-display text-2xl font-semibold tracking-tight md:text-3xl";
  return (
    <>
      <JsonLd data={cityJsonLd(c)} />
      <Header />
      <main id="main" tabIndex={-1} className="mx-auto max-w-4xl px-4 py-20 md:px-8 md:py-28">
        <p className={`${eyebrow} inline-flex items-center gap-2`}>
          <MapPin size={14} weight="fill" /> {c.role}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">{cityTitle(c)}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">{cityAnswer(c)}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <TradeButtons location="city_page" city={c.name} className="px-6 py-3 text-base" />
        </div>

        <section className="mt-16">
          <h2 className={h2}>The {c.name} desk</h2>
          <p className="mt-4 leading-relaxed text-muted">{c.about}</p>
          <p className="mt-4 leading-relaxed text-muted">{cityNearby(c)}</p>
        </section>

        <section className="mt-12">
          <h2 className={h2}>Settlement options in {c.name}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl border border-line bg-panel/70 p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className={h2}>How a trade works</h2>
          <ol className="mt-6 space-y-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="font-mono text-2xl text-gold/80">{i + 1}</span>
                <p className="leading-relaxed text-muted">
                  <strong className="text-ink">{s.title}.</strong> {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className={h2}>Verified, dispute-free settlement</h2>
          <ul className="mt-4 space-y-3">
            {COMPLIANCE.map((x) => (
              <li key={x.title} className="leading-relaxed text-muted">
                <strong className="text-ink">{x.title}:</strong> {x.body}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-line">
          <h2 className={`${h2} mt-12`}>USDT in {c.name}: questions</h2>
          <div className="mt-4 border-t border-line">
            {cityFaqs(c).map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </section>

        <nav aria-label="Other cities" className="mt-16">
          <h2 className={h2}>Other cities</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {CITIES.filter((o) => o.slug !== c.slug).map((o) => (
              <li key={o.slug}>
                <Link href={`/usdt/${o.slug}`} className="inline-block rounded-full border border-line px-4 py-2 text-sm transition hover:border-emerald hover:text-emerald">
                  USDT in {o.name}
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
