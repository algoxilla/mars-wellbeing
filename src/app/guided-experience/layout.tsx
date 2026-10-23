import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guided Experience — Nova Hikari Interactive Player",
  description:
    "Immersive stage player for the Nova Hikari 10-stage contemplative journey. Featuring real-time somatic breathing guidance and private device-local reflections.",
  alternates: {
    canonical: "/guided-experience",
  },
  openGraph: {
    title: "Guided Experience — Nova Hikari Interactive Player | MARS Wellbeing",
    description:
      "Interactive stage player with somatic breathing guidance and private device-local reflections.",
    url: "https://www.marswellbeing.xyz/guided-experience",
    siteName: "MARS Wellbeing",
    locale: "en_IN",
  },
};

export default function GuidedExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
