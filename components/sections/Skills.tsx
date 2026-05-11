'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '@/lib/data'

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.07 }}
      className="border p-7 transition-colors duration-300"
      style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,136,0.3)'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
    >
      <p className="font-mono text-[11px] tracking-[3px] uppercase mb-4" style={{ color: 'var(--pink)' }}>
        {skill.category}
      </p>
      <div className="flex flex-wrap gap-2">
        {skill.tags.map(tag => (
          <span
            key={tag}
            className="font-mono text-xs px-2.5 py-1 border tracking-wide transition-all duration-200"
            style={{
              color: 'var(--green)',
              background: 'rgba(0,255,136,0.05)',
              borderColor: 'rgba(0,255,136,0.15)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(0,255,136,0.15)'
              el.style.color = '#fff'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(0,255,136,0.05)'
              el.style.color = 'var(--green)'
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-10 md:px-16 py-28 mx-auto" style={{ maxWidth: '1200px', background: 'var(--bg2)' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs tracking-[4px] uppercase mb-4" style={{ color: 'var(--pink)' }}>
          <span style={{ opacity: 0.5 }}>// </span>Stack
        </p>
        <h2
          className="font-display font-black leading-none mb-14"
          style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
        >
          What I <span style={{ color: 'var(--green)' }}>Build With</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {skills.map((skill, i) => (
          <SkillCard key={skill.category} skill={skill} index={i} />
        ))}
      </div>
    </section>
  )
}
