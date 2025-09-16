import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ href, children, variant = 'primary', className = '', type = 'button' }: ButtonProps) {
  const base =
    'inline-block rounded-full px-6 py-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 shadow-sm';
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:text-white',
    secondary: 'bg-accent text-black hover:bg-accent-light hover:text-black',
  };
  if (href) {
    const isInternal = href.startsWith('/');
    if (isInternal) {
      return (
        <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={`${base} ${variants[variant]} ${className}`}>{children}</button>
  );
}
