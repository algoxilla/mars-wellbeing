import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

export default function MemberBookingsPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7]">
      <section className="py-16 sm:py-20 border-b border-[#E2DDD5] bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6E8E7E]">
            Member Care Portal
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#1D3033] mt-1">
            My Appointments & Sessions
          </h1>
          <p className="text-xs text-[#3D5255] mt-1">
            Manage your scheduled consultations, join video rooms, or export to your personal calendar.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#F5F0E7] border-b border-[#E2DDD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-8 bg-[#FAF7F2] border border-[#E2DDD5] text-center space-y-3">
            <Calendar className="w-8 h-8 text-[#6E8E7E] mx-auto" />
            <h3 className="font-display text-2xl font-bold uppercase text-[#1D3033]">
              No Active Appointments
            </h3>
            <p className="text-xs text-[#3D5255] max-w-sm mx-auto">
              You do not have any scheduled consultations at this time. Browse our directory of verified practitioners to schedule a session.
            </p>
            <div className="pt-2">
              <Link
                href="/professionals"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all font-mono"
              >
                <span>Browse Clinical Directory →</span>
              </Link>
            </div>
          </div>

          <DevelopmentNotice
            phase="Phase 3 Milestone"
            featureTitle="Booking Management"
            description="Live booking reservations, session reschedules, Google/Apple calendar .ics exports, and Razorpay payment receipts will be introduced in Phase 3."
          />
        </div>
      </section>
    </div>
  );
}
