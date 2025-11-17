<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import Github from '$lib/components/Icon/Github.svelte';
  import Linkedin from '$lib/components/Icon/Linkedin.svelte';
  import { getLanguage, setLanguage, type Language } from '$lib/utils/language';

  interface Props {
    date?: string;
    githubLink?: string;
    linkedinLink?: string;
    lang?: Language;
    title: string;
  }

  const { date, githubLink, linkedinLink, lang, title }: Props = $props();
  const originalDate = date ? new Date(date) : null;
  const formattedDate = originalDate
    ? originalDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  let currentLang = $state<Language>(lang || 'en');

  $effect(() => {
    if (lang) {
      currentLang = lang;
    }
  });

  onMount(() => {
    if (browser && !lang) {
      const detectedLang = getLanguage();
      currentLang = detectedLang;
    }
  });

  const toggleLanguage = () => {
    if (browser) {
      const newLang: Language = currentLang === 'ko' ? 'en' : 'ko';
      setLanguage(newLang);
      currentLang = newLang;

      const currentPath = window.location.pathname;
      const pathWithoutLang = currentPath.replace(/^\/(ko|en)(\/|$)/, '/') || '/';
      if (pathWithoutLang === '/') {
        goto(`/${newLang}`);
      } else {
        const newPath = newLang === 'en' ? pathWithoutLang : `/${newLang}${pathWithoutLang}`;
        goto(newPath);
      }
    }
  };

  const langDisplay = $derived(currentLang === 'ko' ? 'English' : '한국어');
</script>

<div>
  <div class="icons">
    <button class="lang-toggle" onclick={toggleLanguage} aria-label="Toggle language">
      {langDisplay}
    </button>
    {#if githubLink}
      <div class="icon">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Github page"
          title="Go to Github page"
        >
          <Github />
        </a>
      </div>
    {/if}

    {#if linkedinLink}
      <div class="icon">
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Linkedin page"
          title="Go to Linkedin page"
        >
          <Linkedin />
        </a>
      </div>
    {/if}
  </div>
  <header class="header">
    <h1 class="title">{title}</h1>
  </header>
  {#if formattedDate}
    <p>{formattedDate}</p>
  {/if}
</div>

<style>
  .icons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: flex-end;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-size: 5rem;
    line-height: 1.1;
    margin: 0 0 0.67em 0;
    word-break: keep-all;
  }

  .lang-toggle {
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-main, #e0e0e0);
    background: transparent;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.875rem;
    transition: all 0.2s;
    color: var(--color-main, #333);
    font-family: inherit;
  }

  .icon {
    padding: 10px;
  }

  @media (max-width: 960px) {
    .header {
      flex-direction: column;
    }
    .title {
      font-size: 3rem;
    }
  }

  @media print {
    .icons {
      display: none !important;
    }

    .lang-toggle {
      display: none !important;
    }

    .title {
      font-size: 2.5rem;
    }
  }
</style>
