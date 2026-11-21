import { useCallback, useEffect, useState } from 'react';
import Navbar from '@/components/nf/Navbar';
import Billboard from '@/components/nf/Billboard';
import Row from '@/components/nf/Row';
import TitleCard from '@/components/nf/TitleCard';
import RankedCard from '@/components/nf/RankedCard';
import Episodes from '@/components/nf/Episodes';
import About from '@/components/nf/About';
import Contact from '@/components/nf/Contact';
import SiteFooter from '@/components/nf/SiteFooter';
import TitleModal from '@/components/nf/TitleModal';
import { projects, research, type Project } from '@/data/portfolio';

const Index = () => {
  const [open, setOpen] = useState<Project | null>(null);
  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    document.title = 'Aswin Raaj | Full-Stack Software Engineer';
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-nf-bg">
      <Navbar />
      <main>
        <Billboard />

        {/* Rows tuck up under the billboard, like the browse page */}
        <div className="relative z-10 -mt-28 space-y-6 md:-mt-36 md:space-y-10">
          <Row id="projects" title="Projects & Hackathons">
            {projects.map((p, i) => (
              <TitleCard
                key={p.id}
                item={p}
                onOpen={setOpen}
                edge={i === 0 ? 'start' : i === projects.length - 1 ? 'end' : undefined}
              />
            ))}
          </Row>

          <Row id="research" title="Top 3 in Published Research">
            {research.map((r, i) => (
              <RankedCard key={r.id} rank={i + 1} item={r} onOpen={setOpen} />
            ))}
          </Row>
        </div>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          <Episodes />
          <About />
          <Contact />
        </div>
      </main>
      <SiteFooter />
      <TitleModal item={open} onClose={close} />
    </div>
  );
};

export default Index;
