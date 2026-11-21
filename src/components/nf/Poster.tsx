import { cn } from '@/lib/utils';
import type { PosterArt } from '@/data/portfolio';

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const motifs: Record<PosterArt['motif'], string> = {
  scan: 'repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0 1px, transparent 1px 4px)',
  grid:
    'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px) 0 0 / 22px 22px, linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px) 0 0 / 22px 22px',
  contours:
    'repeating-radial-gradient(ellipse at 78% 30%, transparent 0 14px, rgba(255,255,255,.10) 14px 15px), repeating-radial-gradient(ellipse at 15% 110%, transparent 0 18px, rgba(255,255,255,.07) 18px 19px)',
  rings: 'repeating-radial-gradient(circle at 85% 20%, transparent 0 22px, rgba(255,255,255,.09) 22px 24px)',
  bars: 'repeating-linear-gradient(90deg, rgba(255,255,255,.08) 0 2px, transparent 2px 9px, rgba(255,255,255,.04) 9px 16px, transparent 16px 30px)',
};

type Props = {
  art: PosterArt;
  image?: string;
  label?: string;
  /** hide the big wordmark (e.g. when a title is overlaid elsewhere) */
  bare?: boolean;
  className?: string;
};

/** Mark in the corner of every poster: a red "A" and a tracked label. */
export const Mark = ({ label, className }: { label?: string; className?: string }) => (
  <span className={cn('flex items-center gap-1.5 leading-none', className)}>
    <span className="font-display text-[1.6em] leading-none text-nf-red">A</span>
    {label && <span className="text-[0.72em] font-bold uppercase tracking-[0.3em] text-white/80">{label}</span>}
  </span>
);

const Poster = ({ art, image, label, bare, className }: Props) => (
  <div
    className={cn('relative isolate overflow-hidden bg-nf-surface [container-type:inline-size]', className)}
    style={image ? undefined : { background: `radial-gradient(120% 90% at 100% 0%, ${art.to} 0%, ${art.from} 70%)` }}
  >
    {image ? (
      <img src={image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
    ) : (
      <>
        <div className="absolute inset-0 -z-10" style={{ background: motifs[art.motif] }} />
        <div className="absolute inset-0 -z-10 opacity-[.18] mix-blend-overlay" style={{ backgroundImage: GRAIN }} />
        {!bare && (
          <span className="absolute bottom-[8%] left-[7%] right-[7%] font-display text-[clamp(1.25rem,17cqw,6rem)] leading-[0.85] text-white text-shadow">
            {art.wordmark}
          </span>
        )}
      </>
    )}
    {label && <Mark label={label} className="absolute left-[6%] top-[7%] text-[clamp(9px,3.4cqw,14px)]" />}
  </div>
);

export default Poster;
