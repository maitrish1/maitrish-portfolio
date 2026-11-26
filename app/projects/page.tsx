import type { Metadata } from 'next'
import Link from 'next/link'
import Shell from '@/components/shell/Shell'
import { projectCases, site } from '@/lib/content'

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
  description: `Selected production work by ${site.name}, ${site.role}.`,
  alternates: { canonical: '/projects' },
  openGraph: {
    title: `Projects — ${site.name}`,
    description: `Selected production work by ${site.name}, ${site.role}.`,
    url: '/projects',
    siteName: 'maitrish.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects — ${site.name}`,
    description: `Selected production work by ${site.name}, ${site.role}.`,
  },
}

export default function ProjectsPage() {
  return (
    <Shell>
      <div className="folio-subpage" id="projects">
        <p className="folio-subpage__eyebrow">Selected work</p>
        <h1 className="folio-subpage__title">Projects.</h1>

        <div className="folio-subpage__list">
          {projectCases.map((project, index) => (
            <Link
              key={project.slug}
              className="folio-subpage__item"
              href={`/project/${project.slug}`}
            >
              <div>
                <h2>{project.name}</h2>
                <p>{project.subtitle}</p>
              </div>
              <span>{String(index + 1).padStart(2, '0')} ↗</span>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  )
}
