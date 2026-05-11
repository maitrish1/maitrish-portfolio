# maitrish.com — Portfolio

Dark hacker aesthetic portfolio built with Next.js 15, TailwindCSS, and Framer Motion.

## Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS v3**
- **Framer Motion 11**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Updating Content

**All content lives in one file:** `lib/data.ts`

- Personal info, links → `personal`
- Stats (hero numbers) → `stats`
- Work experience → `experience`
- Projects → `projects`
- Skills → `skills`

No need to touch any component files to update content.

## Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Then in Vercel dashboard → Settings → Domains → Add `maitrish.com`

Point your domain DNS:
- A record: `76.76.21.21`
- CNAME www: `cname.vercel-dns.com`

## Structure

```
app/
  layout.tsx       # Root layout + metadata
  page.tsx         # Main page assembly
  globals.css      # Global styles, scanlines, glitch animations

components/
  ui/
    Cursor.tsx     # Custom cursor with lag ring
    Navbar.tsx     # Fixed nav with scroll-aware active state
    Divider.tsx    # Section divider
  sections/
    Hero.tsx       # Hero with glitch name, stats, CTAs
    Experience.tsx # Work history with metrics
    Projects.tsx   # Live project cards
    Skills.tsx     # Tech stack grid
    Contact.tsx    # Contact + footer

lib/
  data.ts          # ALL CONTENT — edit this to update the site
  utils.ts         # cn() utility
```
