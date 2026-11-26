import Link from 'next/link'
import { site, type ProjectCase } from '@/lib/content'

// Case study detail: real screenshots only, no simulated product UI.
export default function CaseStudy({ project }: { project: ProjectCase }) {
  return (
    <div className="case-study">
      <Link className="case-study__back" href="/projects">
        ← Back to projects
      </Link>

      <p className="case-study__eyebrow">CASE STUDY · {project.subtitle}</p>
      <h1 className="case-study__title">{project.name}</h1>
      <p className="case-study__subtitle">{project.subtitle}</p>
      <p className="case-study__description">{project.description}</p>

      <div className="case-study__meta">
        <a href={project.url} target="_blank" rel="noreferrer">
          Visit {project.visitLabel} ↗
        </a>
        <span>{project.screenshotCount} screenshots</span>
        <a href={site.resume}>Résumé ↗</a>
      </div>

      <div className="case-study__stack">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <div className="case-study__shots">
        {project.screenshots.map((src, i) => (
          <figure className="case-study__shot" key={src}>
            <img
              src={src}
              alt={`${project.name} screenshot ${i + 1}`}
              width={1200}
              height={750}
              loading="lazy"
            />
            <figcaption>
              Screenshot {i + 1} / {project.screenshotCount}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
