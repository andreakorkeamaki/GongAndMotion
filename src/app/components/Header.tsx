import Link from 'next/link';

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
        {/* Mobile menu placeholder */}
      </nav>
    </header>
  );
}
