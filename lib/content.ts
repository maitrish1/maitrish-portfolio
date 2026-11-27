import { personal, experience, projects, skills, screenshotCounts } from './data'

// Single content boundary. Every component reads from this module only.

export const site = {
  name: 'Maitrish Mukherjee',
  firstName: 'Maitrish',
  lastName: 'Mukherjee',
  role: 'Full Stack Founding Engineer & Architect',
  credentials: 'MCA @ IIT Patna',
  email: 'maitrishmukherjeee@gmail.com',
  phone: '+919900177356',
  phoneHref: 'tel:+919900177356',
  location: 'Bengaluru, India',
  photo: '/photos/IMG_4843.jpg',
  linkedin: 'https://linkedin.com/in/maitrish',
  github: 'https://github.com/maitrish1',
  devto: 'https://dev.to/maitrish',
  website: 'https://maitrish.com',
  resume: '/resumes/Maitrish_Mukherjee2July2026.pdf',
  availability: 'Open for work',
  year: '2026',
} as const

export const heroCopy = {
  label: 'About',
  line1: 'I build systems',
  line2: 'that move millions.',
  supporting:
    'Founding engineer. 900+ APIs, 50K+ customers, and the platforms behind SharkNinja, EcoFlow and Dreame.',
  kicker: 'Full stack',
  kickerNote: 'Zero → scale',
} as const

export const offClockCopy =
  'Off the clock I ride. Long roads, weekend trips, and no fixed plan. Psychology books, painting, and a cat who runs the house. Been building things since I was 14.'

export const writingHeading = 'Writing, in public.'

export const education = {
  label: 'Education',
  degree: 'MCA',
  school: 'IIT Patna',
  detail: 'Master of Computer Applications, Indian Institute of Technology Patna',
} as const

export const sectionAnchors = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const

export type RailProject = {
  number: string
  slug: string
  title: string
  thesis: string
  image: string
}

// The first six are real projects. The last two are AI placeholders added so
// the rail and the pane have enough content to scroll. Replace them later.
export const railProjects: RailProject[] = [
  {
    number: '01',
    slug: 'chqme',
    title: 'CheckMe Web Platform',
    thesis: 'Discovery, booking and payments for expert-led product demos.',
    image: '/screenshots/chqme/1.png',
  },
  {
    number: '02',
    slug: 'experienceos',
    title: 'ExperienceOS',
    thesis: 'Demo pipeline, installation tracking and brand analytics.',
    image: '/screenshots/experienceos/1.png',
  },
  {
    number: '03',
    slug: 'booking',
    title: 'Booking Platform',
    thesis: 'From product discovery to confirmed demo booking.',
    image: '/screenshots/booking/1.png',
  },
  {
    number: '04',
    slug: 'ops',
    title: 'Operations Dashboard',
    thesis: 'Leads, attendance and role-based access for internal teams.',
    image: '/screenshots/ops/1.png',
  },
  {
    number: '05',
    slug: 'experience-portal',
    title: 'Experience Portal',
    thesis: 'Live WebRTC demo rooms for 6,000+ virtual sessions.',
    image: '/screenshots/experience-chqme/1.png',
  },
  {
    number: '06',
    slug: 'quizrr',
    title: 'Quizrr by MathonGo',
    thesis: 'Test taking and analysis for 2.5M JEE and NEET students.',
    image: '/screenshots/quizrr/1.png',
  },
  {
    number: '07',
    slug: 'ai-agent',
    title: 'AI Research Agent',
    thesis: 'Placeholder: an agent that reviews research drafts.',
    image: '/placeholders/ai-agent.svg',
  },
  {
    number: '08',
    slug: 'ai-eval',
    title: 'Prompt Eval Harness',
    thesis: 'Placeholder: scores agent outputs against a baseline.',
    image: '/placeholders/ai-eval.svg',
  },
]

export type WritingPost = {
  title: string
  url: string
  kind: string
  date: string
  readTime: string
}

