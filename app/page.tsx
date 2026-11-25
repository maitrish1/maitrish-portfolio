import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Navbar from '@/components/ui/Navbar'
import Cursor from '@/components/ui/Cursor'

function Divider() {
  return (
    <div
      className="mx-6 md:mx-16 h-px mx-auto"
      style={{ background: 'linear-gradient(90deg, transparent, var(--border-hover), transparent)', maxWidth: 1200 }}
    />
  )
}

export default function HomePage() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
      <Hero />
      <Divider />
      <Experience />
      <Projects />
      <Divider />
      <Skills />
      <Contact />
      <footer
        className="px-4 sm:px-6 md:px-16 py-5 grid grid-cols-1 sm:grid-cols-3 gap-2 text-center sm:text-left mx-auto"
        style={{ borderTop: '1px solid var(--border)', maxWidth: 1200 }}
      >
        <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>© 2026 Maitrish Mukherjee</span>
        <span className="font-mono text-xs flex items-center justify-center gap-0.5" style={{ color: 'var(--text-muted)' }}>
          maitrish.com<span className="cursor-blink" />
        </span>
        <span className="font-mono text-xs sm:text-right" style={{ color: 'var(--text-muted)' }}>Bengaluru, KA · Open to relocate</span>
      </footer>
      </main>
    </>
  )
}
