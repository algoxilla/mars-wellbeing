"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQS = [
  {
    question: "What is MARS and how is it different from conventional meditation apps?",
    answer:
      "MARS (Mental Assistance Reassurance System) is a complete ecosystem uniting self-directed contemplative journeys (Nova Hikari), intimate in-person facilitated community circles in Bengaluru, and verified clinical psychotherapy. Unlike conventional wellness apps, we feature zero streaks, zero gamification, zero addictive algorithms, and 100% private local reflections.",
  },
  {
    question: "How can I experience Nova Hikari?",
    answer:
      "Nova Hikari begins with foundational self-directed contemplative stages (Origin and Grounding) that you can explore directly in your browser with complete privacy and zero tracking. Subsequent progressive stages (03 through 10) are experienced as part of structured practices and cohort experiences.",
  },
  {
    question: "What happens inside a MARS Community Circle?",
    answer:
      "Small, confidential cohorts of 6–8 people gather in calm physical spaces in Bengaluru (Indiranagar, Koramangala, and virtual). Guided by trained facilitators, circles operate under the Chatham House Rule. Participants speak honestly without resume comparisons, performative positivity, or unsolicited advice.",
  },
  {
    question: "How are the mental health professionals vetted?",
    answer:
      "In our production directory, every mental health professional undergoes formal clinical governance vetting, including degree authentication, RCI registration verification, and ethical practice reviews. Clear tariffs and transparent qualifications ensure unhurried, trustworthy care.",
  },
  {
    question: "Is MARS a substitute for psychiatric care or crisis intervention?",
    answer:
      "No. MARS is designed for emotional grounding, personal reflection, and community connection. It is not an emergency hospital or psychiatric clinic. If you are experiencing acute distress or suicidal thoughts, please call Tele-MANAS (14416) or 112 immediately.",
  },
  {
    question: "How is my personal data and privacy protected?",
    answer:
      "Your contemplative reflections and journal entries in Nova Hikari are stored strictly in your local browser storage by default. We do not track you across the web, use behavioral ad pixels, or treat your emotional reflections as data to be mined.",
  },
];

export function FaqSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({
    threshold: 0.1,
  });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-24 sm:py-32 bg-[#F5F0E7] border-b border-[#E3E9DE] text-[#1B2926] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-[#C9A15A] bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-[#C9A15A]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#153D35] leading-tight transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Questions & transparent answers.
          </h2>

          <p
            className={`mt-4 text-base sm:text-lg text-[#1B2926]/80 font-light leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            Everything you need to know about our philosophy, privacy boundaries, and how to participate.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#E3E9DE] border border-[#A8B9A2]/40 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#153D35]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-[#153D35]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#A8B9A2]/40 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#153D35] text-[#F5F0E7]" : "text-[#153D35]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#1B2926]/85 font-light leading-relaxed border-t border-[#A8B9A2]/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Option */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#65716A] mb-3">
            Have a question that isn&apos;t addressed here?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#153D35] hover:text-[#C9A15A] transition-colors"
          >
            <span>Reach out to our team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
