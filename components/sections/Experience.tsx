'use client'

import Reveal from '@/components/ui/Reveal'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-6 md:px-16 py-10 md:py-20 mx-auto" style={{ maxWidth: 1200 }}>
      <Reveal y={16} className="flex flex-wrap items-end justify-between gap-3 mb-8 md:mb-12">
        <div>
          <span
            className="inline-flex font-mono text-xs font-medium px-3 py-1 rounded-full mb-3"
            style={{ background: 'var(--coral-light)', color: 'var(--coral)', border: '1px solid rgba(217,59,33,0.2)' }}
          >
            Career
          </span>
          <h2 className="font-display font-black leading-tight" style={{ fontSize: 'clamp(24px, 5vw, 52px)', color: 'var(--text)' }}>
            Where I&apos;ve <span style={{ color: 'var(--coral)' }}>Shipped</span>
          </h2>
        </div>
        <a
          href="/experience"
          className="inline-flex items-center gap-2 font-body text-sm font-bold px-4 py-2 rounded-full transition-all duration-150 hover:-translate-y-0.5"
          style={{ background: 'var(--coral)', color: '#fff' }}
        >
          Full history →
        </a>
      </Reveal>

      <div className="grid gap-4">
        {experience.map((job) => (
          <Reveal key={job.company} y={32}>
            <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
              <div className="h-[3px]" style={{ background: 'var(--coral)' }} />
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-5">
                  <div className="min-w-0 w-full sm:flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
                      <span
                        className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
                        style={{ background: 'var(--forest-light)', color: 'var(--forest)', border: '1px solid rgba(26,94,64,0.2)' }}
                      >
                        {job.period}
                      </span>
                      <span
                        className="font-mono text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap"
                        style={{ background: 'var(--parchment)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                      >
                        {job.location}
                      </span>
                    </div>
                    <h3 className="font-display font-black leading-tight mb-0.5 break-words" style={{ fontSize: 'clamp(16px, 3vw, 26px)', color: 'var(--text)' }}>
                      {job.company}
                    </h3>
                    <p className="font-body text-sm font-bold italic" style={{ color: 'var(--coral)' }}>
                      {job.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:flex-shrink-0">
                    {job.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[10px] px-2.5 py-1 rounded-full transition-all duration-150 hover:-translate-y-0.5 whitespace-nowrap"
                        style={{ background: 'var(--coral-light)', color: 'var(--coral)', border: '1px solid rgba(217,59,33,0.2)' }}
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>

                {job.metrics && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-5 rounded-xl overflow-hidden" style={{ background: 'var(--border)' }}>
                    {job.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col items-center justify-center py-3 px-2" style={{ background: 'var(--surface)' }}>
                        <span className="font-display font-black leading-none mb-1" style={{ fontSize: 'clamp(14px, 2.5vw, 22px)', color: m.color }}>
                          {m.value}
                        </span>
                        <span className="font-mono text-[9px] tracking-wide uppercase text-center" style={{ color: 'var(--text-muted)' }}>
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="space-y-2 mb-5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 leading-relaxed">
                      <span className="mt-[6px] flex-shrink-0 text-[7px]" style={{ color: 'var(--coral)' }}>◆</span>
                      <span className="font-body text-sm" style={{ color: 'var(--text-dim)' }} dangerouslySetInnerHTML={{ __html: b }} />
                    </li>
                  ))}
                </ul>

                <div className="flex justify-end">
                  <a
                    href="/experience"
                    className="inline-flex items-center gap-1.5 font-body text-xs font-bold px-4 py-2 rounded-full transition-all duration-150 hover:-translate-y-0.5"
                    style={{ background: 'var(--coral)', color: '#fff' }}
                  >
                    Full details
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
