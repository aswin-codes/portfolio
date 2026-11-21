import { useCallback, useState } from 'react';
import { Info, Play } from 'lucide-react';
import { Mark } from './Poster';
import CareerPlayer from './CareerPlayer';
import { education, experience, profile, type Chapter } from '@/data/portfolio';

const Billboard = () => {
  const now = experience.find((e) => e.current);
  // ambient light behind the player follows whatever chapter is on screen
  const [glow, setGlow] = useState('#8f0a14');
  const onChapter = useCallback((c: Chapter) => setGlow(c.art.to), []);

  return (
    <section id="home" className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-black md:min-h-[95vh]">
      <div
        aria-hidden
        className="absolute -z-10 h-[70vh] w-[70vh] rounded-full opacity-40 blur-[140px] transition-colors duration-1000 max-md:bottom-[10%] max-md:left-1/2 max-md:-translate-x-1/2 md:right-[8%] md:top-[12%]"
        style={{ backgroundColor: glow }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-nf-bg via-nf-bg/60 to-transparent" />

      <div className="flex w-full flex-col gap-10 px-[4%] pb-36 pt-28 md:flex-row md:items-end md:justify-between md:gap-12 md:pb-52">
        <div className="max-w-[600px] md:flex-1">
          <Mark label="Portfolio" className="text-sm" />

          <h1 className="mt-3 font-display text-[clamp(4.5rem,8vw,8rem)] leading-[0.82] text-white text-shadow">
            Aswin
            <br />
            Raaj <span className="text-[0.5em] align-top leading-none text-white/70">P S</span>
          </h1>

          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white md:text-base">
            <span className="font-bold text-nf-green">{education.gpa.split(' ')[0]} GPA</span>
            <span>2022–2026</span>
            <span className="border border-white/50 px-1.5 text-xs leading-5">B.Tech CS</span>
            <span>{experience.length} roles</span>
            <span className="text-nf-soft">{profile.location}</span>
          </p>

          {now && (
            <p className="mt-4 flex items-center gap-2.5 text-base font-bold text-white md:text-lg">
              <span className="grid h-7 place-items-center rounded-[3px] bg-nf-red px-1.5 text-[10px] font-bold uppercase leading-none tracking-wide">
                Now
              </span>
              {now.role} at {now.company}
            </p>
          )}

          <p className="mt-3 max-w-[560px] text-base leading-relaxed text-[#e5e5e5] text-shadow md:text-lg">
            {profile.synopsis}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded bg-white px-6 py-2.5 text-base font-bold text-black transition hover:bg-white/75 md:px-8 md:text-lg"
            >
              <Play className="h-6 w-6 fill-black" /> Résumé
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2.5 rounded bg-[rgba(109,109,110,.7)] px-6 py-2.5 text-base font-bold text-white transition hover:bg-[rgba(109,109,110,.45)] md:px-8 md:text-lg"
            >
              <Info className="h-6 w-6" /> More Info
            </a>
          </div>
        </div>

        <div className="w-full md:w-[min(44vw,620px)] md:shrink-0">
          <CareerPlayer onChapter={onChapter} />
          {/* rating flag, Netflix-style, but for availability */}
          <span className="mt-5 hidden border-l-[3px] border-white/70 bg-[#333]/60 py-1.5 pl-3 pr-14 text-base text-white md:-mr-[4vw] md:ml-auto md:block md:w-fit">
            {profile.availability}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Billboard;
