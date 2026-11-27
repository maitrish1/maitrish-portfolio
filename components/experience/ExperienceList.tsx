'use client'

import { useCallback, useState } from 'react'
import ExperienceDrawer from '@/components/experience/ExperienceDrawer'
import { education, jobs, site, skillCount, skillGroups, type Job } from '@/lib/content'

export default function ExperienceList() {
  const [active, setActive] = useState<{ job: Job; index: number } | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <>
      <div className="folio-subpage__list" data-reveal-group>
        {jobs.map((job, index) => (
          <button
            type="button"
            key={`${job.company}-${job.period}`}
            className="folio-subpage__item folio-subpage__item--action"
            data-reveal
            aria-haspopup="dialog"
            onClick={() => setActive({ job, index })}
          >
            <div>
              <h2>{job.company}</h2>
              <p>
                {job.role} · {job.location}
              </p>
              <p>{job.result}</p>
            </div>
            <span>{job.period} ↗</span>
          </button>
        ))}

        <div className="folio-subpage__item" data-reveal>
          <div>
            <h2>
              {education.degree} — {education.school}
            </h2>
            <p>{education.detail}</p>
          </div>
          <span>{education.label}</span>
        </div>

        <div className="folio-subpage__item" data-reveal>
          <div>
            <h2>{skillCount} skills</h2>
            <p>{skillGroups.map((group) => group.title).join(' · ')}</p>
          </div>
          <span>Skills</span>
        </div>

        <a className="folio-subpage__item" data-reveal href={site.resume}>
          <div>
            <h2>Full résumé ↗</h2>
          </div>
          <span>PDF</span>
        </a>
      </div>

      <ExperienceDrawer job={active?.job ?? null} index={active?.index ?? 0} onClose={close} />
    </>
  )
}
