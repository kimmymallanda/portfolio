import { themeFor } from '@/lib/theme';
import type { Category } from '@/lib/types';

/** A bold, colorful number tile for projects that don't have a photo. */
export default function StatTile({
  stats,
  category,
  large = false,
}: {
  stats: { value: string; label: string }[];
  category: Category;
  large?: boolean;
}) {
  const t = themeFor(category);
  const shown = stats.slice(0, 3);
  const cols = shown.length === 1 ? 'grid-cols-1' : shown.length === 2 ? 'grid-cols-2' : 'grid-cols-3';
  return (
    <div className={`flex h-full w-full items-center ${t.solid} ${large ? 'p-10 md:p-16' : 'p-5'}`}>
      <dl className={`grid w-full gap-4 ${cols}`}>
        {shown.map((s) => (
          <div key={s.label}>
            <dt className={`font-serif leading-none ${large ? 'text-5xl md:text-7xl' : 'text-3xl sm:text-4xl'}`}>{s.value}</dt>
            <dd className={`mt-2 leading-snug opacity-90 ${large ? 'text-base md:text-lg' : 'text-xs sm:text-sm'}`}>{s.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
