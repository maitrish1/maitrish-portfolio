# System design: portfolio rebuild on the reference visual system

Status: APPROVED

**Date**: 2026-11-27
**Mode**: architecture plus enhancement, one decision record
**Operation**: create
**Spec path**: harness mandates `docs/specs/system-design.md`

## Summary

You are rebuilding your portfolio on the exact visual system of `https://www.prathamesh-more.com/`, with your own content and your resume. The site stays a static Next.js application, built on a new branch called `redesign` with a Vercel preview, so the live site on `main` does not change until you approve it. The hard part is a two pane desktop shell that scrolls inside two panes, plus fluid type that scales with the pane rather than the viewport. A browser diff at 1440 and 375 pixels is the proof of fidelity.

## Context

You asked for a copy of a reference portfolio, using your own data and the resume file `Maitrish_Mukherjee2July2026.pdf` in the repo. The reference is a Vite built React application whose home page is a fixed viewport desktop shell: a 364 pixel project rail on the left and a document pane on the right, each with its own scrollbar. The window itself never scrolls on desktop. On a 375 pixel screen the rail becomes a top bar and the page returns to normal scrolling. Most of the visual character comes from container query units (`cqi`), hairline borders, zero corner radii, and very large display type, not from a component library.

Your current live site is a conventional three page Next.js portfolio on `maitrish.com`, served from GitHub through Vercel. It was rebuilt and verified earlier in this project. That site must stay live and unchanged while the redesign is built. A big bang rewrite of a production site is a known failure pattern, so the work happens on a branch with a preview deployment, and `main` is only updated after you approve the result.

The reference also ships 13 fully bespoke interactive project case studies. Your data has 6 projects and 54 screenshots, so the case studies will use your real screenshots instead of simulated product interfaces. That is a deliberate reduction, not an oversight.

> ⚠️ Premise note: reproducing a client rendered application with container query driven typography as static server rendered pages is a real fidelity risk. The two pane layout and `cqi` units are browser features, not framework features, so this is achievable. Exact pixel parity still needs browser diffing at 1440 and 375 widths before the work can be called done. A text diff alone cannot prove this design.

## Requirements

**User stories**:

- As a visitor on a desktop, I want the rail and the document pane to scroll independently so the layout matches the reference.
- As a visitor on a phone, I want the rail to collapse into a top bar and the page to scroll normally.
- As a visitor, I want your real projects, roles, writing, skills, contact details, and resume, with no invented content.
- As you, I want the redesign on a preview URL while `maitrish.com` keeps serving the current site.

**Acceptance criteria** (each independently checkable):

- **AC-1**: On a 1440 by 900 desktop viewport, `document.body.scrollHeight` equals the viewport height, the rail and the pane each have their own scroller, and the rail card stacking animation runs on scroll.
- **AC-2**: On a 375 pixel viewport, the rail is replaced by a top bar and the page scrolls normally with no horizontal overflow.
- **AC-3**: The home pane contains hero, experience, writing, skills, off the clock, contact, and footer sections, in that order, with the reference palette and type scale, and the blue finale behind the last two sections.
- **AC-4**: The rail lists exactly 6 real projects plus anchors for Experience, Skills, and Contact. Every rail row links somewhere real.
- **AC-5**: Six case study routes exist, one per real project, each showing that project's real screenshots. No simulated product interface and no invented project appears.
- **AC-6**: The `/projects` and `/experience` routes still exist and use the same visual language as the redesigned home.
- **AC-7**: All 8 real dev.to posts appear in the writing carousel, including the post titled `Test`, each with a working link.
- **AC-8**: The off the clock copy and the hero headline are generated from your resume and achievements. No dev.to biography text and no hobby claims appear.
- **AC-9**: Credentials read `MCA @ IIT Patna` everywhere. The resume's `BCA, Acharya Institute of Graduate Studies` is not used. Phone `+919900177356` is shown. Live site numbers win, and the internal `20K+` figure is normalized to `30K+`.
- **AC-10**: Manrope and IBM Plex Mono load from the Google Fonts CDN. Archivo is not used on the home page.
- **AC-11**: All 59 skill items render. The 18 skill SVGs that do not exist use a neutral fallback, not a broken image.
- **AC-12**: All 54 screenshots render as plain `img` elements with React 19 automatic preloads. No Next image optimizer URLs appear.
- **AC-13**: No custom cursor, no PostHog, and no Microsoft Clarity script ship. A later round replaced the earlier Clarity choice with `Skip Clarity`.
- **AC-14**: Each route has its own title, description, canonical URL, OpenGraph and Twitter tags, theme color `#151513`, and a JSON LD `Person` graph. No `og:image` tag appears, matching the reference.
- **AC-15**: A skip link, visible focus state, alt text, and `prefers-reduced-motion` support are present. Reduced motion disables the title reveal, the rail stacking, and the carousel snap.
- **AC-16**: `npm run build` succeeds, all routes prerender as static, the deterministic gate passes, the browser check reports zero console errors and zero failed requests, and `main` is untouched.

