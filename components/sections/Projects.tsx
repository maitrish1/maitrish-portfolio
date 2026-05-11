'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '@/lib/data'

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: (index % 3) * 0.1 }}
      className="group relative border p-8 overflow-hidden transition-colors duration-300"
      style={{ background: 'var(--bg2)', borderColor: 'var(--border)' }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,136,0.3)'}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'}
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-12 h-12 pointer-events-none"
        style={{
          borderLeft: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
          background: 'rgba(0,255,136,0.05)',
        }}
      />

      <h3 className="font-display font-bold text-lg text-white mb-1">{project.name}</h3>
      <p className="font-mono text-[11px] tracking-widest uppercase mb-4" style={{ color: 'var(--muted)' }}>
        {project.company}
      </p>
      <p className="text-sm leading-relaxed mb-5" style={{ color: '#888' }}>
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map(tag => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2 py-0.5 border tracking-wide"
            style={{ color: 'var(--cyan)', borderColor: 'rgba(0,212,255,0.2)' }}
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs tracking-wide transition-all duration-200 pb-px"
        style={{ color: 'var(--green)', borderBottom: '1px solid rgba(0,255,136,0.3)' }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.color = '#fff'
          el.style.borderBottomColor = '#fff'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.color = 'var(--green)'
          el.style.borderBottomColor = 'rgba(0,255,136,0.3)'
        }}
      >
        {project.urlLabel} →
      </a>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-10 md:px-16 py-28 mx-auto" style={{ maxWidth: '1200px' }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs tracking-[4px] uppercase mb-4" style={{ color: 'var(--pink)' }}>
          <span style={{ opacity: 0.5 }}>// </span>Built
        </p>
        <h2
          className="font-display font-black leading-none mb-14"
          style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
        >
          Live <span style={{ color: 'var(--green)' }}>Projects</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
