export const personal = {
  name: 'Maitrish Mukherjee',
  role: 'SDE-2 · Founding Engineer',
  tagline: 'Founding Engineer at ChqMe (10+ apps, 5 microservices, AWS) · Ex-SDE-1 at MathonGo (1M+ users) · MCA @ IIT Patna',
  summary:
    'Founding Engineer who built a commerce platform from zero — 10+ apps, 5 microservices, full AWS infra. Previously scaled MathonGo to 2.5M students. I don\'t just ship features. I own products.',
  location: 'Bengaluru, KA · Willing to relocate',
  email: 'maitrish03@gmail.com',
  phone: '9900177356',
  links: {
    linkedin: 'https://linkedin.com/in/maitrishmukherjee',
    github: 'https://github.com/maitrish1',
    devto: 'https://dev.to/maitrish',
    website: 'https://maitrish.com',
  },
}

export const stats = [
  { value: '20K+', label: 'Customers Served' },
  { value: '2.5M', label: 'Students on Platform' },
  { value: '400K', label: 'Users in 48hrs' },
  { value: '4+', label: 'Years Building' },
]

export const experience = [
  {
    role: 'SDE-2 · Founding Engineer',
    company: 'CheckMe Commerce Pvt. Ltd.',
    location: 'Ahmedabad, GJ',
    period: 'Aug 2025 — Present',
    links: [
      { label: 'chqme.com', url: 'https://chqme.com' },
      { label: 'experienceos', url: 'https://experienceos.chqme.com' },
      { label: 'book', url: 'https://book.chqme.com' },
      { label: 'ops', url: 'https://ops.chqme.com' },
    ],
    bullets: [
      'Sole engineer for first 4 months — architected the entire platform from scratch across web, API, and cloud infrastructure, making all stack and system design decisions independently.',
      'Built 10+ Next.js frontends and 5 FastAPI microservices on PostgreSQL Multi-AZ RDS (60+ tables), covering 7 order types, RBAC across 9 role types, and multi-tenant SaaS mode via feature flags.',
      'Onboarded global brands SharkNinja, Nester, Tiron, EcoFlow — achieved 25%+ demo-to-purchase conversion rate.',
      'Engineered ZegoCloud WebRTC video infra, CDE training LMS with YouTube sync, and multi-channel notifications (SMS, WhatsApp, SES).',
      'Designed AWS infra: ALB, WAF with DDoS/XSS/SQLi rules, Multi-AZ RDS, S3, SES, Route53 in ap-south-1.',
      'Built CDN-distributed embeddable SDK (single JS file) with 5 embed modes and session-token auth for any JS website.',
    ],
    metrics: [
      { value: '20K+', label: 'Customers' },
      { value: '6,000+', label: 'Virtual Demos' },
      { value: '3,000+', label: 'Physical Demos' },
      { value: '25%+', label: 'Conversion Rate' },
    ],
  },
  {
    role: 'SDE-1 · Frontend',
    company: 'MathonGo',
    location: 'Bengaluru, KA',
    period: 'Jul 2024 — Aug 2025',
    links: [
      { label: 'mathongo.com', url: 'https://mathongo.com' },
      { label: 'app.quizrr.in', url: 'https://app.quizrr.in' },
      { label: 'JEE Predictor', url: 'https://tools.mathongo.com/jee-main-college-predictor' },
    ],
    bullets: [
      'Proposed and led migration from CRA (Node 16) to Vite + TurboRepo — 93% faster builds, 50% faster page loads, 21% smaller bundle.',
      'Frontend overhaul directly contributed to platform growth from 1M → 2.5M students.',
      'Built JEE Main College Predictor — 400K+ users in 48 hours, ranked 2nd on Google Search.',
      'Integrated WebEngage A/B testing — 28% rise in test completions, 35% rise in Test Analysis engagement.',
      'Achieved 95+ Lighthouse scores across Performance, SEO and Best Practices.',
    ],
    metrics: [
      { value: '1M→2.5M', label: 'Student Growth' },
      { value: '400K', label: 'Users in 48hrs' },
      { value: '93%', label: 'Faster Builds' },
      { value: '95+', label: 'Lighthouse Score' },
    ],
  },
  {
    role: 'React Developer',
    company: 'Codebuddy Pvt. Ltd.',
    location: 'Kolkata, WB',
    period: 'May 2023 — Aug 2023',
    links: [{ label: 'codebuddy.co', url: 'https://codebuddy.co' }],
    bullets: [
      'Delivered two production client platforms in 3 months — Freelance Marketplace and Car Rental App.',
      'Next.js SSR + SWR caching: 45% faster load times, zero stale data. TTFB reduced from 1.3s to 750ms.',
      'Maintained 6-hour PR turnaround with 5+ production deploys per week.',
    ],
    metrics: [],
  },
  {
    role: 'UI Developer',
    company: 'FWC Inc.',
    location: 'Bengaluru, KA',
    period: 'May 2022 — May 2023',
    links: [{ label: 'fwc.co.in', url: 'https://fwc.co.in' }],
    bullets: [
      'Built HR SaaS frontend — 3 dashboards (Admin, Manager, Recruiter), 20+ screens, 40+ REST API integrations.',
      'RBAC implementation reduced role permission bugs by 45%. Page load optimized from 3.4s → 1.8s.',
      '8+ real-time Chart.js + Firebase data visualizations for company performance tracking.',
    ],
    metrics: [],
  },
]

