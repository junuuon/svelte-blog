import type { LayoutLoad } from './$types';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load: LayoutLoad = ({ params, url }) => {
  const { lang } = params;

  if (lang !== 'ko' && lang !== 'en') {
    error(404, { message: `Invalid language: ${lang}` });
  }

  const pathname = url.pathname;
  const basePath = pathname.replace(/^\/(ko|en)(\/|$)/, '/') || '/';

  return {
    lang,
    basePath,
  };
};
