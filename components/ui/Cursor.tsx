'use client'

import { useEffect, useRef } from 'react'

// Trailing dot that follows the mouse (matches live site: small coral dot,
// mix-blend multiply, hidden until first mouse move).
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const onMove = (e: MouseEvent) => {
      dot.style.opacity = '1'
      dot.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`
    }
    const onLeave = () => {
      dot.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className="fixed pointer-events-none z-[9999] w-2.5 h-2.5 rounded-full opacity-0 transition-transform duration-150"
      style={{ background: 'var(--primary)', mixBlendMode: 'multiply', transition: 'transform 0.15s ease' }}
    />
  )
}
