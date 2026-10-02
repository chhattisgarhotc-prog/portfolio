"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useState, type ReactNode } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { trackCtaClick, trackFaqOpened, type CtaChannel } from "@/lib/analytics";

export function Cta({
  href,
  location,
  channel,
  side,
  city,
  className,
  children,
}: {
  href: string;
  location: string;
  channel: CtaChannel;
  side?: "buy" | "sell";
  city?: string;
  className?: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackCtaClick(location, channel, { side, city })}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Brand graphics live in /public/images; until a file is dropped in, the panel stays empty instead of showing a broken image.
export function Shot({
  src,
  alt,
  priority,
  sizes,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

export function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details
      className="group border-b border-line py-6"
      onToggle={(e) => e.currentTarget.open && trackFaqOpened(q)}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium tracking-tight text-ink [&::-webkit-details-marker]:hidden">
        {q}
        <CaretDown
          size={20}
          className="shrink-0 text-emerald transition-transform duration-300 group-open:rotate-180"
        />
      </summary>
      <p className="mt-3 max-w-[60ch] leading-relaxed text-muted">{a}</p>
    </details>
  );
}
