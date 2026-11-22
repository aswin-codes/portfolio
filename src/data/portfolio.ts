// Single source of truth for the portfolio. Sourced from aswin_cv.pdf (Nov 2026).

export const profile = {
  name: 'Aswin Raaj P S',
  shortName: 'Aswin',
  role: 'Full-Stack Software Engineer',
  location: 'Chennai, India',
  availability: 'Open to Remote',
  email: 'aswinraaj.ps@gmail.com',
  github: 'https://github.com/aswin-codes',
  linkedin: 'https://linkedin.com/in/aswin-raaj',
  site: 'https://aswincode.vercel.app',
  resume: '/aswin_cv.pdf',
  synopsis:
    'Full-stack engineer who ships production systems end to end: subscription billing, media infrastructure, LLM tooling and mobile apps used by 1,000+ people. 5 internships, a hackathon win, and 3 published research papers before graduating.',
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack: string[];
  art: PosterArt;
};

export type PosterArt = {
  /** two-stop background, dark → accent */
  from: string;
  to: string;
  motif: 'contours' | 'grid' | 'scan' | 'rings' | 'bars';
  /** text shown on the poster when there's no screenshot */
  wordmark: string;
};

// Most recent first.
export const experience: Experience[] = [
  {
    id: 'canvas-ott',
    company: 'Canvas OTT',
    role: 'Software Engineer',
    location: 'Remote',
    period: 'Jul 2026 – Present',
    current: true,
    summary:
      'Owns billing, storage and app delivery for a streaming platform, across mobile, web and backend.',
    points: [
      'Architected a multi-provider subscription platform on Razorpay and Apple In-App Purchases: App Store webhooks, idempotent event processing, automated reconciliation, and cross-platform upgrades/downgrades.',
      'Led the media migration from Google Cloud Storage to Cloudflare R2 with a resumable pipeline and an object-storage abstraction, cutting infrastructure costs by 50% through lower egress.',
      'Moved the React Native app to Expo and shipped EAS/OTA deployments, deep linking, analytics, content personalization and a UI overhaul.',
    ],
    stack: ['React Native', 'Expo', 'Node.js', 'Cloudflare R2', 'Razorpay', 'Apple IAP'],
    art: { from: '#1a0306', to: '#8f0a14', motif: 'scan', wordmark: 'CANVAS OTT' },
  },
  {
    id: 'visteon',
    company: 'Visteon Corporation',
    role: 'GenAI Software Engineer Intern',
    location: 'Chennai, India',
    period: 'Jan 2026 – Jun 2026',
    summary:
      'Built the plumbing and guardrails behind Cognito AI, a workflow-automation product.',
    points: [
      'Developed Model Context Protocol (MCP) servers and client wrappers that standardized context injection across several downstream LLM services.',
      'Built and deployed a BERT intent classifier for security and content guardrails, replacing cosine-similarity checks with something faster and more accurate.',
      'Generated synthetic datasets with LLMs to train and align autonomous orchestrator agents.',
    ],
    stack: ['Python', 'MCP', 'BERT', 'LLMs'],
    art: { from: '#120a02', to: '#b4570f', motif: 'grid', wordmark: 'VISTEON' },
  },
  {
    id: 'iit-madras',
    company: 'IIT Madras',
    role: 'Software Engineer Intern',
    location: 'Chennai, India',
    period: 'May 2025 – Jul 2025',
    summary: 'Turned millions of geospatial records into an interactive water-data map.',
    points: [
      'Built a full-stack water data platform covering 10+ environmental parameters (temperature, precipitation, population) with MapLibre map exploration.',
      'Converted millions of geospatial records into vector tiles served from AWS, improving load times by 30%.',
      'Engineered a PostgreSQL-backed review management tool used by a team of 20 analysts.',
    ],
    stack: ['React', 'MapLibre', 'Vector Tiles', 'AWS', 'PostgreSQL'],
    art: { from: '#020c16', to: '#0d5a8a', motif: 'contours', wordmark: 'IIT MADRAS' },
  },
  {
    id: 'learnoverse',
    company: 'Learnoverse',
    role: 'Software Engineer Intern',
    location: 'Remote',
    period: 'Jan 2025 – Jun 2025',
    summary: 'Auth, release tooling and content pipelines for an ed-tech app.',
    points: [
      'Implemented OAuth and JWT authentication in TypeScript for a React Native app.',
      'Built over-the-air update infrastructure for self-service deployments and faster releases.',
      'Developed CMS-driven blog pages in Next.js and FastAPI ingestion from Telegram and YouTube into MongoDB.',
      'Designed an AI feature that generates questions from video transcripts.',
    ],
    stack: ['TypeScript', 'React Native', 'Next.js', 'FastAPI', 'MongoDB'],
    art: { from: '#0c0414', to: '#5b2a9a', motif: 'rings', wordmark: 'LEARNOVERSE' },
  },
  {
    id: 'paynav',
    company: 'Paynav',
    role: 'App Developer Intern',
    location: 'Bangalore, India (Remote)',
    period: 'May 2024 – Oct 2024',
    summary: 'Hardened a production fintech app for scale, payments and security.',
    points: [
      'Improved the reliability and scalability of a production fintech application to sustain 1,000+ concurrent users.',
      'Integrated payment gateways and strengthened security controls across the transaction flow, improving transaction security by 15%.',
      'Partnered with a cross-functional team of five engineers and designers on performance optimization, reducing latency by 25%.',
    ],
    stack: ['Mobile', 'Payment Gateways', 'API Security', 'Performance'],
    art: { from: '#02100a', to: '#0f7a4a', motif: 'bars', wordmark: 'PAYNAV' },
  },
  {
    id: 'cehpoint',
    company: 'Cehpoint',
    role: 'App Developer Intern',
    location: 'West Bengal, India (Remote)',
    period: 'May 2023 – Jul 2023',
    summary: 'Built social and e-commerce apps across mobile and web.',
    points: [
      'Designed and developed a social media application end to end, spanning the front end and back end.',
      'Built an e-commerce application with integrated payments and AI-driven product recommendations, increasing user engagement by 20%.',
      'Delivered responsive, consistent user experiences across the mobile and web clients.',
    ],
    stack: ['Mobile', 'Web', 'Payments', 'Recommendations'],
    art: { from: '#120408', to: '#a3133f', motif: 'grid', wordmark: 'CEHPOINT' },
  },
];

