import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Early Access Registration — Join the MARS Wellbeing Cohort",
  description:
    "Register for early access to Nova Hikari guided practices, curated Bengaluru community circles, and clinical pathways.",
  alternates: {
    canonical: "/early-access",
  },
  openGraph: {
    title: "Early Access Registration — MARS Wellbeing",
    description:
      "Join our early access cohort for Nova Hikari practices, Bengaluru community circles, and clinical care.",
    url: "https://www.marswellbeing.xyz/early-access",
    siteName: "MARS Wellbeing",
    locale: "en_IN",
  },
};

export default function EarlyAccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
