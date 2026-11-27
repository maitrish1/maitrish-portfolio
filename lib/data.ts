// ALL CONTENT — edit this file to update the site.
// Bullet strings may contain <strong class="hl-num"> / <strong class="hl-brand"> markup.

export const personal = {
  name: 'Maitrish Mukherjee',
  email: 'maitrishmukherjeee@gmail.com',
  badge: 'Full Stack Founding Engineer & Architect · IIT Patna · Bengaluru',
  badgeShort: 'Full Stack Founding Engineer & Architect',
  monoTitle: 'FULL STACK FOUNDING ENGINEER & ARCHITECT',
  photo: '/photos/IMG_4843.jpg',
  resume: '/resumes/Maitrish_Mukherjee2July2026.pdf',
  resumeDownloadName: 'Maitrish_Mukherjee_Resume.pdf',
  location: 'Bengaluru, KA · Open to relocate',
  links: {
    linkedin: 'https://linkedin.com/in/maitrish',
    github: 'https://github.com/maitrish1',
    devto: 'https://dev.to/maitrish',
  },
}

export const hero = {
  bioLead: 'Founding Engineer building a ',
  bioHighlight: 'E-commerce platform from zero',
  bioMiddle: ' - 900+ APIs, 5 microservices, AWS infrastructure. Previously scaled ',
  bioHighlight2: 'MathonGo from 1M to 2.5M students',
  bioTail: ". I don't ship features. I build and own product engineering end-to-end.",
}

export const stats = [
  { value: '50K+', label: 'Customers Served', color: 'var(--coral)' },
  { value: '2.5M', label: 'Students on Platform', color: 'var(--forest)' },
  { value: '400K', label: 'Users in 48hrs', color: 'var(--gold)' },
  { value: '4+', label: 'Years Building', color: 'var(--slate)' },
]

