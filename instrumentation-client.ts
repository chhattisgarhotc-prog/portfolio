import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0,
});

// Replay and PostHog load after first paint to keep their bundles off the LCP path; both still record every session.
function loadDeferred() {
  import("@sentry/nextjs").then(({ replayIntegration }) => Sentry.addIntegration(replayIntegration()));
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    import("posthog-js").then(({ default: posthog }) =>
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
        defaults: "2025-05-24",
      }),
    );
  }
}

if (document.readyState === "complete") setTimeout(loadDeferred);
else window.addEventListener("load", () => setTimeout(loadDeferred), { once: true });

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
