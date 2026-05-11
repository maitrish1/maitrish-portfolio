'use client'

import { motion } from 'framer-motion'
import { personal } from '@/lib/data'

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="px-10 md:px-16 py-28 text-center mx-auto"
        style={{ borderTop: '1px solid var(--border)', maxWidth: '1200px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[4px] uppercase mb-6" style={{ color: 'var(--muted)' }}>
            Let&apos;s build something together
          </p>

          <a
            href={`mailto:${personal.email}`}
            className="font-display font-black text-white inline-block relative group transition-colors duration-300"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--green)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#fff'}
          >
            {personal.email}
            <span
              className="absolute -bottom-1 left-0 right-0 h-0.5 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
              style={{ background: 'var(--green)' }}
            />
          </a>

          <div className="flex justify-center gap-10 mt-12 flex-wrap">
            {[
              { label: 'LinkedIn', url: personal.links.linkedin },
              { label: 'GitHub', url: personal.links.github },
              { label: 'Dev.to', url: personal.links.devto },
              { label: 'ChqMe', url: 'https://chqme.com' },
            ].map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase flex items-center gap-2 transition-colors duration-200"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--green)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--muted)'}
              >
                <span>↗</span>{link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <footer
        className="px-10 md:px-16 py-6 flex flex-wrap justify-between items-center gap-4 mx-auto"
        style={{ borderTop: '1px solid var(--border)', maxWidth: '1200px' }}
      >
        <span className="font-mono text-xs tracking-wide" style={{ color: 'var(--muted)' }}>
          © 2026 Maitrish Mukherjee
        </span>
        <span className="font-mono text-xs tracking-wide" style={{ color: 'var(--muted)' }}>
          maitrish.com<span className="cursor-blink" style={{ marginLeft: '2px' }} />
        </span>
        <span className="font-mono text-xs tracking-wide" style={{ color: 'var(--muted)' }}>
          Bengaluru, KA · Open to relocate
        </span>
      </footer>
    </>
  )
}
