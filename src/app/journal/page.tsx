import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight, Clock, Tag, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Journal of Quiet Practice — Publications & Contemplations",
  description:
    "Thoughtful essays, somatic inquiries, and official healthcare publications from MARS Wellbeing and Highland Care Hospital. Exploring cognitive preservation and autonomic pacing.",
  alternates: {
    canonical: "/journal",
  },
  openGraph: {
    title: "The Journal of Quiet Practice — MARS Wellbeing",
    description:
      "Essays, somatic inquiries, and healthcare publications from MARS Wellbeing and Highland Care.",
    url: "https://www.marswellbeing.xyz/journal",
    siteName: "MARS Wellbeing",
    locale: "en_IN",
    images: [
      {
        url: "/images/mindful-journaling.jpg",
        width: 1200,
        height: 630,
        alt: "Open journal and tea cup bathed in natural morning light",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Journal of Quiet Practice — MARS Wellbeing",
    description:
      "Essays and healthcare publications from MARS Wellbeing and Highland Care.",
    images: ["/images/mindful-journaling.jpg"],
  },
};

export const SAMPLE_ARTICLES = [
  {
    slug: "bloom-magazine-issue-01",
    title: "BLOOM Magazine — Issue 01: Women's Health, Prevention & Somatic Balance.",
    category: "Official Publication",
    readTime: "12 min read",
    author: "Dr. Uzma Dixit • Highland Care",
    excerpt:
      "The inaugural health newsletter and clinical publication from Highland Care Multispecialty Hospital, examining adolescent cycle literacy, PCOS, preventative screenings, and metabolic health after 35.",
    date: "September 2026",
  },
  {
    slug: "architecture-of-silence",
    title: "The Architecture of Silence: Why High-Velocity Builders Need Spaces to Disconnect.",
    category: "Grounding Practices",
    readTime: "6 min read",
    author: "MARS Editorial Board",
    excerpt:
      "When cognitive speed is continuously rewarded, our nervous systems stay locked in an emergency vigilance loop. Discovering how to step out of reactive overdrive is not a luxury—it is cognitive preservation.",
    date: "October 2026",
  },
  {
    slug: "screen-fatigue-reset",
    title: "Decompressing from Screen Fatigue: The Somatics of the Five-Minute Reset.",
    category: "Somatic Wellbeing",
    readTime: "4 min read",
    author: "MARS Editorial Board",
    excerpt:
      "Practical somatic techniques to re-anchor autonomic tone when hours of continuous virtual context switching deplete your focus and physiological calm.",
    date: "October 2026",
  },
  {
    slug: "vulnerability-without-performance",
    title: "Vulnerability Without Performance: The Ethos of Community Circles.",
    category: "Human Connection",
    readTime: "5 min read",
    author: "MARS Editorial Board",
    excerpt:
      "What happens when we gather in Bengaluru without comparing titles, seed rounds, or personal accomplishments? An inquiry into non-transactional human presence.",
    date: "October 2026",
  },
  {
    slug: "autonomic-pacing-decisions",
    title: "Autonomic Pacing: How Nervous System Grounding Informs Clear Decision Making.",
    category: "Cognitive Health",
    readTime: "7 min read",
    author: "MARS Editorial Board",
    excerpt:
      "High-stakes choices made in chronic sympathetic overdrive are often shaped by acute fear rather than genuine strategic clarity.",
    date: "October 2026",
  },
];

export default function JournalPage() {
  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F]">
      {/* 1. Apple Hero Section */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-20 border-b border-[#D2D2D7]/60 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-2 sm:mb-3">
            Publications & Contemplations
          </span>

          <h1 className="font-sans font-semibold tracking-tight text-[#1D1D1F] text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
            The Journal of Quiet Practice.
          </h1>

          <p className="mt-4 text-base sm:text-xl text-[#6E6E73] font-normal leading-relaxed max-w-xl mx-auto text-balance">
            Thoughtful essays and somatic inquiries on cognitive preservation, human connection, and autonomic nervous system regulation.
          </p>
        </div>

        {/* Flagship Journal Image */}
        <div className="max-w-[1280px] mx-auto px-3 sm:px-6 mt-10 sm:mt-14">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[20px] sm:rounded-[32px] overflow-hidden bg-[#F5F5F7] shadow-sm">
            <Image
              src="/images/mindful-journaling.jpg"
              alt="Open linen journal with handwritten reflections and ceramic tea on oak table"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 2. Featured Healthcare Publication Showcase (Highland Care BLOOM Magazine) */}
      <section className="py-12 sm:py-16 bg-[#F5F5F7] border-b border-[#D2D2D7]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-[#FFFFFF] border border-[#D2D2D7]/80 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Authentic Cover Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[400px] aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-[#0F172A] border border-[#D2D2D7]/60 shadow-md">
                  <Image
                    src="/images/bloom-magazine-issue-01.jpg"
                    alt="BLOOM Magazine Issue 01: Women's Health & Somatic Balance by Dr. Uzma Dixit"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Right Column: Editorial Copy & Direct Working Links */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F5F7] border border-[#D2D2D7]/80 text-[11px] font-semibold uppercase tracking-wider text-[#D96C68]">
                  <span>Featured Publication • Highland Care Hospital</span>
                </div>

                <h2 className="font-sans text-2xl sm:text-4xl font-semibold tracking-tight text-[#1D1D1F] leading-tight">
                  BLOOM Magazine — Issue 01
                </h2>

                <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed">
                  The official health and wellbeing publication from Highland Care Multispeciality Hospital, examining preventative healthcare, clinical continuity, lifestyle balance, and compassionate patient medicine.
                </p>

                <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#6E6E73] border-t border-[#D2D2D7]/50">
                  <div>
                    <span className="font-semibold text-[#1D1D1F]">Publisher:</span> Highland Care
                  </div>
                  <div>
                    <span className="font-semibold text-[#1D1D1F]">Edition:</span> Issue 01 (Highland Health)
                  </div>
                  <div>
                    <span className="font-semibold text-[#1D1D1F]">Format:</span> Digital Flipbook &amp; PDF
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href="/journal/bloom-magazine-issue-01"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all shadow-xs"
                  >
                    <span>Read Online Edition</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href="https://hcmhospital.com/wp-content/uploads/2026/09/BLOOM_Issue01_Highland_Health_Revised-1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] border border-[#D2D2D7] rounded-full transition-colors"
                  >
                    <span>Download PDF (24MB)</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#6E6E73]" />
                  </a>

                  <a
                    href="https://hcmhospital.com/blogs-magazines/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
                  >
                    <span>HCM Archive</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#6E6E73]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contemplative Essays Grid */}
      <section className="py-14 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6E6E73] block mb-1">
              Contemplative Practice Essays
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
              Quiet reflections for high-velocity minds.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SAMPLE_ARTICLES.map((article) => (
              <div
                key={article.slug}
                className="bg-[#FFFFFF] border border-[#D2D2D7]/70 rounded-[20px] p-6 sm:p-8 flex flex-col justify-between hover:border-[#1D1D1F]/40 transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#D2D2D7]/60">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D96C68]">
                      {article.category}
                    </span>
                    <span className="text-xs text-[#6E6E73] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#1D1D1F]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-sans text-xl font-semibold text-[#1D1D1F] mt-4 leading-snug">
                    <Link
                      href={`/journal/${article.slug}`}
                      className="hover:text-[#D96C68] transition-colors focus:outline-none focus-visible:underline"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-[#6E6E73] mt-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D2D2D7]/60 flex items-center justify-between text-xs">
                  <span className="text-[#6E6E73]">{article.date}</span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D96C68] rounded py-1 px-1.5 -mr-1.5"
                    aria-label={`Read article: ${article.title}`}
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#D96C68]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10 text-center">
            <Link
              href="/"
              className="text-xs font-medium text-[#1D1D1F] hover:text-[#D96C68] transition-colors"
            >
              ← Return to MARS Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
