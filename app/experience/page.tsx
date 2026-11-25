import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { experience } from '@/lib/data'
import PlatformCard, { type Platform } from '@/components/experience/PlatformCard'

export const metadata: Metadata = {
  title: 'Experience — Maitrish Mukherjee | Full Stack Founding Engineer & Architect',
  description:
    '4 years · 4 companies. Full engineering history of Maitrish Mukherjee — Full Stack Founding Engineer & Architect. CheckMe Commerce (10+ apps, 5 microservices, AWS, 30K+ customers), MathonGo (scaled to 2.5M students, 400K users in 48hrs). Every decision, every metric.',
  authors: [{ name: 'Maitrish Mukherjee', url: 'https://maitrish.com' }],
  keywords: [
    'Maitrish Mukherjee', 'Maitrish', 'Full Stack Engineer', 'Full Stack Developer',
    'Founding Engineer', 'Full Stack Architect', 'Software Engineer', 'Next.js Developer',
    'React Developer', 'TypeScript Developer', 'Software Developer India',
    'Full Stack Engineer Bengaluru', 'Software Engineer IIT Patna', 'MCA IIT Patna',
    'Full Stack Developer Bengaluru', 'AWS Developer', 'Commerce Platform Engineer',
    'FastAPI Developer', 'Python Developer',
  ],
  creator: 'Maitrish Mukherjee',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: 'https://maitrish.com/experience' },
  openGraph: {
    title: 'Experience — Maitrish Mukherjee | Full Stack Founding Engineer & Architect',
    description:
      'Full engineering history — 4 years across CheckMe Commerce, MathonGo, Codebuddy, FWC. Full Stack Founding Engineer & Architect, AWS infra. Every platform, every decision.',
    url: 'https://maitrish.com/experience',
    siteName: 'maitrish.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience — Maitrish Mukherjee | Full Stack Founding Engineer & Architect',
    description:
      '4 years · 4 companies. Full Stack Founding Engineer & Architect. Founding engineer at CheckMe Commerce. Scaled MathonGo to 2.5M students. MCA @ IIT Patna.',
  },
}

// lib/data.ts keeps <strong class="hl-num"> markup for the homepage bullets,
// but the live /experience page renders the same bullet text without markup.
const plainBullet = (html: string) => html.replace(/<[^>]+>/g, '')

const shots = (dir: string, count: number) =>
  Array.from({ length: count }, (_, i) => `${dir}/${i + 1}.png`)

type EntryTheme = {
  accent: string
  mid: string
  light?: string
  border: string
}

type EntryDetail = {
  id: string
  delay: number
  theme: EntryTheme
  intro: string
  extraLinks: { label: string; url: string }[]
  extraBullets: string[]
  decisions: { title: string; body: string }[]
  stack: string[]
  platforms?: Platform[]
}

