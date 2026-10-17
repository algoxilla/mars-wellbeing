import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { Mail, ArrowRight, User, Sparkles } from "lucide-react";

export default function SignupPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7] min-h-[75vh] items-center justify-center py-16 px-4">
      <div className="w-full max-w-md bg-[#FAF7F2] p-8 sm:p-10 border border-[#E2DDD5] space-y-6 text-center">
        <div className="space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6E8E7E]">
            Bengaluru Initial Cohort
          </span>
          <h1 className="font-display text-3xl font-bold uppercase text-[#1D3033]">
            Create Your Member Space
          </h1>
          <p className="text-xs text-[#3D5255] leading-relaxed">
            Direct account creation will open with our Phase 2 release. Please register for Early Access to secure your cohort invitation.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/early-access"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold uppercase tracking-wider bg-[#1D3033] text-[#F5F0E7] hover:bg-[#284145] transition-all font-mono"
          >
            <span>Go to Early Access Registration →</span>
          </Link>
        </div>

        <DevelopmentNotice
          phase="Phase 2 Milestone"
          featureTitle="Member Onboarding"
          description="Direct sign-ups will be activated in Phase 2 alongside Supabase authentication and encrypted cloud progress backups."
        />

        <div className="pt-4 border-t border-[#E2DDD5] text-xs text-[#3D5255]">
          <span>Already registered for updates? </span>
          <Link href="/login" className="text-[#1D3033] font-semibold underline">
            Sign In Preview
          </Link>
        </div>
      </div>
    </div>
  );
}
