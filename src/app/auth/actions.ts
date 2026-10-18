"use server";

import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type AuthActionResult = {
  success: boolean;
  error?: string;
  message?: string;
  needsVerification?: boolean;
  redirectTo?: string;
};

/**
 * Register a new member with email, password, and full name.
 */
export async function signUpAction(formData: FormData): Promise<AuthActionResult> {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      error: "Supabase authentication is not configured yet. Please configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.",
    };
  }

  const fullName = String(formData.get("fullName") || "").trim();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  if (!fullName) {
    return { success: false, error: "Please provide your full name." };
  }

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (password.length < 8) {
    return {
      success: false,
      error: "Password must be at least 8 characters long for account security.",
    };
  }

  if (password !== confirmPassword) {
    return { success: false, error: "Passwords do not match." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { success: false, error: "Failed to initialize Supabase client." };
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role: "user",
      },
      emailRedirectTo: `${appUrl}/auth/callback?next=/dashboard`,
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  // If Supabase requires email verification, session is null or identities array length indicates confirmation needed
  const needsVerification = !data.session;

  return {
    success: true,
    needsVerification,
    message: needsVerification
      ? `A verification email has been sent to ${email}. Please check your inbox to confirm your account.`
      : "Your account has been created successfully.",
    redirectTo: needsVerification ? undefined : "/dashboard",
  };
}

/**
 * Sign in an existing member with email and password.
 */
export async function signInAction(formData: FormData): Promise<AuthActionResult> {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      error: "Supabase authentication is not configured yet. Please configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.",
    };
  }

  const email = String(formData.get("email") || "").trim().toLowerCase();
  const password = String(formData.get("password") || "");
  const requestedRedirect = String(formData.get("redirectTo") || "").trim();

  if (!email || !password) {
    return { success: false, error: "Please enter both email and password." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { success: false, error: "Failed to initialize Supabase client." };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    if (error.message.toLowerCase().includes("email not confirmed")) {
      return {
        success: false,
        error: "Your email address has not been confirmed yet. Please verify your email inbox or click resend verification.",
      };
    }
    return { success: false, error: error.message };
  }

  // Check user role from profiles table to decide optimal destination
  let destination = requestedRedirect || "/dashboard";
  if (!requestedRedirect && data.user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .maybeSingle();

    if (profile?.role === "admin") {
      destination = "/admin";
    }
  }

  return {
    success: true,
    redirectTo: destination,
  };
}

/**
 * Sign out current member.
 */
export async function signOutAction(): Promise<void> {
  const supabase = await createClient();
  if (supabase) {
    await supabase.auth.signOut();
  }
  revalidatePath("/", "layout");
  redirect("/login");
}

/**
 * Request password recovery email.
 */
export async function forgotPasswordAction(formData: FormData): Promise<AuthActionResult> {
  if (!isSupabaseConfigured()) {
    return {
      success: false,
      error: "Supabase is not configured yet. Please check .env.local.",
    };
  }

  const email = String(formData.get("email") || "").trim().toLowerCase();
  if (!email || !email.includes("@")) {
    return { success: false, error: "Please provide a valid email address." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { success: false, error: "Database client unavailable." };
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${appUrl}/auth/callback?next=/reset-password`,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return {
    success: true,
    message: `Password reset instructions have been dispatched to ${email}. Check your inbox or spam folder.`,
  };
}

/**
 * Update member password after opening reset link.
 */
export async function updatePasswordAction(formData: FormData): Promise<AuthActionResult> {
  if (!isSupabaseConfigured()) {
    return { success: false, error: "Database client unconfigured." };
  }

  const password = String(formData.get("password") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  if (password.length < 8) {
    return { success: false, error: "New password must be at least 8 characters long." };
  }

  if (password !== confirmPassword) {
    return { success: false, error: "Passwords do not match." };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { success: false, error: "Database client unavailable." };
  }

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    return { success: false, error: error.message };
  }

  return {
    success: true,
    message: "Password updated successfully. You can now access your member space.",
    redirectTo: "/dashboard",
  };
}

/**
 * Delete account and all associated profile data (User Self-Service Privacy).
 */
export async function deleteOwnAccountAction(): Promise<AuthActionResult> {
  const supabase = await createClient();
  if (!supabase) {
    return { success: false, error: "Database connection unavailable." };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "No authenticated session found." };
  }

  // Call the security definer RPC
  const { error } = await supabase.rpc("delete_user_account");

  if (error) {
    return {
      success: false,
      error: `Could not delete account automatically: ${error.message}`,
    };
  }

  await supabase.auth.signOut();
  redirect("/login?notice=account_deleted");
}
