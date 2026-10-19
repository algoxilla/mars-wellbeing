
import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CrisisBar } from "@/components/layout/CrisisBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AmbientAudioProvider } from "@/context/AmbientAudioContext";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";
import { WelcomeModal } from "@/components/ui/WelcomeModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
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
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFFFFF] text-[#1D1D1F] font-sans selection:bg-[#1D1D1F] selection:text-[#FFFFFF]">
        <AmbientAudioProvider>
          <CrisisBar />
          <Suspense
            fallback={
              <div className="h-[44px] bg-[#FFFFFF]/85 border-b border-[#D2D2D7]/60" />
            }
          >
            <Header />
          </Suspense>
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <ScrollToTopButton />
          <WelcomeModal />
        </AmbientAudioProvider>
      </body>
    </html>
  );
}
