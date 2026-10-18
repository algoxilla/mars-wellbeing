import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, audio, brand assets)
     */
    "/((?!_next/static|_next/image|favicon.ico|brand/|team/|audio/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp3|wav|ogg)$).*)",
  ],
};
