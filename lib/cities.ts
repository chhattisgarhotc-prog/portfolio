import { CITIES, HOURS, SITE_NAME } from "@/lib/site";

export type City = (typeof CITIES)[number];

export const cityBySlug = (slug: string) => CITIES.find((c) => c.slug === slug);

export const cityTitle = (c: City) => `Buy & Sell USDT in ${c.name}`;

export const cityDescription = (c: City) =>
  `Buy or sell USDT in ${c.name} with CDM or counter cash settlement. Min 100 USDT, TRC20 or BEP20, KYC-verified desk.`;

export const cityAnswer = (c: City) =>
  `${SITE_NAME} settles USDT trades in ${c.name} by Cash Deposit Machine (CDM) deposit or in-person counter cash. The minimum ticket is 100 USDT, released on TRC20 or BEP20, usually within 15 to 30 minutes of deposit confirmation.`;

export const cityFaqs = (c: City) => [
  {
    q: `Can I buy USDT with cash in ${c.name}?`,
    a: `Yes. Deposit rupees through a Cash Deposit Machine to the account the desk gives you, or settle in person at a counter. Message the desk with your amount and route to get a live rate.`,
  },
  {
    q: `Can I sell USDT for cash in ${c.name}?`,
    a: `Yes. Send USDT on TRC20 or BEP20 after the desk confirms the rate, and receive rupees through the agreed settlement route once the transfer is verified.`,
  },
  {
    q: `Where does counter cash settlement happen in ${c.name}?`,
    a: `The desk confirms the meeting point for each order on WhatsApp after identity verification. Counter cash is built for larger block orders.`,
  },
  {
    q: `When is the desk open?`,
    a: `${HOURS}.`,
  },
];
