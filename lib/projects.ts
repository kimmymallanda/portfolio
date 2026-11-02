import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

import { CATEGORIES, type Category, type Project } from './types';
export { CATEGORIES };
export type { Category, Project };

const DIR = path.join(process.cwd(), 'content', 'projects');
// Drafts never appear publicly. Set SHOW_DRAFTS=1 locally to preview them.
const showDrafts = process.env.SHOW_DRAFTS === '1';

function arr<T>(v: unknown): T[] {
  return Array.isArray(v) ? (v as T[]) : [];
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(DIR)) return [];
  const projects = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(DIR, file), 'utf8');
      const { data, content } = matter(raw);
      const category = CATEGORIES.includes(data.category) ? (data.category as Category) : 'Content Strategy';
      return {
        slug: file.replace(/\.md$/, ''),
        title: String(data.title ?? 'Untitled'),
        category,
        summary: String(data.summary ?? ''),
        date: data.date ? String(data.date) : undefined,
        draft: data.draft === true,
        featured: data.featured === true,
        order: typeof data.order === 'number' ? data.order : 100,
        cover: data.cover,
        coverAlt: data.coverAlt,
        coverFit: data.coverFit === 'contain' ? 'contain' : 'cover',
        mat: data.mat,
        stats: arr(data.stats),
        channels: arr(data.channels),
        role: data.role,
        objective: data.objective,
        tools: arr<string>(data.tools),
        deliverables: arr<string>(data.deliverables),
        results: arr<string>(data.results),
        credits: arr<string>(data.credits),
        note: data.note,
        video: data.video,
        videos: arr(data.videos),
        gallery: arr(data.gallery),
        links: arr(data.links),
        documents: arr(data.documents),
        body: content.trim(),
      } as Project;
    })
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => latestYear(b.date) - latestYear(a.date) || a.order - b.order);
  return projects;
}

// Newest first: "2022–Present" counts as current, "2022–2024" as 2024.
// Projects without a date go last, in `order`.
function latestYear(date?: string): number {
  if (!date) return -Infinity;
  if (/present/i.test(date)) return Infinity;
  const years = date.match(/\d{4}/g)?.map(Number) ?? [];
  return years.length ? Math.max(...years) : -Infinity;
}

export const getProject = (slug: string) => getAllProjects().find((p) => p.slug === slug);
export const getFeatured = () => getAllProjects().filter((p) => p.featured);
