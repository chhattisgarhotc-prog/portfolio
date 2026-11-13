import { GUIDES, type Guide } from "@/lib/guides";
import { cityAnswer, cityDescription, cityFaqs, cityTitle, type City } from "@/lib/cities";
import { DOCS, type DocSlug } from "@/lib/pages";
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
      knowsAbout: ["USDT OTC desk", "Buy USDT", "Sell USDT", "USDT CDM settlement", "USDT counter cash"],
      keywords: "USDT OTC desk, buy USDT, sell USDT, USDT Raipur, USDT Chhattisgarh",
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
      contactPoint: { "@type": "ContactPoint", telephone, contactType: "sales", areaServed: "IN", availableLanguage: "en", url: `${SITE_URL}/contact` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "USDT settlement services",
        itemListElement: [
          ["Cash Deposit Machine settlements", "Automated cash-in terminal settlements to designated accounts with on-chain USDT release."],
          ["In-person counter cash", "Face-to-face USDT settlement in secure commercial hubs across Chhattisgarh."],
        ].map(([name, description]) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, description, serviceType: "USDT OTC desk", provider: { "@id": org }, areaServed: "Chhattisgarh" },
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

const docTypes = { about: "AboutPage", contact: "ContactPage", privacy: "WebPage" } as const;

export function docJsonLd(slug: DocSlug) {
  const url = `${SITE_URL}/${slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": docTypes[slug],
        "@id": `${url}#webpage`,
        url,
        name: DOCS[slug].title,
        description: DOCS[slug].description,
        dateModified: DOCS[slug].updated,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": org },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: DOCS[slug].title, item: url },
        ],
      },
    ],
  };
}

export function cityJsonLd(c: City) {
  const url = `${SITE_URL}/usdt/${c.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: cityTitle(c),
        description: cityDescription(c),
        inLanguage: "en-IN",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `USDT OTC desk in ${c.name}`,
        serviceType: "USDT OTC desk",
        description: cityAnswer(c),
        provider: { "@id": org },
        areaServed: { "@type": "City", name: c.name, containedInPlace: { "@type": "State", name: "Chhattisgarh" } },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: cityFaqs(c).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: cityTitle(c), item: url },
        ],
      },
    ],
  };
}

export function guideJsonLd(g: Guide) {
  const url = `${SITE_URL}/guides/${g.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: g.title,
        description: g.description,
        url,
        mainEntityOfPage: url,
        dateModified: g.updated,
        datePublished: g.updated,
        inLanguage: "en-IN",
        author: { "@id": org },
        publisher: { "@id": org },
        citation: g.sources.map((s) => s.url),
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
          { "@type": "ListItem", position: 3, name: g.title, item: url },
        ],
      },
    ],
  };
}

export function guidesHubJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: `${SITE_URL}/guides`,
    name: "USDT guides",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    hasPart: GUIDES.map((g) => ({ "@type": "Article", headline: g.title, url: `${SITE_URL}/guides/${g.slug}` })),
  };
}
