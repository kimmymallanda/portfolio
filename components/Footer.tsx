import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line md:mt-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-stone md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="flex gap-6">
          <a href={`mailto:${site.email}`} className="hover:text-ink">Email</a>
          <a href={site.linkedin} className="hover:text-ink" rel="noopener noreferrer" target="_blank">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}
