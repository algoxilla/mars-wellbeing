import React from "react";
import { AppleHeroSection } from "@/components/home/AppleHeroSection";
import { AppleNovaHikariSection } from "@/components/home/AppleNovaHikariSection";
import { ApplePillarsSection } from "@/components/home/ApplePillarsSection";
import { AppleTrustStorySection } from "@/components/home/AppleTrustStorySection";
import { AppleFinalCtaSection } from "@/components/home/AppleFinalCtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col relative bg-[#FFFFFF] text-[#1D1D1F] min-h-screen">
      {/* 1. Hero: "Make space for yourself." — Apple White Product Stage, Confident Typography & Dual CTAs */}
      <AppleHeroSection />

      {/* 2. Nova Hikari: "A new light." — Apple Black Obsidian Showcase, 10 Stages & Somatic Pacer */}
      <AppleNovaHikariSection />

      {/* 3. Community: "Meaningful connection." — Apple Light Grey Showcase with Bengaluru Cohorts */}
      <ApplePillarsSection />

      {/* 4. Trust & Clinical Governance: 2-Column Bento Promotional Grid (Highland Care, Medical Doctors, Bharat Mandapam, Quiet Journal) */}
      <AppleTrustStorySection />

      {/* 5. Final CTA & Early Access: "Be among the first to experience MARS." — Apple Enrollment Card */}
      <AppleFinalCtaSection />
    </div>
  );
}
