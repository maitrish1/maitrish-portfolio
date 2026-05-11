'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(section => {
        const top = (section as HTMLElement).offsetTop - 120
        if (window.scrollY >= top) setActive(section.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-10 md:px-16 py-5 transition-all duration-300 mx-auto"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        maxWidth: '1200px',
      }}
    >
      <div className="font-mono text-sm tracking-widest" style={{ color: 'var(--green)' }}>
        mm<span style={{ color: 'var(--pink)' }}>.</span>dev
      </div>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="font-mono text-xs tracking-widest uppercase relative transition-colors duration-200 group"
              style={{ color: active === link.href.slice(1) ? 'var(--green)' : 'var(--muted)' }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 right-0 h-px transition-transform duration-200 origin-left scale-x-0 group-hover:scale-x-100"
                style={{ background: 'var(--green)' }}
              />
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:maitrish03@gmail.com"
        className="hidden md:block font-mono text-xs tracking-widest uppercase px-5 py-2 border transition-all duration-300 hover:text-black"
        style={{
          borderColor: 'var(--green)',
          color: 'var(--green)',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'var(--green)'
          el.style.color = '#000'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement
          el.style.background = 'transparent'
          el.style.color = 'var(--green)'
        }}
      >
        Hire Me
      </a>
    </motion.nav>
  )
}
