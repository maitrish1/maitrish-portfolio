import { personal, experience, projects, skills, screenshotCounts } from './data'

// Single content boundary. Every component reads from this module only.
// Derived values come from lib/data.ts (verified earlier) and the resume PDF.

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
  line1: 'I turn an empty repo',
  line2: 'into a product people use.',
  supporting:
    'Full Stack Founding Engineer and Architect. First engineer at CheckMe Commerce, 10+ production frontends, 5 FastAPI microservices, 120+ APIs, 30,000+ customers.',
  kicker: 'AI engineer',
  kickerNote: 'Research → systems',
} as const

export const offClockCopy =
  'Off the clock I am usually taking something apart. I was the first engineer at CheckMe Commerce, shipped a college predictor to 400,000 students in 48 hours, and cut 16,000 lines of legacy code from a test platform. I like the part where a messy system becomes simple.'

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
  symbol: string
}

export const railProjects: RailProject[] = [
  {
    number: '01',
    slug: 'chqme',
    title: 'CheckMe Web Platform',
    thesis: 'Discovery, booking and payments for expert-led product demos.',
    symbol: 'cache',
  },
  {
    number: '02',
    slug: 'experienceos',
    title: 'ExperienceOS',
    thesis: 'Demo pipeline, installation tracking and brand analytics.',
    symbol: 'diagnostic',
  },
  {
    number: '03',
    slug: 'booking',
    title: 'Booking Platform',
    thesis: 'From product discovery to confirmed demo booking.',
    symbol: 'incident',
  },
  {
    number: '04',
    slug: 'ops',
    title: 'Operations Dashboard',
    thesis: 'Leads, attendance and role-based access for internal teams.',
    symbol: 'audio',
  },
  {
    number: '05',
    slug: 'experience-portal',
    title: 'Experience Portal',
    thesis: 'Live WebRTC demo rooms for 6,000+ virtual sessions.',
    symbol: 'fire',
  },
  {
    number: '06',
    slug: 'quizrr',
    title: 'Quizrr by MathonGo',
    thesis: 'Test taking and analysis for 2.5M JEE and NEET students.',
    symbol: 'voice',
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
  'First engineer. 10+ Next.js apps, 5 FastAPI services, 30,000+ customers, 25%+ demo-to-purchase conversion.',
  'Scaled Quizrr from 1M to 2.5M students. 93% faster builds, 95+ Lighthouse scores.',
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

export const projectCases: ProjectCase[] = projects.map((p) => {
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

// The live site itself returns 404 for these skill SVGs. Never request them.
export const missingSkillIcons = new Set([
  'ALB', 'AWS_EC2', 'CloudFront', 'EC2_Deployments', 'Feature_Flags', 'HLD',
  'IAM', 'LLD', 'Microsoft_Clarity', 'Multi_AZ', 'RDS', 'Route53', 'S3',
  'S3_Recordings', 'SES', 'VPC', 'WAF', 'ap_south_1',
])

export type SkillItem = { label: string; icon: string; missing: boolean }
export type SkillGroup = { title: string; color: string; border: string; items: SkillItem[] }

export const skillGroups: SkillGroup[] = skills.map((cat) => ({
  title: cat.title,
  color: cat.color,
  border: cat.border,
  items: cat.items.map((item) => {
    const file = item.icon.replace('/skills/', '').replace('.svg', '')
    return { label: item.label, icon: item.icon, missing: missingSkillIcons.has(file) }
  }),
}))

export const skillCount = skillGroups.reduce((n, g) => n + g.items.length, 0)

export const footer = {
  copyright: `© ${site.year} ${site.name}`,
  availability: site.availability,
} as const

// Keep a reference so the resume link stays tied to the verified data module.
export const resumeDownloadName = personal.resumeDownloadName
