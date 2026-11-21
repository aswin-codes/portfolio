import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { profile } from '@/data/portfolio';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight whichever section is under the top third of the screen.
  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(`#${hit.target.id}`);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        solid ? 'bg-nf-bg' : 'bg-gradient-to-b from-black/80 to-transparent',
      )}
    >
      <nav className="flex h-16 items-center gap-6 px-[4%] md:h-[68px] lg:gap-10">
        <a href="#home" className="font-display text-[2rem] leading-none tracking-wide text-nf-red" aria-label="Aswin Raaj, home">
          ASWIN
        </a>

        <ul className="hidden items-center gap-5 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn('transition-colors hover:text-nf-soft', active === l.href ? 'font-bold text-white' : 'text-[#e5e5e5]')}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: Netflix-style "Browse" dropdown */}
        <div className="relative md:hidden">
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="flex items-center gap-1 text-sm font-bold text-white"
          >
            Browse <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} />
          </button>
          {open && (
            <ul className="absolute left-1/2 top-9 w-52 -translate-x-1/2 border-t-2 border-white bg-black/95 py-2 text-center text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cn('block py-2.5 hover:bg-white/10', active === l.href ? 'font-bold text-white' : 'text-nf-soft')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="ml-auto flex items-center gap-4">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 text-sm text-[#e5e5e5] transition-colors hover:text-nf-soft sm:flex"
          >
            <FileText className="h-4 w-4" /> Résumé
          </a>
          <Link to="/links" aria-label="All links" className="flex items-center gap-1.5">
            <img src={profile.photo} alt="" className="h-8 w-8 rounded object-cover object-top" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
