import fs from 'node:fs';
import path from 'node:path';

// Edit this file to change site-wide text and links.
export const site = {
  name: 'Kimberly Mallanda',
  // Writing and film credits appear under this name. Set to '' to hide it everywhere.
  creditedAs: 'Kimberly Carducci',
  role: 'Content Creator | Creative Storyteller | Brand & Video Producer',
  headline: 'Stories worth telling. Content worth watching.',
  intro:
    'I’m a creative storyteller and marketing strategist with a background in financial technology, brand building, and original writing. I bring ideas to life through compelling narratives, thoughtful visuals, and content designed to connect with audiences.',
  email: 'kimmymallanda@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kimberly-mallanda/',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};

// The résumé button only appears once public/resume.pdf exists,
// so the site never links to a file that isn't there.
export const resumeHref = '/resume.pdf';
// The filename visitors get when they download it.
export const resumeDownloadName = 'Resume_Kimberly Mallanda.pdf';
export function hasResume(): boolean {
  return fs.existsSync(path.join(process.cwd(), 'public', 'resume.pdf'));
}
