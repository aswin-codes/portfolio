import { education, skills } from '@/data/portfolio';

/** Modelled on the "About" block at the bottom of a title's detail page. */
const About = () => (
  <section id="about" className="px-[4%]">
    <div className="grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16">
      <div>
        <h2 className="text-lg font-bold text-[#e5e5e5] md:text-2xl">
          About <span className="text-white">Aswin Raaj</span>
        </h2>
        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-nf-soft md:text-base">
          <p>
            I build the parts of a product people don’t see until they break: payments that reconcile, storage that doesn’t
            bleed money on egress, auth that holds, release pipelines that let a team ship on a Tuesday afternoon.
          </p>
          <p>
            Right now that’s a streaming platform at Canvas OTT. Before that I worked on LLM tooling at Visteon, geospatial
            data at IIT Madras, and a React Native ed-tech app at Learnoverse. I like work that spans the stack, from the
            database schema to the button that triggers it.
          </p>
        </div>

        <dl className="mt-8 space-y-2 text-sm">
          <div>
            <dt className="inline text-nf-muted">Education: </dt>
            <dd className="inline text-white">
              {education.school}, {education.degree} ({education.period})
            </dd>
          </div>
          <div>
            <dt className="inline text-nf-muted">GPA: </dt>
            <dd className="inline text-white">{education.gpa}</dd>
          </div>
          <div>
            <dt className="inline text-nf-muted">Coursework: </dt>
            <dd className="inline text-white">{education.coursework.join(', ')}</dd>
          </div>
          <div>
            <dt className="inline text-nf-muted">Certification: </dt>
            <dd className="inline text-white">{education.certification}</dd>
          </div>
        </dl>
      </div>

      <div id="skills" className="md:pt-12">
        <dl className="space-y-3 text-sm">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="inline text-nf-muted">{group.label}: </dt>
              <dd className="inline leading-relaxed text-white">{group.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default About;
