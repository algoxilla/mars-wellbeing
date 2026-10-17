import type { Metadata } from "next";
import { Barlow_Condensed, Montserrat } from "next/font/google";
import "./globals.css";
import { CrisisBar } from "@/components/layout/CrisisBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MARS Wellbeing — Spaces for Pause, Reconnection & Support",
    template: "%s | MARS Wellbeing",
  },
  description:
    "MARS creates spaces for people to pause, reconnect, and access appropriate support. Featuring Nova Hikari, community circles, and qualified mental-health care in Bengaluru, India.",
  metadataBase: new URL("https://marswellbeing.in"),
  keywords: [
    "Wellbeing Bengaluru",
    "Mental health support India",
    "Nova Hikari",
    "Psychologists Bengaluru",
    "Community circles Bengaluru",
    "Mental Assistance Reassurance System",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F0E7] text-[#1D3033] font-sans selection:bg-[#1D3033] selection:text-[#F5F0E7]">
        <CrisisBar />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
