import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Poster from './Poster';
import type { Project } from '@/data/portfolio';

type Props = {
  item: Project;
  onOpen: (item: Project) => void;
  edge?: 'start' | 'end';
};

const TitleCard = ({ item, onOpen, edge }: Props) => (
  <button
    onClick={() => onOpen(item)}
    aria-label={`${item.title}: more info`}
    className={cn(
      'group relative w-[78%] shrink-0 snap-start overflow-hidden rounded-[4px] text-left outline-none ring-white transition duration-300 ease-out',
      'focus-visible:ring-2 sm:w-[46%] md:w-[31%] lg:w-[23.6%]',
      'hover:z-10 hover:scale-[1.06] hover:shadow-[0_12px_32px_rgba(0,0,0,.7)] focus-visible:z-10 focus-visible:scale-[1.06]',
      edge === 'start' && 'origin-left',
      edge === 'end' && 'origin-right',
    )}
  >
    <Poster art={item.art} image={item.image} bare={Boolean(item.image)} label={item.image ? undefined : item.kind} className="aspect-video w-full" />

    {item.image && (
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 to-transparent" />
    )}

    {/* default state: name over the art */}
    {item.image && (
      <span className="absolute bottom-3 left-3 right-3 font-display text-3xl leading-none text-white text-shadow transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
        {item.title}
      </span>
    )}

    {item.badge && (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-[3px] bg-nf-red px-2 pb-0.5 pt-1 text-[10px] font-bold uppercase tracking-wide text-white transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
        {item.badge}
      </span>
    )}

    {/* hover state: a quick synopsis */}
    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/80 to-black/10 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-sm font-bold text-white">{item.title}</span>
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-white/50 text-white">
          <ChevronDown className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-1 line-clamp-2 text-xs leading-snug text-nf-soft">{item.tagline}</p>
      <p className="mt-1.5 truncate text-[11px] text-white/90">
        {item.stack.map((s, i) => (
          <span key={s}>
            {i > 0 && <span className="px-1 text-nf-muted">•</span>}
            {s}
          </span>
        ))}
      </p>
    </div>
  </button>
);

export default TitleCard;
