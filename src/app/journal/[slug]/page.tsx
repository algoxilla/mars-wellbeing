import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { SAMPLE_ARTICLES } from "../page";
import { ArrowLeft, Clock, Share2, Bookmark, Sparkles, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return SAMPLE_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article =
    SAMPLE_ARTICLES.find((a) => a.slug === slug) || SAMPLE_ARTICLES[0];

  return (
    <article className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 border-b border-[#E2DDD5] bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/journal"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#6E8E7E] hover:text-[#1D3033] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>

          <div className="flex items-center gap-3 text-xs text-[#6E8E7E] font-medium pt-2">
            <span className="uppercase tracking-wider font-semibold">{article.category}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-[#3D5255] leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* 2. Article Body */}
      <section className="py-20 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-base text-[#3D5255] leading-loose">
          <p>
            In contemporary urban environments like Bengaluru, the pressure to produce, communicate, and innovate operates continuously. We rarely register that our nervous systems were never evolved to endure non-stop cognitive inputs from morning until late night.
          </p>

          <blockquote className="p-6 bg-[#FAF7F2] border-l-4 border-[#6E8E7E] my-8 font-display text-2xl font-bold uppercase text-[#1D3033] leading-snug">
            “Stillness is not the absence of energy; it is the presence of attention freed from the compulsion to react.”
          </blockquote>

          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#1D3033] pt-4">
            The Somatic Toll of Chronic Hypervigilance
          </h2>
          <p>
            When an individual stays in prolonged cognitive overdrive, the sympathetic branch of the autonomic nervous system remains chronically activated. Heart rate variability drops, breathing becomes shallow and thoracic, and the capacity for nuanced reflection diminishes.
          </p>
          <p>
            Recovery begins not with grand philosophical breakthroughs, but with physical, biological permission to downshift: feeling the physical surface beneath your feet, unclenching the jaw, and allowing forty seconds of quiet breath before opening the next browser tab.
          </p>

          <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#1D3033] pt-4">
            Practicing the Intentional Pause
          </h3>
          <p>
            This is the foundational insight of MARS Wellbeing and Nova Hikari. Before trying to fix your thought patterns or force a positive mindset, you must first give your physiology a space to ground.
          </p>

          <div className="pt-10 border-t border-[#E2DDD5]">
            <DevelopmentNotice
              phase="Phase 1 Demonstration"
              featureTitle="Journal Reading View"
              description="This article is a demonstration text illustrating the editorial voice and layout of the MARS Wellbeing Journal."
            />
          </div>
        </div>
      </section>
    </article>
  );
}
