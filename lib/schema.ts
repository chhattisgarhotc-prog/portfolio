import { CITIES, FAQS, PHONE_TEL, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

const org = `${SITE_URL}/#organization`;
const telephone = PHONE_TEL.replace("tel:", "");

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "FinancialService"],
      "@id": org,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/usdt-chhattisgarh-logo.jpg`,
      image: `${SITE_URL}/images/usdt-chhattisgarh-desk.jpg`,
      description: SITE_DESCRIPTION,
      telephone,
      priceRange: "Min 100 USDT",
      currenciesAccepted: "INR, USDT",
      paymentAccepted: "Cash, Cash Deposit Machine",
      address: { "@type": "PostalAddress", addressRegion: "Chhattisgarh", addressCountry: "IN" },
      areaServed: CITIES.map((c) => ({ "@type": "City", name: c.name, containedInPlace: { "@type": "State", name: "Chhattisgarh" } })),
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "21:00",
      },
      contactPoint: { "@type": "ContactPoint", telephone, contactType: "sales", areaServed: "IN", availableLanguage: ["en", "hi"] },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "USDT settlement services",
        itemListElement: [
          ["Cash Deposit Machine settlements", "Automated cash-in terminal settlements to designated accounts with on-chain USDT release."],
          ["In-person counter cash", "Face-to-face USDT settlement in secure commercial hubs across Chhattisgarh."],
        ].map(([name, description]) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description, provider: { "@id": org }, areaServed: "Chhattisgarh" },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: "en-IN",
      publisher: { "@id": org },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": org },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/images/usdt-chhattisgarh-desk.jpg`, width: 928, height: 1152 },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      isPartOf: { "@id": `${SITE_URL}/#webpage` },
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};
