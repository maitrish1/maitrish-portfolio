import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const root = new URL('..', import.meta.url).pathname
const read = (p) => readFileSync(join(root, p), 'utf8')

test('content module carries every decided value', () => {
  const c = read('lib/content.ts')
  assert.match(c, /MCA @ IIT Patna/)
  assert.match(c, /\+919900177356/)
  assert.match(c, /maitrishmukherjeee@gmail\.com/)
  assert.match(c, /I build systems/)
  assert.match(c, /Off the clock I ride/)
  assert.match(c, /Writing, in public\./)
  assert.doesNotMatch(c, /Acharya Institute/)
  assert.doesNotMatch(c, /3\.3 years/)
  assert.doesNotMatch(c, /20K\+/)
})

test('rail has six real projects plus two AI placeholders, all with slugs and images', () => {
  const c = read('lib/content.ts')
  const block = c.slice(c.indexOf('export const railProjects'), c.indexOf('export type WritingPost'))
  assert.equal((block.match(/slug: '/g) || []).length, 8)
  assert.equal((block.match(/thesis: '/g) || []).length, 8)
  assert.equal((block.match(/image: '/g) || []).length, 8)
  for (const slug of ['chqme', 'experienceos', 'booking', 'ops', 'experience-portal', 'quizrr', 'ai-agent', 'ai-eval']) {
    assert.ok(block.includes(`slug: '${slug}'`), `missing slug ${slug}`)
  }
  assert.ok(block.includes("title: 'AI Research Agent'"))
  assert.ok(block.includes("title: 'Prompt Eval Harness'"))
  for (const p of ['chqme/1.png', 'experienceos/1.png', 'booking/1.png', 'ops/1.png', 'experience-chqme/1.png', 'quizrr/1.png']) {
    assert.ok(existsSync(join(root, 'public/screenshots', p)), `missing ${p}`)
  }
  assert.ok(existsSync(join(root, 'public/placeholders/ai-agent.svg')))
  assert.ok(existsSync(join(root, 'public/placeholders/ai-eval.svg')))
})

test('all eight dev.to posts are present with working urls', () => {
  const c = read('lib/content.ts')
  const block = c.slice(c.indexOf('export const writingPosts'), c.indexOf('const plain ='))
  assert.equal((block.match(/https:\/\/dev\.to\/maitrish\//g) || []).length, 8)
  assert.ok(block.includes('Test'))
  assert.ok(block.includes('test-2bhf'))
})

test('every referenced screenshot exists on disk', () => {
  const data = read('lib/data.ts')
  const block = data.slice(data.indexOf('export const screenshotCounts'), data.indexOf('export type SkillCategory'))
  const pairs = [...block.matchAll(/'(\/screenshots\/[^']+)':\s*(\d+)/g)]
  assert.equal(pairs.length, 6, 'expected six screenshot directories')
  let total = 0
  for (const [, dir, count] of pairs) {
    const n = Number(count)
    total += n
    for (let i = 1; i <= n; i += 1) {
      assert.ok(existsSync(join(root, 'public', dir, `${i}.png`)), `missing ${dir}/${i}.png`)
    }
  }
  assert.equal(total, 54, 'expected 54 screenshots')
})

test('every skill has a real SVG icon and no neutral fallback', () => {
  const data = read('lib/data.ts')
  const skillsBlock = data.slice(data.indexOf('export const skills: SkillCategory[]'))
  const refs = [...new Set([...skillsBlock.matchAll(/icon: '(\/skills\/[^']+)'/g)].map((m) => m[1]))]
  assert.equal(refs.length, 57, `expected 57 distinct icon files, got ${refs.length}`)
  for (const ref of refs) {
    assert.ok(existsSync(join(root, 'public', ref)), `missing icon ${ref}`)
    const svg = readFileSync(join(root, 'public', ref), 'utf8')
    assert.match(svg, /<svg/, `${ref} is not an SVG`)
  }
  assert.doesNotMatch(read('lib/content.ts'), /missingSkillIcons|fallback/)
  assert.doesNotMatch(read('components/sections/FolioSkills.tsx'), /missing|fallback/)
})

test('animations: CSS scroll reveals, stagger, hover, reduced motion', () => {
  const css = read('app/globals.css')
  // Pure CSS scroll-driven animation: no JS gating, no hydration dependency.
  assert.match(css, /@keyframes folio-reveal-in/)
  assert.match(css, /animation-timeline: view\(\)/)
  assert.match(css, /animation-range: entry/)
  assert.match(css, /@supports \(animation-timeline: view\(\)\)/)
  assert.match(css, /:not\(\.project-index__link\)/)
  assert.match(css, /var\(--reveal-delay, 0ms\)/)
  assert.match(css, /\[data-reveal-group\] > \[data-reveal\]:nth-child\(2\)/)
  assert.match(css, /translate: 0 26px/)
  assert.match(css, /\.project-index__link:hover \.project-index__image/)
  assert.match(css, /background-color 0\.35s/)
  assert.match(css, /scroll-snap-type: none/)
  assert.match(css, /@media print/)
  assert.match(css, /@keyframes folio-reveal-in-mobile/)
  // No JS reveal class gating anywhere.
  assert.doesNotMatch(css, /\.js-ready|reveal-failsafe|is-visible|will-change/)
  const layout = read('app/layout.tsx')
  assert.doesNotMatch(layout, /js-ready|reveal-failsafe|suppressHydrationWarning|<noscript>/)
  assert.doesNotMatch(read('components/shell/Shell.tsx'), /ScrollReveal/)
  assert.equal(existsSync(join(root, 'components/shell/ScrollReveal.tsx')), false)
  for (const f of ['components/sections/FolioSkills.tsx', 'components/sections/FolioWriting.tsx',
    'components/sections/FolioExperience.tsx', 'components/case-study/CaseStudy.tsx',
    'components/shell/Shell.tsx']) {
    assert.match(read(f), /data-reveal/, `${f} missing reveal hooks`)
  }
})

test('directed copy: bigger hero, hobbies, updated numbers', () => {
  const c = read('lib/content.ts')
  assert.match(c, /I build systems/)
  assert.match(c, /that move millions\./)
  assert.match(c, /900\+ APIs, 50K\+ customers/)
  assert.match(c, /SharkNinja, EcoFlow and Dreame/)
  assert.match(c, /Off the clock I ride/)
  assert.match(c, /Long roads, weekend trips/)
  assert.match(c, /Psychology books, painting/)
  assert.doesNotMatch(c, /empty repo|I am usually taking something apart/)
  const data = read('lib/data.ts')
  assert.doesNotMatch(data, /120\+|30,000|30K\+|20K\+/)
})

test('no analytics, no image optimizer, no custom cursor', () => {
  for (const p of ['app/layout.tsx', 'components/shell/Shell.tsx']) {
    const s = read(p)
    assert.doesNotMatch(s, /posthog|PostHog|clarity|Clarity|data-ph-capture/i)
  }
  const layout = read('app/layout.tsx')
  assert.doesNotMatch(layout, /Cursor/)
  assert.match(layout, /themeColor: '#151513'/)
  assert.doesNotMatch(layout, /openGraph: \{[\s\S]*?images:/)
  assert.doesNotMatch(layout, /fonts\.googleapis\.com/)
  assert.doesNotMatch(layout, /120\+|30,000|30K\+|20K\+/)
  assert.equal((layout.match(/900\+ APIs, 50K\+ customers/g) || []).length, 3,
    'page, openGraph and twitter descriptions must all use the new copy')
})

test('fonts are self-hosted, no external runtime requests', () => {
  const css = read('app/globals.css')
  assert.match(css, /@font-face/)
  assert.match(css, /font-family: 'Manrope'/)
  assert.match(css, /font-family: 'IBM Plex Mono'/)
  assert.match(read('app/globals.css'), /font-weight: 400 800/)
  for (const f of ['manrope-variable.woff2', 'ibm-plex-mono-400.woff2', 'ibm-plex-mono-500.woff2']) {
    const p = join(root, 'public/fonts', f)
    assert.ok(existsSync(p), `missing ${f}`)
    assert.ok(readFileSync(p).slice(0, 4).toString() === 'wOF2', `${f} is not woff2`)
  }
})

test('reference CSS and extension CSS are both present', () => {
  assert.ok(existsSync(join(root, 'app/reference.css')))
  const css = read('app/reference.css')
  assert.ok(css.length > 200000, 'reference CSS should be the full 247 KB build')
  assert.match(css, /\.folio-home/)
  assert.match(css, /@container/)
  assert.match(read('app/globals.css'), /\.case-study__shots/)
})

test('no opengraph image files remain', () => {
  assert.equal(existsSync(join(root, 'app/opengraph-image.png')), false)
  assert.equal(existsSync(join(root, 'app/opengraph-image.alt.txt')), false)
  assert.ok(existsSync(join(root, 'app/icon.svg')))
})

test('skill groups cover 59 items', () => {
  const data = read('lib/data.ts')
  const skills = data.slice(data.indexOf('export const skills: SkillCategory[]'))
  const labels = (skills.match(/label: '/g) || []).length
  assert.equal(labels, 59, `expected 59 skill labels, got ${labels}`)
})

test('resume asset is present', () => {
  assert.ok(existsSync(join(root, 'public/resumes/Maitrish_Mukherjee2July2026.pdf')))
  assert.ok(readdirSync(join(root, 'public/skills')).length >= 39)
})

test('photo is present and wired into the rail and the personal mark', () => {
  assert.ok(existsSync(join(root, 'public/photos/IMG_4843.jpg')))
  const content = read('lib/content.ts')
  assert.match(content, /photo: '\/photos\/IMG_4843\.jpg'/)
  assert.match(read('components/shell/Shell.tsx'), /rail-masthead__photo/)
  assert.match(read('components/sections/FolioFinale.tsx'), /src=\{site\.photo\}/)
})

// Only the last occurrence of a selector counts: the revision block overrides
// earlier base rules. A regex over the whole file can match a later rule's
// declaration and pass even when the override is gone.
const lastRule = (css, selector) => {
  const at = css.lastIndexOf(selector + ' {')
  assert.ok(at >= 0, `missing rule ${selector}`)
  const end = css.indexOf('}', at)
  return css.slice(at, end)
}

// A selector may have a base rule plus later hover/transition rules. Gather
// every body and check the flattening declaration is present in at least one.
const allRules = (css, selector) => {
  const bodies = []
  let from = 0
  while (true) {
    const at = css.indexOf(selector + ' {', from)
    if (at < 0) break
    const end = css.indexOf('}', at)
    bodies.push(css.slice(at, end))
    from = end + 1
  }
  assert.ok(bodies.length > 0, `missing rule ${selector}`)
  return bodies.join('\n')
}

test('experience, skills and contact are flat rows, not cards', () => {
  const css = read('app/globals.css')
  assert.match(allRules(css, '.folio-skills__grid'), /border: 0/)
  assert.match(allRules(css, '.folio-skills__group'), /background: none/)
  assert.match(allRules(css, '.folio-skills__item'), /border: 0/)
  assert.match(allRules(css, '.folio-job'), /border-radius: 0/)
  assert.match(allRules(css, '.folio-subpage__item'), /border-radius: 0/)
  assert.match(allRules(css, '.folio-contact__links a'), /border: 0/)
  for (const sel of ['.folio-skills__grid', '.folio-skills__group', '.folio-skills__item',
    '.folio-job', '.folio-subpage__list', '.folio-subpage__item', '.folio-contact__links a']) {
    assert.doesNotMatch(lastRule(css, sel), /border-radius: [1-9]|border: 1px|box-shadow: 0 [1-9]/,
      `${sel} reintroduces card styling`)
  }
})

test('rail role wraps instead of overflowing', () => {
  const css = read('app/globals.css')
  assert.match(lastRule(css, '.rail-masthead__surname-line'), /white-space: normal/)
  assert.match(lastRule(css, '.rail-masthead__role'), /overflow-wrap: anywhere/)
})
