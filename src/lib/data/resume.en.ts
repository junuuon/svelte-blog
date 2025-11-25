import type {
  IntroductionProps,
  WorkExperienceProps,
  OtherExperienceProps,
  CertificateProps,
  SkillProps,
} from '../../types/about';

export const introduction: IntroductionProps = {
  name: 'Junwon Park',
  role: 'Frontend Engineer',
  tagline: 'A 5-year developer leading the full product lifecycle, from planning to operation.',
  githubLink: 'https://github.com/junuuon',
  linkedinLink: 'https://www.linkedin.com/in/junuuon/',
  briefing: [
    "With 5 years of experience, I served as Co-founder and Front-end Lead at 'Orca AI,' an AI chatbot startup. I led the entire development cycle—from planning to deployment, operation, and monetization—for our Expo-based app. Previously, I also drove product growth at 'Vault Micro' while serving as a Product Owner (PO).",
    'I am passionate about maintaining consistency by setting code conventions and writing simple, readable code. I enjoy refactoring and improving legacy systems.',
    'I prefer collaborating with teammates through constant communication over working solo. This was demonstrated during my service at the ROK Ministry of National Defense, where continuous dialogue and shared understanding led to successfully completing a project within a tight deadline and with limited resources.',
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
          'An AI character chat app built with Expo (React Native). As co-founder and Front-end Lead, I led the entire development lifecycle, from planning to app store deployment and operation.',
        detail: [
          'Contributed to achieving key business metrics (23K MAU, $3K MRR, 46-min avg. session) and top App Store rankings (57th on Google Play, 69th on App Store).',
          'Designed the initial local data architecture with Realm DB and later developed the data migration logic to Firestore (integrated with React Query Persister) for service scalability.',
          'Built a CI/CD pipeline using EAS and GitHub Actions for automated, conditional deployments to iOS TestFlight and Android private tracks.',
          'Designed the app architecture using Expo Router and integrated cross-platform support (iOS, Android, Web) with Universal Links.',
          'Optimized app performance by adopting the React Compiler, Flashlist for virtualization, and MMKV for high-speed local storage.',
          'Delivered a 60fps native-like UX using Reanimated (v4) and react-native-keyboard-controller for fluid keyboard interactions.',
          'Implemented app monetization models using RevenueCat (in-app subscriptions) and AdMob (ads).',
          'Ensured production-level stability via Sentry (error tracking), Zod (schema validation), and i18n (3 languages), while also conducting PoCs for on-device sLLM using `llama.rn`.',
        ],
        productLink: 'https://aira.gg',
        skills:        [
          'TypeScript',
          'React Native',
          'Expo (Router, EAS)',
          'React Query',
          'Realm DB',
          'Firebase',
          'Reanimated',
          'Flashlist',
          'RevenueCat',
          'Sentry',
        ],
      },
    ],
    role: 'Co-founder / Front-end Lead',
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
          "A web-based overlay scoreboard and caption service. I initiated the project solo, building the front-end architecture and features, growing it into the company's second main product.",
        detail: [
          'Developed a separate, unified login page using Firebase Auth with custom tokens and cookies.',
          'Implemented custom cookie consent controls.',
          'Developed and built the PWA version using Next-PWA.',
          'Integrated subscription and payment services using Paddle.',
          'Optimized build size for the account page (324KB -> 277KB) using dynamic imports, webpack config, and tree shaking.',
        ],
        productLink: 'https://studio.camerafi.com',
        skills: ['Typescript', 'Next.js', 'Mui', 'Firebase', 'TanStack Query', 'PWA'],
      },
      {
        title: 'Internal Page',
        dateFrom: '2022-03',
        dateTo: '2023-06',
        description:
          'An internal admin dashboard for service management, including user statistics, user/notice management.',
        detail: [
          'Displayed DAU and various service metrics using Chart.js.',
          'Developed a reusable table component with data mutation (delete/update) features.',
          "Implemented lazy loading for a list of hundreds of thousands of videos, referencing YouTube's UI.",
          'Hosted on Firebase Hosting.',
        ],
        skills: ['Typescript', 'React', 'Mui', 'Firebase', 'TanStack Query', 'Chart.js'],
      },
    ],
    role: 'Frontend Developer',
  },
  {
    companyName: 'ROK Ministry of National Defense',
    dateFrom: '2019-05',
    dateTo: '2020-12',
    project: [
      {
        title: 'Word/Excel Web Viewer',
        dateFrom: '2020-08',
        dateTo: '2020-10',
        description:
          'A project to create a web viewer for Word/Excel files with features for highlighting specific lines/cells and commenting. I participated in the entire process (planning, design, development) and built all components from scratch without a UI library.',
        detail: [
          'Configured the front-end tech stack and implemented core features.',
          'Designed the global state using Redux and Redux-Saga.',
          'Designed component hierarchy based on Atomic Design.',
          'Optimized viewer loading with lazy loading.',
        ],
        skills: ['Typescript', 'React', 'Redux', 'styled-components', 'React Router'],
      },
      {
        title: 'Dashboard Page',
        dateFrom: '2019-06',
        dateTo: '2019-09',
        description:
          'Joined mid-project to perform maintenance and develop new, unreleased features for an internal dashboard (for the ROK military intranet).',
        detail: [
          'Improved performance and implemented sorting features for table components.',
          'Utilized and customized components from the Ant Design library.',
        ],
        skills: ['Javascript', 'React', 'Antd', 'Redux', 'styled-components', 'React Router'],
      },
    ],
    role: 'Software Developer (Military Service)',
    additional: {
      label: 'View Recommendation',
      link: '/certificates/recommendation-letter-en.pdf',
    },
  },
];

