'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { CATEGORIES, type Project } from '@/lib/types';

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>('All');
  // Only show filters for categories that have published work.
  const present = CATEGORIES.filter((c) => projects.some((p) => p.category === c));
  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="mb-12 flex flex-wrap gap-3">
        {['All', ...present].map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              active === c ? 'border-lagoon bg-lagoon text-white' : 'border-line bg-white/60 hover:border-lagoon hover:text-lagoon'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <ProjectCard key={p.slug} project={p} priority={i < 3} />
        ))}
      </div>
    </div>
  );
}
