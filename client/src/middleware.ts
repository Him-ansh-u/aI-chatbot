import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🔑 Token-based auth check
  const token = request.cookies.get('token')?.value;

  // Protect /chat routes
  if (pathname.startsWith('/chat') && !token) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // Prevent logged-in users from accessing /auth again
  if (pathname.startsWith('/auth') && token) {
    return NextResponse.redirect(new URL('/chat', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/chat/:path*', '/auth'],
};