// Page-specific detail per lib/data.ts experience entry, ordered to match the
// `experience` array (checkme, mathongo, codebuddy, fwc).
const entryDetails: EntryDetail[] = [
  {
    id: 'checkme',
    delay: 0,
    theme: {
      accent: 'var(--coral)',
      mid: 'var(--coral-mid)',
      light: 'var(--coral-light)',
      border: 'rgba(217,59,33,0.18)',
    },
    intro:
      'Built the entire Experience Commerce OS from zero — a platform that lets global brands like SharkNinja and EcoFlow offer virtual and physical product demonstrations to consumers, with end-to-end booking, CRM, partner management, and payment flows.',
    extraLinks: [
      { label: 'book', url: 'https://book.chqme.com' },
      { label: 'ops', url: 'https://ops.chqme.com' },
    ],
    extraBullets: [
      'DevOps & CI/CD Pipelines: Builds CI/CD via GitHub Actions with self-hosted runners, Docker, & EC2-based deployments. Established engineering standards & managed releases across 10+ frontend apps & 5 backend microservices.',
    ],
    decisions: [
      {
        title: 'Platform Architecture',
        body: 'Multi-tenant SaaS with feature flags, RBAC across 9 role types, 7 order types (Virtual Demo, In-Store Demo, Physical Installation, Self-Service, Training, Consultation, Rental), all on a 60+ table PostgreSQL schema.',
      },
      {
        title: 'AWS Infrastructure',
        body: 'Full AWS setup in ap-south-1: ALB with SSL termination, WAF rules for DDoS/SQLi/XSS, Multi-AZ RDS PostgreSQL, S3 + CloudFront, SES for transactional emails, Route53 — provisioned without a DevOps team.',
      },
      {
        title: 'Embeddable SDK',
        body: 'CDN-distributed single-JS-file SDK embeddable on any website. Supports 5 embed modes (inline widget, modal, floating button, checkout overlay, standalone page) with HMAC-signed session-token auth.',
      },
      {
        title: 'WebRTC Demo Infrastructure',
        body: 'Integrated ZegoCloud for virtual demos — room creation, participant management, recording, and quality monitoring across 6,000+ live sessions.',
      },
      {
        title: 'Brand Onboarding',
        body: 'Led technical onboarding for SharkNinja, Nester, Tiron, EcoFlow — mapping product catalogues, SKUs, demo scripts and CDE training into the platform. Achieved 25%+ conversion vs industry average of 8–12%.',
      },
    ],
    stack: [
      'Next.js 16',
      'FastAPI',
      'PostgreSQL',
      'AWS (ALB, WAF, RDS, S3, SES)',
      'ZegoCloud WebRTC',
      'Razorpay',
      'Docker',
      'GitHub Actions',
      'Zustand',
      'TailwindCSS',
      'SQLAlchemy',
      'JWT',
    ],
    platforms: [
      { domain: 'chqme.com', name: 'CheckMe Web Platform', url: 'https://chqme.com', images: shots('/screenshots/chqme', 4) },
      { domain: 'experienceos.chqme.com', name: 'ExperienceOS', url: 'https://experienceos.chqme.com', images: shots('/screenshots/experienceos', 6), blur: 1.5 },
      { domain: 'book.chqme.com', name: 'Booking Platform', url: 'https://book.chqme.com', images: shots('/screenshots/booking', 6) },
      { domain: 'ops.chqme.com', name: 'Operations Dashboard', url: 'https://ops.chqme.com', images: shots('/screenshots/ops', 6), blur: 1.5 },
      { domain: 'experience.chqme.com', name: 'Experience Portal', url: 'https://experience.chqme.com', images: shots('/screenshots/experience-chqme', 3) },
    ],
  },
  {
    id: 'mathongo',
    delay: 0.05,
    theme: {
      accent: 'var(--forest)',
      mid: 'var(--forest-mid)',
      light: 'var(--forest-light)',
      border: 'rgba(26,94,64,0.18)',
    },
    intro:
      'Owned frontend and contributed to backend and data integrations on a 2.5M-student EdTech platform for JEE/NEET prep. Led infrastructure overhaul, built viral tooling, and shipped measurable growth across the Quizrr ecosystem.',
    extraLinks: [
      { label: 'JEE Predictor', url: 'https://tools.mathongo.com/jee-main-college-predictor' },
    ],
    extraBullets: [],
    decisions: [
      {
        title: 'CRA → Vite + TurboRepo',
        body: '4-minute cold builds on aging CRA (Node 16). Migrated to Vite + TurboRepo — cold builds under 17s (93% faster), page loads -50%, bundle -21%. Zero downtime, no breaking changes.',
      },
      {
        title: 'JEE Main College Predictor',
        body: 'Sole front-end engineer for the tool. Aggressive SEO — structured data, Core Web Vitals tuning, dynamic OG images. 400K users in 48 hours, ranked #2 on Google — fastest traffic event in MathonGo history.',
      },
      {
        title: 'Quizrr Platform Overhaul',
        body: 'Rebuilt test-taking platform from ground up. Cut 11,000 lines of legacy code. Rebuilt freemium gating, Test Analysis dashboard, Onboarding, and Question Review. Lighthouse went from ~55 to 95+.',
      },
      {
        title: 'A/B Testing & Growth',
        body: '4 WebEngage A/B experiments — different CTA copy, onboarding steps, test completion nudges. Results: 28% rise in test completions, 35% rise in Test Analysis engagement.',
      },
    ],
    stack: [
      'React',
      'Next.js',
      'Vite',
      'TurboRepo',
      'Shadcn/ui',
      'Zustand',
      'React Query',
      'WebEngage',
      'TailwindCSS',
      'TypeScript',
      'FastAPI',
      'MongoDB',
      'Redis',
    ],
    platforms: [
      { domain: 'app.quizrr.in', name: 'Quizrr by MathonGo', url: 'https://app.quizrr.in', images: shots('/screenshots/quizrr', 6) },
    ],
  },
  {
    id: 'codebuddy',
    delay: 0.1,
    theme: {
      accent: 'var(--slate)',
      mid: 'var(--slate-mid)',
      border: 'rgba(27,61,110,0.18)',
    },
    intro: 'Agency role delivering two client-facing production platforms in a 3-month contract.',
    extraLinks: [],
    extraBullets: [],
    decisions: [
      {
        title: 'Freelance Marketplace',
        body: 'User profiles, gig listings, search/filter, proposal system, payment integration. Delivered in 6 weeks.',
      },
      {
        title: 'Car Rental Application',
        body: 'Booking system with availability calendar, multi-step checkout, admin panel. TTFB reduced from 1.3s to 750ms via Next.js SSR + SWR caching.',
      },
      {
        title: 'Engineering Practices',
        body: '6-hour PR turnaround, 5+ production deploys/week with zero rollbacks. SWR caching strategy eliminated stale data across both platforms.',
      },
    ],
    stack: ['Next.js', 'React', 'SWR', 'TailwindCSS', 'TypeScript', 'REST APIs'],
  },
  {
    id: 'fwc',
    delay: 0.15,
    theme: {
      accent: 'var(--gold)',
      mid: 'var(--gold-mid)',
      border: 'rgba(181,124,8,0.18)',
    },
    intro:
      'First professional role — built an enterprise HR SaaS product end-to-end over a year, including full authentication, RBAC, and real-time dashboards.',
    extraLinks: [],
    extraBullets: [],
    decisions: [
      {
        title: 'HR SaaS Dashboard',
        body: '3 role-specific dashboards with 20+ screens and 40+ API integrations — leave management, payroll, recruitment pipeline, attendance, performance reviews.',
      },
      {
        title: 'RBAC System',
        body: 'Client-side RBAC with permission matrices per role. Reduced role-based bugs by 45%, made adding new roles safe.',
      },
      {
        title: 'Real-Time Visualisations',
        body: '8+ Chart.js charts with Firebase real-time listeners for headcount, attrition, recruitment funnel, and performance distribution — all without page refresh.',
      },
      {
        title: 'Performance',
        body: 'Code splitting, lazy loading, image optimisation brought page load from 3.4s to 1.8s (47% improvement).',
      },
    ],
    stack: ['React', 'Redux', 'Chart.js', 'Firebase', 'REST APIs', 'CSS Modules', 'JavaScript'],
  },
]

