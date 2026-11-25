import type { Metadata } from 'next'
import './live.css'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://maitrish.com'),
  title: 'Maitrish Mukherjee — Full Stack Founding Engineer & Architect | IIT Patna',
  description:
    'Full Stack Founding Engineer & Architect with 4+ years building high-scale consumer products. Scaled MathonGo to 2.5M students. Built CheckMe Commerce from zero (30K+ customers, SharkNinja, EcoFlow). MCA @ IIT Patna. Based in Bengaluru.',
  keywords: [
    'Maitrish Mukherjee', 'Maitrish', 'Full Stack Engineer', 'Full Stack Developer',
    'Founding Engineer', 'Full Stack Architect', 'Software Engineer', 'Next.js Developer',
    'React Developer', 'TypeScript Developer', 'Software Developer India',
    'Full Stack Engineer Bengaluru', 'Software Engineer IIT Patna', 'MCA IIT Patna',
    'Full Stack Developer Bengaluru', 'AWS Developer', 'Commerce Platform Engineer',
    'FastAPI Developer', 'Python Developer',
  ],
  authors: [{ name: 'Maitrish Mukherjee', url: 'https://maitrish.com' }],
  creator: 'Maitrish Mukherjee',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: 'https://maitrish.com' },
  openGraph: {
    title: 'Maitrish Mukherjee — Full Stack Founding Engineer & Architect | IIT Patna',
    description:
      'Full Stack Founding Engineer & Architect with 4+ years building high-scale consumer products. Scaled MathonGo to 2.5M students. Built CheckMe Commerce from zero (30K+ customers, SharkNinja, EcoFlow). MCA @ IIT Patna. Based in Bengaluru.',
    url: 'https://maitrish.com',
    siteName: 'maitrish.com',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@maitrish',
    title: 'Maitrish Mukherjee — Full Stack Founding Engineer & Architect',
    description:
      'Full Stack Founding Engineer & Architect. Scaled MathonGo to 2.5M students. Built commerce platform from zero — 30K+ customers, SharkNinja, EcoFlow. MCA @ IIT Patna.',
  },
}

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Maitrish Mukherjee',
  url: 'https://maitrish.com',
  jobTitle: 'Full Stack Founding Engineer & Architect',
  description:
    'Full Stack Founding Engineer & Architect with 4+ years building high-scale consumer products. MCA from IIT Patna. Based in Bengaluru, India.',
  email: 'maitrishmukherjeee@gmail.com',
  sameAs: ['https://linkedin.com/in/maitrish', 'https://github.com/maitrish1', 'https://dev.to/maitrish'],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'IIT Patna', url: 'https://www.iitp.ac.in' },
  knowsAbout: [
    'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'AWS',
    'Full Stack Development', 'Full Stack Engineering', 'System Design', 'Software Architecture',
    'Software Engineering', 'Commerce Platforms', 'EdTech',
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' },
  worksFor: { '@type': 'Organization', name: 'CheckMe Commerce Pvt. Ltd.', url: 'https://chqme.com' },
})

const themeScript = `((a,b,c,d,e,f,g,h)=>{let i=document.documentElement,j=["light","dark"];function k(b){var c;(Array.isArray(a)?a:[a]).forEach(a=>{let c="class"===a,d=c&&f?e.map(a=>f[a]||a):e;c?(i.classList.remove(...d),i.classList.add(f&&f[b]?f[b]:b)):i.setAttribute(a,b)}),c=b,h&&j.includes(c)&&(i.style.colorScheme=c)}if(d)k(d);else try{let a=localStorage.getItem(b)||c,d=g&&"system"===a?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":a;k(d)}catch(e){}})("class","theme","light",null,["light","dark"],null,true,true)`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  )
}
