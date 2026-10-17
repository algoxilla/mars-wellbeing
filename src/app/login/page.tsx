import React from "react";
import Link from "next/link";
import { DevelopmentNotice } from "@/components/ui/DevelopmentNotice";
import { Mail, ArrowRight, Lock, Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex flex-col bg-[#F5F0E7] min-h-[75vh] items-center justify-center py-16 px-4">
      <div className="w-full max-w-md bg-[#FAF7F2] p-8 sm:p-10 border border-[#E2DDD5] space-y-6 text-center">
        <div className="space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6E8E7E]">
            Member Access
          </span>
          <h1 className="font-display text-3xl font-bold uppercase text-[#1D3033]">
            Sign In to Your Space
          </h1>
          <p className="text-xs text-[#3D5255] leading-relaxed">
            Enter your email to receive a passwordless magic sign-in link.
          </p>
        </div>

        <form className="space-y-4 text-left">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#1D3033]">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#6E8E7E] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="email"
                disabled
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 bg-[#F5F0E7] border border-[#E2DDD5] text-sm text-[#3D5255] cursor-not-allowed opacity-75"
              />
            </div>
          </div>

          <button
            type="button"
            disabled
            className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider bg-[#E2DDD5] text-[#3D5255]/70 cursor-not-allowed font-mono"
          >
            Send Magic Link (Phase 2)
          </button>
        </form>

        <div className="pt-2">
          <DevelopmentNotice
            phase="Phase 2 Milestone"
            featureTitle="Authentication Scaffold"
            description="Live member accounts, passwordless OTP, and saved Nova Hikari progress will be enabled in Phase 2. To get notified when access opens, join our Early Access list."
          />
        </div>

        <div className="pt-4 border-t border-[#E2DDD5] text-xs text-[#3D5255]">
          <span>Don’t have an account yet? </span>
          <Link href="/early-access" className="text-[#1D3033] font-semibold underline">
            Join Early Access
          </Link>
        </div>
      </div>
    </div>
  );
}
