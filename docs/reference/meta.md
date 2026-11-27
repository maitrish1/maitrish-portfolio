# Design reference: https://www.prathamesh-more.com/

Captured 2026-11-27 with Playwright 1.65.1 / Chromium headless shell, 1440x900 desktop + 375x812 mobile. Site is a **Vite-built React SPA**; all content renders client-side. Raw HTML is only a `<div id="root">` plus SEO tags.

Environment: 0 console errors, 0 page errors, 0 failed/4xx requests. Fonts loaded (Manrope, IBM Plex Mono).

---

## 0. CRITICAL STRUCTURAL FACT — fixed-viewport two-pane app

`document.body.scrollHeight === 900` at 1440x900 (no window scroll). The page is a **full-viewport, non-scrolling shell split into two independently scrolling panes**:

| Pane | Element | Width | Background | Scroll |
|---|---|---|---|---|
| Left rail | `aside.project-rail` (`container-name: rail; container-type: inline-size`) | 364px | `#111211` | internal `div.project-rail__scroller` (`overflow: hidden auto`, scrollHeight 1061 / clientHeight 664) |
| Right document | `main#main-content.document-pane` | 1076px | `#151513` | internal (`overflow: hidden auto`, scrollHeight 2046 / clientHeight 900, maxScroll 1146) |

- `--portfolio-rail-width: clamp(340px, 28.5vw, 364px)`; rail has `border-right: 6px solid #090a09`. So `main` starts at x=364.
- `article.folio-home` (`container: folio / inline-size`) is the right-pane content, 1076 x 2046.
- At mobile (375px) the rail is replaced by a compact top bar (`Prathamesh More | Projects | Contact ↗`) and the document becomes a normal vertically-scrolling page (scrollHeight 2234).
- **`ref-shot.png` is a true full-page screenshot = 1440x900** (because that IS the full page). To see all sections use `ref-shot-full.png` (1440x2200 tall viewport, layout grows to fill) or `ref-shot-pane-0..5.png` (right pane scrolled through 6 positions).

---

## 1. Sections in document order (desktop, right pane)

Landmarks/IDs and y-offsets inside `article.folio-home`:

| # | Section | id / class | heading | y / height / bg |
|---|---|---|---|---|
| — | `aside.project-rail` | `.project-rail` | (none) | x0, 364 wide, #111211 |
| — | ↳ `header.rail-masthead` | | (none) | 358x236 |
| — | ↳ `nav.project-index` | `.project-index` | (none) | grid of 13 links, 326x1061 |
| 1 | `section.folio-hero` | `.folio-hero`, `data-section-id=about_intro` | `I turn unfamiliar problems into working tools.` (H1 `#folio-title`) | y0, h596, **#eeeeea** (light) |
| — | ↳ `header.folio-topline` | | (none) | flex, 951x65, bottom border #c7c7c4 |
| — | ↳ `nav` (top-right) | | (none) | Experience / Publications / Contact |
| 2 | `section#experience` | `.folio-experience`, `data-section-type=career` | `Where I've been.` (H2 `#folio-experience-title`) | y596, h616, **#151515** (dark), grid 276.8px / 650.4px |
| — | ↳ 4 `article.folio-job` | | AI Engineer / Applied AI Engineer / Machine Learning Engineer / Full Stack Engineer | each border-bottom 1px #3c3c3c |
| — | ↳ Education row | `.folio-education` | `EDUCATION` + `M.S. in Data Science` | |
| 3 | `section#publications` | `.folio-research`, `data-section-type=publications` | `Research, in print.` + `(02)` (H2 `#folio-research-title`) | y1212, h442, dark, border-top 1px #3c3c3c, `overflow:hidden` (horizontal card rail) |
| 4 | `div.folio-finale` | **wrapper with `background: var(--folio-blue)` = #244bea** | | y1654 onward |
| — | ↳ `section#off-clock` | `.folio-personal`, `data-section-type=personal` | `Off the clock` (H2 `#folio-personal-title`) | y1680, h103, grid 1fr / 2.35fr / 0.32fr |
| — | ↳ `section#contact` | `.folio-contact`, `data-section-type=conversion` | `Let's build.` (H2 `#folio-contact-title`, also a `mailto:` link) | y1783, h213, border-top 1px #ffffff65 |
| — | ↳ `footer.folio-footer` | | (none) | y1997, h49, border-top 1px rgba(255,255,255,.27) |

