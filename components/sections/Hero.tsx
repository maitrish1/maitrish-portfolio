'use client'

import { motion } from 'framer-motion'
import { personal, stats } from '@/lib/data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-10 md:px-16 pt-32 pb-20 overflow-hidden mx-auto"
      style={{ maxWidth: '1200px' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '20%', left: '-10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '10%', right: '-5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(255,45,120,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Tag */}
      <motion.div {...fadeUp(0.2)} className="font-mono text-xs tracking-[4px] uppercase mb-6" style={{ color: 'var(--green)' }}>
        <span style={{ color: 'var(--pink)' }}>&gt; </span>
        Full-Stack Engineer · IIT Patna · Bengaluru
      </motion.div>

      {/* Name */}
      <motion.h1
        {...fadeUp(0.4)}
        className="font-display font-black leading-none tracking-tight mb-3 select-none"
        style={{ fontSize: 'clamp(60px, 9vw, 120px)' }}
      >
        <span className="glitch block text-white" data-text="MAITRISH">MAITRISH</span>
        <span
          className="block"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(0,255,136,0.5)',
          }}
        >
          MUKHERJEE
        </span>
      </motion.h1>

      {/* Status */}
      <motion.div {...fadeUp(0.55)} className="flex items-center gap-4 mt-6 flex-wrap">
        <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: 'var(--green)', boxShadow: '0 0 6px var(--green)' }}
          />
          Available for opportunities
        </div>
        {/* <div
          className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-3 py-1 border"
          style={{ color: 'var(--green)', borderColor: 'rgba(0,255,136,0.25)', background: 'rgba(0,255,136,0.06)' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--green)', boxShadow: '0 0 6px var(--green)' }}
          />
          Open to work
        </div> */}
      </motion.div>

      {/* Summary */}
      <motion.p
        {...fadeUp(0.65)}
        className="font-mono text-sm leading-relaxed mt-8 mb-10 max-w-xl"
        style={{ color: 'var(--muted)' }}
      >
        Founding Engineer who built a{' '}
        <span style={{ color: 'var(--green)' }}>commerce platform from zero</span>{' '}
        — 10+ apps, 5 microservices, full AWS infra. Previously scaled{' '}
        <span style={{ color: 'var(--pink)' }}>MathonGo to 2.5M students</span>.
        <br />I don&apos;t just ship features. I own products.
        <span className="cursor-blink" />
      </motion.p>

      {/* CTAs */}
      <motion.div {...fadeUp(0.8)} className="flex gap-4 flex-wrap">
        <a href="#experience" className="hero-btn">
          View Experience
        </a>
        <a href="mailto:maitrish03@gmail.com" className="hero-btn hero-btn-ghost">
          Get In Touch
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        {...fadeUp(1.0)}
        className="flex gap-12 mt-16 pt-10 flex-wrap"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        {stats.map(stat => (
          <div key={stat.label}>
            <div
              className="font-display font-black text-4xl leading-none"
              style={{ color: 'var(--green)' }}
            >
              {stat.value}
            </div>
            <div className="font-mono text-[11px] tracking-widest uppercase mt-1.5" style={{ color: 'var(--muted)' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(1.2)}
        className="absolute bottom-10 left-10 md:left-16 flex items-center gap-3 font-mono text-[11px] tracking-widest"
        style={{ color: 'var(--muted)' }}
      >
        <div className="w-10 h-px relative overflow-hidden" style={{ background: 'var(--muted)' }}>
          <div
            className="scroll-line-inner absolute top-0 h-full w-full"
            style={{ background: 'var(--green)' }}
          />
        </div>
        scroll to explore
      </motion.div>

      <style jsx>{`
        .hero-btn {
          font-family: 'Share Tech Mono', monospace;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 14px 28px;
          border: 1px solid var(--green);
          color: var(--green);
          background: transparent;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: color 0.3s;
          display: inline-block;
        }
        .hero-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%; right: 0; bottom: 0;
          background: var(--green);
          transition: left 0.3s ease;
          z-index: -1;
        }
        .hero-btn:hover { color: #000; }
        .hero-btn:hover::before { left: 0; }
        .hero-btn-ghost {
          border-color: var(--muted);
          color: var(--muted);
        }
        .hero-btn-ghost::before { background: var(--muted); }
      `}</style>
    </section>
  )
}