export type ExperienceEntry = {
  period: string
  location: string
  company: string
  role: string
  links: { label: string; url: string }[]
  metrics?: { value: string; label: string; color: string }[]
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    period: 'Aug 2025 — Present',
    location: 'Ahmedabad, GJ',
    company: 'CheckMe Commerce Pvt. Ltd.',
    role: 'Full Stack (Founding) Engineer',
    links: [
      { label: 'chqme.com', url: 'https://chqme.com' },
      { label: 'experienceos', url: 'https://experienceos.chqme.com' },
    ],
    metrics: [
      { value: '50K+', label: 'Customers', color: 'var(--coral)' },
      { value: '6,000+', label: 'Virtual Demos', color: 'var(--forest)' },
      { value: '3,000+', label: 'Physical Demos', color: 'var(--coral)' },
      { value: '25%+', label: 'Conversion Rate', color: 'var(--forest)' },
    ],
    bullets: [
      'React.js Frontend: Architects <strong class="hl-num">10</strong>+ Next.js (<strong class="hl-num">14</strong>–<strong class="hl-num">16</strong>) production frontends solo, consumer booking, admin console, & partner portal,using Next.js microfrontends, Shadcn/ui, Redux, TailwindCSS, TypeScript, serving <strong class="hl-num">50,000</strong>+ customers at <strong class="hl-num">25</strong>%+ demo-to-purchase conversion.',
      'Node.js & Python Backend & REST API Design: Engineers <strong class="hl-num">5</strong> FastAPI microservices along with <strong class="hl-num">900</strong>+ RESTful APIs with SQLAlchemy covering demos, CRM, partner ops, & admin,with <strong class="hl-brand">ZegoCloud</strong> & LiveKit <strong class="hl-brand">WebRTC</strong> integration, <strong class="hl-brand">Razorpay</strong> payment pipelines, & multi-channel notifications (SMS, WhatsApp, SES email).',
      'SQL & NoSQL Database Design: Manages & designs <strong class="hl-num">60</strong>+ table PostgreSQL schema on Multi-AZ RDS covering <strong class="hl-num">7</strong> order types, multi-stage status tracking, RBAC across <strong class="hl-num">9</strong> role types, OTP auth, <strong class="hl-brand">Razorpay</strong> payment verification, & multi-tenant SaaS mode via feature flags.',
      'AWS Cloud Infrastructure: Owns AWS production infra in ap-south-<strong class="hl-num">1</strong>, ALB routing across <strong class="hl-num">5</strong> services, WAF with DDoS/XSS/SQLi rules, Multi-AZ RDS, EC2 for servers, S3 for recordings & exports, & Route53 DNS.',
    ],
  },
  {
    period: 'Jul 2024 — Aug 2025',
    location: 'Bengaluru, KA',
    company: 'MathonGo',
    role: 'SDE-1',
    links: [
      { label: 'mathongo.com', url: 'https://mathongo.com' },
      { label: 'app.quizrr.in', url: 'https://app.quizrr.in' },
    ],
    metrics: [
      { value: '1M→2.5M', label: 'Student Growth', color: 'var(--coral)' },
      { value: '400K', label: 'Users in 48hrs', color: 'var(--forest)' },
      { value: '93%', label: 'Faster Builds', color: 'var(--coral)' },
      { value: '95+', label: 'Lighthouse Score', color: 'var(--forest)' },
    ],
    bullets: [
      'React.js Frontend: Led CRA to <strong class="hl-brand">Vite</strong>/<strong class="hl-brand">TurboRepo</strong> migration (<strong class="hl-num">93</strong>% faster builds, <strong class="hl-num">50</strong>% faster loads, <strong class="hl-num">21</strong>% smaller bundle). Overhauled test-taking and analysis flows cutting <strong class="hl-num">16,000</strong> lines of legacy code. Shipped JEE College Predictor to <strong class="hl-num">400K</strong>+ users in <strong class="hl-num">48</strong> hours. Drove <strong class="hl-num">28</strong>% test completion lift via <strong class="hl-brand">WebEngage</strong> A/B testing. Hit <strong class="hl-num">95</strong>+ Lighthouse scores, contributing to platform growth from <strong class="hl-num">1M</strong> to <strong class="hl-num">2.5M</strong> students.',
      'REST API Design: Integrated <strong class="hl-brand">WebEngage</strong> event tracking and A/B testing APIs across onboarding and test flows, driving a <strong class="hl-num">28</strong>% increase in test completions and <strong class="hl-num">35</strong>% increase in Test Analysis engagement on a <strong class="hl-num">2.5M</strong>-user platform.',
      'Node.js & Python Backend: Designed and developed <strong class="hl-num">20</strong>+ REST APIs across test submission, question journey tracking, performance analysis, and score potential flows; collaborates with backend on RESTful API contracts for attempt state, freemium gating, and real-time leaderboard data via Redis.',
      'SQL & NoSQL Database Design: Worked with MongoDB collections for test analysis, question journey, and mistake tracking. integrated Redis-backed leaderboard APIs and designed client-side state structures mirroring attempt, score, accuracy, and time-per-question data.',
    ],
  },
  {
    period: 'May 2023 — Aug 2023',
    location: 'Kolkata, WB',
    company: 'Codebuddy Pvt. Ltd.',
    role: 'React Developer',
    links: [{ label: 'codebuddy.co', url: 'https://codebuddy.co' }],
    bullets: [
      'React.js Frontend: Delivered <strong class="hl-num">2</strong> production client platforms in <strong class="hl-num">3</strong> months using Next.js SSR and SWR caching, <strong class="hl-num">45</strong>% faster load times with zero stale data issues.',
      'Node.js & Python Backend & REST API Design: Built <strong class="hl-num">20</strong>+ REST APIs for a car rental platform and freelancing portal, covering end-to-end CRUD for listings, bookings, user auth, and transactions using Node.js routes.',
    ],
  },
  {
    period: 'May 2022 — May 2023',
    location: 'Bengaluru, KA',
    company: 'FWC Inc.',
    role: 'UI Developer',
    links: [{ label: 'fwc.co.in', url: 'https://fwc.co.in' }],
    bullets: [
      'React.js Frontend: Built HR SaaS frontend with RBAC, <strong class="hl-num">3</strong> distinct dashboards (Admin, Manager, Recruiter), <strong class="hl-num">20</strong>+ screens, and real-time <strong class="hl-brand">Chart.js</strong> + <strong class="hl-brand">Firebase</strong> visualizations; cut page load from <strong class="hl-num">3.</strong>4s to <strong class="hl-num">1.</strong>8s.',
      'Node.js & Python Backend & REST API Design: Developes <strong class="hl-num">30</strong>+ REST APIs across Admin, Manager, and Recruiter dashboards for a multi-role HR SaaS platform serving enterprise clients.',
    ],
  },
]

export type Project = {
  domain: string
  name: string
  subtitle: string
  description: string
  stack: string[]
  url: string
  visitLabel: string
  screenshotDir: string
}

