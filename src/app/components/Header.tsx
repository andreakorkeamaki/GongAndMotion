"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/qigong', label: 'Qigong' },
  { href: '/massage', label: 'Massage' },
  { href: '/gongbath', label: 'Gong Bath' },
  { href: '/dancingmindfulness', label: 'Dancing Mindfulness' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  
  // Get current locale from pathname
  const currentLocale = pathname.split('/')[1] || 'en';
  
  // Create locale-aware navigation links
  const getLocalizedHref = (href: string) => {
    if (href === '/') return `/${currentLocale}`;
    return `/${currentLocale}${href}`;
  };

  // Close on Escape and manage initial focus when opening
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('keydown', onKeyDown);
      // Focus the first focusable element inside the drawer
      const t = setTimeout(() => {
        const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }, 0);
      return () => {
        clearTimeout(t);
        document.removeEventListener('keydown', onKeyDown);
      };
    }
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);
  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <nav className="flex justify-between items-center max-w-5xl mx-auto px-4 py-3">
        <Link href={`/${currentLocale}`} className="text-2xl font-heading font-bold text-primary-dark tracking-tight">
          Gong and Motion
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-primary-dark font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={getLocalizedHref(link.href)} className="hover:text-accent transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
        {/* Mobile menu hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <span className="block w-6 h-0.5 bg-primary-dark mb-1 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-primary-dark mb-1 rounded transition-all" />
          <span className="block w-6 h-0.5 bg-primary-dark rounded transition-all" />
        </button>
        {/* Mobile menu drawer */}
        {open && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Main navigation"
              ref={drawerRef}
              tabIndex={-1}
              className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg p-6 flex flex-col gap-6 animate-slide-in"
              onKeyDown={(e) => {
                if (e.key !== 'Tab') return;
                const focusable = drawerRef.current?.querySelectorAll<HTMLElement>(
                  'a, button, [tabindex]:not([tabindex="-1"])'
                );
                if (!focusable || focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey) {
                  if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                  }
                } else {
                  if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                  }
                }
              }}
            >
              <button
                className="self-end mb-4 text-2xl text-primary-dark focus:outline-none"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                &times;
              </button>
              <ul className="flex flex-col gap-4 text-primary-dark font-semibold">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={getLocalizedHref(link.href)} className="hover:text-accent transition-colors" onClick={() => setOpen(false)}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <LanguageSwitcher />
              </div>
            </div>
            <style jsx>{`
              @keyframes slide-in {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
              }
              .animate-slide-in {
                animation: slide-in 0.2s ease;
              }
            `}</style>
          </>
        )}
      </nav>
    </header>
  );
}
