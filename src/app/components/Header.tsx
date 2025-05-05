import Link from 'next/link';
import { useState } from 'react';

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
  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      <nav className="flex justify-between items-center max-w-5xl mx-auto px-4 py-3">
        <Link href="/" className="text-2xl font-heading font-bold text-primary-dark tracking-tight">
          Gong and Motion
        </Link>
        <ul className="hidden md:flex gap-6 text-primary-dark font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-accent transition-colors">{link.label}</Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Open menu"
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
            />
            <div className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg p-6 flex flex-col gap-6 animate-slide-in">
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
                    <Link href={link.href} className="hover:text-accent transition-colors" onClick={() => setOpen(false)}>{link.label}</Link>
                  </li>
                ))}
              </ul>
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
