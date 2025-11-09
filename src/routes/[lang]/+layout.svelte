<script lang="ts">
  import { browser } from '$app/environment';
  import { setLanguage } from '$lib/utils/language';
  import { getMetadata } from '$lib/utils/metadata';
  import type { PageData } from './$types';

  let { children, data }: { children: any; data: PageData } = $props();

  const currentLang = $derived(data.lang);
  let metadata = $derived(getMetadata(currentLang));

  let basePath = $state(data.basePath || '/');

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

  const canonicalUrl = $derived(
    currentLang === 'ko'
      ? `https://junuuon.github.io/ko${basePath === '/' ? '' : basePath}`
      : `https://junuuon.github.io${basePath === '/' ? '' : basePath}`,
  );

  $effect(() => {
    if (browser) {
      document.documentElement.lang = currentLang;
      setLanguage(currentLang);
    }
  });
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="author" content="Junwon Park" />
  <meta name="description" content={metadata.description} />

  <meta name="robots" content="index, follow" />
  <link rel="canonical" href={canonicalUrl} />

  <link rel="alternate" hreflang="ko" href={koUrl} />
  <link rel="alternate" hreflang="en" href={enUrl} />
  <link rel="alternate" hreflang="x-default" href={enUrl} />

  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalUrl} />
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
  <meta name="twitter:url" content={canonicalUrl} />
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
</svelte:head>

<a href="#main-content" class="skip-link">{metadata.skipLink}</a>
{@render children()}

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
</style>
