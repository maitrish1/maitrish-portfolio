import { ArrowUpRight } from '@/components/shell/Shell'
import { heroCopy } from '@/lib/content'

export default function FolioHero() {
  return (
    <section className="folio-hero" aria-labelledby="folio-title" data-reveal>
      <header className="folio-topline">
        <span className="folio-label">{heroCopy.label}</span>
        <nav aria-label="About page">
          <a href="#experience">Experience</a>
          <a href="#publications">Writing</a>
          <a href="#contact">
            Contact <ArrowUpRight size={13} strokeWidth={2} />
          </a>
        </nav>
      </header>
      <h1 id="folio-title">
        <span className="folio-title-line">{heroCopy.line1}</span>
        <span className="folio-title-line folio-title-accent">{heroCopy.line2}</span>
      </h1>
      <div className="folio-hero__bottom">
        <span className="folio-label">
          <span>{heroCopy.kicker}</span>
          <span>{heroCopy.kickerNote}</span>
        </span>
        <p>{heroCopy.supporting}</p>
      </div>
    </section>
  )
}
