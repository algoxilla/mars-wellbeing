import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova Hikari — The Ten-Stage Contemplative Journey",
  description:
    "Meaning 'New Light' in Japanese, Nova Hikari is MARS Wellbeing's private 10-stage contemplative journey, combining somatic breath regulation, mindful reflection, and autonomic nervous system pacing in Bengaluru.",
  alternates: {
    canonical: "/nova-hikari",
  },
  openGraph: {
    title: "Nova Hikari — The Ten-Stage Contemplative Journey | MARS Wellbeing",
    description:
      "Meaning 'New Light' in Japanese, Nova Hikari is MARS Wellbeing's private 10-stage contemplative journey combining somatic breath regulation and mindful reflection in Bengaluru.",
    url: "https://www.marswellbeing.xyz/nova-hikari",
    siteName: "MARS Wellbeing",
    locale: "en_IN",
    images: [
      {
        url: "/images/hero-sanctuary.jpg",
        width: 1200,
        height: 630,
        alt: "Nova Hikari Contemplative Sanctuary Bathed in Natural Light",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Hikari — The Ten-Stage Contemplative Journey | MARS Wellbeing",
    description:
      "Meaning 'New Light' in Japanese, Nova Hikari is a private 10-stage contemplative journey designed to restore inner calm and agency.",
    images: ["/images/hero-sanctuary.jpg"],
  },
};

const novaHikariSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "MARS Wellbeing",
          "item": "https://www.marswellbeing.xyz"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Nova Hikari",
          "item": "https://www.marswellbeing.xyz/nova-hikari"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.marswellbeing.xyz/nova-hikari#curriculum",
      "name": "Nova Hikari: Ten-Stage Contemplative Curriculum",
      "description": "Ten progressive contemplative movements designed to decouple from cognitive noise and restore somatic equilibrium.",
      "numberOfItems": 10,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Stage 01: Origin (The Initial Pause)" },
        { "@type": "ListItem", "position": 2, "name": "Stage 02: Breath (Autonomic Pacing)" },
        { "@type": "ListItem", "position": 3, "name": "Stage 03: Anchor (Somatic Grounding)" },
        { "@type": "ListItem", "position": 4, "name": "Stage 04: Shadow (Observing Noise)" },
        { "@type": "ListItem", "position": 5, "name": "Stage 05: Clarity (Cognitive Space)" },
        { "@type": "ListItem", "position": 6, "name": "Stage 06: Resonance (Emotional Attunement)" },
        { "@type": "ListItem", "position": 7, "name": "Stage 07: Threshold (Gentle Boundaries)" },
        { "@type": "ListItem", "position": 8, "name": "Stage 08: Integration (Daily Balance)" },
        { "@type": "ListItem", "position": 9, "name": "Stage 09: Sanctuary (Inner Refuge)" },
        { "@type": "ListItem", "position": 10, "name": "Stage 10: Radiance (Sustained Agency)" }
      ]
    }
  ]
};

export default function NovaHikariLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(novaHikariSchema) }}
      />
      {children}
    </>
  );
}