export const writingPosts: WritingPost[] = [
  {
    title: "How I'm Running My Job Search on Autopilot — Without Touching a Spreadsheet",
    url: 'https://dev.to/maitrish/how-im-running-my-job-search-on-autopilot-without-touching-a-spreadsheet-a19',
    kind: 'Article',
    date: 'Apr 18',
    readTime: '6 min read',
  },
  {
    title: 'How I Built a Personal AI Agent That Runs on My Google Cloud VM — And Powers My Entire Portfolio',
    url: 'https://dev.to/maitrish/how-i-built-a-personal-ai-agent-that-runs-on-my-google-cloud-vm-and-powers-my-entire-portfolio-5fob',
    kind: 'Article',
    date: 'Apr 18',
    readTime: '6 min read',
  },
  {
    title: 'Hosting Your AI Agent on Google Cloud VM: A Complete Setup Guide',
    url: 'https://dev.to/maitrish/hosting-your-ai-agent-on-google-cloud-vm-a-complete-setup-guide-556m',
    kind: 'Article',
    date: 'Apr 18',
    readTime: '4 min read',
  },
  {
    title: 'I Built an AI Agent That Texts Me on Telegram — And It Does My Job Search',
    url: 'https://dev.to/maitrish/i-built-an-ai-agent-that-texts-me-on-telegram-and-it-does-my-job-search-5d39',
    kind: 'Article',
    date: 'Apr 18',
    readTime: '4 min read',
  },
  {
    title: 'Test',
    url: 'https://dev.to/maitrish/test-2bhf',
    kind: 'Article',
    date: 'Apr 18',
    readTime: '1 min read',
  },
  {
    title: 'Mastering React Data Fetching: A Comprehensive Guide for Developers',
    url: 'https://dev.to/maitrish/mastering-react-data-fetching-a-comprehensive-guide-for-developers-19pc',
    kind: 'Article',
    date: "Nov 28 '23",
    readTime: '6 min read',
  },
  {
    title: 'Mastering React Performance: In-Depth Guide to useCallback and useMemo',
    url: 'https://dev.to/maitrish/mastering-react-performance-in-depth-guide-to-usecallback-and-usememo-5114',
    kind: 'Article',
    date: "Nov 24 '23",
    readTime: '2 min read',
  },
  {
    title: 'Generator functions in Javascript',
    url: 'https://dev.to/maitrish/generator-functions-in-javascript-274n',
    kind: 'Article',
    date: "Nov 22 '23",
    readTime: '2 min read',
  },
]

const plain = (html: string) => html.replace(/<[^>]+>/g, '')

export type Job = {
  company: string
  role: string
  period: string
  location: string
  result: string
  description: string
}

const jobResults = [
  'First engineer. 900+ APIs, 50K+ customers, and platforms for SharkNinja, EcoFlow and Dreame.',
  'Scaled the platform from 1M to 2.5M students. 93% faster builds, 95+ Lighthouse scores.',
  'Two production platforms in three months. 45% faster loads with Next.js SSR and SWR.',
  'HR SaaS with 3 dashboards and 20+ screens. Load time cut from 3.4s to 1.8s.',
]

export const jobs: Job[] = experience.map((entry, i) => ({
  company: entry.company,
  role: entry.role,
  period: entry.period,
  location: entry.location,
  result: jobResults[i],
  description: entry.bullets.length > 0 ? plain(entry.bullets[0]) : '',
}))

const slugByDomain: Record<string, string> = {
  'chqme.com': 'chqme',
  'experienceos.chqme.com': 'experienceos',
  'book.chqme.com': 'booking',
  'ops.chqme.com': 'ops',
  'experience.chqme.com': 'experience-portal',
  'app.quizrr.in': 'quizrr',
}

export type ProjectCase = {
  slug: string
  name: string
  subtitle: string
  description: string
  stack: string[]
  url: string
  visitLabel: string
  screenshotDir: string
  screenshotCount: number
  screenshots: string[]
}

const realCases: ProjectCase[] = projects.map((p) => {
  const dir = p.screenshotDir
  const count = screenshotCounts[dir] ?? 0
  return {
    slug: slugByDomain[p.domain] ?? p.domain.split('.')[0],
    name: p.name,
    subtitle: p.subtitle,
    description: p.description,
    stack: [...p.stack],
    url: p.url,
    visitLabel: p.visitLabel,
    screenshotDir: dir,
    screenshotCount: count,
    screenshots: Array.from({ length: count }, (_, i) => `${dir}/${i + 1}.png`),
  }
})

const placeholderCases: ProjectCase[] = [
  {
    slug: 'ai-agent',
    name: 'AI Research Agent',
    subtitle: 'Placeholder project',
    description: 'Placeholder for an AI project. Replace this copy and the images when the real work is ready.',
    stack: ['AI', 'Agents', 'Placeholder'],
    url: 'https://maitrish.com',
    visitLabel: 'maitrish.com',
    screenshotDir: '/placeholders',
    screenshotCount: 1,
    screenshots: ['/placeholders/ai-agent.svg'],
  },
  {
    slug: 'ai-eval',
    name: 'Prompt Eval Harness',
    subtitle: 'Placeholder project',
    description: 'Placeholder for an AI project. Replace this copy and the images when the real work is ready.',
    stack: ['AI', 'Evaluation', 'Placeholder'],
    url: 'https://maitrish.com',
    visitLabel: 'maitrish.com',
    screenshotDir: '/placeholders',
    screenshotCount: 1,
    screenshots: ['/placeholders/ai-eval.svg'],
  },
]

export const projectCases: ProjectCase[] = [...realCases, ...placeholderCases]

export type SkillItem = { label: string; icon: string }
export type SkillGroup = { title: string; color: string; border: string; items: SkillItem[] }

// Every skill now has a real SVG in public/skills. No neutral dots.
export const skillGroups: SkillGroup[] = skills.map((cat) => ({
  title: cat.title,
  color: cat.color,
  border: cat.border,
  items: cat.items.map((item) => ({ label: item.label, icon: item.icon })),
}))

export const skillCount = skillGroups.reduce((n, g) => n + g.items.length, 0)

export const footer = {
  copyright: `© ${site.year} ${site.name}`,
  availability: site.availability,
} as const

export const resumeDownloadName = personal.resumeDownloadName
