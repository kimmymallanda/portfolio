import type { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/work', '/about', '/contact'].map((p) => ({ url: `${site.url}${p}` }));
  const projects = getAllProjects().map((p) => ({ url: `${site.url}/work/${p.slug}` }));
  return [...pages, ...projects];
}
