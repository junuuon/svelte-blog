<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import Github from '$lib/components/Icon/Github.svelte';
  import Linkedin from '$lib/components/Icon/Linkedin.svelte';
  import { getLanguage, setLanguage, type Language } from '$lib/utils/language';

  interface Props {
    githubLink?: string;
    linkedinLink?: string;
    lang?: Language;
    name: string;
    role: string;
    tagline: string;
  }

  const { githubLink, linkedinLink, lang, name, role, tagline }: Props = $props();
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

      const currentPath = window.location.pathname;
      const pathWithoutLang = currentPath.replace(/^\/(ko|en)(\/|$)/, '/') || '/';
      const newPath = pathWithoutLang === '/' ? `/${newLang}` : `/${newLang}${pathWithoutLang}`;
      
      window.location.href = newPath;
    }
  };

  const langDisplay = $derived(currentLang === 'ko' ? 'English' : '한국어');
</script>

<div>
  <header class="header">
    <div class="title-container">
      <h1 class="title">{name}</h1>
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
    </div>
    <h2 class="role">{role}</h2>
    <h3 class="tagline">{tagline}</h3>
  </header>
</div>

<style>
  .header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 0.67em 0;
  }

  .title {
    font-size: 5rem;
    line-height: 1.1;
    margin: 0;
    word-break: keep-all;
  }

  .icons {
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }

  .role {
    font-size: 2rem;
    line-height: 1.1;
    margin: 0 0 0.67em 0;
    word-break: keep-all;
  }

  .tagline {
    color: var(--color-sub);
    font-size: 1.5rem;
    line-height: 1.1;
    margin: 0 0 0.67em 0;
    word-break: keep-all;
  }

  .lang-toggle {
    background: transparent;
    border-radius: 8px;
    border: 1px solid var(--color-main, #e0e0e0);
    color: var(--color-main, #333);
    cursor: pointer;
    font-family: inherit;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    transition: all 0.2s;
  }

  .icon {
    padding: 10px;
  }

  @media (max-width: 960px) {
    .title {
      font-size: 3rem;
    }
  }

  @media (max-width: 576px) {
    .title-container {
      flex-direction: column-reverse;
      justify-content: flex-start;
    }

    .icons {
      justify-content: flex-end;
      width: 100%;
    }

    .title {
      justify-content: flex-start;
      width: 100%;
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
