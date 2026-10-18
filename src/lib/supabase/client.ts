import { createBrowserClient } from "@supabase/ssr";
import { isSupabaseConfigured } from "./config";

/**
 * Creates or retrieves a Supabase client for browser (Client Components).
 * Automatically stores sessions in browser cookies for Next.js SSR alignment.
 */
export function createClient() {
  if (!isSupabaseConfigured()) {
    return null;
  }

  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
