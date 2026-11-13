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
    about: "Raipur is the state capital and headquarters of Raipur division, served by Swami Vivekananda Airport and Raipur Junction on the Howrah–Mumbai line. It is the desk's main liquidity hub, where most block orders are priced and routed.",
    nearby: ["Durg", "Dhamtari", "Mahasamund", "Balodabazar-Bhatapara"],
  },
  {
    slug: "bilaspur",
    name: "Bilaspur",
    role: "Fast-track CDM and trading desk",
    about: "Bilaspur is the headquarters of Bilaspur division, home to the Chhattisgarh High Court and the South East Central Railway zone, with Bilasa Devi Kevat Airport nearby. The desk runs fast-track CDM settlements for traders across the region.",
    nearby: ["Mungeli", "Janjgir-Champa", "Korba", "Gaurela-Pendra-Marwahi"],
  },
  {
    slug: "durg-bhilai",
    name: "Durg-Bhilai",
    role: "Industrial corridor OTC settlements",
    about: "Durg and Bhilai form the twin-city industrial corridor of Durg district around SAIL's Bhilai Steel Plant, on the Mumbai–Howrah main line. The desk handles OTC settlements for traders and businesses along the corridor.",
    nearby: ["Bemetara", "Rajnandgaon", "Balod", "Dhamtari"],
  },
  {
    slug: "korba",
    name: "Korba",
    role: "Energy hub settlement support",
    about: "Korba, about 200 km from Raipur, is the state's power and coal hub. SECL's Gevra and Kusmunda mines here rank among the largest coal mines in the world. The desk supports settlements for traders across the Korba energy belt.",
    nearby: ["Katghora", "Pali", "Janjgir-Champa", "Bilaspur"],
  },
  {
    slug: "ambikapur",
    name: "Ambikapur",
    role: "Surguja regional trading rail",
    about: "Ambikapur, about 350 km north of Raipur, is the headquarters of Surguja district and division, now served by Maa Mahamaya Airport. The desk gives traders in the north a verified settlement route without travelling to Raipur.",
    nearby: ["Surajpur", "Balrampur", "Koriya", "Jashpur"],
  },
  {
    slug: "jagdalpur",
    name: "Jagdalpur",
    role: "Southern Bastar desk coverage",
    about: "Jagdalpur, about 300 km south of Raipur, is the headquarters of Bastar district and division, with Maa Danteshwari Airport and NMDC's Nagarnar steel plant nearby. The desk covers USDT settlement for traders across Bastar.",
    nearby: ["Kondagaon", "Dantewada", "Sukma", "Narayanpur"],
  },
  {
    slug: "raigarh",
    name: "Raigarh",
    role: "High-volume enterprise liquidity",
    about: "Raigarh is an industrial city on the Mumbai–Howrah rail route, anchored by Jindal Steel's flagship steel plant and captive power plant. The desk serves high-volume enterprise orders from the Raigarh belt.",
    nearby: ["Sarangarh-Bilaigarh", "Jashpur", "Janjgir-Champa"],
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