Nav (top-right of hero): `ABOUT` label (left, `.folio-label`), links `Experience ↗`, `Publications ↗`, `Contact ↗` → `/#experience`, `/#publications`, `/#contact`.

Rail masthead: `Open for work` (left) / `About ↗` (right); big name `Prathamesh / More`; `AI Engineer` (right, `.rail-masthead__role`); links `Email ↗` (mailto:prpmore@gmail.com), `LinkedIn ↗`, `Résumé ↗`; then `Selected projects` + `13`.

Footer: `© 2026 Prathamesh More` | `Open for work`. Contact block also has `prpmore@gmail.com`, `LinkedIn ↗`, `GitHub ↗`, button `Ask about the work ↗`.

---

## 2. All visible body text in document order (100 text nodes)

```
Skip to content | Prathamesh More | Projects | Contact ↗
Open for work | About | Prathamesh | More | AI Engineer | Email | LinkedIn | Résumé
Selected projects | 13
cachefault | Finds prompt cache misses
Diagnostiq | Cites service manuals
Incident Lens | Checks public records
Branch Voice | Explore plans by voice
FireTrace | Wildfire source mapping
Codiey | Talk through a codebase
Queue Whisperer | GitHub changes with approval
Research Agent | Reviews research drafts
StratSim | Simulates F1 pit strategy
Wafer Defects | Trains wafer defect models
ReMind | Ranks memories over time
Prompt Optimization | Tests against a baseline
Audio–Lyric | Compares lyrics and audio
About | Experience | Publications | Contact
I turn unfamiliar problems | into working tools.
AI engineer | Research → systems
When a rooftop HVAC unit won't start, Diagnostiq finds what to check in its service manual. When an AI request misses the prompt cache, cachefault shows which field changed.
Experience | Where I've | been. | Full résumé
Avvi | AI Engineer | Avvi helps small businesses and managed service providers (MSPs) handle everyday IT tasks. Staff describe what they need in plain English, and the assistant prepares changes for a person to approve.
Indiana University | May 2024 – Jun 2026 | Applied AI Engineer | I built tools that helped faculty find academic papers and analyze published research.
Dimensionless Technologies | Feb 2023 – Jul 2023 | Machine Learning Engineer | I fine-tuned BERT for multiclass classification of streaming stock market news. I also built a tool to extract data from tender documents.
Benchmark Computer Solutions | Jun 2022 – Dec 2022 | Full Stack Engineer | I rebuilt the backend for a recruiting platform that extracts candidate information from résumés.
EDUCATION | M.S. in Data Science | Indiana University, Bloomington, IN | · | May 2025
Research, in print. | ( | 02 | ) | Scroll to explore ↔
Research paper | 2025 | An exploratory text-mining approach to analyzing DEI-related issues in eight leading architecture & design firms' publications | The Design Journal, 1-25 | Read paper
Research paper | 2023 | An algorithmic approach for text summarization | 2023 International Conference for Advancement in Technology (ICONAT), 1-5 | Read paper
Off the clock | I follow Chelsea, play League of Legends, VALORANT, and Counter-Strike, and keep up with their esports scenes. | Got a football take or an esports prediction? I'm always up for that conversation.
Let's build. | prpmore@gmail.com | LinkedIn | GitHub | Ask about the work
© | 2026 | Prathamesh More | Open for work
```

---

## 3. All links (href + label)

| Label | href |
|---|---|
| Skip to content | `/#main-content` |
| Prathamesh More (mobile bar) | `/` |
| Contact ↗ (mobile bar) | `/#contact` |
| About (rail) | `/` |
| Email | `mailto:prpmore@gmail.com` |
| LinkedIn | `https://linkedin.com/in/more-prathamesh` |
| Résumé | `https://tinyurl.com/434tnjd9` |
| 13 project rows → | `/project/p10` cachefault, `/project/p8` Diagnostiq, `/project/p13` Incident Lens, `/project/p12` Branch Voice, `/project/p11` FireTrace, `/project/p6` Codiey, `/project/p9` Queue Whisperer, `/project/p1` Research Agent, `/project/p3` StratSim, `/project/p4` Wafer Defects, `/project/p2` ReMind, `/project/p5` Prompt Optimization, `/project/p7` Audio–Lyric |
| Experience / Publications / Contact | `/#experience` / `/#publications` / `/#contact` |
| Full résumé | `https://tinyurl.com/434tnjd9` |
| Research paper 2025 (publication) | `https://www.tandfonline.com/doi/abs/10.1080/14606925.2025.2482556` |
| Research paper 2023 (publication) | `https://ieeexplore.ieee.org/abstract/document/10080575` |
| Let's build. / prpmore@gmail.com | `mailto:prpmore@gmail.com` |
| LinkedIn / GitHub | `https://linkedin.com/in/more-prathamesh` / `https://github.com/Spidey13` |

