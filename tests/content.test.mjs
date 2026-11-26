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

test('rail has exactly six real projects, all with slugs and thesis lines', () => {
  const c = read('lib/content.ts')
  const block = c.slice(c.indexOf('export const railProjects'), c.indexOf('export type WritingPost'))
  assert.equal((block.match(/slug: '/g) || []).length, 6)
  assert.equal((block.match(/thesis: '/g) || []).length, 6)
  for (const slug of ['chqme', 'experienceos', 'booking', 'ops', 'experience-portal', 'quizrr']) {
    assert.ok(block.includes(`slug: '${slug}'`), `missing slug ${slug}`)
  }
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
