import Poster from './Poster';
import { experience } from '@/data/portfolio';

/** Work history laid out like a show's episode list, newest first. */
const Episodes = () => (
  <section id="experience" className="px-[4%]">
    <div className="max-w-5xl">
      <header className="flex items-end justify-between gap-4 border-b border-nf-line pb-4">
        <div>
          <h2 className="text-lg font-bold text-[#e5e5e5] md:text-2xl">Episodes</h2>
          <p className="mt-0.5 text-sm text-nf-muted">Where I’ve worked, newest first</p>
        </div>
        <span className="rounded border border-nf-line bg-[#242424] px-3 py-1.5 text-sm font-bold text-white">
          {experience.length} episodes
        </span>
      </header>

      <ol>
        {experience.map((job, i) => (
          <li
            key={job.id}
            className="grid grid-cols-[minmax(0,140px)_1fr] gap-x-4 gap-y-3 border-b md:gap-y-3 border-nf-line py-6 md:grid-cols-[40px_220px_1fr] md:gap-x-6 md:rounded md:px-4 md:transition-colors md:hover:bg-white/[.03]"
          >
            <span className="hidden pt-6 text-center text-2xl text-nf-soft md:row-span-2 md:block">{experience.length - i}</span>

            <div className="relative self-start overflow-hidden rounded-[4px] md:row-span-2">
              <Poster art={job.art} className="aspect-video w-full" />
              {job.current && (
                <span className="absolute right-0 top-0 rounded-bl-[3px] bg-nf-red px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Now playing
                </span>
              )}
            </div>

            <div className="min-w-0 self-center md:self-start">
              <div className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between md:gap-4">
                <h3 className="font-bold text-white">
                  {job.role}
                  <span className="font-normal text-nf-soft"> · {job.company}</span>
                </h3>
                <span className="shrink-0 text-sm text-nf-soft">{job.period}</span>
              </div>
              <p className="mt-1 hidden text-sm text-nf-soft md:block">{job.summary}</p>
            </div>

            <div className="col-span-2 md:col-span-1 md:col-start-3">
              <p className="mb-3 text-sm text-nf-soft md:hidden">{job.summary}</p>
              <ul className="space-y-2 text-sm leading-relaxed text-[#d2d2d2]">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-nf-red" />
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-nf-muted">
                <span>{job.location}</span>
                <span className="px-1.5">•</span>
                {job.stack.join(', ')}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Episodes;
