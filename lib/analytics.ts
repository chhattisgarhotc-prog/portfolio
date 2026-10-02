import posthog from "posthog-js";

export type CtaChannel = "whatsapp" | "call";

export function trackCtaClick(location: string, channel: CtaChannel) {
  posthog.capture("cta_clicked", { location, channel });
}

export function trackFaqOpened(question: string) {
  posthog.capture("faq_opened", { question });
}
