
import React from "react";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AmbientAudioProvider } from "@/context/AmbientAudioContext";
import { SiteShell } from "@/components/layout/SiteShell";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MARS Wellbeing — Make space for yourself",
    template: "%s | MARS Wellbeing",
  },
  description:
    "MARS creates spaces for people to pause, reconnect, and access appropriate support. Featuring Nova Hikari, community circles, and qualified mental-health care in Bengaluru, India.",

  metadataBase: new URL("https://www.marswellbeing.xyz"),

  verification: {
    google: "1CRJBSbKqHQqysQWDNXUL3h03XDmnJohcs2kiXnf6CY",
  },

  keywords: [
    "MARS Wellbeing",
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
      className={`${inter.variable} ${plusJakartaSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#000000] text-[#1D1D1F] font-sans selection:bg-[#1D1D1F] selection:text-[#FFFFFF]">
        <AmbientAudioProvider>
          <SiteShell>{children}</SiteShell>
        </AmbientAudioProvider>
      </body>
    </html>
  );
}
