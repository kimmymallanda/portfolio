import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/projects';
import WorkGrid from '@/components/WorkGrid';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected work across video, brand and marketing, writing, and content strategy.',
};

export default function WorkPage() {
  const projects = getAllProjects();
  return (
    <div className="mx-auto max-w-7xl px-6 pb-8 pt-40 md:px-10">
      <p className="eyebrow">Portfolio</p>
      <h1 className="mt-3 font-serif text-5xl md:text-7xl">Selected work</h1>
      <div className="mt-16">
        <WorkGrid projects={projects} />
      </div>
    </div>
  );
}
