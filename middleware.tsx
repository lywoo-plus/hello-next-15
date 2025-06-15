import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Redirect
  if(request.nextUrl.pathname === '/profile') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Rewrite - to handle legacy URLs or improving SEO
  if(request.nextUrl.pathname === '/about-us') {
    return NextResponse.rewrite(new URL('/about', request.url));
  }

  // Set and get cookies
  const response = NextResponse.next();

  const themePreference = request.cookies.get('theme')?.value || 'light';
  response.cookies.set('theme', themePreference);

  // Set and get headers
  response.headers.set('X-Theme-Preference', themePreference);
  // console.log(response.headers.get('X-Theme-Preference'));

  return response;
}