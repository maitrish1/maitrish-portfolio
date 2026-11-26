import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Shell from '@/components/shell/Shell'
import CaseStudy from '@/components/case-study/CaseStudy'
import { projectCases, site } from '@/lib/content'

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projectCases.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projectCases.find((entry) => entry.slug === slug)
  if (!project) return {}

  const title = `${project.name} — ${site.name}`
  const description = project.description

  return {
    title,
    description,
    alternates: { canonical: `/project/${slug}` },
    openGraph: { title, description, url: `/project/${slug}`, siteName: 'maitrish.com', type: 'article' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = projectCases.find((entry) => entry.slug === slug)
  if (!project) notFound()

  return (
    <Shell>
      <CaseStudy project={project} />
    </Shell>
  )
}
