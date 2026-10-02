import {
  ArrowRight,
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
import { Cta, FaqItem, Reveal, Shot } from "@/components/client";
import { CITIES, FAQS, NAV, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-emerald px-6 py-3 font-semibold text-base text-[#04130e] shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_10px_30px_-10px_rgb(0_192_135/0.6)] transition duration-300 hover:bg-emerald-soft active:scale-[0.98]";
const btnGhost =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line px-6 py-3 font-semibold text-ink transition duration-300 hover:border-emerald hover:text-emerald active:scale-[0.98]";
const eyebrow = "font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold";
const h2 = "font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-5xl";

export default function Home() {
  return (
    <>
      <Header />
      <main>
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
    </>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <span className="relative size-10 overflow-hidden rounded-full border border-gold/40 bg-panel">
        <Shot src="/images/logo.png" alt="" sizes="40px" className="object-cover" />
      </span>
      <span className="font-display text-lg font-bold uppercase leading-none tracking-wide">
        USDT <span className="gold-text">Chhattisgarh</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <Cta href={WHATSAPP_URL} location="header" channel="whatsapp" className={`${btnPrimary} px-4 py-2 text-sm`}>
          Inquire Live Rates <ArrowRight size={16} weight="bold" />
        </Cta>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="grid-lines pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <Reveal>
          <p className={eyebrow}>Institutional & Regional OTC Desk</p>
          <h1 className="mt-5 font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight md:text-6xl lg:text-[4.25rem]">
            Structured <span className="gold-text">USDT liquidity</span> across Chhattisgarh
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
            Direct, secure USDT liquidity for traders, enterprises and regional partners.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Cta href={WHATSAPP_URL} location="hero" channel="whatsapp" className={btnPrimary}>
              <WhatsappLogo size={20} weight="fill" /> Inquire Live Rates
            </Cta>
            <a href="#process" className={btnGhost}>
              View Process <ArrowDown size={16} weight="bold" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-8 rounded-full bg-emerald/25 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-panel/60 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)]">
            <Shot
              src="/images/logo.png"
              alt="USDT Chhattisgarh liquidity desk badge"
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>
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
            <dd className="mt-1 font-display text-3xl font-bold uppercase tracking-tight text-ink">{m.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Services() {
  const cards = [
    {
      icon: Bank,
      title: "Cash Deposit Machine settlements",
      body: "Automated cash-in terminal settlements to designated accounts. Ideal for remote traders who need fast release without banking delays.",
      features: ["Real-time deposit verification", "Zero counterparty wait", "Rapid on-chain dispatch"],
    },
    {
      icon: HandCoins,
      title: "In-person counter cash",
      body: "Structured face-to-face settlement in secure commercial hubs across Chhattisgarh, built for high-ticket block orders.",
      features: ["Strict ID verification", "In-person confirmation", "Dedicated privacy"],
    },
  ];
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
            src="/images/services.png"
            alt="Instant CDM settlements and secure counter cash"
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        {cards.map((c, i) => (
          <Reveal
            key={c.title}
            delay={0.1 * (i + 1)}
            className="rounded-2xl border border-line bg-gradient-to-br from-panel to-deep p-7 lg:col-span-2"
          >
            <c.icon size={32} className="text-emerald" />
            <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight">{c.title}</h3>
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
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 md:px-8 md:py-32 lg:grid-cols-2">
        <Reveal className="relative order-2 aspect-square overflow-hidden rounded-2xl border border-line bg-panel lg:order-1">
          <Shot
            src="/images/coverage.png"
            alt="Map of the USDT Chhattisgarh regional network"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="order-1 lg:order-2">
          <Reveal>
            <p className={eyebrow}>Statewide presence</p>
            <h2 className={`${h2} mt-4`}>
              Every major commercial center in <span className="gold-text">Chhattisgarh</span>
            </h2>
            <p className="mt-5 max-w-[55ch] leading-relaxed text-muted">
              Settlement access across the north, centre and south of the state.
            </p>
          </Reveal>
          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {CITIES.map((c, i) => (
              <li key={c.name}>
                <Reveal delay={0.04 * i} className="flex gap-3">
                  <MapPin size={22} weight="fill" className="mt-0.5 shrink-0 text-emerald" />
                  <div>
                    <p className="font-display text-xl font-bold uppercase tracking-wide">{c.name}</p>
                    <p className="text-sm text-muted">{c.role}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "Order ticket consultation",
      body: "Share your volume (min 100 USDT) and route, CDM or counter cash. Get live pricing and routing instructions.",
    },
    {
      title: "Settlement & verification",
      body: "Make the cash deposit or counter exchange. Send proof of deposit and your TRC20 or BEP20 wallet address.",
    },
    {
      title: "On-chain release",
      body: "After source-matching and ledger confirmation, USDT is released to your wallet with the full TXID record.",
    },
  ];
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <Reveal className="max-w-3xl">
        <h2 className={h2}>
          3-step <span className="gold-text">execution model</span>
        </h2>
      </Reveal>
      <Reveal className="relative mt-12 aspect-[16/7] overflow-hidden rounded-2xl border border-line bg-panel">
        <Shot
          src="/images/workflow.png"
          alt="Deposit, verification and release workflow"
          sizes="(min-width: 1280px) 80rem, 100vw"
          className="object-cover"
        />
      </Reveal>
      <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
        {steps.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={0.1 * i} className="border-t-2 border-emerald/70 pt-6">
              <p className="font-display text-5xl font-bold text-gold/80">{i + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Compliance() {
  const items = [
    {
      icon: IdentificationCard,
      title: "Counterparty verification (KYC)",
      body: "Every trade party is verified to block tainted funds, fraud deposits and third-party scams.",
    },
    {
      icon: ReceiptX,
      title: "Zero cybercrime exposure",
      body: "Strict validation prevents the account liens and cyber cell flags common in anonymous P2P markets.",
    },
    {
      icon: FileText,
      title: "Audit-ready logging",
      body: "Transaction hashes, timestamps and receipts are kept for statutory compliance and clean accounting.",
    },
  ];
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
          <Reveal className="relative overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-panel via-deep to-base p-8 md:row-span-2 md:p-10">
            <ShieldCheck size={56} weight="duotone" className="text-gold" />
            <h3 className="mt-6 font-display text-3xl font-bold uppercase tracking-tight">{items[0].title}</h3>
            <p className="mt-3 max-w-[45ch] text-lg leading-relaxed text-muted">{items[0].body}</p>
          </Reveal>
          {items.slice(1).map((it, i) => (
            <Reveal key={it.title} delay={0.1 * (i + 1)} className="rounded-2xl border border-line bg-panel/70 p-7">
              <it.icon size={30} className="text-emerald" />
              <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight">{it.title}</h3>
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
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-[#11382f] via-deep to-base px-6 py-16 text-center md:px-16 md:py-24">
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
            <Clock size={16} /> Monday to Sunday, 10:00 AM to 9:00 PM IST
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-[#071210]">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo />
          <Cta href={PHONE_TEL} location="footer" channel="call" className="text-muted transition hover:text-emerald">
            {PHONE_DISPLAY}
          </Cta>
        </div>
        <p className="mt-10 max-w-4xl text-xs leading-relaxed text-muted/80">
          <strong className="text-muted">Disclaimer:</strong> Virtual Digital Assets (VDAs) are subject to market
          risks and regulatory oversight in India under the Prevention of Money Laundering Act (PMLA). Digital asset
          transactions are taxed at 30% under Section 115BBH and subject to 1% TDS under Section 194S of the Income Tax
          Act. USDT Chhattisgarh operates on strict counterparty verification principles and does not process
          unverified or third-party funds.
        </p>
        <p className="mt-6 text-xs text-muted/60">© {new Date().getFullYear()} USDT Chhattisgarh</p>
      </div>
    </footer>
  );
}
