"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Client-side language detection as fallback
    const detectLanguage = () => {
      const browserLang = navigator.language || navigator.languages?.[0] || 'en';
      console.log('Browser language detected:', browserLang);
      
      // Check if Swedish
      if (browserLang.toLowerCase().includes('sv') || 
          browserLang.toLowerCase().startsWith('sv-')) {
        console.log('Redirecting to Swedish');
        router.replace('/sv');
      } else {
        console.log('Redirecting to English');
        router.replace('/en');
      }
    };

    // Small delay to ensure proper hydration
    const timer = setTimeout(detectLanguage, 100);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-accent-purple/10 to-green-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-purple mx-auto mb-4"></div>
        <p className="text-primary-dark/80">Detecting language...</p>
        <p className="text-sm text-primary-dark/60 mt-2">
          <Link href="/en" className="text-accent-purple hover:underline">English</Link>
          {' | '}
          <Link href="/sv" className="text-accent-purple hover:underline">Svenska</Link>
        </p>
      </div>
    </div>
  );
}
