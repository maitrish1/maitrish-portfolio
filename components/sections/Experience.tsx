'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '@/lib/data'

function ExpCard({ exp, index }: { exp: typeof experience[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.1 }}
      className="group relative border p-8 md:p-10 overflow-hidden transition-colors duration-300"
      style={{
        background: 'var(--bg2)',
        borderColor: 'var(--border)',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(0,255,136,0.4)'
        el.style.background = '#0f0f0f'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'var(--border)'
        el.style.background = 'var(--bg2)'
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute top-0 left-0 w-[3px] h-0 transition-all duration-500 group-hover:h-full"
        style={{ background: 'var(--green)' }}
      />

      {/* Header */}
      <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
        <h3 className="font-display font-bold text-xl text-white">{exp.role}</h3>
        <span
          className="font-mono text-xs tracking-wider px-3 py-1 border"
          style={{ color: 'var(--green)', borderColor: 'rgba(0,255,136,0.2)', background: 'rgba(0,255,136,0.06)' }}
        >
          {exp.period}
        </span>
      </div>

      {/* Company + links */}
      <div className="flex flex-wrap items-center gap-4 mb-5">
        <span className="font-mono text-sm" style={{ color: 'var(--muted)' }}>
          {exp.company} · {exp.location}
        </span>
        <div className="flex flex-wrap gap-3">
          {exp.links.map(link => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wide transition-colors duration-200 pb-px"
              style={{
                color: 'var(--cyan)',
                borderBottom: '1px solid rgba(0,212,255,0.3)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = '#fff'
                el.style.borderBottomColor = '#fff'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.color = 'var(--cyan)'
                el.style.borderBottomColor = 'rgba(0,212,255,0.3)'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bullets */}
      <ul className="space-y-2.5 mb-6">
        {exp.bullets.map((bullet, i) => (
          <li key={i} className="text-sm leading-relaxed pl-5 relative" style={{ color: '#999' }}>
            <span
              className="absolute left-0 top-[5px] text-[10px]"
              style={{ color: 'var(--green)' }}
            >
              ▸
            </span>
            <span dangerouslySetInnerHTML={{
              __html: bullet
                .replace(/SharkNinja|Nester|Tiron|EcoFlow/g, '<strong style="color:#fff">$&</strong>')
                .replace(/\d[\d,K+M→.%]+[+K%M]*/g, match =>
                  /\d/.test(match) ? `<strong style="color:#fff">${match}</strong>` : match
                )
            }} />
          </li>
        ))}
      </ul>

      {/* Metrics */}
      {exp.metrics.length > 0 && (
        <div
          className="flex flex-wrap gap-6 pt-5"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          {exp.metrics.map(m => (
            <div key={m.label}>
              <div className="font-display font-bold text-xl" style={{ color: 'var(--green)' }}>
                {m.value}
              </div>
              <div className="font-mono text-[10px] tracking-wider uppercase mt-0.5" style={{ color: 'var(--muted)' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="px-10 md:px-16 py-28 mx-auto" style={{ maxWidth: '1200px' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs tracking-[4px] uppercase mb-4" style={{ color: 'var(--pink)' }}>
          <span style={{ opacity: 0.5 }}>// </span>Career
        </p>
        <h2
          className="font-display font-black leading-none mb-14"
          style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
        >
          Where I&apos;ve <span style={{ color: 'var(--green)' }}>Shipped</span>
        </h2>
      </motion.div>

      <div className="grid gap-0.5">
        {experience.map((exp, i) => (
          <ExpCard key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
