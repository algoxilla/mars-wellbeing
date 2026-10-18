"use client";

import React, { useState, useTransition, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";
import { signInAction } from "@/app/auth/actions";
import { AuthStatusBanner } from "@/components/auth/AuthStatusBanner";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "";
  const initialError = searchParams.get("error");
  const notice = searchParams.get("notice");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(
    initialError === "unauthorized"
      ? "You must sign in with an authorized account to access that page."
      : initialError === "auth_callback_failed"
      ? "Authentication link expired or invalid. Please try signing in again."
      : null
  );
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    if (redirectTo) {
      formData.append("redirectTo", redirectTo);
    }

    startTransition(async () => {
      const res = await signInAction(formData);
      if (!res.success) {
        setErrorMessage(res.error || "Failed to sign in. Please check your credentials.");
      } else if (res.redirectTo) {
        router.push(res.redirectTo);
        router.refresh();
      }
    });
  };

  return (
    <div className="flex flex-col bg-[#F5F5F7] min-h-[85vh] items-center justify-center py-12 px-4 sm:px-6">
      <div className="w-full max-w-md bg-[#FFFFFF] p-8 sm:p-10 rounded-[24px] sm:rounded-[28px] border border-[#D2D2D7]/70 shadow-sm space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1D1D1F] bg-[#F5F5F7] border border-[#D2D2D7] rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D96C68]" />
            <span>Secure Access</span>
          </div>
          <h1 className="font-sans text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
            Sign In to MARS
          </h1>
          <p className="text-xs text-[#6E6E73] leading-relaxed">
            Enter your credentials to access your member space and personal sanctuary.
          </p>
        </div>

        {/* Configuration Notice */}
        <AuthStatusBanner />

        {notice === "account_deleted" && (
          <div className="p-3.5 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-xs text-[#1D1D1F]">
            Your account and personal data have been completely deleted as requested.
          </div>
        )}

        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-[#FFF2F2] border border-[#F5C2B8] text-xs text-[#9B2C1C] flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#D96C68]" />
            <div className="space-y-1">
              <p className="font-semibold">Sign in error</p>
              <p className="leading-relaxed">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#86868B] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs text-[#D96C68] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#86868B] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3.5 text-[#86868B] hover:text-[#1D1D1F] transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isPending}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all disabled:opacity-60 cursor-pointer shadow-xs"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Footer Links */}
        <div className="pt-4 border-t border-[#D2D2D7]/60 text-center space-y-2 text-xs text-[#6E6E73]">
          <p>
            Don&apos;t have an account yet?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#1D1D1F] hover:underline"
            >
              Create Account
            </Link>
          </p>
          <p>
            <Link href="/" className="hover:text-[#1D1D1F] transition-colors">
              ← Return to MARS Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-[85vh] bg-[#F5F5F7]" />}>
      <LoginForm />
    </Suspense>
  );
}
