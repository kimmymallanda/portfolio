import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { site, hasResume, resumeHref, resumeDownloadName } from '@/lib/site';

const serif = Fraunces({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

const description =
  'Content creator, video producer and brand storyteller with a background in financial technology, marketing and original writing.';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.role}`, template: `%s — ${site.name}` },
  description,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} — ${site.headline}`,
    description,
    images: [{ url: '/images/hero-poster.jpg', width: 1600, height: 900 }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header name={site.name} resume={hasResume() ? resumeHref : undefined} resumeName={resumeDownloadName} />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
