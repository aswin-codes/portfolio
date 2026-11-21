import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import Poster from './Poster';
import type { Project } from '@/data/portfolio';

type Props = { item: Project | null; onClose: () => void };

const TitleModal = ({ item, onClose }: Props) => {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-[60] overflow-y-auto bg-black/70 px-2 py-8 sm:px-6 sm:py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative mx-auto max-w-[850px] overflow-hidden rounded-md bg-nf-surface shadow-[0_24px_80px_rgba(0,0,0,.75)]"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Poster art={item.art} image={item.image} bare className="aspect-video w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-nf-surface via-nf-surface/20 to-transparent" />
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close"
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-nf-surface text-white outline-none ring-white transition hover:bg-nf-raised focus-visible:ring-2"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 sm:px-10">
                <h2 id="modal-title" className="max-w-[90%] font-display text-4xl leading-[0.9] text-white text-shadow sm:text-6xl">
                  {item.title}
                </h2>
                {item.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.links.map((l, i) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          i === 0
                            ? 'inline-flex items-center gap-1.5 rounded bg-white px-5 py-2 text-sm font-bold text-black transition hover:bg-white/75'
                            : 'inline-flex items-center gap-1.5 rounded bg-white/20 px-5 py-2 text-sm font-bold text-white transition hover:bg-white/30'
                        }
                      >
                        {l.label}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="grid gap-6 px-5 pb-10 pt-2 sm:px-10 md:grid-cols-[1fr_220px] md:gap-10">
              <div>
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  {item.badge && <span className="font-bold text-nf-green">{item.badge}</span>}
                  {item.year && <span className="text-nf-soft">{item.year}</span>}
                  <span className="border border-white/40 px-1.5 text-xs leading-5 text-white/80">{item.kind}</span>
                </p>
                <p className="mt-4 text-lg leading-snug text-white">{item.tagline}</p>
                <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-nf-soft">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-nf-red" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="inline text-nf-muted">Stack: </dt>
                  <dd className="inline text-white">{item.stack.join(', ')}</dd>
                </div>
                <div>
                  <dt className="inline text-nf-muted">Type: </dt>
                  <dd className="inline text-white">{item.kind}</dd>
                </div>
              </dl>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TitleModal;
