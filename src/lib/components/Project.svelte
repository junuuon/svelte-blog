<script lang="ts">
  import type { Snippet } from 'svelte';
  import Github from '$lib/components/Icon/Github.svelte';
  import OpenInNewTab from '$lib/components/Icon/OpenInNewTab.svelte';
  import Period from '$lib/components/Period.svelte';

  interface Props {
    children?: Snippet;
    dateFrom: string;
    dateTo?: string;
    description: string;
    detailLink?: string;
    githubLink?: string;
    other?: boolean;
    productLink?: string;
    skill?: string;
    title: string;
  }
  const {
    children,
    dateFrom,
    dateTo,
    description,
    detailLink,
    githubLink,
    other = false,
    productLink,
    skill,
    title,
  }: Props = $props();
</script>

<div class="block" class:other>
  <header class="header">
    <div class="title">
      <h4>
        {title}
        {#if productLink}
          <a
            href={productLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Go to product page"
            title="Go to product page"
          >
            <OpenInNewTab />
          </a>
        {/if}
      </h4>

      {#if githubLink}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Github page"
          title="Go to Github page"
        >
          <Github />
        </a>
      {/if}
    </div>
    <Period {dateFrom} {dateTo} />
  </header>

  <h5>Description</h5>
  <p>
    {description}
    &nbsp;
    {#if detailLink}
      <a href={detailLink}>자세히 보기</a>
    {/if}
  </p>

  <h5>What did I Do</h5>
  <div>
    {#if children}
      {@render children()}
    {/if}
  </div>

  {#if skill}
    <h5>Tech Stack</h5>
    {skill}
  {/if}
</div>

<style>
  .block {
    padding: 1.5rem 0;
  }

  .block.other {
    border-bottom: 1px solid var(--color-bg-divider);
    padding: 3rem 0;
  }

  .header {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .title {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }
</style>
