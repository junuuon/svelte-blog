<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  const { component: Component, metadata, slug } = data;
</script>

<svelte:head>
  <title>{metadata.title ? `${metadata.title} | Junwon Park` : `${slug} | 프로젝트`}</title>
  {#if metadata.description}
    <meta name="description" content={metadata.description} />
    <meta property="og:description" content={metadata.description} />
    <meta name="twitter:description" content={metadata.description} />
  {/if}
  <meta
    property="og:title"
    content={metadata.title ? `${metadata.title} | Junwon Park` : `${slug} | 프로젝트`}
  />
  {#if metadata.image}
    <meta property="og:image" content={metadata.image} />
    <meta name="twitter:image" content={metadata.image} />
  {/if}
</svelte:head>

<article>
  {#if Component}
    <Component />
  {:else}
    <p>컨텐츠를 불러올 수 없습니다.</p>
  {/if}
</article>
