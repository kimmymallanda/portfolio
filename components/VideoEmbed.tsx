'use client';

import { useState } from 'react';

type Props = { youtube?: string; vimeo?: string; file?: string; poster?: string; title: string; vertical?: boolean };

/**
 * Fast-loading video. YouTube/Vimeo load only after the visitor clicks play,
 * so the page stays light. Uploaded files use the browser's native player.
 */
export default function VideoEmbed({ youtube, vimeo, file, poster, title, vertical }: Props) {
  const ratio = vertical ? 'mx-auto aspect-[9/16] w-full max-w-sm' : 'aspect-video w-full';
  const [play, setPlay] = useState(false);

  if (file) {
    return (
      <video
        className={`${ratio} bg-ink`}
        controls
        preload="metadata"
        playsInline
        poster={poster}
        aria-label={title}
      >
        <source src={file} type="video/mp4" />
      </video>
    );
  }

  const id = youtube || vimeo;
  if (!id) return null;
  const src = youtube
    ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
    : `https://player.vimeo.com/video/${id}?autoplay=1`;
  const thumb = poster || (youtube ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined);

  return (
    <div className={`relative ${ratio} bg-ink`}>
      {play ? (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} className="group absolute inset-0 w-full" aria-label={`Play video: ${title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {thumb && <img src={thumb} alt="" className="h-full w-full object-cover opacity-80 transition group-hover:opacity-100" />}
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          </span>
        </button>
      )}
    </div>
  );
}
