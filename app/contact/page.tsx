import type { Metadata } from 'next';
import { site, hasResume, resumeHref, resumeDownloadName } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.name}.`,
};

export default function Contact() {
  const resume = hasResume();
  return (
    <div className="mx-auto max-w-3xl px-6 pb-8 pt-40 md:px-10">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-3 font-serif text-5xl md:text-7xl">Let’s talk.</h1>
      <p className="mt-6 max-w-xl text-xl text-stone">
        Hiring, collaborating, or just curious about a project? I’d love to hear from you.
      </p>

      <ul className="mt-14 divide-y divide-line border-y border-line text-lg">
        <li className="flex items-center justify-between py-5">
          <span className="eyebrow">Email</span>
          <a href={`mailto:${site.email}`} className="underline decoration-brass underline-offset-4">{site.email}</a>
        </li>
        <li className="flex items-center justify-between py-5">
          <span className="eyebrow">LinkedIn</span>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="underline decoration-brass underline-offset-4">
            kimberly-mallanda ↗
          </a>
        </li>
        {resume && (
          <li className="flex items-center justify-between py-5">
            <span className="eyebrow">Résumé</span>
            <a href={resumeHref} download={resumeDownloadName} className="underline decoration-brass underline-offset-4">Download PDF</a>
          </li>
        )}
      </ul>

      <a href={`mailto:${site.email}?subject=Hello%20from%20your%20portfolio`} className="mt-12 inline-block rounded-full bg-coral px-7 py-3 text-sm text-white hover:bg-ink">
        Send an email
      </a>
    </div>
  );
}
