import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Contemplative Practice & Clinical Safety",
  description:
    "Find clear answers regarding Nova Hikari contemplative practices, Bengaluru community circles, confidentiality, medical partnerships, and clinical safety standards.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions — MARS Wellbeing",
    description:
      "Clear answers regarding Nova Hikari practices, Bengaluru community circles, confidentiality, and safety standards.",
    url: "https://www.marswellbeing.xyz/faq",
    siteName: "MARS Wellbeing",
    locale: "en_IN",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