export default function ExperiencePage() {
  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Sticky bar: Back link + logo + Hire Me */}
      <div className="sticky top-0 z-50 border-b" style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between gap-2">
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
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8" />
            <a
              href="mailto:maitrishmukherjeee@gmail.com"
              className="hidden sm:block font-body text-sm font-bold px-4 py-1.5 rounded-full"
              style={{ background: 'var(--coral)', color: '#fff' }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 pt-8 md:pt-14 pb-6 md:pb-10">
        <Reveal y={20}>
          <p className="font-mono text-xs font-medium mb-3" style={{ color: 'var(--text-muted)' }}>
            4 years · 4 companies
          </p>
          <h1 className="font-display font-black leading-[1.0] mb-4" style={{ fontSize: 'clamp(32px, 7vw, 76px)', color: 'var(--text)' }}>
            Every line I&apos;ve<br />
            <span style={{ color: 'var(--coral)' }}>shipped.</span>
          </h1>
          <p className="font-body text-sm md:text-lg max-w-xl" style={{ color: 'var(--text-dim)' }}>
            Full engineering history — system decisions, impact numbers, and the products I built. Not a summary.
          </p>
        </Reveal>
      </div>

      {/* Experience entries */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 pb-12 md:pb-24 space-y-6 md:space-y-16">
        {experience.map((entry, i) => {
          const detail = entryDetails[i]
          const theme = detail.theme
          const links = [...entry.links, ...detail.extraLinks]
          const bullets = [...entry.bullets.map(plainBullet), ...detail.extraBullets]

          return (
            <Reveal key={detail.id} y={28} delay={detail.delay}>
              <div
                id={detail.id}
                className="rounded-2xl md:rounded-3xl overflow-hidden"
                style={{ border: `1px solid ${theme.border}`, boxShadow: 'var(--shadow)', background: 'var(--surface)' }}
              >
                <div className="h-1" style={{ background: theme.accent }} />
                <div className="p-4 sm:p-6 md:p-10">
                  {/* Period · company · role · links */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-5 md:mb-6">
                    <div className="min-w-0 w-full sm:flex-1">
                      <span
                        className="inline-flex font-mono text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 rounded-full mb-2 md:mb-3"
                        style={{ background: theme.mid, color: theme.accent, border: `1px solid ${theme.border}` }}
                      >
                        {entry.period}
                      </span>
                      <h2 className="font-display font-black leading-tight mb-1 break-words" style={{ fontSize: 'clamp(18px, 3.5vw, 30px)', color: 'var(--text)' }}>
                        {entry.company}
                      </h2>
                      <p className="font-body text-sm font-bold break-words" style={{ color: 'var(--text-dim)' }}>
                        {entry.role} · {entry.location}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 sm:flex-shrink-0">
                      {links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full transition-all duration-150 hover:opacity-80 whitespace-nowrap"
                          style={{ background: theme.mid, color: theme.accent, border: `1px solid ${theme.border}` }}
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Intro */}
                  <div className="p-3 md:p-4 rounded-xl md:rounded-2xl mb-5 md:mb-7 font-body text-sm leading-relaxed" style={{ background: 'var(--parchment)', color: 'var(--text-dim)' }}>
                    {detail.intro}
                  </div>

                  {/* Metrics */}
                  {entry.metrics && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-5 md:mb-7">
                      {entry.metrics.map((metric) => (
                        <div key={metric.label} className="p-3 md:p-4 rounded-xl md:rounded-2xl text-center" style={{ background: theme.light, border: `1px solid ${theme.border}` }}>
                          <div className="font-display font-black leading-none mb-1" style={{ fontSize: 'clamp(18px, 4vw, 30px)', color: theme.accent }}>
                            {metric.value}
                          </div>
                          <div className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* System decisions */}
                  <div className="space-y-2 md:space-y-3 mb-5 md:mb-7">
                    {detail.decisions.map((decision) => (
                      <div key={decision.title} className="p-3 md:p-4 rounded-xl md:rounded-2xl" style={{ background: 'var(--parchment)', border: '1px solid var(--border)' }}>
                        <h3 className="font-display font-bold text-sm mb-1 md:mb-1.5" style={{ color: 'var(--text)' }}>
                          {decision.title}
                        </h3>
                        <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
                          {decision.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Key Contributions */}
                  <div className="mb-5 md:mb-7">
                    <h3 className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase mb-2 md:mb-3" style={{ color: 'var(--text-muted)' }}>
                      Key Contributions
                    </h3>
                    <ul className="space-y-2 md:space-y-2.5">
                      {bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
                          <span className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0" style={{ background: theme.accent }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div className="mb-5 md:mb-8">
                    <h3 className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase mb-2 md:mb-3" style={{ color: 'var(--text-muted)' }}>
                      Stack
                    </h3>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {detail.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] md:text-[11px] px-2 md:px-2.5 py-1 rounded-full"
                          style={{ background: theme.mid, color: theme.accent, border: `1px solid ${theme.border}` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Platforms Built */}
                  {detail.platforms && (
                    <div>
                      <h3 className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase mb-3 md:mb-4" style={{ color: 'var(--text-muted)' }}>
                        Platforms Built
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                        {detail.platforms.map((platform) => (
                          <PlatformCard
                            key={platform.domain}
                            platform={platform}
                            accent={theme.accent}
                            mid={theme.mid}
                            border={theme.border}
                          />
                        ))}
                      </div>
                      <div className="mt-3 md:mt-4 flex justify-end">
                        <a
                          href="/projects"
                          className="inline-flex items-center gap-1.5 font-body text-sm font-bold px-4 py-2 rounded-full transition-all duration-150 hover:opacity-80"
                          style={{ background: theme.mid, color: theme.accent, border: `1px solid ${theme.border}` }}
                        >
                          All projects →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      {/* Closing CTA */}
      <div className="border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-14 text-center">
          <h2 className="font-display font-black text-2xl md:text-4xl mb-4" style={{ color: 'var(--text)' }}>
            Liked what you read?<br />
            <span style={{ color: 'var(--coral)' }}>Let&apos;s build together.</span>
          </h2>
          <a
            href="mailto:maitrishmukherjeee@gmail.com"
            className="inline-flex font-body font-bold text-sm px-6 md:px-8 py-3 rounded-full hover:-translate-y-0.5 transition-transform break-all sm:break-normal"
            style={{ background: 'var(--coral)', color: '#fff' }}
          >
            maitrishmukherjeee@gmail.com →
          </a>
        </div>
      </div>
    </div>
  )
}
