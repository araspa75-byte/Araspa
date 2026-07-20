import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect routes
  if (pathname.startsWith('/admin') || pathname.startsWith('/appointments-view')) {
    
    // Allow access to the login page itself to prevent infinite redirects if under admin
    if (pathname === '/admin/login') {
        return NextResponse.next();
    }

    const authCookie = request.cookies.get('auth_token');

    if (authCookie?.value === 'authenticated') {
      return NextResponse.next();
    }
    
    // Redirect to custom login page
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

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
