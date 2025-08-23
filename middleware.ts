import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './src/i18n/config';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.') // files like favicon.ico, images, etc.
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect if there is no locale in the pathname
  const locale = getLocaleFromRequest(request) || defaultLocale;
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
  
  return NextResponse.redirect(redirectUrl);
}

function getLocaleFromRequest(request: NextRequest): string | undefined {
  const acceptLanguage = request.headers.get('accept-language');
  
  if (acceptLanguage) {
    const lowerLang = acceptLanguage.toLowerCase();
    
    // Check for Swedish
    if (lowerLang.includes('sv') || 
        lowerLang.includes('swedish') || 
        lowerLang.includes('sverige') ||
        lowerLang.startsWith('sv-') ||
        lowerLang.includes('sv,') ||
        lowerLang.includes('sv;')) {
      return 'sv';
    }
  }
  
  if (!acceptLanguage) {
    return defaultLocale;
  }

  // Parse the Accept-Language header to find preferred languages
  const preferredLanguages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [language, quality = '1'] = lang.trim().split(';q=');
      return {
        language: language.toLowerCase().trim(),
        quality: parseFloat(quality),
      };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find the first supported locale
  for (const { language } of preferredLanguages) {
    // Check for exact match (e.g., 'sv')
    if (locales.includes(language as typeof locales[number])) {
      return language;
    }
    
    // Check for language prefix (e.g., 'sv-SE' -> 'sv')
    const languagePrefix = language.split('-')[0].trim();
    
    if (locales.includes(languagePrefix as typeof locales[number])) {
      return languagePrefix;
    }
  }

  return defaultLocale;
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
