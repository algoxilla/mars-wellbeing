import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { BookOpen, ArrowRight, Clock, Tag, Sparkles } from "lucide-react";

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
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            Publications & Contemplations
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            The Journal of Quiet Practice
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-2xl mx-auto leading-relaxed">
            Thoughtful essays and somatic inquiries on cognitive decompression, sustainable focus, and the art of unhurried human connection.
          </p>
        </div>
      </section>

      {/* 2. Featured Lead Essay */}
      <section className="py-20 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF7F2] p-8 sm:p-14 border border-[#E2DDD5] flex flex-col justify-between group hover:border-[#6E8E7E] transition-all">
            <div>
              <div className="flex items-center gap-3 text-xs text-[#6E8E7E] font-medium mb-4">
                <span className="uppercase tracking-wider font-semibold">Featured Lead Essay</span>
                <span>•</span>
                <span>{SAMPLE_ARTICLES[0].category}</span>
                <span>•</span>
                <span>{SAMPLE_ARTICLES[0].readTime}</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase text-[#1D3033] leading-tight max-w-4xl">
                {SAMPLE_ARTICLES[0].title}
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-3xl leading-relaxed">
                {SAMPLE_ARTICLES[0].excerpt}
              </p>
            </div>

            <div className="pt-8 border-t border-[#E2DDD5] mt-10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#3D5255]/70">
                Sample Article — Phase 1 Demonstration
              </span>
              <Link
                href={`/journal/${SAMPLE_ARTICLES[0].slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all"
              >
                <span>Read Full Essay</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8FA89B]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Secondary Essays Grid */}
      <section className="py-20 bg-[#FAF7F2] border-b border-[#E2DDD5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SAMPLE_ARTICLES.slice(1).map((article) => (
              <div
                key={article.slug}
                className="bg-[#F5F0E7] p-8 border border-[#E2DDD5] flex flex-col justify-between hover:border-[#6E8E7E] transition-all space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#6E8E7E] font-medium pb-3 border-b border-[#E2DDD5]">
                    <span className="uppercase tracking-wider">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033] mt-4 leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-xs text-[#3D5255] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2DDD5] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#3D5255]/70">Demo Content</span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#1D3033] hover:text-[#4A6E5D]"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#6E8E7E]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <DevelopmentNotice
            phase="Phase 1 Demonstration"
            featureTitle="Journal Publications"
            description="The essays above illustrate the contemplative, psychoeducational editorial direction of MARS. Interactive reading bookmarks and audio editions will be enabled in Phase 2."
          />
        </div>
      </section>
    </div>
  );
}
