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
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-5 sm:px-6 md:px-10 md:py-6">
        <Link href="/" className="whitespace-nowrap font-serif text-[17px] tracking-tight sm:text-xl">
          {name}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-3.5 text-sm sm:gap-5 md:gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:opacity-70">
              {l.label}
            </Link>
          ))}
          {resume && (
            <a
              href={resume}
              download={resumeName}
              className="hidden rounded-full border border-current px-4 py-1.5 hover:bg-paper hover:text-ink sm:inline-block"
            >
              Résumé
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
