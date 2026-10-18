import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { Profile } from "@/lib/supabase/types";
import { signOutAction } from "@/app/auth/actions";
import { DeleteAccountButton } from "@/components/auth/DeleteAccountButton";
import {
  ArrowRight,
  LogOut,
  ShieldCheck,
  User,
  Calendar,
  Clock,
  Compass,
  HeartHandshake,
} from "lucide-react";
import { AuthStatusBanner } from "@/components/auth/AuthStatusBanner";

export const instant = false;

export default async function MemberDashboardPage() {
  await connection();
  const configured = isSupabaseConfigured();

  let user = null;
  let profile: Profile | null = null;

  if (configured) {
    const supabase = await createClient();
    if (supabase) {
      const {
        data: { user: authUser },
      } = await supabase.auth.getUser();

      if (!authUser) {
        redirect("/login?redirectTo=/dashboard");
      }

      user = authUser;

      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();

      profile = profileData as Profile;
    }
  }

  // Fallback demo state if unconfigured
  const displayName = profile?.full_name || user?.user_metadata?.full_name || "Sanctuary Member";
  const userEmail = profile?.email || user?.email || "demo@marswellbeing.in";
  const userRole = profile?.role || "user";
  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "October 2026";
  const lastLogin = profile?.last_sign_in_at
    ? new Date(profile.last_sign_in_at).toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "Just now";

  return (
    <div className="flex flex-col bg-[#FFFFFF] text-[#1D1D1F] min-h-[85vh]">
      {/* 1. Apple Header Hero */}
      <section className="py-12 sm:py-16 border-b border-[#D2D2D7]/60 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-[#FFFFFF] text-[#1D1D1F] border border-[#D2D2D7] rounded-full">
                  Member Sanctuary
                </span>
                {userRole === "admin" && (
                  <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#1D1D1F] text-[#FFFFFF] rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#D96C68]" />
                    Admin Access
                  </span>
                )}
              </div>
              <h1 className="font-sans text-3xl sm:text-4xl font-semibold text-[#1D1D1F] tracking-tight">
                Welcome, {displayName}.
              </h1>
              <p className="text-sm text-[#6E6E73]">
                Your personal sanctuary for contemplative practice, somatic resets, and community connections.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5">
              {userRole === "admin" && (
                <Link
                  href="/admin"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#FFFFFF] bg-[#1D1D1F] hover:bg-[#2D2D2F] rounded-full transition-all shadow-xs"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D96C68]" />
                  <span>Admin Console</span>
                </Link>
              )}
              <form action={signOutAction}>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#1D1D1F] bg-[#FFFFFF] border border-[#D2D2D7] hover:bg-[#F5F5F7] rounded-full transition-all cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Member Sanctuary Overview */}
      <section className="py-12 sm:py-16 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
          <AuthStatusBanner />

          {/* Profile Details Card */}
          <div className="bg-[#F5F5F7] border border-[#D2D2D7]/70 rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 shadow-xs">
            <h2 className="font-sans text-xl font-semibold text-[#1D1D1F] mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-[#D96C68]" />
              <span>Member Profile & Account</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D2D2D7]/60 space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6E6E73]">
                  Email Address
                </span>
                <p className="font-medium text-[#1D1D1F] break-all">{userEmail}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D2D2D7]/60 space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6E6E73]">
                  Account Status
                </span>
                <p className="font-medium text-[#1D1D1F] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D96C68]" />
                  <span>Active Member</span>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D2D2D7]/60 space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6E6E73] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Member Since</span>
                </span>
                <p className="font-medium text-[#1D1D1F]">{memberSince}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#D2D2D7]/60 space-y-1">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#6E6E73] flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Last Active Session</span>
                </span>
                <p className="font-medium text-[#1D1D1F]">{lastLogin}</p>
              </div>
            </div>
          </div>

          {/* Core Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Nova Hikari */}
            <div className="p-6 bg-[#F5F5F7] border border-[#D2D2D7]/70 rounded-[20px] space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#D2D2D7]/60 pb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F]">
                    Nova Hikari
                  </span>
                  <span className="text-[11px] font-mono text-[#D96C68] font-semibold">10 Stages</span>
                </div>
                <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
                  Self-Guided Practice
                </h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  Immerse in Indo-Japanese sensory pacing, soundscapes, and calming breath cycles.
                </p>
              </div>
              <Link
                href="/guided-experience"
                className="inline-flex items-center justify-between w-full pt-3 text-xs font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors group"
              >
                <span>Launch Practice</span>
                <ArrowRight className="w-4 h-4 text-[#D96C68] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2: Community Circles */}
            <div className="p-6 bg-[#F5F5F7] border border-[#D2D2D7]/70 rounded-[20px] space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#D2D2D7]/60 pb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F]">
                    Community
                  </span>
                  <span className="text-[11px] font-mono text-[#6E6E73]">Bengaluru</span>
                </div>
                <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
                  Small-Cohort Circles
                </h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  Gather in unhurried, facilitator-guided spaces for authentic conversation and mutual reassurance.
                </p>
              </div>
              <Link
                href="/community"
                className="inline-flex items-center justify-between w-full pt-3 text-xs font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors group"
              >
                <span>Explore Circles</span>
                <ArrowRight className="w-4 h-4 text-[#D96C68] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 3: Directory */}
            <div className="p-6 bg-[#F5F5F7] border border-[#D2D2D7]/70 rounded-[20px] space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#D2D2D7]/60 pb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F]">
                    Care Network
                  </span>
                  <span className="text-[11px] font-mono text-[#6E6E73]">Verified</span>
                </div>
                <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
                  Clinical Care
                </h3>
                <p className="text-xs text-[#6E6E73] leading-relaxed">
                  Consult vetted psychologists, psychiatrists, and specialized hospital continuity in Bengaluru.
                </p>
              </div>
              <Link
                href="/professionals"
                className="inline-flex items-center justify-between w-full pt-3 text-xs font-semibold text-[#1D1D1F] hover:text-[#D96C68] transition-colors group"
              >
                <span>Directory</span>
                <ArrowRight className="w-4 h-4 text-[#D96C68] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Privacy & Account Self-Service Control */}
          <div className="p-6 bg-[#F5F5F7] border border-[#D2D2D7]/70 rounded-[20px] space-y-3">
            <h3 className="font-sans text-lg font-semibold text-[#1D1D1F]">
              Data Privacy & Account Control
            </h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed max-w-2xl">
              MARS collects only the minimum information necessary to authenticate your sessions. You retain complete ownership of your identity and may delete your account and associated database records at any time.
            </p>
            <div className="pt-2">
              <DeleteAccountButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
