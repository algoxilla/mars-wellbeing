import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { isSupabaseAdminConfigured } from "./config";

/**
 * Creates a privileged service-role Supabase client.
 * STRICTLY SERVER-SIDE ONLY. Never export to client components.
 */
export function createAdminClient() {
  if (!isSupabaseAdminConfigured()) {
    return null;
  }

  return createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
