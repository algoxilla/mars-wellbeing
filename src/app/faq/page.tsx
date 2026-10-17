"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FAQ_DATA, FAQItem } from "@/content/faq-data";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { ChevronDown, ChevronUp, Search, HelpCircle, ArrowRight } from "lucide-react";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    "All",
    "General",
    "Nova Hikari",
    "Community Circles",
    "Professional Directory",
    "Safety & Privacy",
  ];

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-20 sm:py-28 border-b border-[#E2DDD5] bg-[#FAF7F2] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#6E8E7E] block mb-3">
            Knowledge Base & Clarifications
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-[#1D3033] leading-none">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#3D5255] max-w-xl mx-auto leading-relaxed">
            Honest answers regarding our philosophy, clinical boundaries, data privacy, and the rollout of spaces in Bengaluru.
          </p>

          {/* Search Input */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#6E8E7E] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, question, or keyword..."
              className="w-full pl-10 pr-4 py-3 bg-[#F5F0E7] border border-[#E2DDD5] text-sm text-[#1D3033] placeholder-[#3D5255]/60 focus:outline-none focus:border-[#6E8E7E]"
            />
          </div>
        </div>
      </section>

      {/* 2. Category Tabs & Accordion */}
      <section className="py-20 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? "bg-[#1D3033] text-[#F5F0E7] border-[#1D3033]"
                    : "bg-[#FAF7F2] text-[#3D5255] border-[#E2DDD5] hover:border-[#6E8E7E]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="bg-[#FAF7F2] border border-[#E2DDD5] transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#6E8E7E] block mb-1">
                          {faq.category}
                        </span>
                        <span className="font-display text-lg sm:text-xl font-bold uppercase text-[#1D3033]">
                          {faq.question}
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#F5F0E7] border border-[#E2DDD5] flex items-center justify-center shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#1D3033]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#6E8E7E]" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#3D5255] leading-relaxed border-t border-[#E2DDD5]/60 animate-in fade-in duration-200">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] text-center text-xs text-[#3D5255]">
                No matching questions found for “{searchQuery}”. Try another keyword or browse all categories.
              </div>
            )}
          </div>

          <div className="mt-14 p-8 bg-[#FAF7F2] border border-[#E2DDD5] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-display text-xl font-bold uppercase text-[#1D3033]">
                Still Have a Question?
              </h3>
              <p className="text-xs text-[#3D5255] mt-1">
                Reach out to our team directly. We are happy to clarify any aspect of our roadmap.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all shrink-0"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8FA89B]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
