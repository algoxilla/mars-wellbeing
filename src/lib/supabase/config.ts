/**
 * Helper to verify whether valid Supabase credentials have been configured in environment variables.
 * Prevents build-time and runtime crashes when environment variables are not yet populated.
 */
export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) return false;
  if (url.includes("your-project.supabase.co") || anonKey === "your-anon-key") return false;
  if (!url.startsWith("http://") && !url.startsWith("https://")) return false;

  return true;
}

export function isSupabaseAdminConfigured(): boolean {
  if (!isSupabaseConfigured()) return false;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey || serviceKey === "your-service-role-key") return false;
  return true;
}

export const SUPABASE_REQUIRED_ENV_VARS = [
  {
    name: "NEXT_PUBLIC_SUPABASE_URL",
    purpose: "Public Supabase Project API URL (e.g. https://xyzcompany.supabase.co)",
    requiredFor: "Authentication & client database requests",
  },
  {
    name: "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    purpose: "Public anonymous API key safe for browser client requests",
    requiredFor: "User sign-up, sign-in, session refresh, public forms",
  },
  {
    name: "SUPABASE_SERVICE_ROLE_KEY",
    purpose: "Private server-side service role key (Never expose to client)",
    requiredFor: "Administrative user deletion, privileged database operations",
  },
  {
    name: "NEXT_PUBLIC_APP_URL",
    purpose: "Base application URL (e.g. http://localhost:3000 or https://marswellbeing.in)",
    requiredFor: "Auth redirect callbacks, email confirmation links, password reset",
  },
] as const;
