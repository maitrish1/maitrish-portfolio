import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import ProjectEntry, { type ProjectEntryData } from '@/components/projects/ProjectEntry'
import { projects, screenshotCounts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Projects — Maitrish Mukherjee | Full Stack Founding Engineer & Architect',
  description:
    'Production platforms built by Maitrish Mukherjee, Full Stack Founding Engineer & Architect — Experience Commerce OS serving 30K+ customers (SharkNinja, EcoFlow), Quizrr by MathonGo (2.5M students), JEE College Predictor ranked #2 on Google with 400K users in 48 hours.',
  authors: [{ name: 'Maitrish Mukherjee', url: 'https://maitrish.com' }],
  creator: 'Maitrish Mukherjee',
  keywords: [
    'Maitrish Mukherjee', 'Maitrish', 'Full Stack Engineer', 'Full Stack Developer',
    'Founding Engineer', 'Full Stack Architect', 'Software Engineer', 'Next.js Developer',
    'React Developer', 'TypeScript Developer', 'Software Developer India',
    'Full Stack Engineer Bengaluru', 'Software Engineer IIT Patna', 'MCA IIT Patna',
    'Full Stack Developer Bengaluru', 'AWS Developer', 'Commerce Platform Engineer',
    'FastAPI Developer', 'Python Developer',
  ],
  robots: { index: true, follow: true },
  other: {
    googlebot: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
  },
  alternates: { canonical: 'https://maitrish.com/projects' },
  openGraph: {
    title: 'Projects — Maitrish Mukherjee | Full Stack Founding Engineer & Architect',
    description:
      'Live production platforms built by Full Stack Founding Engineer & Architect — commerce OS (30K+ customers), EdTech (2.5M students), JEE predictor ranked #2 on Google.',
    url: 'https://maitrish.com/projects',
    siteName: 'maitrish.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects — Maitrish Mukherjee | Full Stack Founding Engineer & Architect',
    description:
      'Live platforms: 30K+ customers, 2.5M students, #2 Google ranking. Built by Full Stack Founding Engineer & Architect Maitrish Mukherjee.',
  },
}

// Page-only fields for the six shared projects (lib/data.ts has no
// badge/year/theme/experience-link/blur/delay info).
type SharedEntryMeta = {
  number: string
  company: string
  period: string
  theme: 'coral' | 'forest'
  experienceHref: string
  blur: number
  delay: number
}

const sharedEntryMetas: SharedEntryMeta[] = [
  { number: '01', company: 'CheckMe Commerce', period: '2025', theme: 'coral', experienceHref: '/experience#checkme', blur: 0, delay: 0 },
  { number: '02', company: 'CheckMe Commerce', period: '2025', theme: 'coral', experienceHref: '/experience#checkme', blur: 1.5, delay: 0.03 },
  { number: '03', company: 'CheckMe Commerce', period: '2025', theme: 'coral', experienceHref: '/experience#checkme', blur: 0, delay: 0.06 },
  { number: '04', company: 'CheckMe Commerce', period: '2025', theme: 'coral', experienceHref: '/experience#checkme', blur: 1.5, delay: 0.09 },
  { number: '05', company: 'CheckMe Commerce', period: '2025', theme: 'coral', experienceHref: '/experience#checkme', blur: 0, delay: 0.12 },
  { number: '06', company: 'MathonGo', period: '2024–2025', theme: 'forest', experienceHref: '/experience#mathongo', blur: 0, delay: 0.15 },
]

const sharedEntries: ProjectEntryData[] = projects.map((project, index) => {
  const meta = sharedEntryMetas[index]
  return {
    number: meta.number,
    company: meta.company,
    period: meta.period,
    theme: meta.theme,
    delay: meta.delay,
    name: project.name,
    subtitle: project.subtitle,
    description: project.description,
    stack: project.stack,
    visit: { label: project.visitLabel, url: project.url },
    experienceHref: meta.experienceHref,
    media: {
      type: 'carousel',
      domain: project.domain,
      dir: project.screenshotDir,
      count: screenshotCounts[project.screenshotDir],
      blur: meta.blur,
    },
  }
})

// 7th entry — not in lib/data.ts (page-local per rebuild spec).
const jeePredictorEntry: ProjectEntryData = {
  number: '07',
  company: 'MathonGo',
  period: '2024',
  theme: 'forest',
  delay: 0.18,
  name: 'JEE College Predictor',
  subtitle: '400K users in 48 hours',
  description:
    'Ranked #2 on Google Search for "JEE Main College Predictor". 400K+ users in 48 hours of launch. Built with aggressive SEO — structured data, Core Web Vitals tuning, dynamic OG images.',
  stack: ['Next.js', 'SSR', 'SEO', 'React Query', 'TypeScript'],
  visit: { label: 'Live Tool', url: 'https://tools.mathongo.com/jee-main-college-predictor' },
  experienceHref: '/experience#mathongo',
  media: { type: 'note', title: 'Next.js' },
}

const entries: ProjectEntryData[] = [...sharedEntries, jeePredictorEntry]

export default function ProjectsPage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <div
        className="sticky top-0 z-50 border-b"
        style={{ background: 'var(--bg)', borderColor: 'var(--border)', backdropFilter: 'blur(16px)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between gap-2">
          <Link
            className="inline-flex items-center gap-1.5 font-body text-sm font-bold hover:opacity-70 transition-opacity flex-shrink-0"
            style={{ color: 'var(--text-dim)' }}
            href="/"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
          <span className="font-display font-bold text-sm" style={{ color: 'var(--text)' }}>
            Maitrish<span style={{ color: 'var(--coral)' }}>.</span>
          </span>
          <div className="w-8 h-8" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 pt-8 md:pt-14 pb-6 md:pb-12">
        <Reveal y={20}>
          <p className="font-mono text-xs font-medium mb-3" style={{ color: 'var(--text-muted)' }}>
            7 live platforms
          </p>
          <h1
            className="font-display font-black leading-[1.0] mb-4"
            style={{ fontSize: 'clamp(28px, 7vw, 80px)', color: 'var(--text)' }}
          >
            Shipped.<br />
            <span style={{ color: 'var(--coral)' }}>In production.</span>
          </h1>
          <p className="font-body text-sm md:text-lg max-w-xl" style={{ color: 'var(--text-dim)' }}>
            Every platform here serves real users, handles real money, or both. Built end-to-end — design, engineering, infrastructure.
          </p>
        </Reveal>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 pb-12 md:pb-24 space-y-10 md:space-y-24">
        {entries.map((entry) => (
          <ProjectEntry key={entry.number} entry={entry} />
        ))}
      </div>

      <div className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-14 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
          <div>
            <p className="font-display font-black text-xl md:text-2xl" style={{ color: 'var(--text)' }}>
              Want to build something like this?
            </p>
            <p className="font-body text-sm mt-1" style={{ color: 'var(--text-dim)' }}>
              I&apos;m available for founding engineer and senior roles.
            </p>
          </div>
          <a
            href="mailto:maitrishmukherjeee@gmail.com"
            className="font-body font-bold text-sm px-6 md:px-7 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 flex-shrink-0"
            style={{ background: 'var(--coral)', color: '#fff' }}
          >
            Get in touch →
          </a>
        </div>
      </div>
    </div>
  )
}
