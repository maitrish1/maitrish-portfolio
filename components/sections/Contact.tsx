'use client'

import Reveal from '@/components/ui/Reveal'
import { personal } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 md:px-16 py-10 md:py-20 mx-auto" style={{ maxWidth: 1200, borderTop: '1px solid var(--border)' }}>
      <Reveal y={24}>
        <div
          className="rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
          style={{ background: 'var(--surface)', border: '1px solid rgba(217,59,33,0.18)', boxShadow: 'var(--shadow)' }}
        >
          <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, var(--coral-light) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, var(--forest-light) 0%, transparent 70%)' }} />

          <span
            className="inline-flex font-mono text-[11px] font-medium px-3 py-1 rounded-full mb-4"
            style={{ background: 'var(--coral-light)', color: 'var(--coral)', border: '1px solid rgba(217,59,33,0.2)' }}
          >
            Let&apos;s build something together
          </span>
          <h2 className="font-display font-black leading-tight mb-3" style={{ fontSize: 'clamp(20px, 5vw, 52px)', color: 'var(--text)' }}>
            Have a project in mind?
          </h2>
          <p className="font-body text-sm md:text-base mb-6 md:mb-8 max-w-md mx-auto" style={{ color: 'var(--text-dim)' }}>
            I&apos;m open to full-time Full Stack Founding Engineer &amp; Architect roles, founding engineer positions, and interesting contract work.
          </p>
          <div className="mb-6 md:mb-8 overflow-hidden px-2">
            <a
              href={`mailto:${personal.email}`}
              className="font-display font-bold inline-block transition-colors duration-200 break-all"
              style={{ fontSize: 'clamp(13px, 3vw, 36px)', color: 'var(--text)' }}
            >
              {personal.email}
            </a>
          </div>
          <div className="flex justify-center gap-2 flex-wrap">
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1"
              style={{ color: 'var(--text-dim)', background: 'var(--parchment)', border: '1px solid var(--border)' }}
            >
              LinkedIn ↗
            </a>
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1"
              style={{ color: 'var(--text-dim)', background: 'var(--parchment)', border: '1px solid var(--border)' }}
            >
              GitHub ↗
            </a>
            <a
              href={personal.links.devto}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1"
              style={{ color: 'var(--text-dim)', background: 'var(--parchment)', border: '1px solid var(--border)' }}
            >
              Dev.to ↗
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
