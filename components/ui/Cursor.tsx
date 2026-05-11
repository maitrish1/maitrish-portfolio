'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 4 + 'px'
        dotRef.current.style.top = e.clientY - 4 + 'px'
      }
    }

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x - 16) * 0.15
      ringPos.current.y += (mousePos.current.y - ringPos.current.y - 16) * 0.15
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px'
        ringRef.current.style.top = ringPos.current.y + 'px'
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(2.5)'
      if (ringRef.current) {
        ringRef.current.style.transform = 'scale(1.6)'
        ringRef.current.style.borderColor = 'rgba(0,255,136,0.8)'
      }
    }
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.transform = 'scale(1)'
      if (ringRef.current) {
        ringRef.current.style.transform = 'scale(1)'
        ringRef.current.style.borderColor = 'rgba(0,255,136,0.4)'
      }
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full transition-transform duration-100"
        style={{
          background: 'var(--green)',
          boxShadow: '0 0 10px var(--green), 0 0 20px var(--green)',
        }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] w-8 h-8 rounded-full transition-all duration-150"
        style={{ border: '1px solid rgba(0,255,136,0.4)' }}
      />
    </>
  )
}
