'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-4 sm:px-6 md:px-16 py-3 transition-all duration-300 mx-auto"
      style={{
        maxWidth: 1200,
        background: scrolled ? 'rgba(246,243,238,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <Link href="/" className="font-display font-black text-base tracking-tight" style={{ color: 'var(--text)' }}>
        Maitrish<span style={{ color: 'var(--coral)' }}>.</span>
      </Link>

      <ul className="hidden md:flex gap-7 list-none items-center">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-body text-sm font-medium relative transition-colors duration-200"
              style={{ color: 'var(--text-dim)' }}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/projects"
            className="font-mono text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200 hover:opacity-80"
            style={{ background: 'var(--coral-light)', color: 'var(--coral)', border: '1px solid rgba(217,59,33,0.2)' }}
          >
            Projects →
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8" />
        <a
          href={`mailto:maitrishmukherjeee@gmail.com`}
          className="hidden md:block font-body text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: 'var(--coral)', color: '#fff' }}
        >
          Hire Me
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-1.5 rounded-xl transition-colors"
          style={{ background: 'var(--coral-light)', color: 'var(--coral)' }}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          className="absolute top-full left-4 right-4 md:hidden rounded-2xl p-4 flex flex-col gap-3"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm font-medium"
              style={{ color: 'var(--text-dim)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/projects"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-xs font-medium px-3 py-1.5 rounded-full w-fit"
            style={{ background: 'var(--coral-light)', color: 'var(--coral)', border: '1px solid rgba(217,59,33,0.2)' }}
          >
            Projects →
          </a>
          <a
            href="mailto:maitrishmukherjeee@gmail.com"
            className="font-body text-sm font-semibold px-5 py-2 rounded-full w-fit text-center"
            style={{ background: 'var(--coral)', color: '#fff' }}
          >
            Hire Me
          </a>
        </div>
      )}
    </motion.nav>
  )
}
