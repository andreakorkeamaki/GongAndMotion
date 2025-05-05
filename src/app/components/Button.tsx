import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ href, children, variant = 'primary', className = '', type }: ButtonProps) {
  const base =
    'inline-block rounded-full px-6 py-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 shadow-sm';
  const variants = {
    primary: 'bg-primary text-primary-dark hover:bg-accent-purple hover:text-background',
    secondary: 'bg-accent-purple text-primary-dark hover:bg-primary-dark hover:text-accent-purple',
  };
  if (href) {
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
