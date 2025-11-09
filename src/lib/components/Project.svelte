<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import type { Snippet } from 'svelte';
  import Github from '$lib/components/Icon/Github.svelte';
  import OpenInNewTab from '$lib/components/Icon/OpenInNewTab.svelte';
  import Period from '$lib/components/Period.svelte';
  import { getLanguage, type Language } from '$lib/utils/language';
  import { getLabels } from '$lib/data/labels';

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

  let labels = $state(getLabels('en'));

  onMount(() => {
    if (browser) {
      const pathname = window.location.pathname;
      const langMatch = pathname.match(/^\/(ko|en)/);
      const lang = langMatch ? (langMatch[1] as Language) : getLanguage();
      labels = getLabels(lang);
    }
  });
</script>

<div class="block" class:other>
  <header class="header">
    <div class="title">
      <h3>
        {title}
        {#if productLink}
          <a
            href={productLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={labels.goToProductPage}
            title={labels.goToProductPage}
          >
            <OpenInNewTab />
          </a>
        {/if}
      </h3>

      {#if githubLink}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels.goToGithubPage}
          title={labels.goToGithubPage}
        >
          <Github />
        </a>
      {/if}
    </div>
    <Period {dateFrom} {dateTo} />
  </header>

  {#if !other}
    <h4>{labels.description}</h4>
  {/if}
  <p>
    {description}
    {#if detailLink}
      <a href={detailLink}>"{title}" {labels.viewProjectDetails}</a>
    {/if}
  </p>

  {#if children}
    <h4>{labels.whatDidIDo}</h4>
    <div>
      {@render children()}
    </div>
  {/if}

  {#if skill && !other}
    <h4>{labels.techStack}</h4>
    {skill}
  {/if}
</div>

<style>
  .block {
    padding: 1.5rem 0;
  }

  .block.other {
    border-bottom: 1px solid var(--color-bg-divider);
    padding: 1rem 0;
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
