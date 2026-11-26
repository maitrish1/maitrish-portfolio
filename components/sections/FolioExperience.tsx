import Link from 'next/link'
import { ArrowUpRight } from '@/components/shell/Shell'
import { education, jobs, site } from '@/lib/content'

export default function FolioExperience() {
  return (
    <section className="folio-experience" id="experience" aria-labelledby="folio-experience-title">
      <div className="folio-experience__heading">
        <span className="folio-label">Experience</span>
        <h2 id="folio-experience-title" tabIndex={-1}>
          Where I’ve <br />
          been.
        </h2>
        <span>
          <a className="folio-text-link" href={site.resume} target="_blank" rel="noreferrer">
            Full résumé <ArrowUpRight size={15} strokeWidth={2} />
          </a>{' '}
          <Link className="folio-text-link" href="/experience">
            All experience <ArrowUpRight size={15} strokeWidth={2} />
          </Link>
        </span>
      </div>
      <div className="folio-jobs">
        {jobs.map((job) => (
          <article className="folio-job" key={`${job.company}-${job.period}`}>
            <div className="folio-job__meta">
              <p className="folio-job__company">{job.company}</p>
              <time>{job.period}</time>
            </div>
            <h3>{job.role}</h3>
            <p className="folio-job__result">{job.result}</p>
          </article>
        ))}
      </div>
      <div className="folio-education">
        <span className="folio-label">Education</span>
        <p>
          <strong>{education.degree}</strong>
          <span>{education.school}</span>
        </p>
      </div>
    </section>
  )
}
