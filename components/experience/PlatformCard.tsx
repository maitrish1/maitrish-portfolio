import ScreenshotCarousel from './ScreenshotCarousel'

export type Platform = {
  domain: string
  name: string
  url: string
  images: string[]
  blur?: number
}

// Browser-window card under "Platforms Built" on /experience.
export default function PlatformCard({
  platform,
  accent,
  mid,
  border,
}: {
  platform: Platform
  accent: string
  mid: string
  border: string
}) {
  return (
    <div className="rounded-xl md:rounded-2xl overflow-hidden" style={{ border: `1px solid ${border}` }}>
      <div className="px-3 py-2 flex items-center gap-2 border-b" style={{ background: mid, borderColor: border }}>
        <div className="flex gap-1 flex-shrink-0">
          <div className="w-2 h-2 rounded-full bg-red-400/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
          <div className="w-2 h-2 rounded-full bg-green-400/60" />
        </div>
        <span className="font-mono text-[10px] truncate" style={{ color: 'var(--text-muted)' }}>
          {platform.domain}
        </span>
      </div>
      <ScreenshotCarousel
        images={platform.images}
        projectName={platform.name}
        accent={accent}
        blur={platform.blur}
      />
      <div className="p-3 flex items-center justify-between gap-2" style={{ background: 'var(--parchment)' }}>
        <span className="font-display font-bold text-sm truncate" style={{ color: 'var(--text)' }}>
          {platform.name}
        </span>
        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] flex-shrink-0 hover:opacity-70 transition-opacity"
          style={{ color: accent }}
        >
          Visit ↗
        </a>
      </div>
    </div>
  )
}
