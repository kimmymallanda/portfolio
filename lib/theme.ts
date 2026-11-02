import type { Category } from './types';

// One color per category, so the gallery reads at a glance.
export const themes: Record<Category, { solid: string; soft: string; text: string }> = {
  'Video & Film': { solid: 'bg-coral text-white', soft: 'bg-[#fbe3dc]', text: 'text-coral' },
  'Brand & Marketing': { solid: 'bg-lagoon text-white', soft: 'bg-[#dcefec]', text: 'text-lagoon' },
  'Writing & Storytelling': { solid: 'bg-sun text-ink', soft: 'bg-[#fbeec9]', text: 'text-[#8a5a00]' },
  'Content Strategy': { solid: 'bg-ultra text-white', soft: 'bg-[#e0e6f6]', text: 'text-ultra' },
};
export const themeFor = (c: Category) => themes[c];
