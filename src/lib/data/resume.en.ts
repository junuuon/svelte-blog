import type {
  IntroductionProps,
  WorkExperienceProps,
  OtherExperienceProps,
  CertificateProps,
  SkillProps,
  EducationProps,
} from '../../types/about';

export const introduction: IntroductionProps = {
  name: 'Junwon Park',
  role: 'Frontend Engineer',
  tagline: 'Frontend Engineer: From Inception to Scale',
  githubLink: 'https://github.com/junuuon',
  linkedinLink: 'https://www.linkedin.com/in/junuuon/',
  briefing: [
    'Experienced in scaling a service from ideation to 23k MAU. Skilled in the entire product lifecycle—planning, development, deployment, and operations—focusing on creating stable services with tangible business impact.',
    'Prefers deep technical exploration over reliance on external libraries. Experienced in designing proprietary UI systems (Zero-dependency) and optimizing rendering performance to the limit.',
    'Pursues rational engineering based on business needs and user value ("Is this truly necessary?"), rather than blindly chasing the latest trends or flashy technologies.',
  ],
};

export const workExperiences: WorkExperienceProps[] = [
  {
    companyName: 'Orca AI Inc.',
    dateFrom: '2024-01',
    project: [
      {
        title: 'aira',
        dateFrom: '2024-01',
        description:
          'Global AI character chat platform. As Co-Founder & Frontend Lead, led the entire lifecycle from architecture design to optimization for 23k users.',
        detail: [
          "**[Key Achievements]** Achieved 23k MAU, $3k MRR, and 46-minute average retention time (Ranked 57th in Google Play Entertainment / as of Feb '25).",
          '**[Architecture Advancement]** Overcame local model limits by migrating to a server-based multi-model and established a cloud environment by migrating Realm data to Firestore without data loss. Implemented **React Query Persister** to cache server data and prevent redundant refetches.',
          '**[Cross-Platform Design]** Adopted **Expo Router** for file-based routing and implemented **Universal Links** to integrate seamless user experience (UX) across Web, iOS, and Android.',
          '**[Rendering Optimization]** Pre-emptively adopted **React Compiler** to prevent unnecessary re-renders and implemented **Flashlist** and **MMKV** to ensure smooth list scrolling and fast data loading even on low-end devices.',
          '**[UI System Construction]** Designed a proprietary UI system (Zero-dependency) without external libraries to minimize bundle size and flexibly handle custom design requirements.',
          '**[High-Performance Interaction]** Implemented native-level keyboard interactions and gesture animations maintaining 60fps using **Reanimated (v4)** and react-native-keyboard-controller.',
          '**[Service Stability]** Built a precise error tracking environment with Sentry & dSym. Defended against user churn by prioritizing service normalization via a rapid **Rollback** policy when detecting third-party library conflicts on specific Android devices. Ensured type safety with **Zod**.',
          '**[Operational Efficiency]** Established CI/CD pipelines (Android Internal Track, iOS TestFlight) using **EAS** & **GitHub Actions** and standardized device compatibility testing using **Samsung Test Lab**.',
          '**[Global Expansion & R&D]** Supported 3 languages (KO/EN/JP) via **i18n** to drive global user acquisition and conducted an **On-device sLLM PoC** using `llama.rn` to verify edge computing possibilities.',
        ],
        productLink: 'https://aira.gg',
        skills: [
          'React Native',
          'TypeScript',
          'Expo',
          'Flashlist',
          'Reanimated',
          'React Query',
          'Zod',
          'Firebase',
          'Sentry',
        ],
      },
    ],
    role: 'Co-Founder / Frontend Lead',
  },
  {
    companyName: 'Vault Micro',
    dateFrom: '2022-01',
    dateTo: '2023-06',
    project: [
      {
        title: 'CameraFi Studio',
        dateFrom: '2022-02',
        dateTo: '2023-06',
        description:
          'Web overlay scoreboard service. Started as a solo developer, established the frontend architecture, and grew it into a core company project.',
        detail: [
          '**[Bundle Optimization]** Reduced main page bundle size by 15% (324KB → 277KB) and improved initial load speed by establishing Webpack Tree Shaking, Code Splitting, and Dynamic Import strategies.',
          '**[Security & Auth]** Implemented Cookie Consent and token-based authentication logic directly without external libraries, removing dependencies and enhancing security.',
          '**[Service Enhancement]** Improved user accessibility via **Next-PWA** (A2HS) and established a recurring subscription payment process by integrating the **Paddle** solution.',
        ],
        productLink: 'https://studio.camerafi.com',
        skills: ['Next.js', 'TypeScript', 'Mui', 'PWA', 'Webpack', 'Firebase', 'Paddle'],
      },
      {
        title: 'Internal Admin Dashboard',
        dateFrom: '2022-03',
        dateTo: '2023-06',
        description: 'Internal service management and statistics dashboard.',
        detail: [
          '**[Large-List Optimization]** Benchmarked YouTube UI and implemented Infinite Scroll based on **Intersection Observer** to efficiently browse hundreds of thousands of video logs, achieving initial load times under 0.5s.',
          '**[Component Abstraction]** Designed reusable components abstracting CRUD (Create, Read, Update, Delete) logic and Chart.js visualization modules, boosting admin page development productivity.',
          '**[Infrastructure]** Established SPA deployment pipelines using **Firebase Hosting**.',
        ],
        skills: ['React', 'TypeScript', 'Mui', 'Chart.js', 'React Query', 'Firebase Hosting'],
      },
    ],
    role: 'Frontend Developer',
  },
  {
    companyName: 'Ministry of National Defense',
    dateFrom: '2019-05',
    dateTo: '2020-12',
    project: [
      {
        title: 'Web-based Document Viewer',
        dateFrom: '2020-08',
        dateTo: '2020-10',
        description:
          'Document viewer development project within a closed network environment where external libraries were restricted.',
        detail: [
          '**[Large-Scale Data Rendering]** Implemented seamless scrolling for thousands of Excel rows by adopting **React Table** and **Virtualization** techniques to resolve rendering bottlenecks.',
          '**[Architecture Design]** Adopted Redux-Saga for asynchronous data processing and applied Atomic Design Pattern to build a maintainable component system.',
        ],
        skills: ['React', 'TypeScript', 'React Table', 'Redux-Saga', 'Atomic Design'],
      },
      {
        title: 'Defense Dashboard Page',
        dateFrom: '2019-06',
        dateTo: '2019-09',
        description:
          'Maintenance and advancement project for the dashboard web page within the Ministry of National Defense network.',
        detail: [
          '**[Maintenance]** Customized Ant Design libraries to develop UI components and refactored legacy code to ensure system stability.',
        ],
        skills: ['React', 'JavaScript', 'Ant Design', 'styled-components', 'Redux'],
      },
    ],
    role: 'Software Developer',
  },
];

