import type { Metadata } from 'next'
import Shell from '@/components/shell/Shell'
import { education, jobs, site, skillCount, skillGroups } from '@/lib/content'

export const metadata: Metadata = {
  title: `Experience — ${site.name}`,
  description: `Engineering history of ${site.name} — ${site.role}, roles, results, education and skills.`,
  alternates: { canonical: '/experience' },
  openGraph: {
    title: `Experience — ${site.name}`,
    description: `Engineering history of ${site.name} — ${site.role}, roles, results, education and skills.`,
    url: '/experience',
    siteName: 'maitrish.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Experience — ${site.name}`,
    description: `Engineering history of ${site.name} — ${site.role}, roles, results, education and skills.`,
  },
}

export default function ExperiencePage() {
  return (
    <Shell>
      <div className="folio-subpage" id="experience">
        <p className="folio-subpage__eyebrow">Career</p>
        <h1 className="folio-subpage__title">Experience.</h1>

        <div className="folio-subpage__list" data-reveal-group>
          {jobs.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="folio-subpage__item" data-reveal
            >
              <div>
                <h2>{job.company}</h2>
                <p>
                  {job.role} · {job.location}
                </p>
                <p>{job.result}</p>
              </div>
              <span>{job.period}</span>
            </div>
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
      </div>
    </Shell>
  )
}
