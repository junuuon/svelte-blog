<script lang="ts">
  import 'normalize.css';
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let { children } = $props();

  onMount(() => {
    if (browser) {
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
  <title>Junwon Park | Portfolio</title>
  <meta name="author" content="junwon" />
  <meta name="description" content="Junwon's portfolio" />

  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://junuuon.github.io" />

  <meta property="og:title" content="Junwon Park | Portfolio" />
  <meta property="og:description" content="Junwon's portfolio" />
  <meta property="og:url" content="https://junuuon.github.io" />
  <meta property="og:image" content="/images/blog/blog01.webp" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Junwon Park | Portfolio" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Junwon Park | Portfolio" />
  <meta name="twitter:description" content="Junwon's portfolio" />
  <meta name="twitter:image" content="/images/blog/blog01.webp" />
  <meta name="twitter:site" content="@junuuon" />

  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FFFFFF" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0d1116" />

  <link
    href="https://cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css"
    rel="stylesheet"
    type="text/css"
  />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Junwon Park",
      "jobTitle": "Front-end Developer",
      "url": "https://junuuon.github.io",
      "sameAs": ["https://github.com/junuuon", "https://www.linkedin.com/in/junuuon/"]
    }
  </script>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
