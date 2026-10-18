"use server";

import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { revalidatePath } from "next/cache";

export type EarlyAccessResult = {
  success: boolean;
  error?: string;
  message?: string;
  isSimulated?: boolean;
};

export async function submitEarlyAccess(data: {
  fullName: string;
  email: string;
  city?: string;
  interests?: string[];
}): Promise<EarlyAccessResult> {
  const fullName = data.fullName.trim();
  const email = data.email.trim().toLowerCase();
  const city = data.city?.trim() || "Bengaluru";
  const interests = data.interests || [];

  if (!fullName) {
    return { success: false, error: "Please enter your name." };
  }

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // If Supabase is not yet configured, return informative response
  if (!isSupabaseConfigured()) {
    return {
      success: true,
      isSimulated: true,
      message:
        "Submission received in local preview. Supabase database environment variables are not yet configured in .env.local.",
    };
  }

  const supabase = await createClient();
  if (!supabase) {
    return {
      success: false,
      error: "Database connection could not be initialized.",
    };
  }

  const { error } = await supabase.from("early_access_leads").insert({
    full_name: fullName,
    email,
    city,
    interests,
    status: "pending",
  });

  if (error) {
    return {
      success: false,
      error: `Could not save enquiry: ${error.message}`,
    };
  }

  revalidatePath("/admin");

  return {
    success: true,
    message: "Thank you for joining MARS Early Access. Your details have been recorded.",
  };
}
