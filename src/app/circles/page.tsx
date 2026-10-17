import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { Users, Calendar, MapPin, ArrowRight } from "lucide-react";

export default function MemberCirclesPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      <section className="py-16 sm:py-20 border-b border-[#E2DDD5] bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
            Member Community
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#1D3033] mt-1">
            My Community Circles
          </h1>
          <p className="text-xs text-[#3D5255] mt-1">
            View your upcoming small-group cohorts, access circle locations in Bengaluru, and view facilitator notes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] text-center space-y-3">
            <Users className="w-8 h-8 text-[#6E8E7E] mx-auto" />
            <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
              No Active Circle Enrollments
            </h3>
            <p className="text-xs text-[#3D5255] max-w-sm mx-auto">
              You are not currently enrolled in an active circle cohort. Review our open circles in Bengaluru to participate.
            </p>
            <div className="pt-2">
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all font-mono"
              >
                <span>Discover Open Circles →</span>
              </Link>
            </div>
          </div>

          <DevelopmentNotice
            phase="Phase 4 Milestone"
            featureTitle="Community Circles Portal"
            description="Circle cohort enrollment, RSVP confirmations, facilitator group messaging, and attendance management will be launched in Phase 4."
          />
        </div>
      </section>
    </div>
  );
}
