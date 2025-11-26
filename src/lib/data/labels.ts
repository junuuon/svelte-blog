import type { Language } from '../utils/language';

export interface Labels {
  switchToKorean: string;
  switchToEnglish: string;
  errorOccurred: string;
  pageNotFound: string;
  goHome: string;
  project: string;
  contentLoadError: string;
  goToGithub: string;
  goToGithubPage: string;
  goToProductPage: string;
  description: string;
  whatDidIDo: string;
  techStack: string;
  viewProjectDetails: string;
  projectNotFound: string;
}

export const labelsMap: Record<Language, Labels> = {
  ko: {
    switchToKorean: '한국어로 전환',
    switchToEnglish: 'Switch to English',
    errorOccurred: '오류가 발생했습니다',
    pageNotFound: '페이지를 찾을 수 없습니다',
    goHome: '홈으로 돌아가기',
    project: '프로젝트',
    contentLoadError: '컨텐츠를 불러올 수 없습니다.',
    goToGithub: 'GitHub 링크로 이동',
    goToGithubPage: 'GitHub 페이지로 이동',
    goToProductPage: '제품 페이지로 이동',
    description: '설명',
    whatDidIDo: '주요 작업',
    techStack: '기술 스택',
    viewProjectDetails: '프로젝트 자세히 보기',
    projectNotFound: '프로젝트를 찾을 수 없습니다.',
  },
  en: {
    switchToKorean: '한국어로 전환',
    switchToEnglish: 'Switch to English',
    errorOccurred: 'An error occurred',
    pageNotFound: 'Page not found',
    goHome: 'Go home',
    project: 'Project',
    contentLoadError: 'Unable to load content.',
    goToGithub: 'Go to Github link',
    goToGithubPage: 'Go to Github page',
    goToProductPage: 'Go to product page',
    description: 'Description',
    whatDidIDo: 'What did I Do',
    techStack: 'Tech Stack',
    viewProjectDetails: 'View project details',
    projectNotFound: 'Project not found.',
  },
};

export const getLabels = (lang: Language): Labels => {
  return labelsMap[lang];
};
