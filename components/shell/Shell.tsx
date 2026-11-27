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

const clamp = (value: number, low: number, high: number) =>
  Math.min(Math.max(value, low), high)

// Copied from the reference site's shipped deck hook. Card height is chosen so
// a whole number of cards fills the rail viewport; cards below the fold are
// compressed, lifted and faded so they stack behind the visible ones.
function fitCardHeight(height: number): number {
  let best = { cardHeight: 64, distance: Number.POSITIVE_INFINITY }
  for (let n = 3; n <= 8; n += 1) {
    const cardHeight = (height - 8 * (n - 1)) / (n + 0.5)
    if (cardHeight < 64 || cardHeight > 95) continue
    const distance = Math.abs(cardHeight - 72)
    if (distance < best.distance) best = { cardHeight, distance }
  }
  if (!Number.isFinite(best.distance)) {
    const n = clamp(Math.round((height + 8) / 80 - 0.5), 3, 8)
    return clamp((height - 8 * (n - 1)) / (n + 0.5), 64, 95)
  }
  return best.cardHeight
}

export default function Shell({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLElement>(null)
  const paneRef = useRef<HTMLElement>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Rail "deck": cards fill the viewport, then stack behind one another.
  useEffect(() => {
    const viewport = scrollerRef.current // the scrolling element
    const track = trackRef.current // the card container
    if (!viewport || !track) return
    const desktop = window.matchMedia('(min-width: 960px)')
    let frame: number | null = null
    let disposed = false
    let cards: HTMLElement[] = []

    const reset = (card: HTMLElement) => {
      card.style.removeProperty('opacity')
      card.style.removeProperty('pointer-events')
      card.style.removeProperty('transform')
      card.style.removeProperty('z-index')
      delete card.dataset.depthLayer
    }

    const paint = () => {
      frame = null
      if (!viewport.dataset.deckActive) return
      const cardHeight = Number.parseFloat(track.style.getPropertyValue('--rail-card-height'))
      const step = cardHeight + 8
      const start = viewport.clientHeight - 1.5 * cardHeight
      const range = 2.5 * step
      cards.forEach((card, i) => {
        const offset = card.offsetTop - viewport.scrollTop
        const depth = clamp((offset - start) / range, 0, 1)
        card.style.zIndex = String(cards.length - i)
        if (depth <= 0) {
          reset(card)
          card.style.zIndex = String(cards.length - i)
          return
        }
        const scale = 1 - 0.5 * depth
        const lift = -2 * step * depth
        const opacity = clamp((1 - depth) / 0.3, 0, 1)
        card.dataset.depthLayer = 'true'
        card.style.transform = `translateY(${lift}px) scale(${scale})`
        card.style.opacity = String(opacity)
        card.style.pointerEvents = opacity < 0.01 ? 'none' : 'auto'
      })
    }

    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(paint)
    }

    const layout = () => {
      frame = null
      cards = Array.from(track.querySelectorAll<HTMLElement>('[data-project-id]'))
      const disabled = !desktop.matches || cards.length < 2 || reduceMotion()
      if (disabled) {
        cards.forEach(reset)
        track.style.removeProperty('--rail-card-gap')
        track.style.removeProperty('--rail-card-height')
        track.style.removeProperty('--rail-end-space')
        delete viewport.dataset.deckActive
        return
      }
      const cardHeight = fitCardHeight(viewport.clientHeight)
      track.style.setProperty('--rail-card-gap', '8px')
      track.style.setProperty('--rail-card-height', `${cardHeight}px`)
      track.style.setProperty('--rail-end-space', `${0.5 * cardHeight}px`)
      viewport.dataset.deckActive = 'true'
      paint()
    }

    const relayout = () => {
      if (frame !== null) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(layout)
    }

    const observer = new ResizeObserver(relayout)
    observer.observe(viewport)
    desktop.addEventListener('change', relayout)
    viewport.addEventListener('scroll', schedule, { passive: true })
    if (document.fonts) {
      document.fonts.ready.then(() => {
        if (!disposed) relayout()
      })
    }
    relayout()

    return () => {
      disposed = true
      observer.disconnect()
      desktop.removeEventListener('change', relayout)
      viewport.removeEventListener('scroll', schedule)
      if (frame !== null) cancelAnimationFrame(frame)
      cards.forEach(reset)
      track.style.removeProperty('--rail-card-gap')
      track.style.removeProperty('--rail-card-height')
      track.style.removeProperty('--rail-end-space')
      delete viewport.dataset.deckActive
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
            <nav className="project-index" aria-label="Selected projects" ref={trackRef}>
              {railProjects.map((project) => (
                <Link
                  key={project.slug}
                  id={`project-${project.slug}`}
                  className="project-index__link"
                  href={`/project/${project.slug}`}
                  data-project-id={project.slug}
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
                <Link
                  key={anchor.href}
                  className="project-index__link project-index__link--section"
                  href={`/${anchor.href}`}
                  data-project-id={`section-${anchor.label.toLowerCase()}`}
                >
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
