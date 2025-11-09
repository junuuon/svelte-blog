import type {
  IntroductionProps,
  WorkExperienceProps,
  OtherExperienceProps,
  CertificateProps,
  SkillProps,
} from '../../types/about';

export const introduction: IntroductionProps = {
  title:
    'Junwon Park, a 5-year developer leading the entire process from product planning to operations.',
  githubLink: 'https://github.com/junuuon',
  linkedinLink: 'https://www.linkedin.com/in/junuuon/',
  briefing: [
    'I have 5 years of experience. As a co-founder and frontend lead at Orca AI, an AI chatbot app startup, I led the entire process from planning to deployment, operations, and monetization of an Expo-based app. I also served as a PO at my previous startup, VoltMicro, leading product growth.',
    'I enjoy setting code conventions to maintain consistency and writing simple, readable code even for the same functionality. I take pleasure in refactoring and improving legacy code.',
    'I prefer collaborating with colleagues through constant communication rather than developing alone. In a project at the Ministry of National Defense, I successfully completed the project within a short timeframe with limited resources by continuously communicating with colleagues, organizing and sharing thoughts.',
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
          'An AI character chatting app service based on Expo (React Native). As a co-founder and frontend developer, I led the entire development cycle from planning to app store deployment and operations.',
        detail: [
          'Built CI/CD pipeline based on EAS and GitHub Actions',
          'Established app monetization model using RevenueCat and AdMob',
          'Designed Expo Router-based architecture and cross-platform integration through Universal Link',
          'Performance optimization through React Compiler introduction and Flashlist, MMKV application',
          'Global state management through React Query (Persister) and Event Stream-based chat UI implementation',
          'Native UX implementation using Reanimated (v4) and react-native-keyboard-controller',
          'Ensured production-level stability and scalability through Sentry, Zod, and i18n (3 languages) introduction',
        ],
        productLink: 'https://aira.gg',
        skill: 'TypeScript, Expo, React Query, Reanimated, Flashlist',
      },
    ],
    role: 'Co-founder / Frontend Lead',
  },
  {
    companyName: 'VaultMicro',
    dateFrom: '2022-01',
    dateTo: '2023-06',
    project: [
      {
        title: 'CameraFi Studio',
        dateFrom: '2022-02',
        dateTo: '2023-06',
        description:
          "A CameraFi Studio service project providing web overlay scoreboard and subtitle services. I started the project alone, set up the frontend technical environment, and implemented features, growing it into the company's second main project.",
        detail: [
          'Created a separate integrated login page using Firebase with custom token and cookie-based login',
          'Developed cookie consent directly for cookie control',
          'Developed and built PWA app using Next-PWA',
          'Applied subscription and payment service using Paddle',
          'Optimized build size from 324KB to 277KB for account page using dynamic import, webpack configuration, and tree shaking techniques',
        ],
        productLink: 'https://studio.camerafi.com',
        skill: 'Typescript, Next.js, Mui, Firebase, TanStack Query, PWA',
      },
      {
        title: 'Internal Page',
        dateFrom: '2022-03',
        dateTo: '2023-06',
        description:
          'A service management page used within the company. It provides user-related statistics pages, user management, and notice management features.',
        detail: [
          'Displayed DAU and various service indicators using Chart.js',
          'Developed reusable table components with data deletion and modification features',
          'Applied lazy loading to display hundreds of thousands of video lists, referencing YouTube UI',
          'Hosted using Firebase Hosting',
        ],
        skill: 'Typescript, React, Mui, Firebase, Tanstack Query, Chart.js',
      },
    ],
    role: 'Frontend Developer',
  },
  {
    companyName: 'Ministry of National Defense, Republic of Korea',
    dateFrom: '2019-05',
    dateTo: '2020-12',
    project: [
      {
        title: 'Word, Excel Web Viewer',
        dateFrom: '2020-08',
        dateTo: '2020-10',
        description:
          'A web page project for viewing Word and Excel files with features for highlighting specific lines and cells, and adding comments. I participated in the entire process from planning, design, to development. Unlike previous projects using Antd, I designed and developed all components directly.',
        detail: [
          'Set up frontend technical environment and implemented core features',
          'Store design using Redux and Redux-Saga',
          'React-based component hierarchy design',
          'Atomic Design',
          'Viewer optimization using lazy loading',
        ],
        skill: 'Typescript, React, Redux, styled-components, React Router',
      },
      {
        title: 'Dashboard Page',
        dateFrom: '2019-06',
        dateTo: '2019-09',
        description:
          'A dashboard web page project for use within the Ministry of National Defense network. I joined the project mid-way and worked on maintenance and developing new features that had not yet been implemented.',
        detail: [
          'Performance improvement and sorting feature implementation for pages using table components',
          'Used and modified components using Ant Design library',
        ],
        skill: 'Javascript, React, Antd, Redux, styled-components, React Router',
      },
    ],
    role: 'Software Developer (Military Service)',
    additional: {
      label: 'View Recommendation Letter',
      link: '/certificates/recommendation-letter-ko.pdf',
    },
  },
];

export const otherExperiences: OtherExperienceProps[] = [
  {
    project: [
      {
        title: 'Oneline Bank',
        dateFrom: '2021-04',
        dateTo: '2021-05',
        description:
          'Participated in the 2021 Woori Bank Hackathon finals, learned React Native for 5 days, and independently developed a chat-based remittance app.',
        detail: [
          'Set up frontend technical environment and implemented all features',
          'Store design using Firebase',
          'Implemented remittance feature using Woori Bank API',
          'Implemented user verification feature using biometric authentication',
        ],
        detailLink: '/projects/onelinebank',
        githubLink: 'https://github.com/junuuon/OnelineBank',
        productLink: 'https://github.com/junuuon/OnelineBank/releases/tag/v1.0',
        skill: 'Javascript, React Native, Firebase, Expo',
      },
    ],
  },
  {
    project: [
      {
        title: 'Personal Blog',
        dateFrom: '2021-02',
        description:
          'Personal resume and blog. Implemented static site generation (SSG), dark mode, and responsive design using Svelte.',
        detail: [
          'Set up frontend technical environment and implemented all features',
          'Atomic Design',
          'Theme change feature based on web browser theme',
          'Support for various browser environments and sizes',
        ],
        githubLink: 'https://github.com/junuuon/junuuon.github.io',
        skill: 'Typescript, Next.js, styled-components, MDX',
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
    label: 'Linux Master Level 2',
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
    list: ['React Compiler', 'Reanimated (v3)', 'Flashlist', 'MMKV', 'Unistyles', 'PWA'],
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
