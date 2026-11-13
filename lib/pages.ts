import { CITIES, COMPLIANCE, HOURS, PHONE_DISPLAY, SERVICES, SITE_NAME, STEPS } from "@/lib/site";

export type DocSlug = "about" | "contact" | "privacy";

export type Doc = {
  title: string;
  description: string;
  updated: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const DOCS: Record<DocSlug, Doc> = {
  about: {
    title: `About ${SITE_NAME}`,
    description: "Regional USDT OTC desk serving seven Chhattisgarh cities with verified cash settlement.",
    updated: "2026-11-13",
    sections: [
      {
        heading: "What we do",
        paragraphs: [
          `${SITE_NAME} is an over-the-counter (OTC) desk for buying and selling USDT (Tether) against Indian rupees in Chhattisgarh. We serve individual traders, enterprises and regional partners who want structured liquidity instead of anonymous peer-to-peer matching.`,
          ...SERVICES.map((s) => `${s.title}: ${s.body}`),
          "USDT is released over Tron (TRC20) or BNB Smart Chain (BEP20). The minimum ticket is 100 USDT, and standard CDM settlements are released within 15 to 30 minutes of deposit confirmation.",
        ],
      },
      {
        heading: "Where we operate",
        paragraphs: [
          `The desk covers the north, centre and south of the state: ${CITIES.map((c) => c.name).join(", ")}.`,
          ...CITIES.map((c) => `${c.name}: ${c.role}.`),
        ],
      },
      {
        heading: "How we keep trades clean",
        paragraphs: [
          ...COMPLIANCE.map((c) => `${c.title}: ${c.body}`),
          "Every counterparty completes identity matching under PMLA safeguards before execution, and we do not process unverified or third-party funds.",
        ],
      },
      {
        heading: "How a trade works",
        paragraphs: STEPS.map((s, i) => `${i + 1}. ${s.title}: ${s.body}`),
      },
    ],
  },
  contact: {
    title: `Contact ${SITE_NAME}`,
    description: "Reach the USDT desk by WhatsApp or phone for live rates.",
    updated: "2026-11-13",
    sections: [
      {
        heading: "Talk to the desk",
        paragraphs: [
          `Call or WhatsApp ${PHONE_DISPLAY}. The desk is open ${HOURS}. WhatsApp is the fastest way to get live buy and sell rates and settlement slot availability.`,
        ],
      },
      {
        heading: "What to include in your first message",
        paragraphs: [
          "Tell us whether you want to buy or sell USDT, the amount (minimum 100 USDT), your city, and your preferred settlement route: Cash Deposit Machine (CDM) or in-person counter cash.",
          "For purchases, have your TRC20 or BEP20 wallet address ready. You will be asked to complete identity verification before the trade is executed.",
        ],
      },
      {
        heading: "Cities we serve",
        paragraphs: [
          `${CITIES.map((c) => c.name).join(", ")}. If you are elsewhere in Chhattisgarh, message the desk and we will confirm the nearest settlement option.`,
        ],
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    description: `How ${SITE_NAME} collects, uses and protects your information.`,
    updated: "2026-11-13",
    sections: [
      {
        heading: "Information we collect",
        paragraphs: [
          "When you contact the desk by WhatsApp or phone, we receive your phone number, name and the details you share about a trade, such as amount, city, settlement route and wallet address.",
          "Before any trade, we collect identity documents and details needed for counterparty verification under the Prevention of Money Laundering Act (PMLA).",
          "For each trade we keep transaction records: on-chain transaction hashes, timestamps, deposit receipts and settlement amounts.",
          "When you browse this website, we use PostHog for product analytics and Sentry for error monitoring. Both record page views, interactions and session replays so we can understand usage and fix problems. They collect device, browser and approximate location data, not identity documents.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: [
          "We use your information to quote rates, execute and settle trades, verify counterparties, prevent fraud and tainted funds, meet statutory record-keeping and tax obligations, and improve this website.",
          "We do not sell your personal information.",
        ],
      },
      {
        heading: "Sharing",
        paragraphs: [
          "We share information only with service providers that run our operations (WhatsApp for messaging, PostHog and Sentry for website analytics and monitoring), and with authorities where Indian law requires it.",
        ],
      },
      {
        heading: "Retention and security",
        paragraphs: [
          "Verification and transaction records are kept for as long as Indian law, including PMLA and the Income Tax Act, requires. Access is limited to desk staff who need it to settle and audit trades.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          `To ask about, correct or delete information we hold, call or WhatsApp ${PHONE_DISPLAY}. Records we are legally required to keep cannot be deleted before the required period ends.`,
        ],
      },
    ],
  },
};