**Decided content strings** (generated, do not reinvent during the build):

- Hero headline: `I turn an empty repo into a product people use.`
- Hero supporting line: `Full Stack Founding Engineer and Architect. First engineer at CheckMe Commerce, 10+ production frontends, 5 FastAPI microservices, 120+ APIs, 30,000+ customers.`
- Off the clock copy: `Off the clock I am usually taking something apart. I was the first engineer at CheckMe Commerce, shipped a college predictor to 400,000 students in 48 hours, and cut 16,000 lines of legacy code from a test platform. I like the part where a messy system becomes simple.`
- Writing section heading: `Writing, in public.`
- Rail masthead: `Open for work`, `Maitrish Mukherjee`, `Full Stack Founding Engineer & Architect`, `Email`, `LinkedIn`, `Resume`, `Selected projects`, `6`.
- Contact: `maitrishmukherjeee@gmail.com`, `+919900177356`, LinkedIn `https://linkedin.com/in/maitrish`, GitHub `https://github.com/maitrish1`, resume `/resumes/Maitrish_Mukherjee2July2026.pdf`.
- Footer: `© 2026 Maitrish Mukherjee` and `Open for work`.

**The 8 writing posts** (all required by AC-7):

1. `How I'm Running My Job Search on Autopilot — Without Touching a Spreadsheet` (`https://dev.to/maitrish/how-im-running-my-job-search-on-autopilot-without-touching-a-spreadsheet-a19`)
2. `How I Built a Personal AI Agent That Runs on My Google Cloud VM — And Powers My Entire Portfolio` (`https://dev.to/maitrish/how-i-built-a-personal-ai-agent-that-runs-on-my-google-cloud-vm-and-powers-my-entire-portfolio-5fob`)
3. `Hosting Your AI Agent on Google Cloud VM: A Complete Setup Guide` (`https://dev.to/maitrish/hosting-your-ai-agent-on-google-cloud-vm-a-complete-setup-guide-556m`)
4. `I Built an AI Agent That Texts Me on Telegram — And It Does My Job Search` (`https://dev.to/maitrish/i-built-an-ai-agent-that-texts-me-on-telegram-and-it-does-my-job-search-5d39`)
5. `Test` (`https://dev.to/maitrish/test-2bhf`)
6. `Mastering React Data Fetching: A Comprehensive Guide for Developers` (`https://dev.to/maitrish/mastering-react-data-fetching-a-comprehensive-guide-for-developers-19pc`)
7. `Mastering React Performance: In-Depth Guide to useCallback and useMemo` (`https://dev.to/maitrish/mastering-react-performance-in-depth-guide-to-usecallback-and-usememo-5114`)
8. `Generator functions in Javascript` (`https://dev.to/maitrish/generator-functions-in-javascript-274n`)

## Options considered

### Option 1: Next.js 15.5.29 App Router with Tailwind and a custom CSS layer

