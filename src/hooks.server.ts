import type { Handle } from '@sveltejs/kit';
import { detectLanguageFromHeader } from '$lib/utils/language';

const LANGUAGE_COOKIE = 'preferred-language';

export const handle: Handle = async ({ event, resolve }) => {
  let locale = event.cookies.get(LANGUAGE_COOKIE) as 'ko' | 'en' | undefined;

  if (!locale) {
    const acceptLanguage = event.request.headers.get('accept-language');
    locale = detectLanguageFromHeader(acceptLanguage);

    event.cookies.set(LANGUAGE_COOKIE, locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
      secure: event.url.protocol === 'https:',
    });
  }

  event.locals.locale = locale;

  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', locale),
  });
};
