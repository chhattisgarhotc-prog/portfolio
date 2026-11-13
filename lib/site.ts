export const PHONE_DISPLAY = "+91 92326 55598";
export const PHONE_TEL = "tel:+919232655598";
const WA = "https://wa.me/919232655598?text=";

export const WHATSAPP_URL = WA + encodeURIComponent("Hello, I'd like live USDT rates.");

export type Side = "buy" | "sell";

export function tradeLink(side: Side, city?: string) {
  return WA + encodeURIComponent(`Hello, I want to ${side} USDT${city ? ` in ${city}` : ""}.`);
}

export const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Network", href: "/#network" },
  { label: "How It Works", href: "/#process" },
  { label: "Compliance", href: "/#compliance" },
  { label: "FAQ", href: "/#faq" },
];

export const PAGES_NAV = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export const CITIES = [
  { name: "Raipur", role: "Capital liquidity and hub operations" },
  { name: "Bilaspur", role: "Fast-track CDM and trading desk" },
  { name: "Durg-Bhilai", role: "Industrial corridor OTC settlements" },
  { name: "Korba", role: "Energy hub settlement support" },
  { name: "Ambikapur", role: "Surguja regional trading rail" },
  { name: "Jagdalpur", role: "Southern Bastar desk coverage" },
  { name: "Raigarh", role: "High-volume enterprise liquidity" },
];

export const SERVICES = [
  {
    title: "Cash Deposit Machine settlements",
    body: "Automated cash-in terminal settlements to designated accounts. Ideal for remote traders who need fast release without banking delays.",
    features: ["Real-time deposit verification", "Zero counterparty wait", "Rapid on-chain dispatch"],
  },
  {
    title: "In-person counter cash",
    body: "Structured face-to-face settlement in secure commercial hubs across Chhattisgarh, built for high-ticket block orders.",
    features: ["Strict ID verification", "In-person confirmation", "Dedicated privacy"],
  },
];

export const STEPS = [
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

export const COMPLIANCE = [
  {
    title: "Counterparty verification (KYC)",
    body: "Every trade party is verified to block tainted funds, fraud deposits and third-party scams.",
  },
  {
    title: "Zero cybercrime exposure",
    body: "Strict validation prevents the account liens and cyber cell flags common in anonymous P2P markets.",
  },
  {
    title: "Audit-ready logging",
    body: "Transaction hashes, timestamps and receipts are kept for statutory compliance and clean accounting.",
  },
];

export const HOURS = "Monday to Sunday, 10:00 AM to 9:00 PM IST";

export const FAQS = [
  {
    q: "What is the minimum transaction volume?",
    a: "Our desk caters to structured liquidity needs with a minimum ticket size of 100 USDT.",
  },
  {
    q: "What networks are supported for USDT transfer?",
    a: "We primarily settle over Tron (TRC20) and Binance Smart Chain (BEP20) for minimal network fees and near-instant block finality.",
  },
  {
    q: "How long does an execution take?",
    a: "Standard CDM settlements are verified and released within 15 to 30 minutes of deposit confirmation.",
  },
  {
    q: "Is identity verification mandatory?",
    a: "Yes. In accordance with anti-fraud safeguards and PMLA compliance protocols, all counterparties must provide identity matching before trade execution.",
  },
];

export const SITE_NAME = "USDT Chhattisgarh";
export const SITE_TITLE = "USDT Chhattisgarh | Buy & Sell USDT OTC Desk in Raipur";
export const SITE_DESCRIPTION =
  "Buy and sell USDT through CDM or counter cash settlement in Raipur, Bilaspur, Durg-Bhilai, Korba, Ambikapur, Jagdalpur and Raigarh. Min 100 USDT.";
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.usdtchhattisgarh.com").replace(/\/$/, "");