Rebuild as static server rendered pages, keep the existing Vercel and GitHub wiring, and write the container queries, `cqi` type scale, hairlines, and pane scrollers in one plain CSS file.

**Pros**:
- The harness structure profile names this stack, and the Vercel project already deploys it.
- Static output means no server, no database, and no runtime API to operate.
- Existing verified content in `lib/data.ts` and 95 assets carry over unchanged.

**Cons**:
- The reference's 247 KB of custom CSS must be hand written or ported, since Tailwind viewport breakpoints cannot express `cqi` units.
- Client side scroll animation still needs small client components with `requestAnimationFrame` and observers.

### Option 2: Vite React SPA mirroring the reference exactly

Reproduce the reference build setup, including `react-router-dom`, and ship one JavaScript bundle.

**Pros**:
- Byte level parity with the reference's runtime and route transitions is easier.
- The reference CSS could be reused with fewer changes.

**Cons**:
- It discards the existing Vercel wiring, the verified content module, and the harness stack profile.
- It introduces a second build toolchain for one page, with no user facing benefit.

### Option 3: Plain HTML, CSS, and JavaScript

Hand write static files with no framework.

**Pros**:
- Smallest possible output.

**Cons**:
- Per route metadata, 6 case study routes, and 8 writing cards become manual duplication.
- It breaks the harness profile and the existing deployment pipeline for no measurable gain.

## Decision

**Chosen option**: Option 1, Next.js 15.5.29 App Router with Tailwind and a custom CSS layer.

Keep the proven stack, port the reference visual system into one CSS file, and ship static pages.

**Implementation skills**: `nextjs-app-router-patterns` (`wshobson/agents`, `.agents/skills/nextjs-app-router-patterns/`) · `vercel-react-best-practices` (`vercel`, `.agents/skills/vercel-react-best-practices/`)

## Rationale

The existing site already builds, deploys, and passes verification on this stack, and the harness structure profile requires it. The reference's distinguishing features, container queries, two internal scrollers, and a clip path title reveal, are browser capabilities. They do not require Vite. Choosing Vite would trade a working deployment for a build tool that changes nothing a visitor can see. The real cost of Option 1 is a hand written CSS layer, which is bounded and reviewable. Option 3 saves output bytes but multiplies maintenance across every route.

## Components

```
Browser (1440 x 900 desktop)
  |
  +-- app/layout.tsx                     html shell, fonts, metadata, JSON LD
  |
  +-- app/page.tsx                      two pane shell
  |     +-- components/shell/ProjectRail.tsx      aside, 364px, own scroller
  |     |     +-- rail masthead, 6 project rows, 3 section anchors
  |     |     +-- rAF deck stacking (client component)
  |     +-- components/shell/DocumentPane.tsx     main, own scroller
  |           +-- Hero.tsx                        #about_intro
  |           +-- ExperienceList.tsx              #experience, 4 roles + education
  |           +-- WritingCarousel.tsx             #publications, 8 posts, snap
  |           +-- SkillsGrid.tsx                 59 items, neutral fallback
  |           +-- Finale.tsx                     blue #244bea wrapper
  |           |     +-- OffClock.tsx             #off-clock
  |           |     +-- Contact.tsx              #contact
  |           +-- Footer.tsx
  |
  +-- app/project/[slug]/page.tsx        6 case study routes
  +-- app/projects/page.tsx              extended projects index
  +-- app/experience/page.tsx            extended experience index
  +-- lib/content.ts                     typed content, single source
  +-- app/reference.css                  ported visual system
```

**Data flow**: `lib/content.ts` exports plain typed objects for personal data, hero, 4 roles, 6 projects, 8 posts, 59 skills, and education. Server components read that module at build time and emit static HTML. Client components receive plain props only. There is no fetch, no state store, no server action, and no runtime data source. Assets in `public/` are referenced by string path and served as static files.

**Storage choices**: none. No database, no cache, no object store, and no migration. Content lives in a TypeScript module; images and the resume live in `public/`. Constitution rule 1 (never touch a production database) is not triggered.

**Value sourcing** (every displayed value names its source):