export const otherExperiences: OtherExperienceProps[] = [
  {
    project: [
      {
        title: 'Selected as Seoul Campus Town Resident Startup (Orca AI)',
        dateFrom: '2024',
        description:
          'Selected for office space and business funding support from Seoul Metropolitan Government and the university, recognized for business potential and technical capability.',
        detail: [],
      },
    ],
  },
  {
    project: [
      {
        title: '2021 Woori Bank Hackathon Finalist',
        dateFrom: '2021-04',
        description:
          'Developed a Fintech app solo within 5 days by fast-tracking React Native learning, recognized for technical execution.',
        detail: [
          'Fintech App Dev: Implemented full logic for remittance, biometric authentication, and Firebase store.',
          'Code and release verified via GitHub link.',
        ],
        githubLink: 'https://github.com/junuuon/OnelineBank',
        skills: ['React Native', 'JavaScript', 'Firebase', 'Expo'],
      },
    ],
  },
  {
    project: [
      {
        title: 'Personal Portfolio Site',
        dateFrom: '2021-02',
        description:
          'High-performance static website built with Svelte to achieve fast rendering without React Virtual DOM overhead.',
        detail: [
          '**[Web Standards]** Achieved perfect 100 scores across all 4 Lighthouse categories (Performance, Accessibility, Best Practices, SEO).',
          '**[Features]** Implemented Dark Mode, Responsive Design, and MDX parsing pipeline.',
        ],
        githubLink: 'https://github.com/junuuon/junuuon.github.io',
        skills: ['Svelte', 'SvelteKit', 'TypeScript', 'MDX'],
      },
    ],
  },
];

export const certificates: CertificateProps[] = [
  {
    label: 'AWS Training and Certification',
    link: '/certificates/aws-training.pdf',
  },
  {
    label: 'TOPCIT',
    link: '/certificates/topcit.pdf',
  },
  {
    label: 'Linux Master Level 2',
    link: '/certificates/linux-master-2.pdf',
  },
];

export const education: EducationProps[] = [
  {
    school: 'Hanyang University',
    dateFrom: '2017-03',
    dateTo: '2024-02',
    major: 'B.S. in Computer Software Engineering',
  },
  {
    school: 'Sejong Science High School',
    dateFrom: '2014-03',
    dateTo: '2017-02',
  },
];

export const skills: SkillProps[] = [
  {
    title: 'Languages',
    list: ['TypeScript', 'JavaScript (ES6+)'],
  },
  {
    title: 'Frontend',
    list: ['React', 'React Native', 'Expo (Router, EAS)', 'Next.js', 'Svelte / SvelteKit'],
  },
  {
    title: 'Engineering',
    list: [
      'Reanimated (v4)',
      'Flashlist',
      'React Compiler',
      'MMKV',
      'Unistyles',
      'PWA',
      'React Query',
      'Zod',
      'React Hook Form',
    ],
  },
  {
    title: 'DevOps & Tools',
    list: [
      'GitHub Actions',
      'Firebase',
      'Sentry',
      'RevenueCat',
      'Google AdMob',
      'Git / GitHub',
      'Figma',
      'Vim',
    ],
  },
];
