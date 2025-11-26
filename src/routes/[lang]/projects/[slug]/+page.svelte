<script lang="ts">
  import type { PageData } from './$types';
  import Title from '$lib/components/Title.svelte';
  import { getLabels } from '$lib/data/labels';

  let { data }: { data: PageData } = $props();
  const { component: Component, metadata, slug, lang } = data;
  const labels = $derived(getLabels(lang));
</script>

<svelte:head>
  <title>
    {`${metadata.title || slug} | ${labels.project}`}
  </title>
  {#if metadata.description}
    <meta name="description" content={metadata.description} />
    <meta property="og:description" content={metadata.description} />
    <meta name="twitter:description" content={metadata.description} />
  {/if}
  <meta property="og:title" content={`${metadata.title || slug} | ${labels.project}`} />
  {#if metadata.image}
    <meta property="og:image" content={metadata.image} />
    <meta name="twitter:image" content={metadata.image} />
  {/if}
</svelte:head>

<Title
  githubLink={metadata.originalLink || ''}
  productLink={metadata.productLink || ''}
  {lang}
  name={metadata.title || slug}
  role={metadata.role || ''}
  tagline={metadata.description || ''}
/>
<article>
  {#if Component}
    <Component />
  {:else}
    <p>{labels.contentLoadError}</p>
  {/if}
</article>
