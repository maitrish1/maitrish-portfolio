'use client'

import Reveal from '@/components/ui/Reveal'
import { skills } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-6 md:px-16 py-10 md:py-20 mx-auto" style={{ maxWidth: 1200 }}>
      <Reveal y={16} className="mb-8 md:mb-12">
        <span
          className="inline-flex font-mono text-xs font-medium px-3 py-1 rounded-full mb-3"
          style={{ background: 'var(--forest-light)', color: 'var(--forest)', border: '1px solid rgba(26,94,64,0.2)' }}
        >
          Stack
        </span>
        <h2 className="font-display font-black leading-tight" style={{ fontSize: 'clamp(24px, 5vw, 52px)', color: 'var(--text)' }}>
          What I <span style={{ color: 'var(--forest)' }}>Build With</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {skills.map((cat, i) => (
          <Reveal key={cat.title} y={20} delay={i * 0.05}>
            <div
              className="rounded-2xl p-4 md:p-6 transition-all duration-300 hover:-translate-y-0.5 h-full"
              style={{ background: 'var(--surface)', border: `1px solid ${cat.border}`, boxShadow: 'var(--shadow)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                <p className="font-mono text-[11px] tracking-widest uppercase font-medium" style={{ color: cat.color }}>
                  {cat.title}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded-full cursor-default transition-all duration-200"
                    style={{ color: 'var(--text-dim)', background: 'var(--parchment)', border: '1px solid var(--border)' }}
                  >
                    <img src={item.icon} alt="" className="w-3.5 h-3.5 object-contain" />
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
