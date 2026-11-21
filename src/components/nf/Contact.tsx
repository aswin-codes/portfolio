import { useState } from 'react';
import { Check, ChevronRight, Copy } from 'lucide-react';
import { profile } from '@/data/portfolio';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="border-y-[6px] border-[#232323] bg-black px-[4%] py-20 text-center md:py-28">
      <h2 className="mx-auto max-w-3xl font-display text-5xl leading-[0.95] text-white md:text-7xl">Ready to build something?</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-white md:text-xl">
        I’m open to full-time roles, remote or in Chennai. Email is the fastest way to reach me.
      </p>

      <div className="mx-auto mt-8 flex max-w-2xl flex-col items-stretch gap-2 sm:flex-row">
        <button
          onClick={copy}
          className="group flex flex-1 items-center justify-between gap-3 rounded border border-white/40 bg-[#161616]/80 px-4 py-4 text-left text-base text-white transition hover:border-white/70"
          aria-label="Copy email address"
        >
          <span className="truncate">{profile.email}</span>
          <span className="flex shrink-0 items-center gap-1.5 text-sm text-nf-soft group-hover:text-white">
            {copied ? <Check className="h-4 w-4 text-nf-green" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Copied' : 'Copy'}
          </span>
        </button>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center gap-1 rounded bg-nf-red px-6 py-4 text-xl font-bold text-white transition hover:bg-[#c11119]"
        >
          Email me <ChevronRight className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
