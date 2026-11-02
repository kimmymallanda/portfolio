// Shared types and constants. Safe to import from browser (client) components.
export const CATEGORIES = [
  'Video & Film',
  'Brand & Marketing',
  'Writing & Storytelling',
  'Content Strategy',
] as const;
export type Category = (typeof CATEGORIES)[number];

export interface Channel {
  platform: 'instagram' | 'tiktok' | 'podcast' | 'shopify';
  label?: string;
  detail?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: Category;
  summary: string;
  date?: string;
  draft: boolean;
  featured: boolean;
  order: number;
  cover?: string;
  coverAlt?: string;
  coverFit: 'cover' | 'contain';
  mat?: string;
  stats: { value: string; label: string }[];
  channels: Channel[];
  role?: string;
  objective?: string;
  tools: string[];
  deliverables: string[];
  results: string[];
  credits: string[];
  note?: string;
  video?: { youtube?: string; vimeo?: string; file?: string; poster?: string };
  videos: { youtube?: string; vimeo?: string; file?: string; poster?: string; caption?: string; vertical?: boolean }[];
  gallery: { src: string; alt: string; caption?: string }[];
  links: { label: string; href: string }[];
  documents: { label: string; href: string }[];
  body: string;
}