export const otherExperiences: OtherExperienceProps[] = [
  {
    project: [
      {
        title: 'Oneline Bank (Hackathon)',
        dateFrom: '2021-04',
        dateTo: '2021-05',
        description:
          'Participated in the 2021 Woori Bank Hackathon finals. Taught myself React Native over 5 days to single-handedly develop a chat-based money transfer app.',
        detail: [
          'Configured the front-end tech stack and implemented all features.',
          'Designed the store using Firebase.',
          'Implemented transfer feature via Woori Bank API.',
          'Implemented user verification via biometric authentication.',
        ],
        detailLink: '/projects/onelinebank',
        githubLink: 'https://github.com/junuuon/OnelineBank',
        productLink: 'https://github.com/junuuon/OnelineBank/releases/tag/v1.0',
        skills: ['Javascript', 'React Native', 'Firebase', 'Expo'],
      },
    ],
  },
  {
    project: [
      {
        title: 'Personal Blog',
        dateFrom: '2021-02',
        description:
          'Implemented a personal resume and blog with SSG, dark mode, and responsive design using Svelte.',
        detail: [
          'Configured the front-end tech stack and implemented all features.',
          'Applied Atomic Design principles.',
          'Implemented theme switching based on browser preference.',
          'Ensured responsiveness across various browsers and screen sizes.',
        ],
        githubLink: 'https://github.com/junuuon/junuuon.github.io',
        skills: ['Typescript', 'Svelte', 'SvelteKit', 'MDX'],
      },
    ],
  },
];

export const certificates: CertificateProps[] = [
  {
    label: 'AWS training and certification',
    link: '/certificates/aws-training.pdf',
  },
  {
    label: 'TOPCIT',
    link: '/certificates/topcit.pdf',
  },
  {
    label: 'Linux Master 2nd Class',
    link: '/certificates/linux-master-2.pdf',
  },
];

export const skills: SkillProps[] = [
  {
    title: 'Core',
    list: [
      'TypeScript',
      'JavaScript (ES6+)',
      'React',
      'React Native',
      'Expo (Router, EAS)',
      'Next.js',
      'Svelte / SvelteKit',
    ],
  },
  {
    title: 'Performance & UI',
    list: ['React Compiler', 'Reanimated (v4)', 'Flashlist', 'MMKV', 'Unistyles', 'PWA'],
  },
  {
    title: 'Data & Monetization',
    list: [
      'React Query (TanStack Query)',
      'RevenueCat',
      'Google AdMob',
      'React Hook Form',
      'Zod',
      'Firebase',
      'Event Stream (SSE)',
      'Redux / Redux-Saga (Legacy)',
    ],
  },
  {
    title: 'DevOps & Tools',
    list: ['GitHub Actions', 'Sentry', 'Git / GitHub', 'JIRA / Figma', 'Vim'],
  },
];
