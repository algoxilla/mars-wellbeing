"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { updatePasswordAction } from "@/app/auth/actions";
import { AuthStatusBanner } from "@/components/auth/AuthStatusBanner";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    const formData = new FormData();
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);

    startTransition(async () => {
      const res = await updatePasswordAction(formData);
      if (!res.success) {
        setErrorMessage(res.error || "Unable to update password. Reset token may have expired.");
      } else {
        setSuccess(true);
        setTimeout(() => {
          router.push("/dashboard");
          router.refresh();
        }, 2000);
      }
    });
  };

  return (
    <div className="flex flex-col bg-[#F5F5F7] min-h-[85vh] items-center justify-center py-12 px-4 sm:px-6">
      <div className="w-full max-w-md bg-[#FFFFFF] p-8 sm:p-10 rounded-[24px] sm:rounded-[28px] border border-[#D2D2D7]/70 shadow-sm space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#1D1D1F] bg-[#F5F5F7] border border-[#D2D2D7] rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D96C68]" />
            <span>Secure Password Reset</span>
          </div>
          <h1 className="font-sans text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
            Create New Password
          </h1>
          <p className="text-xs text-[#6E6E73] leading-relaxed">
            Please enter a strong new password for your MARS Sanctuary account.
          </p>
        </div>

        <AuthStatusBanner />

        {success ? (
          <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#D2D2D7] text-center space-y-4">
            <div className="w-12 h-12 bg-[#1D1D1F] text-[#FFFFFF] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
              Password Updated
            </h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              Your password has been changed successfully. Redirecting you to your sanctuary space...
            </p>
          </div>
        ) : (
          <>
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-[#FFF2F2] border border-[#F5C2B8] text-xs text-[#9B2C1C] flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#D96C68]" />
                <div className="space-y-1">
                  <p className="font-semibold">Update notice</p>
                  <p className="leading-relaxed">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                  New Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#86868B] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
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

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                  Confirm New Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#86868B] absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
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
                      <span>Updating Password...</span>
                    </>
                  ) : (
                    <>
                      <span>Save New Password</span>
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
            <Link href="/login" className="font-semibold text-[#1D1D1F] hover:underline">
              ← Return to Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
