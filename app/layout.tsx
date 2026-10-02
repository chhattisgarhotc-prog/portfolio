import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "USDT Chhattisgarh | Institutional & Regional OTC Desk",
  description:
    "Structured USDT liquidity and rapid CDM or counter cash settlements across Raipur, Bilaspur, Durg-Bhilai, Korba, Ambikapur, Jagdalpur and Raigarh.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${outfit.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
