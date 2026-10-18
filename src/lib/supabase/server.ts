import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { isSupabaseConfigured } from "./config";

/**
 * Creates a Supabase client for Server Components, Server Actions, and Route Handlers.
 * In Next.js 16+, cookies() is an asynchronous function returning a Promise.
 */
export async function createClient() {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // The `setAll` method was called from a Server Component.
            // This is expected and safe when middleware is actively refreshing user sessions.
          }
        },
      },
    }
  );
}
