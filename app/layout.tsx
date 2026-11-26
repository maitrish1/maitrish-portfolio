import type { Metadata, Viewport } from 'next'
import './reference.css'
import './globals.css'
import { site } from '@/lib/content'

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
  title: `${site.name} | ${site.role}`,
  description:
    'Full Stack Founding Engineer & Architect. First engineer at CheckMe Commerce, 10+ production frontends, 5 FastAPI microservices, 120+ APIs, 30,000+ customers. MCA @ IIT Patna.',
  keywords: [
    site.name, 'Full Stack Engineer', 'Founding Engineer', 'Full Stack Architect',
    'Next.js Developer', 'React Developer', 'TypeScript Developer', 'FastAPI',
    'AWS', 'IIT Patna', 'Bengaluru',
  ],
  authors: [{ name: site.name, url: site.website }],
  creator: site.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    title: `${site.name} | ${site.role}`,
    description:
      'Full Stack Founding Engineer & Architect. First engineer at CheckMe Commerce. MCA @ IIT Patna.',
    url: site.website,
    siteName: 'maitrish.com',
  },
  twitter: {
    card: 'summary',
    title: `${site.name} | ${site.role}`,
    description: 'Full Stack Founding Engineer & Architect. MCA @ IIT Patna.',
  },
}

export const viewport: Viewport = {
  themeColor: '#151513',
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site.website}/#website`,
      url: site.website,
      name: site.name,
      inLanguage: 'en-US',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${site.website}/#profile`,
      url: site.website,
      name: `${site.name} | ${site.role}`,
      isPartOf: { '@id': `${site.website}/#website` },
      mainEntity: { '@id': `${site.website}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${site.website}/#person`,
      name: site.name,
      jobTitle: site.role,
      email: site.email,
      telephone: site.phone,
      url: site.website,
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'IIT Patna' },
      sameAs: [site.linkedin, site.github, site.devto],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressCountry: 'IN',
      },
    },
  ],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;800&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