All 30 links; full objects in `ref-analysis-desktop.json`.

---

## 4. All image / asset URLs

- **Bundles**: `/assets/index-By5xrNhy.js` (774 KB, main app), `/assets/vendor-DOHx2j1n.js` (11 KB, React runtime), `/assets/animations-CBQAbgEh.js` (521 B, React JSX runtime), `/assets/index-Bbb1eNMb.css` (247 KB, Tailwind + all custom CSS).
- **Icons/logos**: `/prathamesh-more-mark.svg` (445x437 monogram, used as favicon AND the "Off the clock" purple mark), `/favicon-48.png`, `/favicon.ico`, `/apple-touch-icon.png`.
- **Fonts**: Google Fonts CSS `https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@87,600&family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,600;1,8..60,500&display=swap`; woff2 subsets from `fonts.gstatic.com` (Manrope + IBM Plex Mono actually downloaded on home). One local `@font-face`: `/fonts/branch-voice/InstrumentSans-latin.woff2` (used on a project page, not home).
- **Home has exactly ONE `<img>`** (`folio-personal__mark`). All other imagery is **39 inline SVGs**: 13 bespoke project thumbnail illustrations in the rail + Lucide `arrow-up-right` icons on links/publications. No raster images, no `<canvas>`, no `<video>` on home.
- **Analytics**: PostHog `us-assets.i.posthog.com/static/1.434.2/*` (`phc_YGbabwNXnKukzf22ZiTQ8bpOXnnIOaILf7K4XVnsLUB`), plus `data-ph-capture-attribute-*` attributes throughout.

---

## 5. Metadata

