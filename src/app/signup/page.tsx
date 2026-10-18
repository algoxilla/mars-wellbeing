"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { signUpAction } from "@/app/auth/actions";
import { AuthStatusBanner } from "@/components/auth/AuthStatusBanner";

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successInfo, setSuccessInfo] = useState<{
    needsVerification: boolean;
    message: string;
  } | null>(null);

  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!agreed) {
      setErrorMessage("Please accept the terms of service and privacy policy to continue.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please verify your entry.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);

    startTransition(async () => {
      const res = await signUpAction(formData);
      if (!res.success) {
        setErrorMessage(res.error || "Unable to register. Please check details and try again.");
      } else {
        if (res.needsVerification) {
          setSuccessInfo({
            needsVerification: true,
            message:
              res.message ||
              `A verification link has been sent to ${email}. Please check your inbox to confirm your account.`,
          });
        } else if (res.redirectTo) {
          router.push(res.redirectTo);
          router.refresh();
        }
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
            <span>Member Sanctuary</span>
          </div>
          <h1 className="font-sans text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
            Create Your Account
          </h1>
          <p className="text-xs text-[#6E6E73] leading-relaxed">
            Begin your journey with MARS Wellbeing. Your account saves your Nova Hikari progress and cohort applications.
          </p>
        </div>

        {/* Configuration Notice */}
        <AuthStatusBanner />

        {/* Success View */}
        {successInfo ? (
          <div className="p-6 rounded-2xl bg-[#F5F5F7] border border-[#D2D2D7] text-center space-y-4 animate-in fade-in">
            <div className="w-12 h-12 bg-[#1D1D1F] text-[#FFFFFF] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-sans text-xl font-semibold text-[#1D1D1F]">
              Verify Your Email
            </h3>
            <p className="text-xs text-[#6E6E73] leading-relaxed">
              {successInfo.message}
            </p>
            <div className="pt-2">
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] rounded-full transition-colors"
              >
                <span>Proceed to Sign In</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          /* Sign Up Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-[#FFF2F2] border border-[#F5C2B8] text-xs text-[#9B2C1C] flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#D96C68]" />
                <div className="space-y-1">
                  <p className="font-semibold">Registration notice</p>
                  <p className="leading-relaxed">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#86868B] absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F5F5F7] border border-[#D2D2D7] text-sm text-[#1D1D1F] placeholder:text-[#86868B] focus:outline-none focus:ring-2 focus:ring-[#1D1D1F] transition-all"
                />
              </div>
            </div>

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
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                Password (min 8 characters)
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

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                Confirm Password
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

            {/* Terms Checkbox */}
            <div className="pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#6E6E73] leading-relaxed">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 rounded border-[#D2D2D7] text-[#1D1D1F] focus:ring-[#1D1D1F]"
                />
                <span>
                  I agree to the{" "}
                  <Link href="/terms" className="underline text-[#1D1D1F] hover:text-[#D96C68]">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline text-[#1D1D1F] hover:text-[#D96C68]">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold text-[#FFFFFF] bg-[#D96C68] hover:bg-[#C65A57] active:scale-[0.98] rounded-full transition-all disabled:opacity-60 cursor-pointer shadow-xs"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Creating Account...</span>
                  </>
                ) : (
                  <>
                    <span>Create Account</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Footer Link */}
        <div className="pt-4 border-t border-[#D2D2D7]/60 text-center space-y-2 text-xs text-[#6E6E73]">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#1D1D1F] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
