import type {
  IntroductionProps,
  WorkExperienceProps,
  OtherExperienceProps,
  CertificateProps,
  SkillProps,
} from '../../types/about';
import * as koData from './resume.ko';
import * as enData from './resume.en';
import type { Language } from '../utils/language';

export interface ResumeData {
  introduction: IntroductionProps;
  workExperiences: WorkExperienceProps[];
  otherExperiences: OtherExperienceProps[];
  certificates: CertificateProps[];
  skills: SkillProps[];
}

const resumeDataMap: Record<Language, ResumeData> = {
  ko: {
    introduction: koData.introduction,
    workExperiences: koData.workExperiences,
    otherExperiences: koData.otherExperiences,
    certificates: koData.certificates,
    skills: koData.skills,
  },
  en: {
    introduction: enData.introduction,
    workExperiences: enData.workExperiences,
    otherExperiences: enData.otherExperiences,
    certificates: enData.certificates,
    skills: enData.skills,
  },
};

export const getResumeData = (lang: Language = 'en'): ResumeData => {
  return resumeDataMap[lang] || resumeDataMap.en;
};

export const resumeData = resumeDataMap.en;
