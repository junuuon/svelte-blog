import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Component } from 'svelte';

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
  const { slug } = params;

  const postPath = `/src/lib/posts/${slug}.svx`;
  const postModule = posts[postPath];

  if (!postModule) {
    throw error(404, `프로젝트 "${slug}"를 찾을 수 없습니다.`);
  }

  const PostComponent = postModule.default;
  const metadata: PostMetadata = postModule.metadata || {};

  return {
    component: PostComponent,
    metadata,
    slug,
  };
};
