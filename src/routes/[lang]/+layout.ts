import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load: LayoutLoad = async ({ params }) => {
  const { lang } = params;

  if (lang !== 'ko' && lang !== 'en') {
    throw error(404, { message: `Invalid language: ${lang}` });
  }

  return {
    lang: lang as 'ko' | 'en',
  };
};