export const projects: Project[] = [
  {
    domain: 'chqme.com',
    name: 'CheckMe Web Platform',
    subtitle: 'Consumer Experience Platform',
    description:
      'Built the consumer web experience with end-to-end product discovery, browsing, and account management flows. Implemented demo and installation booking journeys, including confirmation flows, payment integration, and customer history tracking. Integrated SEO and analytics systems to drive user acquisition, improve visibility, and optimize conversion funnels.',
    stack: ['Next.js 16', 'FastAPI', 'PostgreSQL', 'AWS', 'WebRTC', 'Razorpay', 'SEO'],
    url: 'https://chqme.com',
    visitLabel: 'chqme.com',
    screenshotDir: '/screenshots/chqme',
  },
  {
    domain: 'experienceos.chqme.com',
    name: 'ExperienceOS',
    subtitle: 'B2B Brand Operations Dashboard',
    description:
      'Operations dashboard for brand managers — demo pipeline, installation tracking, CDE performance analytics, partner network management, and sales reporting across virtual and physical channels. Delivers dashboards and admin tooling to streamline demo and installation pipelines, enabling efficient cross-team collaboration and self-service workflows.',
    stack: ['Next.js', 'Zustand', 'TailwindCSS', 'FastAPI', 'PostgreSQL'],
    url: 'https://experienceos.chqme.com',
    visitLabel: 'experienceos.chqme.com',
    screenshotDir: '/screenshots/experienceos',
  },
  {
    domain: 'book.chqme.com',
    name: 'Booking Platform',
    subtitle: 'Consumer Demo Booking Platform',
    description:
      'Consumer-facing web experience with end-to-end product discovery, browsing, and account management flows. Implements demo and installation booking journeys, including confirmation flows, payment integration, and customer history tracking. Integrated SEO and analytics systems.',
    stack: ['Next.js', 'Razorpay', 'TailwindCSS', 'SEO'],
    url: 'https://book.chqme.com',
    visitLabel: 'book.chqme.com',
    screenshotDir: '/screenshots/booking',
  },
  {
    domain: 'ops.chqme.com',
    name: 'Operations Dashboard',
    subtitle: 'Internal Brand Operations Dashboard',
    description:
      'Built our internal operations dashboard to handle everything internally for all our brands and brand operations. Streamlined operations for internal teams, enabling efficient management of leads, attendance tracking, and installation coordination. Implemented secure authentication and role-based access control (RBAC) to ensure scalable, permission-driven system access.',
    stack: ['Next.js', 'FastAPI', 'RBAC', 'PostgreSQL'],
    url: 'https://ops.chqme.com',
    visitLabel: 'ops.chqme.com',
    screenshotDir: '/screenshots/ops',
  },
  {
    domain: 'experience.chqme.com',
    name: 'Experience Portal',
    subtitle: 'Live Virtual Demo Room',
    description:
      'Consumer-facing virtual demo portal powered by ZegoCloud WebRTC — live video room creation, participant management, real-time interaction, and session recording for 6,000+ virtual demo sessions.',
    stack: ['Next.js', 'ZegoCloud', 'WebRTC', 'FastAPI'],
    url: 'https://experience.chqme.com',
    visitLabel: 'experience.chqme.com',
    screenshotDir: '/screenshots/experience-chqme',
  },
  {
    domain: 'app.quizrr.in',
    name: 'Quizrr by MathonGo',
    subtitle: 'JEE/NEET Test-Taking Platform',
    description:
      "MathonGo's test platform for 1M+ JEE aspirants. Developed and maintained the platform using React.js, JavaScript, Tailwind CSS, and Bootstrap. Overhauled key modules like Test Application and Test Analysis, improving UX and enabling advanced performance tracking. Integrated real-time analytics dashboards for actionable insights on student performance.",
    stack: ['Vite', 'TurboRepo', 'Shadcn/ui', 'Zustand', 'TypeScript'],
    url: 'https://app.quizrr.in',
    visitLabel: 'app.quizrr.in',
    screenshotDir: '/screenshots/quizrr',
  },
]

// Screenshot count per project directory (1..N exist in public/screenshots/...)
export const screenshotCounts: Record<string, number> = {
  '/screenshots/chqme': 4,
  '/screenshots/experienceos': 14,
  '/screenshots/booking': 8,
  '/screenshots/ops': 11,
  '/screenshots/experience-chqme': 3,
  '/screenshots/quizrr': 14,
}

export type SkillCategory = {
  title: string
  color: string
  border: string
  items: { label: string; icon: string }[]
}

