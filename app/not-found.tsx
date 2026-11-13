import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found | USDT Chhattisgarh", robots: { index: false } };

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="font-display text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted">This page doesn&apos;t exist. The USDT desk is one click away.</p>
      <Link href="/" className="rounded-full bg-emerald px-6 py-3 font-semibold text-[#04130e] transition hover:bg-emerald-soft">
        Back to home
      </Link>
    </main>
  );
}
