// Experience detail shown in the right-side drawer on /experience.
// Transcribed from Maitrish_Mukherjee2July2026.pdf, with the user's corrected
// figures (900+ APIs, 50K+ customers) applied consistently.

export type ExperienceDetail = {
  id: string
  company: string
  role: string
  period: string
  blurb: string
  context: string
  bullets: string[]
  highlights: { value: string; label: string }[]
  links: { label: string; url: string }[]
}

export const experienceDetails: ExperienceDetail[] = [
  {
    id: 'checkme',
    company: 'CheckMe Commerce Private Limited',
    role: 'Full Stack (Founding) Engineer',
    period: 'August 2025 – Present',
    blurb:
      'An e-commerce startup with ~₹2Cr+ GMV influenced and 50K+ customers, building a SaaS platform and marketplace that helps D2C brands sell high-consideration products through live, expert-led demos for clients like SharkNinja, EcoFlow, Dreame and Vivo.',
    context:
      'First engineer (solo for the first 3 months). Builds the full-stack platform end-to-end, leads a team of 6, and owns architecture, developer hiring and infrastructure across web, API and cloud.',
    bullets: [
      'React.js Frontend: Architects 10+ Next.js (14–16) production frontends solo, consumer booking, admin console and partner portal, using Next.js microfrontends, Shadcn/ui, Redux, TailwindCSS and TypeScript, serving 50,000+ customers at 25%+ demo-to-purchase conversion.',
      'Node.js & Python Backend & REST API Design: Engineers 5 FastAPI microservices along with 900+ RESTful APIs with SQLAlchemy covering demos, CRM, partner ops and admin, with ZegoCloud and LiveKit WebRTC integration, Razorpay payment pipelines, and multi-channel notifications (SMS, WhatsApp, SES email).',
      'SQL & NoSQL Database Design: Manages and designs a 60+ table PostgreSQL schema on Multi-AZ RDS covering 7 order types, multi-stage status tracking, RBAC across 9 role types, OTP auth, Razorpay payment verification, and multi-tenant SaaS mode via feature flags.',
      'AWS Cloud Infrastructure: Owns AWS production infra in ap-south-1, ALB routing across 5 services, WAF with DDoS/XSS/SQLi rules, Multi-AZ RDS, EC2 for servers, S3 for recordings and exports, and Route53 DNS.',
      'DevOps & CI/CD Pipelines: Builds CI/CD via GitHub Actions with self-hosted runners, Docker and EC2-based deployments. Established engineering standards and managed releases across 10+ frontend apps and 5 backend microservices.',
    ],
    highlights: [
      { value: '50K+', label: 'Customers' },
      { value: '900+', label: 'APIs shipped' },
      { value: '25%+', label: 'Conversion' },
      { value: '6', label: 'Team led' },
    ],
    links: [
      { label: 'chqme.com', url: 'https://chqme.com' },
      { label: 'experienceos', url: 'https://experienceos.chqme.com' },
      { label: 'book', url: 'https://book.chqme.com' },
    ],
  },
  {
    id: 'mathongo',
    company: 'MathonGo',
    role: 'SDE-1',
    period: 'August 2024 – August 2025',
    blurb:
      'An ed-tech startup with ~₹5Cr revenue (FY2025) and a 2.5M+ user base, helping Class 11–12 students crack IIT JEE, BITSAT, NEET and other competitive exams through the Quizrr, Marks and MathonGo apps.',
    context:
      'Owned frontend and contributed to backend and data integrations in a team of 10, across the Quizrr ecosystem.',
    bullets: [
      'React.js Frontend: Led the CRA to Vite/TurboRepo migration (93% faster builds, 50% faster loads, 21% smaller bundle). Overhauled test-taking and analysis flows, cutting 16,000 lines of legacy code. Shipped the JEE College Predictor to 400K+ users in 48 hours. Drove a 28% test completion lift via WebEngage A/B testing. Hit 95+ Lighthouse scores, contributing to growth from 1M to 2.5M students.',
      'REST API Design: Integrated WebEngage event tracking and A/B testing APIs across onboarding and test flows, driving a 28% increase in test completions and 35% increase in Test Analysis engagement on a 2.5M-user platform.',
      'Node.js & Python Backend: Designed and developed 20+ REST APIs across test submission, question journey tracking, performance analysis and score potential flows; collaborated with backend on RESTful API contracts for attempt state, freemium gating and real-time leaderboard data via Redis.',
      'SQL & NoSQL Database Design: Worked with MongoDB collections for test analysis, question journey and mistake tracking. Integrated Redis-backed leaderboard APIs and designed client-side state structures mirroring attempt, accuracy and time-per-question data.',
    ],
    highlights: [
      { value: '1M→2.5M', label: 'Students' },
      { value: '400K', label: 'Users in 48hrs' },
      { value: '93%', label: 'Faster builds' },
      { value: '95+', label: 'Lighthouse' },
    ],
    links: [
      { label: 'mathongo.com', url: 'https://mathongo.com' },
      { label: 'quizrr', url: 'https://app.quizrr.in' },
    ],
  },
  {
    id: 'codebuddy',
    company: 'Codebuddy Private Limited',
    role: 'React Developer',
    period: 'May 2023 – August 2023',
    blurb:
      'A software development studio with 30 employees, ~₹9Cr revenue (FY2025), 96% repeat clients and 100k users (CostGPT), building web apps, CRMs, marketplaces and e-commerce platforms for clients across the US, UK, Canada and Europe.',
    context:
      'Developed client-facing web platforms and RESTful APIs, focused on performance optimisation and rapid delivery.',
    bullets: [
      'React.js Frontend: Delivered 2 production client platforms in 3 months using Next.js SSR and SWR caching, with 45% faster load times and zero stale data issues.',
      'Node.js & Python Backend & REST API Design: Built 20+ REST APIs for a car rental platform and a freelancing portal, covering end-to-end CRUD for listings, bookings, user auth and transactions using Node.js routes.',
    ],
    highlights: [
      { value: '2', label: 'Platforms shipped' },
      { value: '45%', label: 'Faster loads' },
      { value: '20+', label: 'REST APIs' },
    ],
    links: [],
  },
  {
    id: 'fwc',
    company: 'FWC Inc.',
    role: 'UI Developer',
    period: 'May 2022 – May 2023',
    blurb:
      'An IT consulting and HR-tech company with ~₹6.5Cr revenue (FY2025), building enterprise SaaS for workforce management. Its flagship FWCTalent VMS helps Fortune 500 clients across IT, Telecom and Healthcare manage all HR operations from one platform.',
    context: 'Developed and maintained enterprise SaaS frontends and RESTful APIs.',
    bullets: [
      'React.js Frontend: Built an HR SaaS frontend with RBAC, 3 distinct dashboards (Admin, Manager, Recruiter), 20+ screens, and real-time Chart.js and Firebase visualisations; cut page load from 3.4s to 1.8s.',
      'Node.js & Python Backend & REST API Design: Developed 30+ REST APIs across Admin, Manager and Recruiter dashboards for a multi-role HR SaaS platform serving enterprise clients.',
    ],
    highlights: [
      { value: '3', label: 'Dashboards' },
      { value: '20+', label: 'Screens' },
      { value: '1.8s', label: 'Page load' },
    ],
    links: [{ label: 'fwc.co.in', url: 'https://fwc.co.in' }],
  },
]
