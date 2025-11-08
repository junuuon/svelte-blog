import type {
  IntroductionProps,
  WorkExperienceProps,
  OtherExperienceProps,
  CertificateProps,
  SkillProps,
} from '../../types/about';

const introduction: IntroductionProps = {
  title: '제품의 기획부터 운영까지 전 과정을 주도하는 5년 차 개발자 박준원입니다.',
  githubLink: 'https://github.com/junuuon',
  linkedinLink: 'https://www.linkedin.com/in/junuuon/',
  briefing: [
    '총 5년의 경력을 보유하고 있습니다. AI 챗봇 앱 스타트업 ‘오르카에이아이’에서 공동 창업자이자 프론트엔드 개발을 총괄하며, Expo 기반의 앱 기획부터 배포, 운영, 수익화까지의 전 과정을 주도했습니다. 이전 스타트업 ‘볼트마이크로’에서도 PO 역할을 겸하며 제품 성장을 이끈 경험이 있습니다.',
    '코드 컨벤션을 설정하여 일관성을 유지하는 것을 좋아하며, 같은 기능을 하는 코드도 알아보기 쉽게 간단한 코드로 작성하고 있습니다. 레거시 코드를 리팩터링하고 개선하는 것을 즐겨합니다.',
    '혼자서의 개발보다는 동료들과 끊임없는 커뮤니케이션을 통해 협업하는 것을 더 선호합니다. 국방부에서 진행한 프로젝트에서도 동료들과의 계속된 소통으로 서로의 생각을 정리하고 공유하여 제한된 자원으로 주어진 짧은 기간 안에 성공적으로 프로젝트를 끝마친 경험이 있습니다.',
  ],
};

const workExperiences: WorkExperienceProps[] = [
  {
    companyName: '오르카에이아이 주식회사',
    dateFrom: '2024-01',
    project: [
      {
        title: '아이라',
        dateFrom: '2024-01',
        description:
          'Expo(React Native) 기반의 AI 캐릭터 채팅 앱 서비스입니다. 공동 창업자이자 프론트엔드 개발을 전담하여, 기획부터 앱 스토어 배포 및 운영까지 전체 개발 사이클을 주도하였습니다.',
        detail: [
          'EAS 및 GitHub Actions 기반의 CI/CD 파이프라인 구축',
          'RevenueCat, AdMob을 활용한 앱 수익화 모델 구축',
          'Expo Router 기반 아키텍처 설계 및 Universal Link를 통한 크로스 플랫폼 통합',
          'React Compiler 도입 및 Flashlist, MMKV 적용을 통한 성능 최적화',
          'React Query(Persister)를 통한 전역 상태 관리 및 Event Stream 기반 채팅 UI 구현',
          'Reanimated(v4) 및 react-native-keyboard-controller를 활용한 네이티브 UX 구현',
          'Sentry, Zod, i18n(3개국어) 도입을 통한 프로덕션 레벨의 안정성 및 확장성 확보',
        ],
        productLink: 'https://aira.gg',
        skill: 'TypeScript, Expo, React Query, Reanimated, Flashlist',
      },
    ],
    role: '공동 창업자 / 프론트엔드 리드',
  },
  {
    companyName: '볼트마이크로',
    dateFrom: '2022-01',
    dateTo: '2023-06',
    project: [
      {
        title: 'CameraFi Studio',
        dateFrom: '2022-02',
        dateTo: '2023-06',
        description:
          '웹 오버레이 스코어보드 및 자막 서비스를 제공하는 CameraFi Studio 서비스 프로젝트입니다. 프로젝트를 혼자 시작하여 프론트엔드 기술환경 구성 및 기능 구현하여 사내의 두 번째 메인 프로젝트로 성장하였습니다.',
        detail: [
          'Firebase를 이용하여 커스텀 토큰과 쿠키를 이용한 로그인 방식 적용된 별도의 통합 로그인 페이지 제작',
          'Cookie consent 직접 개발하여 쿠키 제어',
          'Next-PWA를 이용한 PWA 앱 개발 및 빌드',
          'Paddle을 이용한 구독 및 결제 서비스 적용',
          'dynamic import 및 웹팩 설정과 tree shaking 기법을 이용하여 계정 페이지 324KB -> 277KB로 빌드 사이즈 최적화',
        ],
        productLink: 'https://studio.camerafi.com',
        skill: 'Typescript, Next.js, Mui, Firebase, TanStack Query, PWA',
      },
      {
        title: 'Internal Page',
        dateFrom: '2022-03',
        dateTo: '2023-06',
        description:
          '회사 내에서 사용하는 서비스 관리 페이지입니다. 사용자 관련 통계 페이지 및 사용자 관리, 공지 관리 기능을 하고 있습니다.',
        detail: [
          'Chart.js를 이용한 DAU 및 각종 서비스 지표 표시',
          '데이터 삭제, 수정 기능이 있는 재사용 가능한 테이블 컴포넌트 개발',
          '유튜브 UI를 참고하여 수십만 개의 영상 목록을 lazy loading으로 표시하게끔 적용',
          'Firebase Hosting을 이용하여 호스팅',
        ],
        skill: 'Typescript, React, Mui, Firebase, Tanstack Query, Chart.js',
      },
    ],
    role: 'Frontend Developer',
  },
  {
    companyName: '대한민국 국방부',
    dateFrom: '2019-05',
    dateTo: '2020-12',
    project: [
      {
        title: '워드, 엑셀 웹 뷰어',
        dateFrom: '2020-08',
        dateTo: '2020-10',
        description:
          '워드와 엑셀 파일을 웹 내에서 특정 라인 및 셀 강조 표시, 코멘트 기능이 있는 웹페이지 제잽 프로젝트입니다. 프로젝트 기획, 디자인, 개발 전 과정에 참여하였습니다. Antd를 사용했던 이전 프로젝트와 달리 모든 컴포넌트를 직접 디자인 개발하였습니다.',
        detail: [
          '프론트엔드 기술환경 구성 및 핵심 기능 구현',
          'Redux, Redux-Saga를 사용한 스토어 디자인',
          'React기반 컴포넌트 계층 구조 디자인',
          'Atomic 디자인',
          'Lazy loading을 사용한 뷰어 최적화',
        ],
        skill: 'Typescript, React, Redux, styled-components, React Router',
      },
      {
        title: '대시보드 페이지',
        dateFrom: '2019-06',
        dateTo: '2019-09',
        description:
          '국방부 망 내에서 사용할 수 있는 대시보드 웹페이지 제작 프로젝트입니다. 프로젝트 중간부터 참여하였습니다. 유지보수 및 아직 개발되지 않은 새로운 기능을 개발하였습니다.',
        detail: [
          '테이블 컴포넌트가 사용된 페이지의 성능 개선 및 정렬 기능 구현',
          'Ant Design 라이브러리를 활용하여 컴포넌트를 사용 및 개조',
        ],
        skill: 'Javascript, React, Antd, Redux, styled-components, React Router',
      },
    ],
    role: 'SW 개발병',
    additional: {
      label: '추천서 보기',
      link: '/certificates/recommendation-letter-ko.pdf',
    },
  },
];

