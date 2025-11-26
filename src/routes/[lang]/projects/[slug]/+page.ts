import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Component } from 'svelte';
import type { Language } from '$lib/utils/language';

export const prerender = true;

export const entries = async () => {
  const posts = import.meta.glob<PostModule>('/src/lib/posts/*.svx', {
    eager: true,
  });

  const langSpecificPosts = new Map<string, Set<string>>();

  Object.keys(posts).forEach((path) => {
    const langMatch = path.match(/\/([^/]+)\.(ko|en)\.svx$/);
    if (langMatch) {
      const slug = langMatch[1];
      const lang = langMatch[2];
      if (!langSpecificPosts.has(slug)) {
        langSpecificPosts.set(slug, new Set());
      }
      langSpecificPosts.get(slug)!.add(lang);
    }
  });

  const entries: Array<{ lang: string; slug: string }> = [];
  langSpecificPosts.forEach((langs, slug) => {
    langs.forEach((lang) => {
      entries.push({ lang, slug });
    });
  });

  return entries;
};

interface PostMetadata {
  name?: string;
  title?: string;
  description?: string;
  role?: string;
  tagline?: string;
  date?: string;
  image?: string;
  originalLink?: string;
  [key: string]: unknown;
}

interface PostModule {
  default: Component;
  metadata?: PostMetadata;
}

const posts = import.meta.glob<PostModule>('/src/lib/posts/*.svx', {
  eager: true,
});

export const load: PageLoad = async ({ params }) => {
  const { slug, lang } = params;

  if (lang !== 'ko' && lang !== 'en') {
    error(404, { message: `Invalid language: ${lang}` });
  }

  const langSpecificPath = `/src/lib/posts/${slug}.${lang}.svx`;
  const postModule = posts[langSpecificPath];

  if (!postModule) {
    error(404, { message: `Project "${slug}" not found in ${lang}.` });
  }

  const PostComponent = postModule.default;
  const metadata: PostMetadata = postModule.metadata || {};

  return {
    component: PostComponent,
    metadata,
    slug,
    lang: lang as Language,
  };
};
