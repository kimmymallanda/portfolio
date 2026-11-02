import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { getAllProjects, getProject } from '@/lib/projects';
import VideoEmbed from '@/components/VideoEmbed';
import { site } from '@/lib/site';
import { themeFor } from '@/lib/theme';
import StatTile from '@/components/StatTile';
import ChannelLogos from '@/components/ChannelLogos';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    openGraph: p.cover ? { images: [{ url: p.cover }] } : undefined,
  };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-8 md:grid-cols-[200px_1fr] md:gap-10">
      <h2 className="eyebrow pt-1">{title}</h2>
      <div className="text-lg leading-relaxed">{children}</div>
    </section>
  );
}

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc space-y-2 pl-5">
    {items.map((i) => (
      <li key={i}>{i}</li>
    ))}
  </ul>
);

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug);
  if (!p) notFound();

  const t = themeFor(p.category);
  const contain = p.coverFit === 'contain';
  const hasVideo = p.video && (p.video.youtube || p.video.vimeo || p.video.file);

  return (
    <article className="mx-auto max-w-5xl px-6 pb-8 pt-40 md:px-10">
      <Link href="/work" className="text-sm text-stone hover:text-ink">← All work</Link>
      <p className={`mt-10 text-xs font-medium uppercase tracking-[0.22em] ${t.text}`}>{p.category}{p.date ? ` · ${p.date}` : ''}</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">{p.title}</h1>
      <p className="mt-6 max-w-2xl text-xl text-stone">{p.summary}</p>

      <div className="mt-12">
        {hasVideo ? (
          <VideoEmbed {...p.video} title={p.title} poster={p.video?.poster ?? p.cover} />
        ) : p.cover ? (
          <div
            className={`relative overflow-hidden shadow-md ring-1 ring-black/5 ${contain ? `aspect-[16/10] ${p.mat ? '' : t.soft}` : 'aspect-[16/9]'}`}
            style={contain && p.mat ? { backgroundColor: p.mat } : undefined}
          >
            <Image
              src={p.cover}
              alt={p.coverAlt ?? ''}
              fill
              priority
              sizes="(min-width: 1024px) 960px, 100vw"
              className={contain ? 'object-contain p-8 drop-shadow-2xl md:p-12' : 'object-cover'}
            />
          </div>
        ) : p.stats.length > 0 ? (
          <div className="aspect-[16/9] overflow-hidden shadow-md">
            <StatTile stats={p.stats} category={p.category} large />
          </div>
        ) : null}
      </div>

      {p.channels.length > 0 && (
        <div className="mt-8">
          <ChannelLogos channels={p.channels} />
        </div>
      )}

      {p.note && (
        <p className="mt-10 border-l-2 border-brass pl-5 text-stone">{p.note}</p>
      )}

      <div className="mt-14">
        {p.body && (
          <Section title="Overview">
            <div className="prose-lite !text-lg">
              <ReactMarkdown>{p.body}</ReactMarkdown>
            </div>
          </Section>
        )}
        {p.videos.length > 0 && (
          <Section title="Watch">
            <div className="space-y-10">
              {p.videos.map((v, i) => (
                <figure key={i}>
                  <VideoEmbed {...v} title={v.caption ?? p.title} />
                  {v.caption && <figcaption className="mt-3 text-center text-sm text-stone">{v.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </Section>
        )}
        {p.objective && <Section title="Objective"><p>{p.objective}</p></Section>}
        {p.role && <Section title="My role"><p>{p.role}</p></Section>}
        {p.tools.length > 0 && <Section title="Tools"><p>{p.tools.join(' · ')}</p></Section>}
        {p.deliverables.length > 0 && <Section title="Deliverables"><List items={p.deliverables} /></Section>}
        {p.results.length > 0 && <Section title="Results"><List items={p.results} /></Section>}
        {p.credits.length > 0 && <Section title="Credits"><List items={p.credits} /></Section>}
        {(p.links.length > 0 || p.documents.length > 0) && (
          <Section title="Links">
            <ul className="space-y-2">
              {[...p.links, ...p.documents].map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="underline decoration-brass underline-offset-4">
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>

      {p.gallery.length > 0 && (
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {p.gallery.map((g) => (
            <figure key={g.src}>
              <div className="relative aspect-[4/5] overflow-hidden bg-line">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" />
              </div>
              {g.caption && <figcaption className="mt-3 text-sm text-stone">{g.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}

      <div className="mt-20 border-t border-line pt-10 text-center">
        <p className="font-serif text-2xl">Want to talk about a project like this?</p>
        <a href={`mailto:${site.email}`} className="mt-4 inline-block underline decoration-brass underline-offset-4">
          {site.email}
        </a>
      </div>
    </article>
  );
}