const otherExperiences: OtherExperienceProps[] = [
  // {
  //   companyName: '한양대학교',
  //   dateFrom: '2017-03',
  //   project: [
  //     {
  //       title: '대선 뉴스 모아보기 페이지',
  //       dateFrom: '2021-11',
  //       dateTo: '2021-12',
  //       description:
  //         '한양대학교 소프트웨어스튜디오2 수업 과제로 대선 관련 정보를 모아 볼 수 있는 웹페이지를 제작 프로젝트입니다. 팀원 4명이서 진행하였으며 팀장을 맡아 기획, 디자인 개발 등 전 과정을 담당하였습니다.',
  //       detail: [
  //         '프론트엔드 기술환경 구성 및 기본 기능 구현',
  //         'AWS Amplify를 이용한 회원 정보 관리 및 로그인, 로그아웃, 회원가입 기능 구현',
  //         'GraphQL을 이용한 데이터 관리',
  //         'React기반 컴포넌트 계층 구조 디자인',
  //       ],
  //       detailLink: '/projects/daesun',
  //       githubLink: 'https://github.com/junuuon/ITE3068_team8',
  //       skill: 'Javascript, React, AWS Amplify, GraphQL, styled-components',
  //     },
  //   ],
  //   role: '컴퓨터소프트웨어학부 전공',
  // },
  {
    project: [
      {
        title: '한줄 은행',
        dateFrom: '2021-04',
        dateTo: '2021-05',
        description:
          '2021 우리은행 해커톤 본선 참여, 5일간 React Native를 학습하여 채팅 송금 앱을 단독 개발하였습니다.',
        detail: [
          '프론트엔드 기술환경 구성 및 모든 기능 구현',
          'Firebase를 사용한 스토어 디자인',
          '우리 은행 API를 사용한 송금 기능 구현',
          '생체인증을 이용한 사용자 확인 기능 구현',
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
        title: '개인 블로그',
        dateFrom: '2021-02',
        description:
          '개인 이력서 및 블로그. 정적 페이지 생성(SSG), 다크 모드, 반응형 디자인을 Svelte로 구현하였습니다.',
        detail: [
          '프론트엔드 기술환경 구성 및 모든 기능 구현',
          'Atomic 디자인',
          '웹브라우저의 테마에 따른 테마 변경 기능',
          '다양한 브라우저 환경 및 사이즈 대응',
        ],
        githubLink: 'https://github.com/junuuon/junuuon.github.io',
        skill: 'Typescript, Next.js, styled-components, MDX',
      },
    ],
  },
];

const certificates: CertificateProps[] = [
  {
    label: 'AWS training and certification',
    link: '/certificates/aws-training.pdf',
  },
  {
    label: 'TOPCIT',
    link: '/certificates/topcit.pdf',
  },
  {
    label: '리눅스 마스터 2급',
    link: '/certificates/linux-master-2.pdf',
  },
];

const skills: SkillProps[] = [
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
    title: 'Perf & UI',
    list: ['React Compiler', 'Reanimated (v3)', 'Flashlist', 'MMKV', 'Unistyles', 'PWA'],
  },
  {
    title: 'Data & Revenue',
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

export const resumeData = {
  introduction,
  workExperiences,
  otherExperiences,
  certificates,
  skills,
};
