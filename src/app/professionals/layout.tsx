import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Care Directory — Medical Continuity & Healthcare Pathways",
  description:
    "Grounded in clinical governance with healthcare partner Highland Care Private Limited. Verified consultation pathways with qualified medical consultants and psychologists in Bengaluru.",
  alternates: {
    canonical: "/professionals",
  },
  openGraph: {
    title: "Clinical Care Directory — Medical Continuity | MARS Wellbeing",
    description:
      "Grounded in clinical governance with healthcare partner Highland Care Private Limited. Verified consultation pathways with medical consultants in Bengaluru.",
    url: "https://www.marswellbeing.xyz/professionals",
    siteName: "MARS Wellbeing",
    locale: "en_IN",
    images: [
      {
        url: "/images/professional-care.jpg",
        width: 1200,
        height: 630,
        alt: "Clinical Consultation Sanctuary - MARS Wellbeing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinical Care Directory — Medical Continuity | MARS Wellbeing",
    description:
      "Verified clinical consultation pathways in Bengaluru, in partnership with Highland Care Private Limited.",
    images: ["/images/professional-care.jpg"],
  },
};

const clinicalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "MARS Wellbeing",
          item: "https://www.marswellbeing.xyz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Clinical Care",
          item: "https://www.marswellbeing.xyz/professionals",
        },
      ],
    },
    {
      "@type": "MedicalOrganization",
      "@id": "https://www.marswellbeing.xyz/professionals#clinical-governance",
      name: "Highland Care Private Limited & MARS Clinical Governance",
      url: "https://hcmhospital.com/",
      telephone: "+91-90062-19668",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      medicalSpecialty: [
        "PrimaryCare",
        "PsychosomaticMedicine",
        "PreventativeMedicine",
      ],
    },
  ],
};

export default function ClinicalCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicalSchema) }}
      />
      {children}
    </>
  );
}
