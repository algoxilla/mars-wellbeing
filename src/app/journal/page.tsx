import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight, Clock, Tag, ChevronRight } from "lucide-react";

export const SAMPLE_ARTICLES = [
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

      {/* 2. Articles Grid */}
      <section className="py-14 sm:py-20 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
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
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#6E6E73] mt-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#D2D2D7]/60 flex items-center justify-between text-xs">
                  <span className="text-[#6E6E73]">{article.date}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors">
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#D96C68]" />
                  </span>
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