- `<title>`: `Prathamesh More | AI Engineer`; `<html lang="en">`; `<meta charset="UTF-8">`; viewport `width=device-width, initial-scale=1.0`; `theme-color #151513`.
- Description: `Prathamesh More is an AI engineer building agents, retrieval systems, evaluation tools, and applied machine learning products.`
- `robots`: `index,follow,max-image-preview:large`; canonical `https://www.prathamesh-more.com/`; `robots.txt` = `User-agent: * / Allow: / / Sitemap: .../sitemap.xml`.
- OG: `og:type=website`, `og:title`, `og:description`, `og:url`, `og:site_name`. Twitter: `twitter:card=summary`, `twitter:title`, `twitter:description`, `twitter:url`. **NO `og:image` and NO `twitter:image`** — a gap.
- JSON-LD `@graph` (3 nodes): `WebSite` (#website, name "Prathamesh More", alternateName "Prathamesh More Portfolio", inLanguage en-US); `ProfilePage` (#profile, isPartOf website, mainEntity person); `Person` (#person, name "Prathamesh More", additionalName "Pravin", alternateName ["Prathamesh Pravin More","Spidey13"], jobTitle "AI Engineer", sameAs GitHub `Spidey13`, LinkedIn `more-prathamesh`, Google Scholar `hzA9FxwAAAAJ`, ORCID `0009-0001-3761-0174`).
- SEO block is marked `<!-- seo:generated:start --> ... <!-- seo:generated:end -->` and `data-seo-generated="true"` (build-time generated per route).
- Each project route serves its own pre-rendered head (e.g. `/project/p8` → title `Diagnostiq | Prathamesh More`, its own description + canonical).

---

## 6. Single page or multiple routes? / project entries

**Multiple routes.** `react-router-dom` client routing (with View Transitions). Verified:

- `/` (home) — 200, 3472 B
- `/project/pN` — 13 distinct project pages, all 200 (different per-route HTML/SEO)
- `/demo/diagnostiq` — 200, separate interactive walkthrough route (not in sitemap)
- `/projects` → **308 redirect to `/`**
- `/experience/` → 404 (experience is a hash section on home, not a route)
- unknown paths → 404 (not SPA catch-all)
- `sitemap.xml` = home + 13 project URLs.

**13 projects, in rail order** (name — one-line thesis — id):

1. cachefault — Finds prompt cache misses — `p10`
2. Diagnostiq — Cites service manuals — `p8`
3. Incident Lens — Checks public records — `p13`
4. Branch Voice — Explore plans by voice — `p12`
5. FireTrace — Wildfire source mapping — `p11`
6. Codiey — Talk through a codebase — `p6`
7. Queue Whisperer — GitHub changes with approval — `p9`
8. Research Agent — Reviews research drafts — `p1`
9. StratSim — Simulates F1 pit strategy — `p3`
10. Wafer Defects — Trains wafer defect models — `p4`
11. ReMind — Ranks memories over time — `p2`
12. Prompt Optimization — Tests against a baseline — `p5`
13. Audio–Lyric — Compares lyrics and audio — `p7`

**2 publications** (the `(02)` counter): 2025 DEI text-mining (The Design Journal), 2023 text summarization (ICONAT). **4 jobs** + 1 education entry.

Sampled `/project/p8` (Diagnostiq): `article.premiere.premiere-diagnostiq.dq` is 3686px tall with bespoke sections (`dq-section`, `dq-grid`, `premiere-footer`), an embedded simulated product UI ("Watch the session 5:21", scrubber, chapter markers, draggable diagnostic card), stat counters (4 manuals / 354 windows / 860 chunks / 1,214), ADR links, and its own token set (`--dq-*`). Saved as `ref-project-p8.html` + `ref-shot-project-p8.png` + `ref-analysis-project-p8.json`.

---

## 7. Visual system

### Fonts
- Google Fonts declared: **Archivo** (`wdth 87, wght 600`), **IBM Plex Mono** (400, 500), **Manrope** (400, 500, 600, 800), **Source Serif 4** (normal 600, italic 500, optical 8..60). On home only **Manrope** and **IBM Plex Mono** are actually used (Archivo/Source Serif 4 are consumed on project pages). Tailwind preflight default is `Inter, system-ui, sans-serif` on `:root`/`body` but everything inside `.folio-home` overrides with `font: 400 16px/1.5 Manrope, Arial, sans-serif`.
- Observed computed families: `Manrope, system-ui, sans-serif` (rail, x202), `Manrope, Arial, sans-serif` (folio pane, x102), `"IBM Plex Mono", monospace` (labels, x18), `Inter, system-ui, sans-serif` (root only).
- Weights: 400 (default), 500 (subheads/strong), 600 (display H1 & project-page headings), 800 (rail name / big display).

### Font sizes (desktop 1440, computed)
| Element | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| H1 `#folio-title` | **123.74px** (`clamp(45px,11.5cqi,134px)`) | 600 | -9.28px (-.075em) | 121.265px (.98) |
| H2 "Where I've been." | 39.812px (`clamp(26px,3.7cqi,44px)`) | 500 | -2.19px | 42.2px |
| H2 "Research, in print." | 46.268px (`clamp(28px,4.3cqi,50px)`) | 500 | -2.31px | 50.89px |
| H2 "Off the clock" | 29.052px (`clamp(21px,2.7cqi,30px)`) | 500 | -1.16px | 33.4px |
| H2 "Let's build." | 110.828px (`clamp(50px,10.3cqi,119px)`) | 500 | -8.31px | 116.37px |
| H3 job titles | 28.514px (`clamp(20px,2.65cqi,31px)`) | 500 | -1.00px | 34.2px |
| H3 publication titles | 35px (`clamp(22px,3.45cqi,35px)`) | 500 | -1.225px | 49px |
| Body | 16px / 24px | 400 | normal | 1.5 |
| `.folio-label` (ABOUT/EXPERIENCE/…) | 11px IBM Plex Mono, uppercase | 400 | +0.495px | 16.5px |
| Small captions | 10–13px | 400 | — | — |
| Top nav links | 12px; mobile 11px | 400 | — | — |

Mobile (375px) H1 = **44.25px**; H2 "Where I've been." 29px; H3 23px; "Research, in print." 32px; "Let's build." 50px.

### Colors (custom properties on `.folio-home` and `.project-rail`)
```
--folio-ink:      #f1f1ed   (primary light text on dark)
--folio-ground:   #151515   (dark sections)
--folio-blue:     #244bea   (accent: "into working tools.", finale block, pub top border)
--folio-pad:      clamp(24px, 5.8cqi, 72px)   -> 62.4px at 1076 pane
--folio-rule:     #3c3c3c   (hairlines on dark)
```
```
--rail-ground:      #111211  (rail bg)
--rail-row:         #222321  (project card bg)
--rail-row-hover:   #2a2c28
--rail-row-active:  #2d302a
--rail-ink:         #f3f2eb
--rail-muted:       #b0b1a9
--rail-edge:        rgb(243 242 235 / 8%)
--rail-gutter:      #090a09  (6px right border)
--rail-row-radius:  14px
--rail-thumb-radius: 8px
--rail-thumb-width: 80px
```
Other computed values: hero `#eeeeea` bg / `#171717` ink; top-line border `#c7c7c4`; hero caption `#51514e`; job company `#b3b3af`; publication card `#eeeeea` bg / `#191919` ink / `5px solid #244bea` top border; scroll hint `#ababaa`; footer text `#d8dfff`; `.folio-personal p+p` `#d8dfff`; contact border `#ffffff65`; footer border `rgba(255,255,255,.27)`.

Root/body background = `rgb(23,22,18)` (from `--rp-ground #171612` set globally, visible only in gutters). Additional themed token sets exist for other pages: `--rp-*` (#151513 dark / #d9ff63 lime accent), `--bv-*` (Branch Voice light), `--ft-*` (FireTrace map), `--dq-*` (Diagnostiq), `--premiere-*` (#0b0c0b / #e66d4f), `--product-premiere-*` (#090a09). **Each project page has its own palette** — not one shared design system.

### Layout / spacing
- **No max-width container.** The content column is the pane itself: `--folio-pad: clamp(24px, 5.8cqi, 72px)` yields 62.4px padding each side → inner content width **951px** at 1440 viewport. Padding scales with the *container's* inline size (`cqi`), not the viewport.
- **CSS Container Queries** are load-bearing: `aside.project-rail { container: rail / inline-size }`, `article.folio-home { container: folio / inline-size }`, plus 12 `@container` blocks (`@container folio (max-width:560px)`, `(max-width:365px)`, `@container rail (max-width:340px)`, etc.). Many font sizes use `cqi` units (`11.5cqi`, `10.3cqi`, `4.3cqi`).
- Grid patterns: `folio-experience` = `grid-template-columns: minmax(0,1fr) minmax(0,2.35fr); gap: 0 24px` (label column + content). `folio-hero__bottom` = `1fr 2.35fr`. `folio-personal` = `1fr minmax(0,2.35fr) minmax(64px,.32fr)`. `folio-research` = horizontal card rail (`overflow:hidden`). `nav.project-index` = `display:grid; gap:8px; grid-template-columns:326px`. `.project-index__link` = `grid-template-columns: 80px 194px 16px` (thumb 80px / text / arrow), `min-height:72px`, `align-items:center`, `padding:8px 10px`.
- Flex patterns: top-line nav (`justify-content:space-between`, gap 20px), `.folio-contact__main` (space-between, gap 25px), `.folio-footer` (space-between), rail masthead (column flex).
- Section padding: hero `0 var(--folio-pad) 34px`; experience `34px var(--folio-pad) 27px`; research `29px var(--folio-pad) 27px`; finale `26px var(--folio-pad) 0`.

### Radii, shadows, gradients
- **Radii: essentially square.** `0px` on 297/323 elements. Exceptions: rail rows **14px**, rail thumbnails **8px**. (Other pages use pill `999px` chips.)
- **No drop shadows.** Only `box-shadow: inset 0 0 0 1px rgb(243 242 235 / .08)` hairline on the 13 rail rows. Everything else `none`.
- Hairline borders everywhere (1px) rather than shadows: `#c7c7c4`, `#3c3c3c`, `#777`, `rgba(255,255,255,.396/.27)`.
- **Gradients: NONE on the home page** (computed `backgroundImage` all `none`). The 15 linear / 2 radial gradient declarations in the stylesheet belong to other (project) pages: grid-line patterns, heat bars `linear-gradient(90deg,#3f6fd9,#ef7a55)`, glows, highlight underlines `linear-gradient(transparent 55%, #ffe14d 55%)`. `backdrop-filter: blur(7–18px)` (10 uses) and `mix-blend-mode: multiply` (2) also belong to project pages.

---

## 8. Interactions

- **Hero title reveal**: `.folio-title-line` runs `@keyframes folio-title-enter` `.65s cubic-bezier(.22,.61,.36,1) both` — `clip-path: inset(0 0 100%)` + `translateY(12px)` → visible. Second (accent) line has `animation-delay: 90ms`. This is the only running animation on the home page at rest.
- **Rail "deck" scroll animation** (the signature interaction): `div.project-rail__scroller` has `data-deck-active="true"`; JS applies **inline transforms** to each `.project-index__link` as the rail scrolls — observed `translateY(-0.235px) scale(0.99926)`, `translateY(-63.4px) scale(0.80)`, `translateY(-127.4px) scale(0.599)` with `opacity: .66`, `translateY(-159px) scale(0.5)` with `opacity: 0`. Cards compress/stack/fade like a deck based on scroll position. Driven by `requestAnimationFrame` (6 refs) + scroll listeners.
- **Two internal scrollers** (rail + document pane) instead of window scroll.
- **Horizontal publication carousel**: `.folio-research` `overflow:hidden`, `Scroll to explore ↔` hint, first card fully visible (818x292) with second card peeking at right; horizontally scrollable / swipeable (scroll-snap used on other pages).
- **Hover effects** (69 `:hover` rules total): top nav links → `--folio-blue`; rail rows → `--rail-row-hover` + stronger inset ring (transition `background-color .18s, box-shadow .18s cubic-bezier(.22,.61,.36,1)`); `.folio-contact__main:hover h2` → underline (`text-decoration-thickness:2px; text-underline-offset:8px`); publication card hover → `h3` treatment; "Full résumé"/text links underline.
- **Hash-anchor navigation** with `scrollIntoView` (3 refs) and `tabindex="-1"` on section heading targets; a `Skip to content` a11y link (`position:fixed`, off-screen until focus).
- **No** custom cursor, **no** `<canvas>` / WebGL / particles, **no** marquee/ticker, **no** animated counters on the home page (numeric stats exist but static there), **no** scroll-jacking / smooth-scroll library.
- **`prefers-reduced-motion: reduce`** honored globally: `animation-duration:.01ms!important; transition-duration:.01ms!important; scroll-behavior:auto`.
- **Libraries detected in `ref.js`**: React 19 (`vendor` bundle), **react-router-dom** (client routing, `RouterProvider`, `useViewTransitionState`), **Lucide** icons (inlined subset — `lucide lucide-arrow-up-right`), **PostHog** analytics. `IntersectionObserver` (6), `MutationObserver`, `ResizeObserver` (2), `requestAnimationFrame` (6), `matchMedia` (11). **NOT present**: framer-motion, GSAP, Lenis, three.js, Lottie, AOS, Swiper, D3, anime.js, canvas-confetti (the "three"/"d3"/"motion" grep hits are English prose/hashes inside project data strings, not libraries). All animation is hand-written CSS + vanilla JS.
- 9 `@keyframes` in stylesheet: `folio-title-enter`, `premiere-chapter-in`, `product-premiere-reveal`, `rp-drawer-in`, `rp-line-draw`, `rp-memory-rank`, `rp-node-settle`, `rp-race-dot`, `rp-wave` — mostly for project pages.

---

## 9. Hard to reproduce in static Next.js App Router + Tailwind

1. **Fixed-viewport two-pane app shell with two independent internal scrollers.** The window never scrolls on desktop; the left rail and right document each scroll separately with `100dvh` height and `overflow:auto` only on those panes. Default Next.js page flow + Tailwind breakpoints won't produce this; it needs a custom `h-dvh` grid/flex shell with deliberately isolated overflow, plus a completely different mobile layout (top bar + normal page scroll).
2. **CSS Container Queries with `cqi` fluid typography.** Headline sizes are `clamp(45px, 11.5cqi, 134px)`, `10.3cqi`, `4.3cqi` etc., keyed off `.folio-home`/`.project-rail` container widths, with `@container folio (max-width:560px)` and `(max-width:365px)` overrides. Tailwind v4 supports `@container` but standard `sm/md/lg` viewport breakpoints will NOT reproduce this behaviour — the type scales with the *pane*, not the viewport.
3. **Extreme display type with very tight negative tracking** (-.075em / -9.28px at 124px) and `line-height:.98`; requires exact clamp math, not a Tailwind type scale.
4. **The rail "deck" scroll-linked transform** — JS-driven inline `translateY/scale/opacity` per card on rAF, mapping scroll offset → stacking/fade. Needs a client component with scroll math; no library to lean on.
5. **Horizontal scroll-snap publication carousel with a deliberately peeking second card** and a `Scroll to explore ↔` hint.
6. **13 bespoke project case-study pages, each with a different visual language and interactive simulated product** (Diagnostiq's manual-troubleshooting player with timecode chapters, draggable diagnostic card, token-window diagrams, stat callouts, ADR links). These are not static content — they're mini interactive apps with their own token sets (`--dq-*`, `--bv-*`, `--ft-*`, `--rp-*`, `--premiere-*`, `--product-premiere-*`). Plus a separate `/demo/diagnostiq` walkthrough route. This is the bulk of the work and cannot be "styled" into existence.
7. **Unique hand-drawn project thumbnail illustrations** (13 inline SVG compositions with distinct palettes) and the custom monogram `prathamesh-more-mark.svg` — must be recreated as assets.
8. **Per-route build-time SEO injection**: each `/project/pN` serves distinct `<title>`, description, canonical and (likely) JSON-LD in the initial HTML. Needs `generateMetadata` per dynamic route in App Router.
9. **Sharp, hairline-driven aesthetic**: near-zero radii, zero drop shadows, 1px rules, `inset` hairline rings, `clip-path` staggered reveal, `text-wrap:pretty`, `overflow:clip` — Tailwind defaults (rounded cards, shadows) fight this; a lot of custom CSS is unavoidable (the original is 247 KB of CSS with ~2/3 custom).
10. **Build-time generated SEO + PostHog `data-ph-capture-attribute-*` telemetry on nearly every link** — not visual, but part of the markup contract.

Easier parts: it IS Tailwind under the hood (the `--tw-*` preflight block), the palette is small and tokenizable, Google Fonts are standard, and the home page itself has no canvas/WebGL/particle/custom-cursor complexity.

---

## 10. Files saved (absolute paths)

Base: `/private/var/folders/c_/gdtcnv4910sgc_cs3348cf0m0000gn/T/opencode/`

**Required deliverables**
- `ref-rendered.html` — fully rendered DOM (36.8 KB)
- `ref-shot.png` — full-page 1440x900 desktop screenshot (true full page; app-shell viewport)
- `ref-shot-mobile.png` — 375px full-page mobile screenshot (2234px tall)
- `ref.css` — stylesheet (247 KB, `index-Bbb1eNMb.css`)
- `ref.js` — main JS bundle (774 KB, `index-By5xrNhy.js`)

**Supplementary screenshots**
- `ref-shot-full.png` — 1440x2200 tall-viewport faithful full render (all sections + all 13 rail rows)
- `ref-shot-pane-0.png` … `ref-shot-pane-5.png` — right pane scrolled through 6 positions (true desktop scrolled views)
- `ref-shot-rail-bottom.png` — left rail scrolled to bottom
- `ref-shot-project-p8.png` — sample project page (`/project/p8` Diagnostiq)

**DOM / data**
- `ref-raw.html` — un-rendered `index.html` (SEO tags)
- `ref-project-p8.html` — rendered Diagnostiq project DOM
- `ref-analysis-desktop.json` — headings, landmarks, ids, links, images, text nodes, style frequency maps, metadata, JSON-LD, interaction hooks
- `ref-analysis-mobile.json` — mobile headings/sizes/overflow
- `ref-analysis-structural.json` — full computed-style dump of 39 structural selectors + scroll containers + container queries
- `ref-analysis-tall.json`, `ref-analysis-env.json`, `ref-analysis-project-p8.json`
- `ref-report.md` — this document

**Bundles / fonts / assets**
- `ref-vendor.js`, `ref-animations.js`, `ref-fonts.css` (Google Fonts CSS), `ref.html` (pre-existing duplicate of raw HTML, not created here)
- `ref-assets/prathamesh-more-mark.svg`, `ref-assets/favicon-48.png`, `ref-assets/favicon.ico`, `ref-assets/apple-touch-icon.png`
- `index-Bbb1eNMb.css`, `index-By5xrNhy.js`, `vendor-DOHx2j1n.js`, `animations-CBQAbgEh.js` (original hashed names)

**Scripts (read-only renderers, in temp dir)**
- `render-ref.cjs`, `render-ref2.cjs`
