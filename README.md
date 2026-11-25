# maitrish.com — Portfolio

Light parchment-aesthetic portfolio built with Next.js 15, TailwindCSS, and Framer Motion.

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

Open [http://localhost:3000](http://localhost:3000).

## Updating Content

**All content lives in one file:** `lib/data.ts`

- Personal info, links → `personal`
- Hero bio → `hero`
- Stats (hero numbers) → `stats`
- Work experience → `experience`
- Projects → `projects` (+ `screenshotCounts`)
- Skills → `skills`

No need to touch any component files to update content.

## Structure

```
app/
  layout.tsx            # Root layout — metadata, JSON-LD, Cursor
  page.tsx              # Home page assembly
  live.css              # Compiled design system (CSS vars, utility classes)
  globals.css           # Tailwind directives
  projects/page.tsx     # Projects page
  experience/page.tsx   # Full experience history
  icon.png              # Favicon
  opengraph-image.png   # OG image

components/
  ui/
    Cursor.tsx            # Trailing cursor dot
    Navbar.tsx            # Fixed nav (home)
    Reveal.tsx            # Scroll-reveal wrapper
    ScreenshotCarousel.tsx # Screenshot gallery
  sections/
    Hero.tsx        # Badge, name, bio, CTAs, photo, stats
    Experience.tsx  # Work history cards
    Projects.tsx    # Live project cards with galleries
    Skills.tsx      # Tech stack grid
    Contact.tsx     # CTA + social links

lib/
  data.ts          # ALL CONTENT — edit this to update the site
  utils.ts         # cn() utility

public/
  photos/          # Profile photo
  screenshots/     # Project screenshots (per-project folders)
  skills/          # Skill icon SVGs
  resumes/         # Resume PDF
```

## Deploy to Vercel

Vercel is connected to this GitHub repo — push to `main` and Vercel redeploys
automatically. Do not deploy with `vercel --prod` from a local folder (that
causes the GitHub and Vercel copies to drift apart).

Point your domain DNS (Vercel dashboard → Settings → Domains → `maitrish.com`):
- A record: `76.76.21.21`
- CNAME www: `cname.vercel-dns.com`
