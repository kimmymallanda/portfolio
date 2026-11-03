import Link from 'next/link';
import { site, hasResume, resumeHref, resumeDownloadName } from '@/lib/site';
import { getFeatured } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import HeroVideo from '@/components/HeroVideo';

export default function Home() {
  const featured = getFeatured().slice(0, 8);
  const resume = hasResume();

  return (
    <>
      {/* Bright, full-color hero: the footage plays at full strength under a soft teal wash, not a black screen. */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-lagoon pt-24 text-white md:pt-0">
        <HeroVideo
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          src="/video/hero-loop.mp4"
          poster="/images/hero-poster.jpg"
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-center motion-reduce:block"
          style={{ backgroundImage: 'url(/images/hero-poster.jpg)' }}
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b3a37]/95 via-[#0b3a37]/55 to-[#0b3a37]/20 md:from-[#0b3a37]/90 md:via-[#0b3a37]/25 md:to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 sm:px-6 sm:pb-16 md:px-10 md:pb-24">
          <p className="rise text-[11px] font-medium uppercase leading-relaxed tracking-[0.18em] text-white/90 drop-shadow sm:text-xs sm:tracking-[0.22em] sm:text-sun">
            {site.role.split(' | ').map((part, i, all) => (
              <span key={part}>
                <span className="whitespace-nowrap">
                  {part}
                  {i < all.length - 1 && (
                    <span aria-hidden="true" className="text-sun">
                      {' ·'}
                    </span>
                  )}
                </span>
                {i < all.length - 1 && ' '}
              </span>
            ))}
          </p>
          <h1 className="rise rise-2 mt-4 max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight drop-shadow-md sm:mt-5 sm:text-7xl sm:leading-[1.02] lg:text-8xl">
            {site.headline}
          </h1>
          <p className="rise rise-3 mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-8 sm:text-lg">{site.intro}</p>
          <div className="rise rise-3 mt-8 flex flex-wrap gap-3 text-sm sm:mt-10 sm:gap-4">
            <Link href="/work" className="w-full rounded-full bg-sun px-6 py-3 text-center font-medium text-ink hover:bg-white sm:w-auto">
              View selected work
            </Link>
            <Link href="/about" className="flex-1 rounded-full border border-white/70 px-6 py-3 text-center hover:bg-white hover:text-ink sm:flex-none">
              About
            </Link>
            <Link href="/contact" className="flex-1 rounded-full border border-white/70 px-6 py-3 text-center hover:bg-white hover:text-ink sm:flex-none">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pt-28 md:px-10" aria-labelledby="featured">
          <div className="mb-14 flex items-end justify-between gap-4">
            <h2 id="featured" className="font-serif text-4xl md:text-5xl">
              Selected work
              <span className="mt-3 block h-1 w-20 bg-coral" />
            </h2>
            <Link href="/work" className="whitespace-nowrap text-sm font-medium text-lagoon underline decoration-2 underline-offset-4">
              All projects →
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} priority={i < 2} />
            ))}
          </div>
        </section>
      )}

      <section className="mt-32 bg-[#fbe3d3] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-coral">From fintech to film</p>
          <p className="mt-6 font-serif text-3xl leading-snug md:text-5xl">
            I learned how business works from the inside, then went looking for better ways to tell its stories.
          </p>
          <Link href="/about" className="mt-8 inline-block text-sm font-medium text-coral underline decoration-2 underline-offset-4">
            Read my story →
          </Link>
        </div>
      </section>

      <section className="bg-lagoon text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-center md:px-10">
          <h2 className="font-serif text-4xl md:text-5xl">Let’s make something worth watching.</h2>
          <div className="flex shrink-0 flex-wrap gap-4 text-sm">
            <Link href="/contact" className="whitespace-nowrap rounded-full bg-sun px-6 py-3 font-medium text-ink hover:bg-white">
              Get in touch
            </Link>
            {resume && (
              <a href={resumeHref} download={resumeDownloadName} className="whitespace-nowrap rounded-full border border-white/70 px-6 py-3 hover:bg-white hover:text-ink">
                Download résumé
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