export const projects = [
  {
    name: 'ChqMe Platform',
    company: 'CheckMe Commerce · 2025',
    desc: 'Full Experience Commerce OS — virtual/physical demo booking, CRM, partner portals, admin console, and embeddable SDK. Serving 20K+ customers with SharkNinja, EcoFlow onboard.',
    stack: ['Next.js 16', 'FastAPI', 'PostgreSQL', 'AWS', 'WebRTC'],
    url: 'https://chqme.com',
    urlLabel: 'chqme.com',
  },
  {
    name: 'ExperienceOS',
    company: 'CheckMe Commerce · 2025',
    desc: 'B2B operations dashboard for brands managing demos, installations, sales pipelines, and partner networks across virtual and physical channels.',
    stack: ['Next.js', 'TailwindCSS', 'Zustand', 'FastAPI'],
    url: 'https://experienceos.chqme.com',
    urlLabel: 'experienceos.chqme.com',
  },
  {
    name: 'JEE College Predictor',
    company: 'MathonGo · 2024',
    desc: 'Ranked 2nd on Google Search. 400K+ users in 48 hours of launch. Built on a 2.5M student platform — the fastest traffic spike in MathonGo\'s history.',
    stack: ['Next.js', 'SSR', 'SEO', 'React Query'],
    url: 'https://tools.mathongo.com/jee-main-college-predictor',
    urlLabel: 'Live Tool',
  },
  {
    name: 'Quizrr by MathonGo',
    company: 'MathonGo · 2024–2025',
    desc: 'Complete overhaul of test-taking platform. Cut 11,000 lines of legacy code. 95+ Lighthouse. Freemium gating, Test Analysis, Onboarding rebuilt from scratch.',
    stack: ['Vite', 'TurboRepo', 'Shadcn/ui', 'Zustand'],
    url: 'https://app.quizrr.in',
    urlLabel: 'app.quizrr.in',
  },
  {
    name: 'ChqMe Booking',
    company: 'CheckMe Commerce · 2025',
    desc: 'Consumer-facing demo booking platform. Product discovery, payment integration, booking journeys and confirmation flows with SEO-optimised architecture.',
    stack: ['Next.js', 'Razorpay', 'SEO', 'TailwindCSS'],
    url: 'https://book.chqme.com',
    urlLabel: 'book.chqme.com',
  },
  {
    name: 'ChqMe Ops',
    company: 'CheckMe Commerce · 2025',
    desc: 'Internal operations portal for CDE partner teams. Demo/installation pipelines, attendance tracking, secure RBAC auth across store, virtual, and self-service workflows.',
    stack: ['Next.js', 'FastAPI', 'RBAC', 'PostgreSQL'],
    url: 'https://ops.chqme.com',
    urlLabel: 'ops.chqme.com',
  },
]

export const skills = [
  {
    category: 'Languages',
    tags: ['JavaScript ES6+', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    tags: ['React', 'Next.js 14–16', 'Vite', 'TurboRepo', 'TailwindCSS', 'Shadcn/ui', 'Framer Motion', 'Zustand', 'Redux Toolkit', 'React Query'],
  },
  {
    category: 'Backend',
    tags: ['Node.js', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'REST APIs', 'Pydantic', 'JWT', 'CRON Jobs'],
  },
  {
    category: 'Cloud & DevOps',
    tags: ['AWS EC2', 'ALB', 'RDS', 'S3', 'WAF', 'SES', 'Route53', 'IAM', 'Docker', 'GitHub Actions', 'CI/CD'],
  },
  {
    category: 'Integrations',
    tags: ['Razorpay', 'ZegoCloud WebRTC', 'WebEngage', 'Google Maps', 'Microsoft Clarity', 'Google Ads', 'Meta Ads'],
  },
  {
    category: 'Education',
    tags: ['MCA · IIT Patna', 'BCA · Bangalore University'],
  },
]
