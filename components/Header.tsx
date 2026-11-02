'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

// Light text over the dark homepage hero, dark text everywhere else.
export default function Header({ name, resume, resumeName }: { name: string; resume?: string; resumeName?: string }) {
  const onHome = usePathname() === '/';
  return (
    <header className={`absolute inset-x-0 top-0 z-20 ${onHome ? 'text-paper' : 'text-ink'}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="font-serif text-xl tracking-tight">
          {name}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 text-sm md:gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:opacity-70">
              {l.label}
            </Link>
          ))}
          {resume && (
            <a
              href={resume}
              download={resumeName}
              className="rounded-full border border-current px-4 py-1.5 hover:bg-paper hover:text-ink"
            >
              Résumé
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
