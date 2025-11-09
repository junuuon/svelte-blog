<script lang="ts">
  import 'normalize.css';
  import '../../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { setLanguage } from '$lib/utils/language';
  import { getMetadata } from '$lib/utils/metadata';
  import type { PageData } from './$types';

  let { children, data }: { children: any; data: PageData } = $props();

  const currentLang = $derived(data.lang);
  let metadata = $derived(getMetadata(currentLang));

  let basePath = $state('/');

  const updateBasePath = () => {
    if (browser) {
      const pathname = window.location.pathname;
      basePath = pathname.replace(/^\/(ko|en)(\/|$)/, '/') || '/';
    }
  };

  $effect(() => {
    if (browser) {
      updateBasePath();
      window.addEventListener('popstate', updateBasePath);
      return () => {
        window.removeEventListener('popstate', updateBasePath);
      };
    }
  });

  const koUrl = $derived(`https://junuuon.github.io/ko${basePath === '/' ? '' : basePath}`);
  const enUrl = $derived(`https://junuuon.github.io${basePath === '/' ? '' : basePath}`);

  $effect(() => {
    if (browser) {
      document.documentElement.lang = currentLang;
    }
  });

  onMount(() => {
    if (browser) {
      setLanguage(currentLang);

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
  <title>{metadata.title}</title>
  <meta name="author" content="Junwon Park" />
  <meta name="description" content={metadata.description} />

  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://junuuon.github.io" />

  <link rel="alternate" hreflang="ko" href={koUrl} />
  <link rel="alternate" hreflang="en" href={enUrl} />
  <link rel="alternate" hreflang="x-default" href={enUrl} />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://junuuon.github.io" />
  <meta property="og:title" content={metadata.ogTitle} />
  <meta property="og:description" content={metadata.ogDescription} />
  <meta property="og:image" content="https://junuuon.github.io/images/preview.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/webp" />
  <meta property="og:image:alt" content={metadata.imageAlt} />
  <meta property="og:site_name" content={metadata.siteName} />
  <meta property="og:locale" content={metadata.locale} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://junuuon.github.io" />
  <meta name="twitter:title" content={metadata.twitterTitle} />
  <meta name="twitter:description" content={metadata.twitterDescription} />
  <meta name="twitter:image" content="https://junuuon.github.io/images/preview.webp" />
  <meta name="twitter:image:alt" content={metadata.imageAlt} />
  <meta name="twitter:site" content="@junuuon" />

  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FFFFFF" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0d1116" />

  <link
    rel="preload"
    href="/fonts/PretendardVariable.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />

  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Junwon Park',
      jobTitle: 'Front-end Developer',
      url: 'https://junuuon.github.io',
      sameAs: ['https://github.com/junuuon', 'https://www.linkedin.com/in/junuuon/'],
      image: 'https://junuuon.github.io/images/preview.webp',
      description: metadata.schemaDescription,
    })}
  </script>
  <link rel="icon" href={favicon} />
</svelte:head>

<a href="#main-content" class="skip-link">{metadata.skipLink}</a>
<div class="wrapper">
  <div class="content-wrapper">
    <main id="main-content" class="content" tabindex="-1">
      {@render children()}
    </main>
  </div>
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
