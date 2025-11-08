<script lang="ts">
  import type { PageData } from './$types';
  import Title from '$lib/components/Title.svelte';

  let { data }: { data: PageData } = $props();
  const { component: Component, metadata, slug } = data;
</script>

<svelte:head>
  <title>{metadata.title ? `${metadata.title} | Junwon Park` : `${slug} | 프로젝트`}</title>
  {#if metadata.description}
    <meta name="description" content={metadata.description} />
  {/if}
  {#if metadata.image}
    <meta property="og:image" content={metadata.image} />
  {/if}
</svelte:head>

<article>
  <Title title={metadata.title || slug} date={metadata.date} githubLink={metadata.originalLink} />
  {#if Component}
    <Component />
  {:else}
    <p>컨텐츠를 불러올 수 없습니다.</p>
  {/if}
</article>
