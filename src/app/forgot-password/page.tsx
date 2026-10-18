"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { Mail, ArrowRight, ArrowLeft, KeyRound, AlertCircle, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { forgotPasswordAction } from "@/app/auth/actions";
import { AuthStatusBanner } from "@/components/auth/AuthStatusBanner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    const formData = new FormData();
    formData.append("email", email);

    startTransition(async () => {
      const res = await forgotPasswordAction(formData);
      if (!res.success) {
        setErrorMessage(res.error || "Unable to send reset instructions.");
      } else {
        setSuccessMessage(
          res.message ||
            `Instructions have been sent to ${email}. Please check your inbox to reset your password.`
        );
      }
    });
  };

  return (
    <div className="flex flex-col bg-[#F5F5F7] min-h-[85vh] items-center justify-center py-12 px-4 sm:px-6">
      <div className="w-full max-w-md bg-[#FFFFFF] p-8 sm:p-10 rounded-[24px] sm:rounded-[28px] border border-[#D2D2D7]/70 shadow-sm space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1D1D1F] bg-[#F5F5F7] border border-[#D2D2D7] rounded-full">
            <KeyRound className="w-3.5 h-3.5 text-[#D96C68]" />
            <span>Account Recovery</span>
          </div>
          <h1 className="font-sans text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
            Reset Password
          </h1>
          <p className="text-xs text-[#6E6E73] leading-relaxed">
            Enter your registered email address and we will dispatch a secure link to reset your password.
          </p>
        </div>

        <AuthStatusBanner />

        {successMessage ? (
          <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#D2D2D7] text-center space-y-4">
            <div className="w-12 h-12 bg-[#1D1D1F] text-[#FFFFFF] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
              Reset Link Sent
            </h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              {successMessage}
            </p>
            <div className="pt-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#1D1D1F] hover:bg-[#2D2D2F] rounded-full transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Sign In</span>
              </Link>
            </div>
          </div>
        ) : (
          <>
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-[#FFF2F2] border border-[#F5C2B8] text-xs text-[#9B2C1C] flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#D96C68]" />
                <div className="space-y-1">
                  <p className="font-semibold">Recovery notice</p>
                  <p className="leading-relaxed">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                  Registered Email Address
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

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all disabled:opacity-60 cursor-pointer shadow-xs"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Instructions...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Recovery Link</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}

        <div className="pt-4 border-t border-[#D2D2D7]/60 text-center space-y-2 text-xs text-[#6E6E73]">
          <p>
            Remembered your password?{" "}
            <Link href="/login" className="font-semibold text-[#1D1D1F] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
