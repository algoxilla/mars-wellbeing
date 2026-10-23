
import React from "react";
import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "MARS Wellbeing — Make space for yourself",
    template: "%s | MARS Wellbeing",
  },
  description:
    "MARS creates spaces for people to pause, reconnect, and access appropriate support. Featuring Nova Hikari, community circles, and qualified mental-health care in Bengaluru, India.",

  metadataBase: new URL("https://www.marswellbeing.xyz"),

  alternates: {
    canonical: "/",
  },

  verification: {
    google: "1CRJBSbKqHQqysQWDNXUL3h03XDmnJohcs2kiXnf6CY",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.marswellbeing.xyz",
    siteName: "MARS Wellbeing",
    title: "MARS Wellbeing — Make space for yourself",
    description:
      "MARS creates spaces for people to pause, reconnect, and access appropriate support. Featuring Nova Hikari, community circles, and qualified mental-health care in Bengaluru, India.",
    images: [
      {
        url: "/images/mars-og-image.png",
        width: 1200,
        height: 630,
        alt: "MARS Wellbeing — Mental Assistance Reassurance System",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MARS Wellbeing — Make space for yourself",
    description:
      "MARS creates spaces for people to pause, reconnect, and access appropriate support. Featuring Nova Hikari, community circles, and qualified mental-health care in Bengaluru, India.",
    images: ["/images/mars-og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.marswellbeing.xyz/#organization",
      name: "MARS Wellbeing",
      alternateName: "Mental Assistance Reassurance System",
      url: "https://www.marswellbeing.xyz",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.marswellbeing.xyz/#logo",
        url: "https://www.marswellbeing.xyz/brand/mars-emblem.png",
        caption: "MARS Wellbeing Official Emblem",
      },
      image: "https://www.marswellbeing.xyz/images/mars-og-image.png",
      description:
        "MARS creates spaces for people to pause, reconnect, and access appropriate support. Featuring Nova Hikari, community circles, and qualified mental-health care in Bengaluru, India.",
      telephone: "+91 90062 19668",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-90062-19668",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.marswellbeing.xyz/#website",
      url: "https://www.marswellbeing.xyz",
      name: "MARS Wellbeing",
      description: "Make space for yourself — Contemplative and clinical care in Bengaluru.",
      publisher: {
        "@id": "https://www.marswellbeing.xyz/#organization",
      },
      inLanguage: "en-IN",
    },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#000000] text-[#1D1D1F] font-sans selection:bg-[#1D1D1F] selection:text-[#FFFFFF]">
        <AmbientAudioProvider>
          <SiteShell>{children}</SiteShell>
        </AmbientAudioProvider>
      </body>
    </html>
  );
}