| Value | Source |
|---|---|
| Name, email, phone, links | `lib/content.ts`, derived from `lib/data.ts` and the resume PDF |
| Credentials `MCA @ IIT Patna` | `lib/data.ts`, confirmed by you in round 2 |
| Experience numbers | `lib/data.ts`, `20K+` normalized to `30K+` |
| 6 project names and thesis lines | `lib/data.ts` project descriptions |
| 54 screenshot paths | `lib/data.ts` `screenshotCounts` and `public/screenshots/` |
| 8 writing posts | the list in Requirements above |
| Hero and off the clock copy | the decided content strings in Requirements above |
| 59 skill labels and 39 icon paths | `lib/data.ts` skills and `public/skills/` |
| Rail width, colors, type scale | the reference CSS variables and computed values |

**Key invariants**:
- All routes prerender as static. No route reads a request.
- Content comes only from `lib/content.ts`. No component embeds resume text or a project name as a literal.
- Every internal link resolves to a built route or an existing section id.
- No external runtime call except the Google Fonts stylesheet and its font files.
- The 18 missing skill SVGs never produce a network request for a missing file.

**Security model**: the site is public and read only. There is no authentication, no user input, no form, and no server side mutation. No compliance scope applies. No secret is stored in source. Browser check must confirm no third party script runs.

## API

There is no runtime API. This section records the route contract so the build does not invent one.

| Route | Method | Output | Notes |
|---|---|---|---|
| `/` | GET | static HTML | two pane home |
| `/project/[slug]` | GET | static HTML | 6 slugs: `chqme`, `experienceos`, `booking`, `ops`, `experience-portal`, `quizrr` |
| `/projects` | GET | static HTML | extended projects index |
| `/experience` | GET | static HTML | extended experience index |
| `/icon.svg` | GET | static SVG | monogram mark, Next metadata route |
| `/resumes/Maitrish_Mukherjee2July2026.pdf` | GET | static PDF | resume download |
| `/assets/*` | GET | static files | CSS, images, screenshots, skill SVGs |

**API contracts**: none. No JSON endpoint, no request body, no query parameter, no status code beyond 200 and 404, and no authentication header. External input does not exist, so boundary validation is the TypeScript compiler plus the build. `generateMetadata` on each route produces title, description, canonical, OpenGraph, Twitter, `theme-color #151513`, and the JSON LD graph at build time.

**Configuration required**: none. No environment variable, no secret, and no third party key. `app/opengraph-image.png` and `app/opengraph-image.alt.txt` are removed on this branch so Next does not emit `og:image` tags that the reference lacks.

## Proposed stack

| Layer | Choice | Reason |
|---|---|---|
| Language | TypeScript, strict | Matches the existing repo and the profile. |
| Framework | Next.js 15.5.29 App Router | Static output, per route metadata, existing Vercel wiring. |
| Styling | Tailwind plus `app/reference.css` | Tailwind for utilities, plain CSS for `cqi`, container queries, hairlines, and pane scrollers. |
| Fonts | Google Fonts CDN, Manrope and IBM Plex Mono | Matches the rendered reference. |
| Primary DB | none | Content is static. |
| Auth | none | Public site. |
| Background jobs | none | Nothing to process. |
| File storage | `public/` served by Vercel CDN | 95 existing assets, no new storage service. |
| Hosting | Vercel, branch `redesign` preview | Keeps `main` and the live site untouched. |
| Observability | none | You chose `Skip Clarity`. Verification uses the local gate and browser check. |

## Scale and reliability

Traffic is a personal portfolio, so the scale target is small and read only. Every page is prerendered static HTML served from a CDN. There is no server process, no database connection, and no runtime dependency to fail. Vercel rebuilds on push. Failure modes are limited to a missing asset or a font CDN outage: missing skill SVGs are handled by a neutral fallback, screenshot paths are verified against `public/`, and a font failure falls back to a system stack. Recovery is a redeploy or a revert of the branch. No multi region design, no queue, and no cache layer is warranted. Monitoring is intentionally absent; the deterministic gate, the browser check, and the cross family review are the checks before approval.

