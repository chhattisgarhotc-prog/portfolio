import type { Metadata } from "next";
import { WhatsappLogo, Phone } from "@phosphor-icons/react/ssr";
import { Footer, Header, btnGhost, btnPrimary, eyebrow } from "@/components/chrome";
import { Cta } from "@/components/client";
import { DOCS, type DocSlug } from "@/lib/pages";
import { PHONE_DISPLAY, PHONE_TEL, SITE_NAME, WHATSAPP_URL } from "@/lib/site";

export function docMetadata(slug: DocSlug): Metadata {
  const d = DOCS[slug];
  const title = d.title.includes(SITE_NAME) ? d.title : `${d.title} | ${SITE_NAME}`;
  return {
    title,
    description: d.description,
    alternates: { canonical: `/${slug}` },
    openGraph: { type: "website", url: `/${slug}`, title, description: d.description },
  };
}

export function DocPage({ slug }: { slug: DocSlug }) {
  const d = DOCS[slug];
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
        <p className={eyebrow}>Last updated {d.updated}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">{d.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{d.description}</p>
        {d.sections.map((s) => (
          <section key={s.heading} className="mt-12">
            <h2 className="font-display text-2xl font-semibold tracking-tight">{s.heading}</h2>
            {s.paragraphs.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </section>
        ))}
        {slug === "contact" && (
          <div className="mt-12 flex flex-wrap gap-4">
            <Cta href={WHATSAPP_URL} location="contact_page" channel="whatsapp" className={btnPrimary}>
              <WhatsappLogo size={20} weight="fill" /> Inquire Live Rates
            </Cta>
            <Cta href={PHONE_TEL} location="contact_page" channel="call" className={btnGhost}>
              <Phone size={18} weight="fill" /> {PHONE_DISPLAY}
            </Cta>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
