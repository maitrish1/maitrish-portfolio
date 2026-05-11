/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#00ff88',
        pink: '#ff2d78',
        cyan: '#00d4ff',
        bg: '#080808',
        bg2: '#0d0d0d',
        bg3: '#111111',
        border: 'rgba(0,255,136,0.15)',
        muted: '#555555',
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'pulse-slow': 'pulse 2s ease infinite',
        'scroll-line': 'scrollLine 2s ease infinite',
        'glitch1': 'glitch1 4s infinite',
        'glitch2': 'glitch2 4s infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scrollLine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        glitch1: {
          '0%, 90%, 100%': { transform: 'translate(0)', opacity: '0' },
          '91%': { transform: 'translate(-3px, 1px)', opacity: '0.8' },
          '93%': { transform: 'translate(3px, -1px)', opacity: '0.8' },
          '95%': { transform: 'translate(-2px, 2px)', opacity: '0.8' },
          '97%': { transform: 'translate(0)', opacity: '0' },
        },
        glitch2: {
          '0%, 92%, 100%': { transform: 'translate(0)', opacity: '0' },
          '93%': { transform: 'translate(3px, 2px)', opacity: '0.7' },
          '95%': { transform: 'translate(-3px, -1px)', opacity: '0.7' },
          '97%': { transform: 'translate(2px, 1px)', opacity: '0.7' },
          '99%': { transform: 'translate(0)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
