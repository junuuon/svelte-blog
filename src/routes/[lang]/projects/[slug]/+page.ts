import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Component } from 'svelte';
import type { Language } from '$lib/utils/language';

export const prerender = true;

export const entries = async () => {
  const posts = import.meta.glob<PostModule>('/src/lib/posts/*.svx', {
    eager: true,
  });
  const slugs = Object.keys(posts)
    .map((path) => {
      const match = path.match(/\/([^/]+)\.svx$/);
      return match ? match[1] : null;
    })
    .filter(Boolean) as string[];

  const langs = ['ko', 'en'];
  return langs.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
};

interface PostMetadata {
  title?: string;
  description?: string;
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

  const postPath = `/src/lib/posts/${slug}.svx`;
  const postModule = posts[postPath];

  if (!postModule) {
    error(404, { message: `Project "${slug}" not found.` });
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
