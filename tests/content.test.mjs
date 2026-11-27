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
  assert.match(c, /I turn an empty repo/)
  assert.match(c, /Off the clock I am usually taking something apart/)
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

test('missing skill icons are never referenced as img src', () => {
  const c = read('lib/content.ts')
  assert.match(c, /missingSkillIcons/)
  assert.match(c, /missingSkillIcons\.has\(file\)/)
  const fallback = read('app/globals.css')
  assert.match(fallback, /folio-skills__fallback/)
})

test('no analytics, no image optimizer, no custom cursor', () => {
  for (const p of ['app/layout.tsx', 'components/shell/Shell.tsx']) {
    const s = read(p)
    assert.doesNotMatch(s, /posthog|PostHog|clarity|Clarity|data-ph-capture/i)
  }
  const layout = read('app/layout.tsx')
  assert.doesNotMatch(layout, /Cursor/)
  assert.match(layout, /Manrope/)
  assert.match(layout, /IBM\+Plex\+Mono/)
  assert.match(layout, /themeColor: '#151513'/)
  assert.doesNotMatch(layout, /openGraph: \{[\s\S]*?images:/)
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

test('experience, skills and contact are flat rows, not cards', () => {
  const css = read('app/globals.css')
  assert.match(lastRule(css, '.folio-skills__grid'), /border: 0/)
  assert.match(lastRule(css, '.folio-skills__group'), /background: none/)
  assert.match(lastRule(css, '.folio-skills__item'), /border: 0/)
  assert.match(lastRule(css, '.folio-job'), /border-radius: 0/)
  assert.match(lastRule(css, '.folio-subpage__item'), /border-radius: 0/)
  assert.match(lastRule(css, '.folio-contact__links a'), /border: 0/)
})

test('rail role wraps instead of overflowing', () => {
  const css = read('app/globals.css')
  assert.match(lastRule(css, '.rail-masthead__surname-line'), /white-space: normal/)
  assert.match(lastRule(css, '.rail-masthead__role'), /overflow-wrap: anywhere/)
})
