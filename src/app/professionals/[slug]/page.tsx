import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Languages,
  DollarSign,
  AlertCircle,
} from "lucide-react";

export function generateStaticParams() {
  return [
    { slug: "sample-profile-sharma" },
    { slug: "sample-profile-varma" },
    { slug: "sample-profile-nair" },
    { slug: "sample-profile-kulkarni" },
    { slug: "sample-profile-banerjee" },
    { slug: "sample-profile-reddy" },
  ];
}

export default async function ProfessionalProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      {/* 1. Header Hero */}
      <section className="py-16 sm:py-24 border-b border-[#E2DDD5] bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-[#6E8E7E] mb-6">
            <Link href="/professionals" className="hover:text-[#1D3033] underline">
              Directory
            </Link>
            <span>/</span>
            <span className="text-[#3D5255] font-mono">{slug}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="space-y-3">
              <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#EAE3D6] text-[#3D5255] border border-[#DCD5C9]">
                Sample Practitioner Profile — Demo Only
              </span>

              <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight text-[#1D3033]">
                Dr. A. Sharma (Demonstration Placeholder)
              </h1>

              <p className="text-sm text-[#6E8E7E] font-medium">
                Ph.D., M.Phil in Clinical Psychology • RCI Registration Check (Demonstration Data)
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#3D5255] pt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#6E8E7E]" />
                  <span>Indiranagar, Bengaluru & Online</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-[#6E8E7E]" />
                  <span>English, Kannada, Hindi</span>
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-[#1D3033]">
                  <span>₹2,200 (Sample Tariff) / 50 mins</span>
                </span>
              </div>
            </div>

            <div className="p-6 bg-[#F5F0E7] border border-[#E2DDD5] max-w-xs space-y-4 shrink-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1D3033] block">
                Appointment Scheduling
              </span>
              <p className="text-xs text-[#3D5255] leading-relaxed">
                Consultation scheduling and payments are disabled in this preview.
              </p>
              <button
                type="button"
                disabled
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider bg-[#E2DDD5] text-[#3D5255]/60 cursor-not-allowed font-mono"
              >
                Scheduling (Phase 3)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Bio & Clinical Areas */}
      <section className="py-20 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-8 space-y-8">
              <div className="space-y-4">
                <h2 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
                  Practice Philosophy & Approach
                </h2>
                <p className="text-sm text-[#3D5255] leading-relaxed">
                  (Demonstration Profile Text) This sample profile illustrates how clinical background, therapeutic modalities (CBT, Acceptance and Commitment Therapy, Somatic Integration), and supervisory credentials will be presented to individuals seeking qualified care in Bengaluru.
                </p>
                <p className="text-sm text-[#3D5255] leading-relaxed">
                  Therapy sessions are conducted with an unhurried, collaborative attitude, prioritizing physiological regulation, emotional safety, and practical boundary setting.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E2DDD5]">
                <h3 className="font-display text-xl font-bold uppercase text-[#1D3033]">
                  Focus Areas & Clinical Competencies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#3D5255]">
                  <div className="p-3 bg-[#FAF7F2] border border-[#E2DDD5]">
                    • High-Pressure Tech Burnout & Fatigue
                  </div>
                  <div className="p-3 bg-[#FAF7F2] border border-[#E2DDD5]">
                    • Generalized Anxiety & Panic Recovery
                  </div>
                  <div className="p-3 bg-[#FAF7F2] border border-[#E2DDD5]">
                    • Executive Ambiguity & Life Transitions
                  </div>
                  <div className="p-3 bg-[#FAF7F2] border border-[#E2DDD5]">
                    • Relational Grounding & Boundaries
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 space-y-6">
              <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] space-y-3 text-xs text-[#3D5255]">
                <strong className="text-[#1D3033] block text-xs uppercase tracking-wider font-semibold">
                  Verification Standards
                </strong>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6E8E7E] shrink-0" />
                  <span>RCI Registration Verification</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6E8E7E] shrink-0" />
                  <span>Postgraduate Clinical Degree</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6E8E7E] shrink-0" />
                  <span>Supervised Clinical Hours</span>
                </p>
              </div>

              <div className="p-6 bg-[#FAF7F2] border border-[#E2DDD5] text-xs text-[#3D5255] space-y-2">
                <ShieldCheck className="w-4 h-4 text-[#6E8E7E]" />
                <p>
                  <em>Institutional partnership information will be announced following formal confirmation.</em>
                </p>
              </div>
            </div>
          </div>

          <DevelopmentNotice
            phase="Phase 1 Visual Preview"
            featureTitle="Practitioner Profile"
            description="The profile above is a sample placeholder. Real practitioner profiles, availability slots, calendar integrations, and Razorpay payments will be introduced during Phase 3."
          />
        </div>
      </section>
    </div>
  );
}
