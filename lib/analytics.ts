export type CtaChannel = "whatsapp" | "call";

function capture(event: string, props: Record<string, unknown>) {
  import("posthog-js").then(({ default: posthog }) => posthog.capture(event, props));
}

export function trackCtaClick(
  location: string,
  channel: CtaChannel,
  extra?: { side?: "buy" | "sell"; city?: string },
) {
  capture("cta_clicked", { location, channel, ...extra });
}

export function trackFaqOpened(question: string) {
  capture("faq_opened", { question });
}
