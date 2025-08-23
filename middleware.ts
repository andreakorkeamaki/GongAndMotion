import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './src/i18n/config';

export function middleware(request: NextRequest) {
  console.log('=== MIDDLEWARE EXECUTING ===');
  console.log('Request URL:', request.url);
  console.log('Pathname:', request.nextUrl.pathname);
  
  const pathname = request.nextUrl.pathname;
  
  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.includes('.') // files like favicon.ico, images, etc.
  ) {
    console.log('Skipping middleware for static file:', pathname);
    return NextResponse.next();
  }

  // Check if the pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  console.log('Pathname has locale:', pathnameHasLocale);

  if (pathnameHasLocale) {
    console.log('Locale already in path, continuing');
    return NextResponse.next();
  }

  // Redirect if there is no locale in the pathname
  const locale = getLocaleFromRequest(request) || defaultLocale;
  
  console.log('Final selected locale:', locale);
  console.log('Redirecting to:', `/${locale}${pathname}`);
  
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
  console.log('Full redirect URL:', redirectUrl.toString());
  
  return NextResponse.redirect(redirectUrl);
}

function getLocaleFromRequest(request: NextRequest): string | undefined {
  // Get all headers for debugging
  const acceptLanguage = request.headers.get('accept-language');
  const userAgent = request.headers.get('user-agent');
  const url = request.url;
  
  console.log('=== LANGUAGE DETECTION DEBUG ===');
  console.log('URL:', url);
  console.log('User-Agent:', userAgent);
  console.log('Accept-Language header:', acceptLanguage);
  console.log('Supported locales:', locales);
  console.log('Default locale:', defaultLocale);
  
  // Temporary fix: Check if request comes from Swedish context
  // This is a fallback while we debug the main issue
  if (acceptLanguage) {
    const lowerLang = acceptLanguage.toLowerCase();
    console.log('Lowercase Accept-Language:', lowerLang);
    
    // More aggressive Swedish detection
    if (lowerLang.includes('sv') || 
        lowerLang.includes('swedish') || 
        lowerLang.includes('sverige') ||
        lowerLang.startsWith('sv-') ||
        lowerLang.includes('sv,') ||
        lowerLang.includes('sv;')) {
      console.log('Swedish detected in Accept-Language header');
      return 'sv';
    }
  }
  
  if (!acceptLanguage) {
    console.log('No Accept-Language header, using default locale:', defaultLocale);
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

  console.log('Parsed preferred languages:', preferredLanguages);

  // Find the first supported locale
  for (const { language } of preferredLanguages) {
    console.log('Checking language:', language);
    
    // Check for exact match (e.g., 'sv')
    if (locales.includes(language as typeof locales[number])) {
      console.log('Exact match found:', language);
      return language;
    }
    
    // Check for language prefix (e.g., 'sv-SE' -> 'sv')
    const languagePrefix = language.split('-')[0].trim();
    console.log('Checking language prefix:', languagePrefix);
    
    if (locales.includes(languagePrefix as typeof locales[number])) {
      console.log('Language prefix match found:', languagePrefix);
      return languagePrefix;
    }
  }

  console.log('No supported language found, using default:', defaultLocale);
  return defaultLocale;
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
