'use client';

import { useEffect, useRef } from 'react';

// The loop is 8 seconds of footage; playing it at 0.8× makes each loop last 10 seconds.
const SPEED = 0.8;

export default function HeroVideo({ src, poster, className }: { src: string; poster: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.defaultPlaybackRate = SPEED;
    v.playbackRate = SPEED;
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      onLoadedMetadata={(e) => {
        e.currentTarget.playbackRate = SPEED;
      }}
    />
  );
}
