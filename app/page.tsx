import {
  ArrowDown,
  Bank,
  HandCoins,
  IdentificationCard,
  MapPin,
  Phone,
  ReceiptX,
  ShieldCheck,
  FileText,
  WhatsappLogo,
  Clock,
} from "@phosphor-icons/react/ssr";
import { Cta, FaqItem, Shot } from "@/components/client";
import { jsonLd } from "@/lib/schema";
import { CITIES, COMPLIANCE, FAQS, HOURS, PHONE_DISPLAY, PHONE_TEL, SERVICES, STEPS, WHATSAPP_URL } from "@/lib/site";
import { Footer, Header, JsonLd, Reveal, TradeBar, TradeButtons, btnGhost, btnPrimary, eyebrow, h2 } from "@/components/chrome";

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Metrics />
        <Services />
        <Network />
        <Process />
        <Compliance />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <TradeBar />
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <p className={eyebrow}>Institutional & Regional OTC Desk</p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-5xl lg:text-6xl">
            Structured <span className="gold-text">USDT liquidity</span> across Chhattisgarh
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
            Direct, secure USDT liquidity for traders, enterprises and regional partners.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <TradeButtons location="hero" className="px-7 py-3.5 text-base" />
            <a href="#process" className="inline-flex items-center gap-2 px-2 font-semibold text-muted transition hover:text-emerald">
              View Process <ArrowDown size={16} weight="bold" />
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-8 rounded-full bg-emerald/25 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-panel/60 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)]">
            <Shot
              src="/images/usdt-chhattisgarh-desk.jpg"
              alt="USDT Chhattisgarh liquidity desk badge"
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const items = [
    { k: "Minimum ticket", v: "100 USDT" },
    { k: "Turnaround", v: "Under 15 min" },
    { k: "Regional coverage", v: "7 major hubs" },
  ];
  return (
    <section className="border-y border-line bg-deep/60">
      <dl className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
        {items.map((m) => (
          <div key={m.k} className="py-7 sm:px-8 first:sm:pl-0">
            <dt className="text-sm text-muted">{m.k}</dt>
            <dd className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink">{m.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <h2 className={h2}>
          Two dedicated ways <span className="gold-text">to settle</span>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-5 lg:grid-rows-2">
        <Reveal className="relative min-h-80 overflow-hidden rounded-2xl border border-line bg-panel lg:col-span-3 lg:row-span-2">
          <Shot
            src="/images/cdm-counter-cash-settlement.jpg"
            alt="Instant CDM settlements and secure counter cash"
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        {SERVICES.map((c, i) => ({ ...c, icon: [Bank, HandCoins][i] })).map((c) => (
          <Reveal
            key={c.title}
            className="rounded-2xl border border-line bg-gradient-to-br from-panel to-deep p-7 lg:col-span-2"
          >
            <c.icon size={32} className="text-emerald" />
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{c.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{c.body}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {c.features.map((f) => (
                <li key={f} className="rounded-full border border-line px-3 py-1 text-sm text-ink/90">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Network() {
  return (
    <section id="network" className="border-y border-line bg-deep/50">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-16">
          <Reveal>
            <p className={eyebrow}>Statewide presence</p>
            <h2 className={`${h2} mt-4`}>
              Every major commercial center in <span className="gold-text">Chhattisgarh</span>
            </h2>
            <p className="mt-5 max-w-[55ch] leading-relaxed text-muted">
              Settlement access across the north, centre and south of the state.
            </p>
          </Reveal>
          <Reveal className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-line bg-panel">
            <Shot
              src="/images/chhattisgarh-usdt-coverage-map.jpg"
              alt="Map of the USDT Chhattisgarh regional network"
              sizes="(min-width: 1024px) 26rem, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CITIES.map((c, i) => (
            <li key={c.name} className={i === 0 ? "sm:col-span-2" : undefined}>
              <Reveal
                className="flex h-full flex-col rounded-2xl border border-line bg-panel/70 p-5"
              >
                <div className="flex gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-emerald/10">
                    <MapPin size={20} weight="fill" className="text-emerald" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold tracking-tight">{c.name}</p>
                    <p className="text-sm text-muted">{c.role}</p>
                  </div>
                </div>
                <div className={`mt-auto grid grid-cols-2 gap-2 pt-5 ${i === 0 ? "sm:ml-auto sm:w-80" : ""}`}>
                  <TradeButtons location="city" city={c.name} className="px-3 py-2 text-sm" />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <Reveal className="max-w-3xl">
        <h2 className={h2}>
          3-step <span className="gold-text">execution model</span>
        </h2>
      </Reveal>
      <Reveal className="relative mt-12 aspect-[16/7] overflow-hidden rounded-2xl border border-line bg-panel">
        <Shot
          src="/images/usdt-otc-trade-process.jpg"
          alt="Deposit, verification and release workflow"
          sizes="(min-width: 1280px) 80rem, 100vw"
          className="object-cover"
        />
      </Reveal>
      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {STEPS.map((s, i) => (
          <li key={s.title}>
            <Reveal className="border-t-2 border-emerald/70 pt-6">
              <p className="font-mono text-4xl font-medium text-gold/80">{i + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Compliance() {
  const items = COMPLIANCE.map((c, i) => ({ ...c, icon: [IdentificationCard, ReceiptX, FileText][i] }));
  return (
    <section id="compliance" className="border-y border-line bg-deep/50">
      <div className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <Reveal className="max-w-3xl">
          <p className={eyebrow}>Enterprise security</p>
          <h2 className={`${h2} mt-4`}>
            Built for clean, <span className="gold-text">dispute-free</span> settlements
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-[1.3fr_1fr]">
          <Reveal className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-panel via-deep to-canvas p-8 md:row-span-2 md:p-10">
            <ShieldCheck size={56} weight="duotone" className="text-gold" />
            <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">{items[0].title}</h3>
            <p className="mt-3 max-w-[45ch] text-lg leading-relaxed text-muted">{items[0].body}</p>
          </Reveal>
          {items.slice(1).map((it) => (
            <Reveal key={it.title} className="rounded-2xl border border-line bg-panel/70 p-7">
              <it.icon size={30} className="text-emerald" />
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{it.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{it.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto grid max-w-7xl gap-12 px-4 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_1.4fr]">
      <Reveal>
        <h2 className={`${h2} lg:sticky lg:top-28`}>
          Frequently asked <span className="gold-text">questions</span>
        </h2>
      </Reveal>
      <Reveal className="border-t border-line">
        {FAQS.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </Reveal>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 pb-24 md:px-8 md:pb-32">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-[#11382f] via-deep to-canvas px-6 py-16 text-center md:px-16 md:py-24">
        <div className="grid-lines pointer-events-none absolute inset-0" />
        <div className="relative">
          <h2 className={`${h2} mx-auto max-w-3xl`}>
            Ready to access <span className="gold-text">institutional liquidity?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[50ch] leading-relaxed text-muted">
            Speak directly with the desk for rates and slot availability.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Cta href={WHATSAPP_URL} location="contact" channel="whatsapp" className={btnPrimary}>
              <WhatsappLogo size={20} weight="fill" /> Inquire Live Rates
            </Cta>
            <Cta href={PHONE_TEL} location="contact" channel="call" className={btnGhost}>
              <Phone size={18} weight="fill" /> {PHONE_DISPLAY}
            </Cta>
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted">
            <Clock size={16} /> {HOURS}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

