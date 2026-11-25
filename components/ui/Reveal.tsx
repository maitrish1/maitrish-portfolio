'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

// Scroll-reveal wrapper matching the live site's fade-in sections.
export default function Reveal({
  children,
  y = 24,
  delay = 0,
  className,
}: {
  children: ReactNode
  y?: number
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
