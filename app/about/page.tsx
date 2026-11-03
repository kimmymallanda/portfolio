import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'How a career in financial technology and marketing led to a life in storytelling.',
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-8 pt-40 md:px-10">
      <p className="eyebrow">About</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
        I’ve always been the person who turns complicated things into stories worth following.
      </h1>

      <div className="mt-14 space-y-6 text-lg leading-relaxed text-ink/90">
        <p>
          My career started in sales, where I learned the most useful lesson in marketing: people don’t buy products, they
          buy a version of the future they can picture. I moved into product marketing at an early-stage healthcare
          payments company, then into product at Bellwood Labs, and now lead product strategy and operations for a global
          payments program at Visa, where I help explain, and scale, products that most people find hard to follow.
        </p>
        <p>
          Along the way I kept writing. I swam Division I at UNC after a four-time state championship career in high school, so athlete mental health was a subject I knew from the inside. I founded Everything Athletes to work on it, and wrote
          {' '}<em>The I of the Tiger</em>, a book on the athlete identity that has sold more than 1,000 copies. I wrote a
          feature screenplay, <em>Trades of Servitude</em>. And I picked up a camera, which is where this portfolio is
          headed next: video that tells the story, not just shows the thing.
        </p>
        <p>
          No matter the idea, project or vision, I love being part of the creative process bringing it to life.
        </p>
      </div>

      <h2 className="mt-16 font-serif text-3xl">What I bring</h2>
      <dl className="mt-8 grid gap-8 sm:grid-cols-2">
        {[
          ['Storytelling', 'Narrative instincts from books, screenplays and brand work, not just from a brief.'],
          ['Business understanding', 'I know what a campaign has to do, and who has to sign off on it.'],
          ['Audience empathy', 'Years of customer research, from enterprise clients to athletes, shape what I make.'],
          ['Ownership', 'Idea to execution: I’ve built things from zero and carried them to launch.'],
          ['Clarity', 'My specialty is making complicated subjects easy to follow.'],
          ['Curiosity', 'I learn the tool, the genre or the industry I need, then get to work.'],
        ].map(([t, d]) => (
          <div key={t}>
            <dt className="font-serif text-xl">{t}</dt>
            <dd className="mt-1 text-stone">{d}</dd>
          </div>
        ))}
      </dl>

      {site.creditedAs && (
        <p className="mt-16 text-sm text-stone">
          My book, screenplay and film credits appear under the name {site.creditedAs}.
        </p>
      )}

      <div className="mt-12">
        <Link href="/work" className="underline decoration-brass underline-offset-4">See the work →</Link>
      </div>
    </div>
  );
}
