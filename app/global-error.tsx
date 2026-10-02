"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ background: "#0a1714", color: "#f1f7f4", fontFamily: "sans-serif", padding: 32 }}>
        <h2>Something went wrong.</h2>
        <button onClick={reset} style={{ marginTop: 16, textDecoration: "underline" }}>
          Try again
        </button>
      </body>
    </html>
  );
}
