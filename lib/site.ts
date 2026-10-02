export const PHONE_DISPLAY = "+91 92326 55598";
export const PHONE_TEL = "tel:+919232655598";
const WA = "https://wa.me/919232655598?text=";

export const WHATSAPP_URL = WA + encodeURIComponent("Hello, I'd like live USDT rates.");

export type Side = "buy" | "sell";

export function tradeLink(side: Side, city?: string) {
  return WA + encodeURIComponent(`Hello, I want to ${side} USDT${city ? ` in ${city}` : ""}.`);
}

export const NAV = [
  { label: "Services", href: "#services" },
  { label: "Network", href: "#network" },
  { label: "How It Works", href: "#process" },
  { label: "Compliance", href: "#compliance" },
  { label: "FAQ", href: "#faq" },
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
