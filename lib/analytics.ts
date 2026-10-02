import posthog from "posthog-js";

export type CtaChannel = "whatsapp" | "call";

export function trackCtaClick(
  location: string,
  channel: CtaChannel,
  extra?: { side?: "buy" | "sell"; city?: string },
) {
  posthog.capture("cta_clicked", { location, channel, ...extra });
}

export function trackFaqOpened(question: string) {
  posthog.capture("faq_opened", { question });
}
