'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { railProjects, sectionAnchors, site } from '@/lib/content'

export function ArrowUpRight({ size = 15, className = '', strokeWidth = 1.5 }: {
  size?: number
  className?: string
  strokeWidth?: number
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`lucide lucide-arrow-up-right ${className}`.trim()}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Shell({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const paneRef = useRef<HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Rail "deck": cards stack and compress as the rail scrolls.
  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller || reduceMotion()) return
    let frame = 0
    const links = Array.from(scroller.querySelectorAll<HTMLElement>('.project-index__link'))

    const paint = () => {
      const top = scroller.scrollTop
      const step = 84
      links.forEach((link, i) => {
        const depth = Math.max(0, top / step - i)
        if (depth <= 0) {
          link.style.transform = ''
          link.style.opacity = ''
        } else if (depth >= 2.4) {
          link.style.transform = 'translateY(-159px) scale(.5)'
          link.style.opacity = '0'
        } else if (depth >= 1.4) {
          link.style.transform = 'translateY(-127px) scale(.599)'
          link.style.opacity = '.66'
        } else {
          link.style.transform = `translateY(-${Math.round(depth * 63)}px) scale(${1 - depth * 0.2})`
          link.style.opacity = ''
        }
      })
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(paint)
    }
    scroller.setAttribute('data-deck-active', 'true')
    scroller.addEventListener('scroll', onScroll, { passive: true })
    paint()
    return () => {
      scroller.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
      scroller.removeAttribute('data-deck-active')
    }
  }, [])

  // Hash anchors scroll inside the pane, not the window.
  useEffect(() => {
    const pane = paneRef.current
    if (!pane) return
    const scrollToHash = (hash: string) => {
      if (!hash || hash === '#') return
      const target = pane.querySelector<HTMLElement>(hash)
      if (!target) return
      target.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' })
      target.focus({ preventScroll: true })
    }
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href') || ''
      if (!href.startsWith('#')) return
      const id = href.slice(1)
      if (!pane.querySelector(`#${CSS.escape(id)}`)) return
      event.preventDefault()
      history.replaceState(null, '', href)
      scrollToHash(href)
      setMobileOpen(false)
    }
    pane.addEventListener('click', onClick)
    if (window.location.hash) {
      window.setTimeout(() => scrollToHash(window.location.hash), 60)
    }
    return () => pane.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="portfolio-shell">
      <a className="portfolio-skip-link" href="#main-content">Skip to content</a>

      <div className="mobile-project-bar">
        <Link className="mobile-project-bar__name" href="/">{site.name}</Link>
        <button
          type="button"
          className="mobile-project-bar__projects"
          aria-expanded={mobileOpen}
          aria-controls="mobile-project-index"
          onClick={() => setMobileOpen((v) => !v)}
        >
          Projects
        </button>
        <Link className="mobile-project-bar__contact" href="/#contact">Contact ↗</Link>
        {mobileOpen && (
          <nav id="mobile-project-index" aria-label="Projects">
            {railProjects.map((project) => (
              <Link key={project.slug} href={`/project/${project.slug}`}>
                {project.title}
              </Link>
            ))}
          </nav>
        )}
      </div>

      <aside className="project-rail" aria-label="Portfolio navigation">
        <header className="rail-masthead">
          <div className="rail-masthead__utility">
            <span>{site.availability}</span>
            <Link href="/" aria-current="page">
              <span>About</span>
              <ArrowUpRight />
            </Link>
          </div>
          <div className="rail-masthead__identity">
            <img className="rail-masthead__photo" src={site.photo} alt={site.name} />
            <div className="rail-masthead__name">
              <span>{site.firstName}</span>
              <span className="rail-masthead__surname-line">
                <span>{site.lastName}</span>
                <span className="rail-masthead__role">{site.role}</span>
              </span>
            </div>
          </div>
          <div className="rail-contact-links">
            <a href={`mailto:${site.email}`}><span>Email</span><ArrowUpRight /></a>
            <a href={site.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><ArrowUpRight /></a>
            <a href={site.resume} download><span>Résumé</span><ArrowUpRight /></a>
          </div>
          <div className="rail-masthead__projects-heading">
            <span>Selected projects</span>
            <span>{railProjects.length}</span>
          </div>
        </header>

        <div className="project-rail__viewport">
          <div className="project-rail__scroller" ref={scrollerRef}>
            <nav className="project-index" aria-label="Selected projects" data-reveal-group>
              {railProjects.map((project) => (
                <Link
                  key={project.slug}
                  id={`project-${project.slug}`}
                  className="project-index__link"
                  href={`/project/${project.slug}`}
                  data-reveal
                >
                  <span className="project-index__thumb">
                    <img className="project-index__image" src={project.image} alt="" loading="lazy" />
                  </span>
                  <span className="project-index__copy">
                    <span className="project-index__title">{project.title}</span>
                    <span className="project-index__thesis">{project.thesis}</span>
                  </span>
                  <ArrowUpRight size={13} className="project-index__arrow" strokeWidth={2} />
                </Link>
              ))}
              {sectionAnchors.map((anchor) => (
                <Link key={anchor.href} className="project-index__link project-index__link--section" href={`/${anchor.href}`}>
                  <span className="project-index__thumb" aria-hidden="true" />
                  <span className="project-index__copy">
                    <span className="project-index__title">{anchor.label}</span>
                    <span className="project-index__thesis">Jump to section</span>
                  </span>
                  <ArrowUpRight size={13} className="project-index__arrow" strokeWidth={2} />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      <main className="document-pane" id="main-content" tabIndex={-1} ref={paneRef}>
        <div className="document-pane__transition">
          <article className="folio-home">{children}</article>
        </div>
      </main>
    </div>
  )
}
