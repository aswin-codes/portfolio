import Poster from './Poster';
import type { Project } from '@/data/portfolio';

type Props = { rank: number; item: Project; onOpen: (item: Project) => void };

/** "Top 10" style tile: an outlined rank numeral with a portrait poster tucked into it. */
const RankedCard = ({ rank, item, onOpen }: Props) => (
  <button
    onClick={() => onOpen(item)}
    aria-label={`Number ${rank}: ${item.title}`}
    className="group relative flex w-[64%] shrink-0 snap-start items-end text-left outline-none sm:w-[40%] md:w-[30%] lg:w-[24%]"
  >
    <span
      aria-hidden
      className="relative -mr-[9%] select-none font-display text-[clamp(9rem,17vw,15rem)] leading-[0.72] text-nf-bg [-webkit-text-stroke:3px_#595959] [paint-order:stroke]"
    >
      {rank}
    </span>
    <span className="relative w-[58%] overflow-hidden rounded-[4px] ring-white transition duration-300 group-hover:scale-[1.04] group-hover:shadow-[0_12px_32px_rgba(0,0,0,.7)] group-focus-visible:ring-2">
      <Poster art={item.art} label="Paper" className="aspect-[2/3] w-full" />
      {item.badge && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-t-[3px] bg-nf-red px-2 pb-0.5 pt-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {item.badge}
        </span>
      )}
    </span>
  </button>
);

export default RankedCard;
