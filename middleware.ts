import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'de']
const defaultLocale = 'de'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Check if the pathname starts with a valid locale
  const pathnameHasValidLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasValidLocale) return

  // For root path, serve German content directly
  if (pathname === '/') {
    // Rewrite the URL to serve German content without changing the URL
    request.nextUrl.pathname = '/de'
    return NextResponse.rewrite(request.nextUrl)
  }

  // For paths that start with an invalid locale (like /dejb), let Next.js handle 404
  const firstSegment = pathname.split('/')[1]
  if (firstSegment && locales.some(locale => firstSegment.startsWith(locale) && firstSegment !== locale)) {
    // This is an invalid locale path like /dejb, let Next.js show 404
    return NextResponse.next()
  }

  // For other paths without locale, redirect to German version
  const locale = defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
} 