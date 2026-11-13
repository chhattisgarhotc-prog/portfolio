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
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

export const CITIES = [
  {
    slug: "raipur",
    name: "Raipur",
    role: "Capital liquidity and hub operations",
    about: "Raipur is the state capital and Chhattisgarh's largest commercial centre, and the desk's main liquidity hub. Most block orders are priced and routed from here.",
  },
  {
    slug: "bilaspur",
    name: "Bilaspur",
    role: "Fast-track CDM and trading desk",
    about: "Bilaspur is home to the Chhattisgarh High Court and the South East Central Railway zone headquarters. The desk runs fast-track CDM settlements for traders across the Bilaspur region.",
  },
  {
    slug: "durg-bhilai",
    name: "Durg-Bhilai",
    role: "Industrial corridor OTC settlements",
    about: "Durg and Bhilai form the twin-city industrial corridor around the Bhilai Steel Plant. The desk handles OTC settlements for traders and businesses along the corridor.",
  },
  {
    slug: "korba",
    name: "Korba",
    role: "Energy hub settlement support",
    about: "Korba is the state's power and coal hub, with major thermal power stations and coalfields. The desk supports settlements for traders across the Korba energy belt.",
  },
  {
    slug: "ambikapur",
    name: "Ambikapur",
    role: "Surguja regional trading rail",
    about: "Ambikapur is the headquarters of the Surguja division in northern Chhattisgarh. The desk gives traders in the north of the state a verified settlement route without travelling to Raipur.",
  },
  {
    slug: "jagdalpur",
    name: "Jagdalpur",
    role: "Southern Bastar desk coverage",
    about: "Jagdalpur is the headquarters of the Bastar division in southern Chhattisgarh. The desk covers USDT settlement for traders across the Bastar region.",
  },
  {
    slug: "raigarh",
    name: "Raigarh",
    role: "High-volume enterprise liquidity",
    about: "Raigarh is an industrial city with large steel and power plants on the Howrah–Mumbai rail line. The desk serves high-volume enterprise orders from the Raigarh belt.",
  },
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
    title: "Lower cybercrime exposure",
    body: "Strict validation lowers the risk of the account liens and cyber cell flags common in anonymous P2P markets.",
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
