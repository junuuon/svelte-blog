<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    src: string;
    alt: string;
    children?: Snippet;
  }

  let { src, alt, children }: Props = $props();
</script>

<figure class="image-description">
  <img {src} {alt} loading="lazy" />
  {#if children}
    <figcaption>{@render children()}</figcaption>
  {/if}
</figure>

<style>
  .image-description {
    margin: 2rem 0;
    text-align: center;
  }

  .image-description img {
    max-width: 100%;
    height: auto;
    border-radius: 16px;
    width: 100%;
  }

  .image-description figcaption {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
</style>
