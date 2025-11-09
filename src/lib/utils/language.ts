export type Language = 'ko' | 'en';

const LANGUAGE_KEY = 'preferred-language';

export const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
  const langCode = browserLang.toLowerCase().split('-')[0];

  return langCode === 'ko' ? 'ko' : 'en';
};

export const getLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const saved = localStorage.getItem(LANGUAGE_KEY) as Language | null;
  if (saved === 'ko' || saved === 'en') {
    return saved;
  }

  const detected = detectBrowserLanguage();
  setLanguage(detected);
  return detected;
};

export const setLanguage = (lang: Language): void => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem(LANGUAGE_KEY, lang);
  window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
};
