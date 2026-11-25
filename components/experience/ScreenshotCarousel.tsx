'use client'

import { useState } from 'react'

// Screenshot carousel used by the "Platforms Built" cards on /experience:
// prev/next arrows, counter, and dot indicators. Uses a plain <img> to match
// the live site markup.
export default function ScreenshotCarousel({
  images,
  projectName,
  accent,
  blur = 0,
}: {
  images: string[]
  projectName: string
  accent: string
  blur?: number
}) {
  const [index, setIndex] = useState(0)
  const count = images.length

  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)

  return (
    <div className="relative w-full select-none" style={{ borderRadius: 16, overflow: 'hidden' }}>
      <div className="relative w-full" style={{ paddingBottom: '62.5%', background: 'var(--stone-200)' }}>
        <img
          src={images[index]}
          alt={`${projectName} screenshot ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-top"
          draggable={false}
          style={{
            opacity: 1,
            transform: 'none',
            filter: blur ? `blur(${blur}px)` : undefined,
          }}
        />
        <button
          type="button"
          aria-label="Previous screenshot"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
          style={{ background: 'rgba(12,11,9,0.65)', backdropFilter: 'blur(8px)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next screenshot"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
          style={{ background: 'rgba(12,11,9,0.65)', backdropFilter: 'blur(8px)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        <div
          className="absolute bottom-3 right-3 font-mono text-[11px] px-2 py-0.5 rounded-full z-10"
          style={{ background: 'rgba(12,11,9,0.65)', backdropFilter: 'blur(8px)', color: '#fff' }}
        >
          {index + 1} / {count}
        </div>
      </div>
      <div className="flex justify-center gap-1.5 py-2.5" style={{ background: 'var(--stone-100)' }}>
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Screenshot ${i + 1}`}
            onClick={() => setIndex(i)}
            className="rounded-full transition-all duration-200 cursor-pointer"
            style={{
              width: i === index ? 18 : 6,
              height: 6,
              background: i === index ? accent : 'var(--stone-300)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