export const skills: SkillCategory[] = [
  {
    title: 'React.js Frontend',
    color: 'var(--coral)',
    border: 'rgba(217,59,33,0.18)',
    items: [
      { label: 'React', icon: '/skills/React.svg' },
      { label: 'Next.js 14–16', icon: '/skills/Next_js_14_16.svg' },
      { label: 'Vite', icon: '/skills/Vite.svg' },
      { label: 'TurboRepo', icon: '/skills/TurboRepo.svg' },
      { label: 'TypeScript', icon: '/skills/TypeScript.svg' },
      { label: 'TailwindCSS', icon: '/skills/TailwindCSS.svg' },
      { label: 'Shadcn/ui', icon: '/skills/Shadcn_ui.svg' },
      { label: 'Framer Motion', icon: '/skills/Framer_Motion.svg' },
      { label: 'Zustand', icon: '/skills/Zustand.svg' },
      { label: 'Redux Toolkit', icon: '/skills/Redux_Toolkit.svg' },
      { label: 'React Query', icon: '/skills/React_Query.svg' },
    ],
  },
  {
    title: 'Node.js & Python Backend',
    color: 'var(--forest)',
    border: 'rgba(26,94,64,0.18)',
    items: [
      { label: 'Node.js', icon: '/skills/Node_js.svg' },
      { label: 'FastAPI', icon: '/skills/FastAPI.svg' },
      { label: 'Python', icon: '/skills/Python.svg' },
      { label: 'Pydantic', icon: '/skills/Pydantic.svg' },
      { label: 'JWT', icon: '/skills/JWT.svg' },
      { label: 'Microservices', icon: '/skills/Microservices.svg' },
      { label: 'System Design', icon: '/skills/System_Design.svg' },
      { label: 'HLD', icon: '/skills/HLD.svg' },
      { label: 'LLD', icon: '/skills/LLD.svg' },
    ],
  },
  {
    title: 'REST API & Integrations',
    color: 'var(--gold)',
    border: 'rgba(181,124,8,0.18)',
    items: [
      { label: 'REST APIs', icon: '/skills/REST_APIs.svg' },
      { label: 'SQLAlchemy', icon: '/skills/SQLAlchemy.svg' },
      { label: 'Razorpay', icon: '/skills/Razorpay.svg' },
      { label: 'ZegoCloud WebRTC', icon: '/skills/ZegoCloud_WebRTC.svg' },
      { label: 'LiveKit', icon: '/skills/LiveKit.svg' },
      { label: 'WebEngage', icon: '/skills/WebEngage.svg' },
      { label: 'Microsoft Clarity', icon: '/skills/Microsoft_Clarity.svg' },
      { label: 'Google Maps', icon: '/skills/Google_Maps.svg' },
      { label: 'SES', icon: '/skills/SES.svg' },
    ],
  },
  {
    title: 'SQL & NoSQL Database Design',
    color: 'var(--slate)',
    border: 'rgba(27,61,110,0.18)',
    items: [
      { label: 'PostgreSQL', icon: '/skills/PostgreSQL.svg' },
      { label: 'MongoDB', icon: '/skills/MongoDB.svg' },
      { label: 'Redis', icon: '/skills/Redis.svg' },
      { label: 'SQL', icon: '/skills/SQL.svg' },
      { label: 'MySQL', icon: '/skills/MySQL.svg' },
      { label: 'NoSQL', icon: '/skills/NoSQL.svg' },
      { label: 'RDS', icon: '/skills/RDS.svg' },
      { label: 'Multi-AZ', icon: '/skills/Multi_AZ.svg' },
      { label: 'Feature Flags', icon: '/skills/Feature_Flags.svg' },
      { label: 'RBAC', icon: '/skills/RBAC.svg' },
    ],
  },
  {
    title: 'AWS Cloud Infrastructure',
    color: 'var(--coral)',
    border: 'rgba(217,59,33,0.18)',
    items: [
      { label: 'AWS EC2', icon: '/skills/AWS_EC2.svg' },
      { label: 'ALB', icon: '/skills/ALB.svg' },
      { label: 'RDS', icon: '/skills/RDS.svg' },
      { label: 'S3', icon: '/skills/S3.svg' },
      { label: 'CloudFront', icon: '/skills/CloudFront.svg' },
      { label: 'WAF', icon: '/skills/WAF.svg' },
      { label: 'SES', icon: '/skills/SES.svg' },
      { label: 'Route53', icon: '/skills/Route53.svg' },
      { label: 'IAM', icon: '/skills/IAM.svg' },
      { label: 'VPC', icon: '/skills/VPC.svg' },
      { label: 'ap-south-1', icon: '/skills/ap_south_1.svg' },
      { label: 'DDoS', icon: '/skills/DDoS.svg' },
      { label: 'CDN', icon: '/skills/CDN.svg' },
      { label: 'S3 Recordings', icon: '/skills/S3_Recordings.svg' },
    ],
  },
  {
    title: 'DevOps & CI/CD Pipelines',
    color: 'var(--forest)',
    border: 'rgba(26,94,64,0.18)',
    items: [
      { label: 'Docker', icon: '/skills/Docker.svg' },
      { label: 'GitHub Actions', icon: '/skills/GitHub_Actions.svg' },
      { label: 'CI/CD', icon: '/skills/CI_CD.svg' },
      { label: 'Self-Hosted Runners', icon: '/skills/Self_Hosted_Runners.svg' },
      { label: 'EC2 Deployments', icon: '/skills/EC2_Deployments.svg' },
      { label: 'Release Management', icon: '/skills/Release_Management.svg' },
    ],
  },
]
