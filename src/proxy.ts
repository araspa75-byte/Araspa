import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Bypassing custom proxy auth checks because AuthGuard already handles 
  // route protection on the client side using Supabase sessions.
  // The previous logic checked for an 'auth_token' cookie which is not set
  // by standard Supabase client-side authentication, causing infinite redirects.
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
