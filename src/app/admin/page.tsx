import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { connection } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { verifyAdminCaller, getAdminDashboardData } from "@/app/admin/actions";
import { AdminDashboardClient } from "@/components/admin/AdminDashboardClient";
import { signOutAction } from "@/app/auth/actions";
import {
  ShieldAlert,
  ShieldCheck,
  Lock,
  ArrowLeft,
  LogOut,
  AlertTriangle,
  KeyRound,
  ExternalLink,
} from "lucide-react";
import { AuthStatusBanner } from "@/components/auth/AuthStatusBanner";

export const instant = false;

export default async function AdminPage() {
  await connection();
  const configured = isSupabaseConfigured();

  // If Supabase credentials are not configured yet, show preview & setup instructions
  if (!configured) {
    const mockStats = {
      totalUsers: 0,
      adminUsers: 0,
      regularUsers: 0,
      totalLeads: 0,
      recentSignups7d: 0,
      recentSignups30d: 0,
    };

    return (
      <div className="flex flex-col bg-[#F5F0E7] min-h-[85vh]">
        <section className="py-12 sm:py-16 border-b border-[#A8B9A2]/30 bg-[#FAF7F2]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#153D35] text-[#F5F0E7] rounded-full inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A15A]" />
                  <span>Administrative Console (Setup Required)</span>
                </span>
                <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#153D35] mt-2">
                  MARS Governance & User Management
                </h1>
                <p className="text-xs text-[#65716A] mt-1">
                  Access-controlled internal area for member accounts, early-access waitlist, and system security.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#F5F0E7]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <AuthStatusBanner />

            <div className="bg-[#FAF7F2] border border-[#A8B9A2]/40 rounded-3xl p-6 sm:p-8 space-y-4">
              <h2 className="font-display text-xl font-bold uppercase text-[#153D35] flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-[#C9A15A]" />
                <span>Supabase Database Connection Steps</span>
              </h2>
              <p className="text-xs text-[#65716A] leading-relaxed">
                To connect this admin console to your live Supabase project:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-xs text-[#1B2926]">
                <li>
                  Create a Supabase project at{" "}
                  <a
                    href="https://supabase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#153D35] underline font-semibold"
                  >
                    supabase.com
                  </a>
                  .
                </li>
                <li>
                  Open the <strong>SQL Editor</strong> in Supabase and execute the script located in{" "}
                  <code className="font-mono bg-[#E3E9DE] px-1.5 py-0.5 rounded text-[#153D35]">
                    supabase/schema.sql
                  </code>
                  .
                </li>
                <li>
                  Copy your Project URL and Anon API key into{" "}
                  <code className="font-mono bg-[#E3E9DE] px-1.5 py-0.5 rounded text-[#153D35]">
                    .env.local
                  </code>
                  :
                  <pre className="p-3 bg-[#F5F0E7] border border-[#A8B9A2]/40 rounded-xl font-mono text-[11px] text-[#153D35] mt-1">
                    NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co{"\n"}
                    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key{"\n"}
                    SUPABASE_SERVICE_ROLE_KEY=your-service-role-key{"\n"}
                    NEXT_PUBLIC_APP_URL=http://localhost:3000
                  </pre>
                </li>
                <li>
                  Sign up via{" "}
                  <Link href="/signup" className="text-[#153D35] underline font-semibold">
                    /signup
                  </Link>
                  , then execute{" "}
                  <code className="font-mono bg-[#E3E9DE] px-1.5 py-0.5 rounded text-[#153D35]">
                    UPDATE profiles SET role = &apos;admin&apos; WHERE email = &apos;your-email&apos;;
                  </code>{" "}
                  to grant your account administrative clearance.
                </li>
              </ol>
            </div>

            <AdminDashboardClient
              initialStats={mockStats}
              initialUsers={[]}
              initialLeads={[]}
              currentAdminEmail="setup-pending@marswellbeing.in"
            />
          </div>
        </section>
      </div>
    );
  }

  // Live Supabase Environment
  const adminCheck = await verifyAdminCaller();

  // If not authenticated, redirect to login
  if (!adminCheck.authorized && adminCheck.reason === "Unauthenticated session.") {
    redirect("/login?redirectTo=/admin");
  }

  // If authenticated but does not have the 'admin' role: 403 Forbidden
  if (!adminCheck.authorized) {
    const callerEmail = adminCheck.profile?.email || "Unknown";
    const callerRole = adminCheck.profile?.role || "user";

    return (
      <div className="flex flex-col bg-[#F5F0E7] min-h-[85vh] items-center justify-center py-16 px-4">
        <div className="w-full max-w-lg bg-[#FAF7F2] p-8 sm:p-10 rounded-3xl border border-[#A8B9A2]/40 shadow-md text-center space-y-6">
          <div className="w-16 h-16 bg-[#FDF2F0] text-[#9B2C1C] rounded-full mx-auto flex items-center justify-center">
            <ShieldAlert className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#9B2C1C] bg-[#FDF2F0] px-3 py-1 rounded-full">
              403 • Authorization Denied
            </span>
            <h1 className="font-display text-3xl font-bold uppercase text-[#153D35]">
              Administrator Clearance Required
            </h1>
            <p className="text-xs text-[#65716A] leading-relaxed">
              Your account <strong className="text-[#1B2926] font-mono">{callerEmail}</strong> is authenticated with role <strong className="text-[#1B2926] font-mono">&apos;{callerRole}&apos;</strong>, but access to this console requires the <strong className="text-[#153D35] font-mono">&apos;admin&apos;</strong> role.
            </p>
          </div>

          {/* Promotion instructions */}
          <div className="p-4 rounded-2xl bg-[#F5F0E7] border border-[#A8B9A2]/40 text-left text-xs space-y-2">
            <span className="font-semibold text-[#153D35] uppercase tracking-wider text-[11px] block">
              How to assign Administrator role:
            </span>
            <p className="text-[#65716A]">
              Run the following query in your Supabase SQL Editor:
            </p>
            <pre className="p-2.5 bg-[#FAF7F2] rounded-xl font-mono text-[11px] text-[#153D35] border border-[#A8B9A2]/30 overflow-x-auto">
              UPDATE public.profiles{"\n"}
              SET role = &apos;admin&apos;{"\n"}
              WHERE email = &apos;{callerEmail}&apos;;
            </pre>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/dashboard"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#153D35] text-[#FFFFFF] rounded-full hover:bg-[#1B2926] transition-all"
            >
              Back to Member Sanctuary
            </Link>
            <form action={signOutAction}>
              <button
                type="submit"
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#FAF7F2] text-[#65716A] hover:text-[#153D35] border border-[#A8B9A2]/40 rounded-full transition-all cursor-pointer"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Fetch verified admin data
  const data = await getAdminDashboardData();

  return (
    <div className="flex flex-col bg-[#F5F0E7] min-h-[85vh]">
      {/* Admin Header */}
      <section className="py-12 sm:py-16 border-b border-[#A8B9A2]/30 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#153D35] text-[#F5F0E7] rounded-full inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A15A]" />
                <span>Verified Administrator Clearance</span>
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#153D35] tracking-tight">
                MARS User Management & Operations
              </h1>
              <p className="text-xs text-[#65716A]">
                Logged in as <strong className="text-[#153D35] font-mono">{adminCheck.profile?.email}</strong>.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#FAF7F2] text-[#153D35] border border-[#A8B9A2]/60 hover:bg-[#E3E9DE] rounded-full transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Member Sanctuary</span>
              </Link>
              <form action={signOutAction}>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#FAF7F2] text-[#65716A] border border-[#A8B9A2]/60 hover:bg-[#E3E9DE] hover:text-[#153D35] rounded-full transition-all cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Admin Section */}
      <section className="py-12 bg-[#F5F0E7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdminDashboardClient
            initialStats={
              data.stats || {
                totalUsers: 0,
                adminUsers: 0,
                regularUsers: 0,
                totalLeads: 0,
                recentSignups7d: 0,
                recentSignups30d: 0,
              }
            }
            initialUsers={data.users || []}
            initialLeads={data.leads || []}
            currentAdminEmail={adminCheck.profile?.email || ""}
          />
        </div>
      </section>
    </div>
  );
}