export type Project = {
  id: string;
  title: string;
  kind: 'Project' | 'Hackathon' | 'Paper';
  badge?: string;
  year?: string;
  tagline: string;
  points: string[];
  stack: string[];
  image?: string;
  art: PosterArt;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: 'prepy',
    title: 'Prepy',
    kind: 'Hackathon',
    badge: 'Winner',
    tagline: 'AI study app that turns notes into summaries, flashcards and a chat tutor.',
    points: [
      'Won notJust Hack, an international app-development hackathon. The app is live on the Play Store.',
      'LLM features built on Google Gemini via GCP, served from FastAPI endpoints I designed and tested.',
      'Wrote the API documentation and developer guides for future contributors.',
    ],
    stack: ['Flutter', 'FastAPI', 'Gemini', 'GCP'],
    image: '/prepy.png',
    art: { from: '#0b0618', to: '#5b3fd1', motif: 'rings', wordmark: 'PREPY' },
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.prepy.Prepy' },
    ],
  },
  {
    id: 'code-for-good',
    title: 'Code for Good',
    kind: 'Hackathon',
    badge: 'Finalist',
    tagline: 'A role-based learning platform for a nonprofit, built in 24 hours at JPMorgan Chase.',
    points: [
      'Built the platform end to end in 24 hours with React, Node.js and PostgreSQL.',
      'Selected as one of the top teams in India to present to JPMorgan Chase executives in Bangalore.',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL'],
    art: { from: '#03100d', to: '#0f6b55', motif: 'bars', wordmark: 'CODE FOR GOOD' },
    links: [],
  },
  {
    id: 'dreamfarm',
    title: 'Dreamfarm',
    kind: 'Hackathon',
    badge: 'Intel AI Hackathon',
    tagline: 'Predicts crop yield and detects plant disease from a phone.',
    points: [
      'Flutter app backed by Django and Node.js services.',
      'ML models for crop-production prediction and disease detection, with Gemini for guidance.',
    ],
    stack: ['Flutter', 'Django', 'Node.js', 'Gemini'],
    image: '/dreamfarm.png',
    art: { from: '#061006', to: '#3d7a1f', motif: 'contours', wordmark: 'DREAMFARM' },
    links: [{ label: 'GitHub', href: 'https://github.com/aswin-codes/IntelGenAI' }],
  },
  {
    id: 'icrtac',
    title: 'ICRTAC Conference Site',
    kind: 'Project',
    tagline: 'Submissions, registrations and auth for an international academic conference.',
    points: [
      'React front end with a Node.js and PostgreSQL backend.',
      'REST APIs for paper submissions, registrations and user authentication.',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL'],
    image: '/icrtac.png',
    art: { from: '#05070f', to: '#24407a', motif: 'grid', wordmark: 'ICRTAC' },
    links: [{ label: 'Live site', href: 'https://icrtac.vercel.app' }],
  },
];

export const research: Project[] = [
  {
    id: 'lora-landslide',
    title: 'Harnessing LoRa for Real-Time Landslide Monitoring',
    kind: 'Paper',
    badge: 'ScienceDirect',
    tagline: 'Early landslide alerts for Kerala’s terrain over a LoRa sensor network.',
    points: [
      'Benchmarked several ML algorithms; an ExtraTrees classifier reached 87.0% forecasting accuracy.',
      'Built a multi-source dataset (rainfall, soil moisture, geospatial soil profiles) with sliding-window feature engineering.',
    ],
    stack: ['LoRa', 'scikit-learn', 'Geospatial'],
    art: { from: '#0d0a04', to: '#6b4a12', motif: 'contours', wordmark: 'LANDSLIDE' },
    links: [],
  },
  {
    id: 'cyberflux',
    title: 'CyberFluxAI',
    kind: 'Paper',
    badge: 'ResearchGate',
    tagline: 'GenAI incident response that explains what it did and why.',
    points: [
      'ELK-stack log normalization feeding a reasoning engine mapped to MITRE ATT&CK, with RAG over playbooks to trigger sandboxed actions.',
      'Input sanitization, constrained tool environments and PII minimization against prompt injection.',
    ],
    stack: ['RAG', 'ELK', 'MITRE ATT&CK'],
    art: { from: '#02100f', to: '#0e6e66', motif: 'scan', wordmark: 'CYBERFLUX' },
    links: [],
  },
  {
    id: 'real-estate',
    title: 'Real Estate Valuation with Sentiment & Spatial Intelligence',
    kind: 'Paper',
    badge: 'ICCCNT 2025',
    year: '2025',
    tagline: 'House prices from location data and what people are saying about the market.',
    points: [
      'Presented at ICCCNT 2025 (virtual, July 2025).',
      'Hybrid ML framework fusing geospatial property data with NLP sentiment scores; lower MAE than baselines, with SHAP explainability.',
    ],
    stack: ['NLP', 'SHAP', 'Geospatial ML'],
    art: { from: '#100410', to: '#7a1f5c', motif: 'bars', wordmark: 'VALUATION' },
    links: [],
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'Dart', 'Kotlin', 'HTML', 'CSS'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Flutter', 'Tailwind CSS'] },
  { label: 'Backend & APIs', items: ['Node.js', 'FastAPI', 'Django', 'REST', 'OAuth', 'JWT', 'Webhooks'] },
  { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Firebase', 'SQL'] },
  { label: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Docker', 'CI/CD', 'OTA updates'] },
  { label: 'AI & Automation', items: ['LLM integration', 'MCP', 'RAG', 'BERT', 'Gemini', 'Workflow automation'] },
  { label: 'Tools', items: ['Git', 'Figma', 'MapLibre', 'Vector tiles', 'API testing', 'Technical writing'] },
];

export const education = {
  school: 'Vellore Institute of Technology',
  degree: 'B.Tech, Computer Science',
  period: 'Sept 2022 – June 2026',
  gpa: '9.03 / 10',
  coursework: ['Data Structures & Algorithms', 'DBMS', 'Computer Architecture', 'Machine Learning'],
  certification: 'SQL for Database, UC Davis (Coursera)',
};

export type Chapter = {
  id: string;
  /** months since Sep 2022, used to place the chapter on the scrub bar */
  at: number;
  date: string;
  title: string;
  subtitle: string;
  art: PosterArt;
};

const artOf = (id: string) => experience.find((e) => e.id === id)!.art;

/** Dated moments from the resume, played as episodes in the hero. */
export const timeline: Chapter[] = [
  {
    id: 'vit',
    at: 0,
    date: 'Sep 2022',
    title: 'VIT',
    subtitle: 'Starts a B.Tech in Computer Science at VIT.',
    art: { from: '#0d0d0d', to: '#3a3a3a', motif: 'grid', wordmark: 'VIT' },
  },
  {
    id: 'cehpoint',
    at: 8,
    date: 'May 2023',
    title: 'Cehpoint',
    subtitle: 'Builds social and e-commerce apps with payments and AI recommendations.',
    art: artOf('cehpoint'),
  },
  {
    id: 'paynav',
    at: 20,
    date: 'May 2024',
    title: 'Paynav',
    subtitle: 'Scales a production fintech app to 1,000+ concurrent users and cuts latency by 25%.',
    art: artOf('paynav'),
  },
  {
    id: 'learnoverse',
    at: 28,
    date: 'Jan 2025',
    title: 'Learnoverse',
    subtitle: 'Ships OAuth, JWT and over-the-air updates for a React Native app.',
    art: artOf('learnoverse'),
  },
  {
    id: 'iit-madras',
    at: 32,
    date: 'May 2025',
    title: 'IIT Madras',
    subtitle: 'Turns millions of geospatial records into vector tiles. Loads get 30% faster.',
    art: artOf('iit-madras'),
  },
  {
    id: 'icccnt',
    at: 34,
    date: 'Jul 2025',
    title: 'ICCCNT 2025',
    subtitle: 'Presents real-estate valuation research mixing sentiment and spatial data.',
    art: { from: '#100410', to: '#7a1f5c', motif: 'bars', wordmark: 'ICCCNT' },
  },
  {
    id: 'visteon',
    at: 40,
    date: 'Jan 2026',
    title: 'Visteon',
    subtitle: 'Builds MCP servers and a BERT guardrail classifier for Cognito AI.',
    art: artOf('visteon'),
  },
  {
    id: 'graduation',
    at: 45,
    date: 'Jun 2026',
    title: 'Graduation',
    subtitle: 'Graduates from VIT with a 9.03 GPA.',
    art: { from: '#0a0a0a', to: '#6b5a1e', motif: 'rings', wordmark: 'CLASS OF 26' },
  },
  {
    id: 'canvas-ott',
    at: 46,
    date: 'Jul 2026',
    title: 'Canvas OTT',
    subtitle: 'Moves media to Cloudflare R2 and cuts infrastructure costs by 50%.',
    art: artOf('canvas-ott'),
  },
];

/** months from Sep 2022 to "now" on the scrub bar */
export const TIMELINE_END = 51;
