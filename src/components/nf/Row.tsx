import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

/** A horizontally scrolling shelf. Arrows only appear when there's somewhere to scroll. */
const Row = ({ id, title, subtitle, children, className }: Props) => {
  const track = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    el.addEventListener('scroll', update, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener('scroll', update);
    };
  }, [update]);

  const page = (dir: 1 | -1) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: 'smooth' });
  };

  const arrow =
    'absolute top-6 bottom-6 z-20 hidden w-[4%] min-w-10 place-items-center bg-black/50 text-white opacity-0 transition hover:bg-black/70 group-hover/row:opacity-100 focus-visible:opacity-100 md:grid';

  return (
    <section id={id} className={cn('group/row relative', className)}>
      <header className="px-[4%]">
        <h2 className="text-lg font-bold text-[#e5e5e5] md:text-2xl">{title}</h2>
        {subtitle && <p className="mt-0.5 text-sm text-nf-muted">{subtitle}</p>}
      </header>
      <div className="relative">
        {canLeft && (
          <button aria-label={`Scroll ${title} left`} onClick={() => page(-1)} className={cn(arrow, 'left-0 rounded-r')}>
            <ChevronLeft className="h-8 w-8" />
          </button>
        )}
        <div ref={track} className="scrollbar-none flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-px-[4%] px-[4%] py-6">
          {children}
        </div>
        {canRight && (
          <button aria-label={`Scroll ${title} right`} onClick={() => page(1)} className={cn(arrow, 'right-0 rounded-l')}>
            <ChevronRight className="h-8 w-8" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Row;
