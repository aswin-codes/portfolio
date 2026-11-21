import { Info, Play } from 'lucide-react';
import { Mark } from './Poster';
import { education, experience, profile } from '@/data/portfolio';

const Billboard = () => {
  const now = experience.find((e) => e.current);

  return (
    <section id="home" className="relative isolate flex min-h-[640px] items-end overflow-hidden bg-black md:min-h-[95vh]">
      {/* Key art */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full md:w-[68%]">
        <img
          src={profile.photo}
          alt="Portrait of Aswin Raaj"
          className="h-full w-full object-cover object-[60%_15%] opacity-80 grayscale contrast-[1.1] md:object-[70%_20%]"
        />
        {/* a faint red key light so the grayscale photo sits in the palette */}
        <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_70%_35%,rgba(229,9,20,.22),transparent_70%)] mix-blend-screen" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/75 to-transparent md:via-black/40" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-nf-bg via-nf-bg/60 to-transparent" />

      <div className="w-full px-[4%] pb-36 pt-28 md:pb-52">
        <div className="max-w-[640px]">
          <Mark label="Portfolio" className="text-sm" />

          <h1 className="mt-3 font-display text-[clamp(4.5rem,9vw,8.5rem)] leading-[0.82] text-white text-shadow">
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
      </div>

      {/* rating flag, Netflix-style, but for availability */}
      <span className="absolute bottom-[34%] right-0 hidden border-l-[3px] border-white/70 bg-[#333]/60 py-1.5 pl-3 pr-14 text-base text-white md:block">
        {profile.availability}
      </span>
    </section>
  );
};

export default Billboard;
