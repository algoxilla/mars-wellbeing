import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/config";

// In-memory IP rate limiter: max 15 submissions per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 15;

function checkRateLimit(ip: string): boolean {
  // Allow local development without strict throttling
  if (ip === "127.0.0.1" || ip === "::1" || ip === "::ffff:127.0.0.1" || ip === "localhost") {
    return true;
  }

  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

// Clean up stale rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 15 * 60 * 1000);

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("cf-connecting-ip") ||
      "anonymous";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many attempts. Please wait a few minutes before trying again.",
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    // Honeypot spam check: if 'website' or 'hp' field is present and filled, drop silently
    if (body.website || body.company_hp) {
      return NextResponse.json({
        success: true,
        message: "Thank you for joining the waitlist.",
      });
    }

    const rawEmail = typeof body.email === "string" ? body.email : "";
    const email = rawEmail.trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Please enter your email address." },
        { status: 400 }
      );
    }

    if (email.length > 254 || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // If Supabase is unconfigured, return simulated success without throwing
    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        success: true,
        isSimulated: true,
        message: "You're on the waitlist! (Preview environment)",
      });
    }

    // Preferred: Use Admin Client to safely check duplicates and write without RLS read issues
    const adminClient = createAdminClient();
    if (adminClient) {
      // 1. Deduplication check
      const { data: existing, error: selectError } = await adminClient
        .from("early_access_leads")
        .select("id")
        .eq("email", email)
        .limit(1);

      if (!selectError && existing && existing.length > 0) {
        return NextResponse.json({
          success: true,
          duplicate: true,
          message:
            "You're already on our waitlist! We'll notify you as soon as early access opens.",
        });
      }

      // 2. Insert new lead
      const { error: insertError } = await adminClient
        .from("early_access_leads")
        .insert({
          full_name: "Waitlist Subscriber",
          email,
          city: "Bengaluru",
          interests: ["Waitlist", "Coming Soon"],
          status: "pending",
          notes: null,
        });

      if (insertError) {
        return NextResponse.json(
          {
            success: false,
            error: "Could not save your registration. Please try again shortly.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Welcome to Mars Wellbeing! You're on the list for early access.",
      });
    }

    // Fallback: Standard client insert
    const supabase = await createClient();
    if (!supabase) {
      return NextResponse.json(
        { success: false, error: "Database connection unavailable." },
        { status: 500 }
      );
    }

    const { error: anonError } = await supabase.from("early_access_leads").insert({
      full_name: "Waitlist Subscriber",
      email,
      city: "Bengaluru",
      interests: ["Waitlist", "Coming Soon"],
      status: "pending",
      notes: null,
    });

    if (anonError) {
      return NextResponse.json(
        {
          success: false,
          error: "Could not register email. Please try again shortly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Welcome to Mars Wellbeing! You're on the list for early access.",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
