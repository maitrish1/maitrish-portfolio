'use client'

import { motion } from 'framer-motion'
import { personal, hero, stats } from '@/lib/data'

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative md:min-h-screen flex flex-col justify-center px-6 md:px-16 pt-20 md:pt-32 pb-8 md:pb-16 overflow-hidden mx-auto"
      style={{ maxWidth: 1200 }}
    >
      <div className="dot-grid absolute inset-0 pointer-events-none" style={{ opacity: 0.4 }} />
      <div
        className="absolute top-1/2 -translate-y-1/2 font-display font-black leading-none pointer-events-none select-none hidden lg:block"
        style={{ fontSize: '28vw', color: 'transparent', WebkitTextStroke: '1px var(--stone-200)', right: '-4%', letterSpacing: '-0.05em' }}
      >
        MM
      </div>

      <div className="flex flex-row items-center justify-between gap-6 sm:gap-12 relative z-10 w-full mb-8 lg:mb-0">
        <div className="flex-1 text-left w-full">
          <motion.div {...rise(0.1)} className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6 relative">
            <span
              className="inline-flex items-center gap-2 font-mono text-[9px] xs:text-[11px] md:text-xs font-medium px-2.5 xs:px-3 py-1.5 rounded-full"
              style={{ background: 'var(--coral-light)', color: 'var(--coral)', border: '1px solid rgba(217,59,33,0.2)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: 'var(--forest)' }} />
              <span className="hidden md:inline">{personal.badge}</span>
              <span className="md:hidden">{personal.badgeShort}</span>
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.2)}
            className="font-display font-black leading-[0.95] tracking-tight relative"
            style={{ fontSize: 'clamp(28px, 6.5vw, 100px)', color: 'var(--text)', marginBottom: '0.5rem' }}
          >
            Maitrish<br />
            <span style={{ color: 'var(--coral)' }}>Mukherjee</span>
          </motion.h1>

          <motion.p
            {...rise(0.3)}
            className="font-mono text-[8px] xs:text-[10px] sm:text-sm font-medium mb-4 sm:mb-6 relative"
            style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}
          >
            {personal.monoTitle}
          </motion.p>

          <motion.p
            {...rise(0.4)}
            className="font-body text-xs xs:text-sm md:text-base lg:text-lg leading-relaxed mb-5 sm:mb-9 max-w-lg relative"
            style={{ color: 'var(--text-dim)' }}
          >
            {hero.bioLead}
            <strong className="font-bold" style={{ color: 'var(--coral)' }}>{hero.bioHighlight}</strong>
            {hero.bioMiddle}
            <strong className="font-bold" style={{ color: 'var(--forest)' }}>{hero.bioHighlight2}</strong>
            {hero.bioTail}
          </motion.p>

          <motion.div {...rise(0.5)} className="flex gap-2 sm:gap-2.5 flex-wrap relative">
            <a
              href="#experience"
              className="font-body font-bold text-[11px] sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full cursor-pointer transition-all duration-200 hover:-translate-y-1"
              style={{ background: 'var(--coral)', color: '#fff', boxShadow: '0 4px 16px rgba(217,59,33,0.35)' }}
            >
              View Experience
            </a>
            <a
              href="/projects"
              className="font-body font-bold text-[11px] sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full cursor-pointer transition-all duration-200 hover:-translate-y-1"
              style={{ background: 'var(--forest-light)', color: 'var(--forest)', border: '1px solid rgba(26,94,64,0.2)' }}
            >
              See Projects
            </a>
            <a
              target="_blank"
              href={personal.resume}
              download={personal.resumeDownloadName}
              className="font-body font-bold text-[11px] sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full cursor-pointer transition-all duration-200 hover:-translate-y-1"
              style={{ background: 'var(--parchment)', color: 'var(--text-dim)', border: '1px solid var(--border)' }}
            >
              Resume ↓
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="relative group flex-shrink-0 w-[90px] xs:w-[120px] sm:w-[190px] md:w-[260px] lg:w-[320px] aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 10px 30px -8px rgba(0, 0, 0, 0.15)', border: '1px solid var(--border)' }}
        >
          <img
            src={personal.photo}
            alt={personal.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-black/10 pointer-events-none" />
        </motion.div>
      </div>

      <motion.div
        {...rise(0.7)}
        className="grid grid-cols-2 sm:flex gap-4 sm:gap-8 md:gap-12 mt-8 md:mt-14 pt-6 md:pt-8 flex-wrap relative z-10"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-display font-black text-xl md:text-3xl lg:text-4xl leading-none mb-1" style={{ color: s.color }}>
              {s.value}
            </div>
            <div className="font-mono text-[10px] tracking-wide uppercase" style={{ color: 'var(--text-muted)' }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
