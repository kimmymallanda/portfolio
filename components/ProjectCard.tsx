import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';
import { themeFor } from '@/lib/theme';
import StatTile from './StatTile';
import { ChannelBadges } from './ChannelLogos';

export default function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  const t = themeFor(project.category);
  const contain = project.coverFit === 'contain';
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div
        className={`relative aspect-[4/3] overflow-hidden shadow-md ring-1 ring-black/5 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl ${
          project.cover && contain && !project.mat ? t.soft : ''
        }`}
        style={project.cover && contain && project.mat ? { backgroundColor: project.mat } : undefined}
      >
        {project.cover ? (
          <Image
            src={project.cover}
            alt={project.coverAlt ?? ''}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`transition duration-700 group-hover:scale-[1.03] ${
              contain ? 'object-contain p-6 drop-shadow-xl' : 'object-cover'
            }`}
          />
        ) : project.stats.length > 0 ? (
          <StatTile stats={project.stats} category={project.category} />
        ) : (
          <div className={`flex h-full items-end p-6 ${t.solid}`}>
            <span className="font-serif text-3xl leading-tight">{project.title}</span>
          </div>
        )}
        {project.channels.length > 0 && (
          <div className="absolute bottom-3 left-3">
            <ChannelBadges channels={project.channels} />
          </div>
        )}
      </div>
      <p className={`mt-4 text-xs font-medium uppercase tracking-[0.22em] ${t.text}`}>{project.category}</p>
      <h3 className="mt-1 font-serif text-2xl leading-snug group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
        {project.title}
      </h3>
      <p className="mt-2 max-w-md text-stone">{project.summary}</p>
    </Link>
  );
}
