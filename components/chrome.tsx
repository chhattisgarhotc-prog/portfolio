import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/ssr";
import { Cta, Shot } from "@/components/client";
import { NAV, PAGES_NAV, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, tradeLink } from "@/lib/site";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-emerald px-6 py-3 font-semibold text-base text-[#04130e] shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_10px_30px_-10px_rgb(0_192_135/0.6)] transition duration-300 hover:bg-emerald-soft active:scale-[0.98]";
export const btnGhost =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line px-6 py-3 font-semibold text-ink transition duration-300 hover:border-emerald hover:text-emerald active:scale-[0.98]";
export const btnBuy =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-emerald font-semibold text-[#04130e] transition duration-300 hover:bg-emerald-soft active:scale-[0.98]";
export const btnSell =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-emerald/70 font-semibold text-ink transition duration-300 hover:bg-emerald/10 active:scale-[0.98]";
export const eyebrow = "font-mono text-xs font-medium uppercase tracking-[0.08em] text-gold";
export const h2 = "font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl";

function Logo() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
      <span className="relative size-9 shrink-0 overflow-hidden rounded-full border border-gold/40 bg-panel sm:size-10">
        <Shot src="/images/usdt-chhattisgarh-logo.jpg" alt="" sizes="40px" className="object-cover" />
      </span>
      <span className="truncate font-display text-base font-semibold leading-tight tracking-[-0.02em] sm:text-lg">
        USDT <span className="gold-text">Chhattisgarh</span>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:gap-6 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
        <Cta
          href={WHATSAPP_URL}
          location="header"
          channel="whatsapp"
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-emerald px-3.5 py-2 text-sm font-semibold text-[#04130e] transition duration-300 hover:bg-emerald-soft active:scale-[0.98] sm:px-4"
        >
          <span className="sm:hidden">Live Rates</span>
          <span className="hidden sm:inline">Inquire Live Rates</span>
          <ArrowRight size={16} weight="bold" className="hidden sm:block" />
        </Cta>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#071210]">
      <div className="mx-auto max-w-7xl px-4 pb-32 pt-12 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo />
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            {PAGES_NAV.map((n) => (
              <Link key={n.href} href={n.href} className="transition hover:text-emerald">
                {n.label}
              </Link>
            ))}
            <Cta href={PHONE_TEL} location="footer" channel="call" className="transition hover:text-emerald">
              {PHONE_DISPLAY}
            </Cta>
          </nav>
        </div>
        <p className="mt-10 max-w-4xl text-xs leading-relaxed text-muted/80">
          <strong className="text-muted">Disclaimer:</strong> Virtual Digital Assets (VDAs) are subject to market
          risks and regulatory oversight in India under the Prevention of Money Laundering Act (PMLA). Digital asset
          transactions are taxed at 30% under Section 115BBH and subject to 1% TDS under Section 194S of the Income Tax
          Act. USDT Chhattisgarh operates on strict counterparty verification principles and does not process
          unverified or third-party funds.
        </p>
        <p className="mt-6 text-xs text-muted/80">© {new Date().getFullYear()} USDT Chhattisgarh</p>
      </div>
    </footer>
  );
}

export function TradeButtons({ location, city, className }: { location: string; city?: string; className: string }) {
  return (
    <>
      <Cta href={tradeLink("buy", city)} location={location} channel="whatsapp" side="buy" city={city} className={`${btnBuy} ${className}`}>
        <WhatsappLogo size={18} weight="fill" /> Buy USDT
      </Cta>
      <Cta href={tradeLink("sell", city)} location={location} channel="whatsapp" side="sell" city={city} className={`${btnSell} ${className}`}>
        <WhatsappLogo size={18} weight="fill" className="text-emerald" /> Sell USDT
      </Cta>
    </>
  );
}

export function TradeBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2 rounded-full border border-line bg-canvas/85 p-2 shadow-[0_-10px_40px_-10px_rgb(0_0_0/0.6)] backdrop-blur-md">
        <TradeButtons location="sticky_bar" className="py-3 text-base" />
      </div>
    </div>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
