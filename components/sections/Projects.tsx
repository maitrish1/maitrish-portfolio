'use client'

import Reveal from '@/components/ui/Reveal'
import ScreenshotCarousel from '@/components/ui/ScreenshotCarousel'
import { projects, screenshotCounts } from '@/lib/data'

export default function Projects() {
  return (
    <section className="py-10 md:py-20" style={{ background: 'var(--parchment)' }}>
      <div className="px-4 sm:px-6 md:px-16 mx-auto" style={{ maxWidth: 1200 }}>
        <Reveal y={16} className="flex flex-wrap items-end justify-between gap-3 mb-8 md:mb-12">
          <div>
            <span
              className="inline-flex font-mono text-xs font-medium px-3 py-1 rounded-full mb-3"
              style={{ background: 'var(--coral-light)', color: 'var(--coral)', border: '1px solid rgba(217,59,33,0.2)' }}
            >
              Platforms Built
            </span>
            <h2 className="font-display font-black leading-tight" style={{ fontSize: 'clamp(24px, 4vw, 44px)', color: 'var(--text)' }}>
              Live in <span style={{ color: 'var(--coral)' }}>production.</span>
            </h2>
          </div>
          <a
            href="/projects"
            className="font-body text-sm font-bold px-4 py-2 rounded-full transition-all duration-150 hover:-translate-y-0.5"
            style={{ background: 'var(--coral)', color: '#fff' }}
          >
            All projects →
          </a>
        </Reveal>

        <div className="flex flex-col gap-4 md:gap-6">
          {projects.map((p) => (
            <Reveal key={p.domain} y={24}>
              <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--surface)', border: '1px solid rgba(217,59,33,0.14)', boxShadow: 'var(--shadow)' }}>
                <div className="grid md:grid-cols-[1fr_1.5fr] items-stretch">
                  <div className="p-4 sm:p-5 md:p-7 lg:p-8 flex flex-col justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg mb-3 md:mb-4 w-fit max-w-full overflow-hidden" style={{ background: 'var(--parchment)', border: '1px solid var(--border)' }}>
                        <div className="flex gap-1 flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-red-400/60" />
                          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                          <div className="w-2 h-2 rounded-full bg-green-400/60" />
                        </div>
                        <span className="font-mono text-[10px] truncate" style={{ color: 'var(--text-muted)' }}>{p.domain}</span>
                      </div>
                      <h3 className="font-display font-black mb-1" style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', color: 'var(--text)' }}>
                        {p.name}
                      </h3>
                      <p className="font-body text-sm font-bold italic mb-2" style={{ color: 'var(--coral)' }}>{p.subtitle}</p>
                      <p className="font-body text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-none" style={{ color: 'var(--text-dim)' }}>
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] px-2 py-0.5 rounded-full"
                            style={{ background: 'var(--parchment)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-body text-sm font-bold px-4 py-2 md:px-5 md:py-2.5 rounded-full w-fit transition-all duration-200 hover:-translate-y-0.5"
                      style={{ background: 'var(--coral)', color: '#fff' }}
                    >
                      Visit {p.visitLabel}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                  <div className="border-t md:border-t-0 md:border-l" style={{ borderColor: 'rgba(217,59,33,0.1)' }}>
                    <ScreenshotCarousel
                      dir={p.screenshotDir}
                      count={screenshotCounts[p.screenshotDir]}
                      altBase={p.name}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
