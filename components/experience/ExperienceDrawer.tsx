'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { site, type Job } from '@/lib/content'
import { experienceDetails } from '@/lib/experience-details'
import { ArrowUpRight } from '@/components/shell/Shell'

type Props = {
  job: Job | null
  index: number
  onClose: () => void
}

export default function ExperienceDrawer({ job, index, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const open = job !== null
  const detail = job ? experienceDetails[index] : undefined

  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement | null
    document.documentElement.classList.add('drawer-open')
    closeRef.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key === 'Tab' && panelRef.current) {
        const focusable = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('drawer-open')
      previous?.focus()
    }
  }, [open, onClose])

  if (!open || typeof document === 'undefined') return null

  return createPortal(
    <>
      <div className="experience-backdrop" onClick={onClose} aria-hidden="true" />
      <div
        className="experience-drawer"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="experience-drawer-title"
      >
        <div className="experience-drawer__bar">
          <span className="experience-drawer__eyebrow">Experience detail</span>
          <button type="button" className="experience-drawer__close" onClick={onClose} ref={closeRef}>
            Close <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="experience-drawer__body">
          <p className="experience-drawer__period">{detail?.period ?? job.period}</p>
          <h2 className="experience-drawer__title" id="experience-drawer-title">
            {detail?.company ?? job.company}
          </h2>
          <p className="experience-drawer__role">{detail?.role ?? job.role}</p>

          {detail?.blurb && <p className="experience-drawer__blurb">{detail.blurb}</p>}
          {detail?.context && <p className="experience-drawer__context">{detail.context}</p>}

          {detail && detail.highlights.length > 0 && (
            <div className="experience-drawer__highlights">
              {detail.highlights.map((item) => (
                <div className="experience-drawer__highlight" key={item.label}>
                  <span className="experience-drawer__highlight-value">{item.value}</span>
                  <span className="experience-drawer__highlight-label">{item.label}</span>
                </div>
              ))}
            </div>
          )}

          {detail && detail.bullets.length > 0 && (
            <>
              <h3 className="experience-drawer__section-title">Key contributions</h3>
              <ul className="experience-drawer__bullets">
                {detail.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </>
          )}

          {detail && detail.links.length > 0 && (
            <div className="experience-drawer__links">
              {detail.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                  {link.label} <ArrowUpRight size={13} strokeWidth={2} />
                </a>
              ))}
            </div>
          )}

          <a className="experience-drawer__resume" href={site.resume} target="_blank" rel="noreferrer">
            Full résumé (PDF) <ArrowUpRight size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </>,
    document.body,
  )
}
