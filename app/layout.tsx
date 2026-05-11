import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maitrish Mukherjee — Founding Engineer',
  description: 'Founding Engineer who built a commerce platform from zero. Previously scaled MathonGo to 2.5M students. MCA @ IIT Patna.',
  keywords: ['Maitrish Mukherjee', 'Software Engineer', 'Full Stack', 'Next.js', 'React', 'AWS', 'IIT Patna'],
  authors: [{ name: 'Maitrish Mukherjee' }],
  openGraph: {
    title: 'Maitrish Mukherjee — Founding Engineer',
    description: 'Built products serving 20K+ customers. Scaled MathonGo to 2.5M students. MCA @ IIT Patna.',
    url: 'https://maitrish.com',
    siteName: 'maitrish.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maitrish Mukherjee — Founding Engineer',
    description: 'Built products serving 20K+ customers.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#080808] text-[#e0e0e0] overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
