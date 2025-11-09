<script lang="ts">
  import 'normalize.css';
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Footer from '$lib/components/Footer.svelte';
  import { getLanguage } from '$lib/utils/language';
  import { getMetadata } from '$lib/utils/metadata';

  let { children } = $props();

  let metadata = $state(getMetadata('en'));

  onMount(() => {
    if (browser) {
      const detectedLang = getLanguage();
      metadata = getMetadata(detectedLang);
      document.documentElement.lang = detectedLang;

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      const handleChange = (mediaQuery: MediaQueryListEvent) => {
        if (mediaQuery.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };

      handleChange(mediaQuery as unknown as MediaQueryListEvent);

      mediaQuery.addEventListener('change', handleChange);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<a href="#main-content" class="skip-link">{metadata.skipLink}</a>
<div class="wrapper">
  <div class="content-wrapper">
    <main id="main-content" class="content" tabindex="-1">
      {@render children()}
    </main>
  </div>
  <Footer />
</div>

<style>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-primary);
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    z-index: 100;
    border-radius: 0 0 4px 0;
  }

  .skip-link:focus {
    top: 0;
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background-color: var(--color-basic-bg);
  }

  .content-wrapper {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }

  main.content {
    width: 800px;
    max-width: 100%;
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    main.content {
      width: 900px;
    }
  }

  @media (min-width: 1280px) {
    main.content {
      width: 1000px;
    }
  }

  @media (min-width: 1536px) {
    main.content {
      width: 1200px;
    }
  }

  @media print {
    main.content {
      width: 800px;
      max-width: 800px;
    }
  }
</style>