## Trade-offs

**Positive**:
- The live site stays untouched until you approve, which removes the main risk of a redesign.
- Static output is cheap to host, fast to load, and simple to debug.
- All content is real and traced to `lib/data.ts`, the resume, or your dev.to posts.

**Negative / tradeoffs**:
- The reference CSS is about 247 KB and mostly custom. Porting it into `app/reference.css` is real work, and Tailwind alone cannot express container query typography.
- The two pane desktop shell with internal scrollers is unusual. Some assistive technology and browser find in page behaviour needs explicit testing.
- Six case studies replace thirteen bespoke interactive pages. The redesign is visually faithful but less deep than the reference.
- Eight writing cards include a `Test` stub, which you explicitly chose. It is real content but low quality.
- No analytics means you get no visitor data. That was your choice.
- No `og:image` means social previews show no image, matching the reference gap.
- Google Fonts is a third party runtime request. A font CDN failure changes typography.

**Neutral**:
- `lib/data.ts` is replaced by `lib/content.ts` as the single content module. The old module is not deleted until the redesign is approved and verified.
- The branch is `redesign`. `main` keeps commit `d8af4c6` and the current live site.

## Build plan

1. Create `lib/content.ts` from `lib/data.ts` plus the resume gaps and the decided strings, satisfies **AC-8**, **AC-9**, **AC-11**.
2. Port the reference visual system into `app/reference.css` with the palette, `cqi` type scale, hairlines, and pane scrollers, satisfies **AC-1**, **AC-2**, **AC-3**, **AC-10**.
3. Build the two pane shell, rail, masthead, section anchors, and rAF deck stacking, satisfies **AC-1**, **AC-4**, **AC-15**.
4. Build hero, experience list, skills grid, and the blue finale with off the clock, contact, and footer, satisfies **AC-3**, **AC-8**, **AC-9**, **AC-11**, **AC-15**.
5. Build the writing carousel with all 8 posts and reduced motion support, satisfies **AC-7**, **AC-15**.
6. Build the 6 case study routes with real screenshots as plain `img` elements, satisfies **AC-5**, **AC-12**.
7. Redesign `/projects` and `/experience` in the same visual language, satisfies **AC-6**.
8. Add per route metadata, JSON LD, skip link, focus states, alt text, and remove the two `opengraph-image` files, satisfies **AC-13**, **AC-14**, **AC-15**.
9. Run the deterministic gate, the browser check at 1440 and 375, and the cross family review, satisfies **AC-16**.

## Consequences

The build must keep every route static, keep all content in `lib/content.ts`, and keep `main` untouched. `app/reference.css` becomes a load bearing file that a future designer must edit rather than regenerate. Removing `og:image` is a deliberate regression in social sharing that matches the reference. No new dependency is added. No database migration is needed. The existing `app/live.css`, `components/ui/*`, and `components/sections/*` from the current design remain on `main` and are replaced on `redesign` only.

## Follow-up

- [ ] After approval, decide whether to promote `redesign` to `main` or merge it, and confirm the Vercel preview URL matches `maitrish.com` content.
- [ ] Consider adding a branded `og:image` later. The reference has none, so this is out of scope now.
- [ ] Consider replacing the `Test` writing post with a newer article if you publish one.
- [ ] Consider self hosting the fonts later if the Google Fonts request becomes a privacy or latency concern.
- [ ] Add `nextjs-app-router-patterns` and `vercel-react-best-practices` conventions to the project context file if they are not already recorded there.

## What to revisit as it grows

If the portfolio grows past six projects, the rail needs pagination or grouping, and the fixed viewport desktop shell may hurt long content. If you add real interactive demos, revisit the decision to use only static pages. If you want visitor data, revisit analytics with a privacy review first. If the writing list grows, the horizontal scroll snap carousel may need a vertical archive route. If the team grows, split `app/reference.css` into per section files. None of these are needed on day one.
