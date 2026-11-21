import { Link } from 'react-router-dom';
import { profile } from '@/data/portfolio';

const footerLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Résumé (PDF)', href: profile.resume },
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'Prepy on Play Store', href: 'https://play.google.com/store/apps/details?id=com.prepy.Prepy' },
  { label: 'Dreamfarm source', href: 'https://github.com/aswin-codes/IntelGenAI' },
];

const SiteFooter = () => (
  <footer className="mx-auto max-w-[1000px] px-[4%] py-16 text-sm text-nf-muted">
    <p className="text-base">
      Questions?{' '}
      <a href={`mailto:${profile.email}`} className="underline underline-offset-2 hover:text-nf-soft">
        {profile.email}
      </a>
    </p>
    <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-4">
      {footerLinks.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target={l.href.startsWith('http') || l.href.endsWith('.pdf') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
          >
            {l.label}
          </a>
        </li>
      ))}
      <li>
        <Link to="/links" className="underline-offset-2 hover:underline">
          All links
        </Link>
      </li>
    </ul>
    <p className="mt-8 text-xs">© {new Date().getFullYear()} {profile.name} · Built with React &amp; Tailwind</p>
  </footer>
);

export default SiteFooter;
