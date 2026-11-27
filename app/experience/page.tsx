import type { Metadata } from 'next'
import Shell from '@/components/shell/Shell'
import ExperienceList from '@/components/experience/ExperienceList'
import { site } from '@/lib/content'

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
        <ExperienceList />
      </div>
    </Shell>
  )
}
