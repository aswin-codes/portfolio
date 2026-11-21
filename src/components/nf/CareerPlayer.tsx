import { KeyboardEvent, PointerEvent, useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import { cn } from '@/lib/utils';
import Poster, { Mark } from './Poster';
import { TIMELINE_END, timeline, type Chapter } from '@/data/portfolio';

const DWELL = 4.5; // seconds each chapter plays for

const chapterAt = (pos: number) => {
  let i = 0;
  for (let k = 0; k < timeline.length; k++) if (timeline[k].at <= pos) i = k;
  return i;
};
const endOf = (i: number) => (i + 1 < timeline.length ? timeline[i + 1].at : TIMELINE_END);
const pct = (pos: number) => `${(pos / TIMELINE_END) * 100}%`;

type Props = { onChapter?: (c: Chapter) => void; className?: string };

/** The career, played like an episode: scrub it, skip the intro, read the subtitles. */
const CareerPlayer = ({ onChapter, className }: Props) => {
  const [pos, setPos] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hover, setHover] = useState<number | null>(null);
  const [inView, setInView] = useState(true);
  const dragging = useRef<{ wasPlaying: boolean } | null>(null);
  const bar = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);

  const index = chapterAt(pos);
  const chapter = timeline[index];

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(true);
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting));
    if (root.current) io.observe(root.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => onChapter?.(chapter), [chapter, onChapter]);

  // Advance the playhead: each chapter takes DWELL seconds, however many months it spans.
  useEffect(() => {
    if (!playing || !inView) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      setPos((p) => {
        const i = chapterAt(p);
        const next = p + ((endOf(i) - timeline[i].at) / DWELL) * dt;
        return next >= TIMELINE_END ? 0 : next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, inView]);

  const posFromEvent = useCallback((clientX: number) => {
    const r = bar.current!.getBoundingClientRect();
    return Math.min(TIMELINE_END - 0.001, Math.max(0, ((clientX - r.left) / r.width) * TIMELINE_END));
  }, []);

  const jump = (i: number) => setPos(timeline[(i + timeline.length) % timeline.length].at);

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragging.current = { wasPlaying: playing };
    setPlaying(false);
    setPos(posFromEvent(e.clientX));
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const p = posFromEvent(e.clientX);
    setHover(p);
    if (dragging.current) setPos(p);
  };
  const onUp = () => {
    if (dragging.current?.wasPlaying) setPlaying(true);
    dragging.current = null;
  };
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const keys: Record<string, () => void> = {
      ArrowRight: () => jump(index + 1),
      ArrowLeft: () => jump(pos - chapter.at > 1 ? index : index - 1),
      Home: () => jump(0),
      End: () => jump(timeline.length - 1),
      ' ': () => setPlaying((p) => !p),
    };
    if (keys[e.key]) {
      e.preventDefault();
      keys[e.key]();
    }
  };

  const hovered = hover === null ? null : timeline[chapterAt(hover)];

  return (
    <div ref={root} className={cn('select-none', className)}>
      {/* the screen */}
      <div className="relative aspect-video overflow-hidden rounded-md bg-black shadow-[0_30px_80px_rgba(0,0,0,.6)] ring-1 ring-white/10 [container-type:inline-size]">
        <AnimatePresence initial={false}>
          <motion.div
            key={chapter.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Poster art={chapter.art} bare className="h-full w-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
            <div className="absolute left-[5%] top-[7%]">
              <Mark label={index === 0 ? 'Intro' : `Episode ${index}`} className="text-[clamp(9px,2.2cqw,13px)]" />
              <p className="mt-[1.5cqw] font-display text-[clamp(2rem,11cqw,5.5rem)] leading-[0.85] text-white text-shadow">
                {chapter.art.wordmark}
              </p>
              <p className="mt-[1cqw] text-[clamp(11px,2.4cqw,15px)] font-bold text-white/80">{chapter.date}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* subtitles */}
        <AnimatePresence mode="wait">
          <motion.p
            key={chapter.id}
            className="absolute inset-x-[8%] bottom-[8%] text-center text-[clamp(13px,3.2cqw,20px)] font-medium leading-snug text-white [text-shadow:0_0_4px_#000,0_2px_6px_#000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.15 }}
            aria-live="polite"
          >
            {chapter.subtitle}
          </motion.p>
        </AnimatePresence>

        {index === 0 && (
          <button
            onClick={() => jump(1)}
            className="absolute right-[4%] top-[7%] rounded-[3px] border border-white/50 bg-[rgba(42,42,42,.6)] px-[2.4cqw] py-[1.2cqw] text-[clamp(11px,2.4cqw,15px)] font-bold text-white transition hover:bg-white hover:text-black"
          >
            Skip Intro
          </button>
        )}
      </div>

      {/* scrub bar */}
      <div className="relative mt-4">
        <div
          ref={bar}
          role="slider"
          tabIndex={0}
          aria-label="Career timeline"
          aria-valuemin={0}
          aria-valuemax={timeline.length - 1}
          aria-valuenow={index}
          aria-valuetext={`${chapter.date}: ${chapter.title}`}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onPointerLeave={() => setHover(null)}
          onKeyDown={onKey}
          className="group relative flex h-6 cursor-pointer touch-none items-center rounded outline-none ring-white/60 focus-visible:ring-2"
        >
          <div className="relative h-1 w-full rounded-full bg-white/25 transition-[height] group-hover:h-1.5">
            {hover !== null && <div className="absolute inset-y-0 left-0 rounded-full bg-white/25" style={{ width: pct(hover) }} />}
            <div className="absolute inset-y-0 left-0 rounded-full bg-nf-red" style={{ width: pct(pos) }} />
            {timeline.slice(1).map((c) => (
              <span key={c.id} className="absolute top-1/2 h-2.5 w-[3px] -translate-y-1/2 rounded-full bg-white/70" style={{ left: pct(c.at) }} />
            ))}
          </div>
          <span
            className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nf-red shadow transition-transform group-hover:scale-125"
            style={{ left: pct(pos) }}
          />
        </div>

        {/* scrub preview, like trick-play thumbnails */}
        {hovered && hover !== null && (
          <div
            className="pointer-events-none absolute bottom-8 z-10 hidden w-32 -translate-x-1/2 md:block"
            style={{ left: `clamp(64px, ${pct(hover)}, calc(100% - 64px))` }}
          >
            <div className="overflow-hidden rounded ring-2 ring-white">
              <Poster art={hovered.art} className="aspect-video w-full" />
            </div>
            <p className="mt-1.5 text-center text-xs font-bold text-white text-shadow">
              {hovered.date} · {hovered.title}
            </p>
          </div>
        )}
      </div>

      {/* controls */}
      <div className="mt-1 flex items-center gap-1 text-white">
        <button onClick={() => jump(index - 1)} aria-label="Previous chapter" className="grid h-9 w-9 place-items-center rounded transition hover:scale-110">
          <SkipBack className="h-5 w-5 fill-white" />
        </button>
        <button onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause' : 'Play'} className="grid h-9 w-9 place-items-center rounded transition hover:scale-110">
          {playing ? <Pause className="h-6 w-6 fill-white" /> : <Play className="h-6 w-6 fill-white" />}
        </button>
        <button onClick={() => jump(index + 1)} aria-label="Next chapter" className="grid h-9 w-9 place-items-center rounded transition hover:scale-110">
          <SkipForward className="h-5 w-5 fill-white" />
        </button>
        <p className="ml-2 truncate text-sm">
          <span className="font-bold">{index === 0 ? 'Intro' : `E${index}`}</span>
          <span className="text-nf-soft"> · {chapter.title}</span>
        </p>
        <span className="ml-auto shrink-0 text-sm tabular-nums text-nf-soft">{chapter.date}</span>
      </div>
    </div>
  );
};

export default CareerPlayer;
