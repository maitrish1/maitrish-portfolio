import Reveal from '@/components/ui/Reveal'
import ProjectCarousel from './ProjectCarousel'

export type ProjectEntryData = {
  number: string
  company: string
  period: string
  theme: 'coral' | 'forest'
  delay: number
  name: string
  subtitle: string
  description: string
  stack: string[]
  visit: { label: string; url: string }
  experienceHref: string
  media:
    | { type: 'carousel'; domain: string; dir: string; count: number; blur: number }
    | { type: 'note'; title: string }
}

const themeTokens = {
  coral: {
    accent: 'var(--coral)',
    mid: 'var(--coral-mid)',
    border: 'rgba(217,59,33,0.2)',
  },
  forest: {
    accent: 'var(--forest)',
    mid: 'var(--forest-mid)',
    border: 'rgba(26,94,64,0.2)',
  },
}

// One numbered project entry: meta row, copy column, and media column
// (screenshot carousel in a browser-chrome card, or a note card).
export default function ProjectEntry({ entry }: { entry: ProjectEntryData }) {
  const tokens = themeTokens[entry.theme]
  const media = entry.media
  const images =
    media.type === 'carousel'
      ? Array.from({ length: media.count }, (_, i) => `${media.dir}/${i + 1}.png`)
      : []

  return (
    <Reveal y={28} delay={entry.delay}>
      <div className="flex items-center gap-2 md:gap-3 mb-5 md:mb-6 min-w-0">
        <span className="font-mono text-xs font-medium flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
          {entry.number}
        </span>
        <div className="h-px w-8 md:w-12 flex-shrink-0" style={{ background: 'var(--border)' }} />
        <span
          className="font-mono text-[10px] md:text-[11px] font-medium px-2 md:px-2.5 py-0.5 rounded-full truncate"
          style={{ background: tokens.mid, color: tokens.accent, border: `1px solid ${tokens.border}` }}
        >
          {entry.company} · {entry.period}
        </span>
      </div>
      <div
        className={
          entry.media.type === 'carousel'
            ? 'grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-8 items-start'
            : 'grid gap-6 md:gap-8 items-start'
        }
      >
        <div>
          <div className="w-1 h-10 md:h-12 rounded-full mb-4 md:mb-5" style={{ background: tokens.accent }} />
          <h2
            className="font-display font-black leading-tight mb-2 break-words"
            style={{ fontSize: 'clamp(20px, 4vw, 36px)', color: 'var(--text)' }}
          >
            {entry.name}
          </h2>
          <p className="font-body text-sm font-bold mb-3 md:mb-4" style={{ color: tokens.accent }}>
            {entry.subtitle}
          </p>
          <p
            className="font-body text-sm md:text-base leading-relaxed mb-5 md:mb-6"
            style={{ color: 'var(--text-dim)' }}
          >
            {entry.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5 md:mb-6">
            {entry.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] md:text-[11px] px-2 md:px-2.5 py-1 rounded-full"
                style={{ background: 'var(--parchment)', color: 'var(--text-dim)', border: '1px solid var(--border)' }}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <a
              href={entry.visit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-sm font-bold px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: tokens.accent, color: '#fff' }}
            >
              Visit {entry.visit.label}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
            <a
              href={entry.experienceHref}
              className="inline-flex items-center gap-1.5 font-body text-sm font-bold px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'var(--parchment)', color: 'var(--text-dim)', border: '1px solid var(--border)' }}
            >
              See experience →
            </a>
          </div>
        </div>
        {entry.media.type === 'carousel' ? (
          <div
            className="rounded-xl md:rounded-2xl overflow-hidden"
            style={{ border: `1px solid ${tokens.border}`, boxShadow: 'var(--shadow)' }}
          >
            <div
              className="px-3 md:px-4 py-2 md:py-2.5 flex items-center gap-2 border-b"
              style={{ background: tokens.mid, borderColor: tokens.border }}
            >
              <div className="flex gap-1 md:gap-1.5 flex-shrink-0">
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-red-400/70" />
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-yellow-400/70" />
                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-green-400/70" />
              </div>
              <span className="font-mono text-[10px] ml-1 truncate" style={{ color: 'var(--text-muted)' }}>
                {entry.media.domain}
              </span>
            </div>
            <ProjectCarousel
              images={images}
              projectName={entry.name}
              accent={tokens.accent}
              blur={entry.media.blur}
            />
          </div>
        ) : (
          <div
            className="rounded-xl md:rounded-2xl p-8 flex flex-col items-center justify-center text-center"
            style={{ background: tokens.mid, border: `1px solid ${tokens.border}`, minHeight: 160 }}
          >
            <div className="font-display font-black text-3xl md:text-4xl mb-2" style={{ color: tokens.accent }}>
              {entry.media.title}
            </div>
            <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
              Live at {entry.visit.label}
            </p>
          </div>
        )}
      </div>
    </Reveal>
  )
}
