import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SAMPLE_ARTICLES } from "../page";
import { ArrowLeft, Clock, Calendar, Sparkles, ArrowRight } from "lucide-react";
import BloomMagazineIssue01Page from "../bloom-magazine-issue-01/page";

export function generateStaticParams() {
  return SAMPLE_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "bloom-magazine-issue-01") {
    return {
      title: "BLOOM Magazine • Issue 01: Women's Health & Prevention | MARS Journal",
      description:
        "Digital edition and newsletter of BLOOM Magazine Issue 01 by Highland Care Multispecialty Hospital. Clinical guidance on menstrual literacy, PCOS, preventative screenings, and metabolic health.",
      alternates: {
        canonical: "/journal/bloom-magazine-issue-01",
      },
      openGraph: {
        title: "BLOOM Magazine • Issue 01: Women's Health & Prevention",
        description:
          "Digital edition and newsletter of BLOOM Magazine Issue 01 by Highland Care Multispecialty Hospital.",
        url: "https://www.marswellbeing.xyz/journal/bloom-magazine-issue-01",
        siteName: "MARS Wellbeing",
        locale: "en_IN",
        images: [
          {
            url: "/images/bloom-magazine-issue-01.jpg",
            width: 1200,
            height: 630,
            alt: "BLOOM Magazine Issue 01 Cover",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "BLOOM Magazine • Issue 01: Women's Health & Prevention",
        description:
          "Official health newsletter from Highland Care Hospital and MARS Wellbeing.",
        images: ["/images/bloom-magazine-issue-01.jpg"],
      },
    };
  }

  const article =
    SAMPLE_ARTICLES.find((a) => a.slug === slug) || SAMPLE_ARTICLES[0];

  return {
    title: `${article.title} | MARS Journal`,
    description: article.excerpt,
    alternates: {
      canonical: `/journal/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | MARS Journal`,
      description: article.excerpt,
      url: `https://www.marswellbeing.xyz/journal/${article.slug}`,
      siteName: "MARS Wellbeing",
      locale: "en_IN",
      type: "article",
      publishedTime: "2026-10-01T00:00:00Z",
      authors: [article.author],
      images: [
        {
          url: "/images/mindful-journaling.jpg",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | MARS Journal`,
      description: article.excerpt,
      images: ["/images/mindful-journaling.jpg"],
    },
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "bloom-magazine-issue-01") {
    return <BloomMagazineIssue01Page />;
  }

  const article =
    SAMPLE_ARTICLES.find((a) => a.slug === slug) || SAMPLE_ARTICLES[0];

  const articleJsonLd = {
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
            name: "Journal",
            item: "https://www.marswellbeing.xyz/journal",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: `https://www.marswellbeing.xyz/journal/${article.slug}`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `https://www.marswellbeing.xyz/journal/${article.slug}#article`,
        headline: article.title,
        description: article.excerpt,
        image: "https://www.marswellbeing.xyz/images/mindful-journaling.jpg",
        datePublished: "2026-10-01",
        dateModified: "2026-10-24",
        author: {
          "@type": "Organization",
          name: article.author,
          url: "https://www.marswellbeing.xyz",
        },
        publisher: {
          "@type": "Organization",
          name: "MARS Wellbeing",
          logo: {
            "@type": "ImageObject",
            url: "https://www.marswellbeing.xyz/brand/mars-emblem.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.marswellbeing.xyz/journal/${article.slug}`,
        },
      },
    ],
  };

  return (
    <article className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* 1. Header Navigation Bar */}
      <div className="sticky top-14 z-20 bg-[rgba(255,255,255,0.85)] backdrop-blur-md border-b border-[#D2D2D7]/50 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>

          <span className="text-xs text-[#86868B]">{article.category}</span>
        </div>
      </div>

      {/* 2. Header Hero */}
      <section className="py-16 sm:py-20 border-b border-[#D2D2D7]/60 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="flex items-center gap-3 text-xs text-[#86868B] font-medium">
            <span className="uppercase tracking-wider font-semibold text-[#D96C68]">{article.category}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight text-[#1D1D1F] leading-tight text-balance">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed text-balance">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* 3. Article Body */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-base sm:text-lg text-[#3A3A3C] leading-relaxed">
          <p>
            In contemporary urban environments like Bengaluru, the pressure to produce, communicate, and innovate operates continuously. We rarely register that our nervous systems were never evolved to endure non-stop cognitive inputs from morning until late night.
          </p>

          <blockquote className="p-6 sm:p-8 rounded-2xl bg-[#F5F5F7] border-l-4 border-[#D96C68] my-8 font-sans text-xl sm:text-2xl font-medium text-[#1D1D1F] leading-snug">
            “Stillness is not the absence of energy; it is the presence of attention freed from the compulsion to react.”
          </blockquote>

          <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F] pt-4">
            The Somatic Toll of Chronic Hypervigilance
          </h2>
          <p>
            When an individual stays in prolonged cognitive overdrive, the sympathetic branch of the autonomic nervous system remains chronically activated. Heart rate variability drops, breathing becomes shallow and thoracic, and the capacity for nuanced reflection diminishes.
          </p>
          <p>
            Recovery begins not with grand philosophical breakthroughs, but with physical, biological permission to downshift: feeling the physical surface beneath your feet, unclenching the jaw, and allowing forty seconds of quiet breath before opening the next browser tab.
          </p>

          <h3 className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-[#1D1D1F] pt-4">
            Practicing the Intentional Pause
          </h3>
          <p>
            This is the foundational insight of MARS Wellbeing and Nova Hikari. Before trying to fix your thought patterns or force a positive mindset, you must first give your physiology a space to ground.
          </p>

          <div className="pt-10 border-t border-[#D2D2D7]/60 flex items-center justify-between">
            <Link
              href="/journal"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Explore More Articles</span>
            </Link>

            <Link
              href="/journal/bloom-magazine-issue-01"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D96C68] hover:text-[#C65A57] transition-colors"
            >
              <span>Read BLOOM Newsletter Edition</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
