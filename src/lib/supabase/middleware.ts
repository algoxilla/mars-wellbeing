import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { isSupabaseConfigured } from "./config";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  // If Supabase credentials are not configured, allow request through
  if (!isSupabaseConfigured()) {
    return supabaseResponse;
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // IMPORTANT: Do NOT remove supabase.auth.getUser()
  // This verifies the user token server-side and refreshes expired sessions
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Protected User Routes (Member Sanctuary)
  const isProtectedUserRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/settings");

  // Protected Admin Routes
  const isProtectedAdminRoute = pathname.startsWith("/admin");

  // Auth pages (login, signup)
  const isAuthRoute =
    pathname === "/login" ||
    pathname === "/signup";

  if (!user && (isProtectedUserRoute || isProtectedAdminRoute)) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(url);
  }

  // If user is logged in and visits login/signup, redirect to dashboard
  if (user && isAuthRoute) {
    const redirectTo = request.nextUrl.searchParams.get("redirectTo") || "/dashboard";
    const url = request.nextUrl.clone();
    url.pathname = redirectTo;
    url.search = "";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
