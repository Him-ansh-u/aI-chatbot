import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const role = request.cookies.get('role')?.value;

  if (request.nextUrl.pathname.startsWith('/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/chat/:path*'],
};
