import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Inquiries — Bengaluru Care Pathways",
  description:
    "Get in touch with the MARS team in Bengaluru. Direct inquiries for cohort rollouts, Nova Hikari contemplative practices, and clinical consultations.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Inquiries — MARS Wellbeing Bengaluru",
    description:
      "Get in touch with the MARS team for cohort rollouts, Nova Hikari practices, and clinical care pathways.",
    url: "https://www.marswellbeing.xyz/contact",
    siteName: "MARS Wellbeing",
    locale: "en_IN",
    images: [
      {
        url: "/images/mars-og-image.png",
        width: 1200,
        height: 630,
        alt: "MARS Wellbeing Contact & Inquiries",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
