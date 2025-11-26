<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { getLanguage, type Language } from '$lib/utils/language';
  import { getMetadata } from '$lib/utils/metadata';

  const metadata = getMetadata('en');

  onMount(() => {
    if (browser) {
      const currentPath = window.location.pathname;

      if (
        currentPath.startsWith('/ko/') ||
        currentPath.startsWith('/en/') ||
        currentPath === '/ko' ||
        currentPath === '/en'
      ) {
        return;
      }

      const lang = getLanguage();
      goto(`/${lang}`, { replaceState: true });
    }
  });
</script>

<svelte:head>
  <title>{metadata.title}</title>
  <meta name="author" content="Junwon Park" />
  <meta name="description" content={metadata.description} />

  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://junuuon.github.io" />

  <link rel="alternate" hreflang="ko" href="https://junuuon.github.io/ko" />
  <link rel="alternate" hreflang="en" href="https://junuuon.github.io/en" />
  <link rel="alternate" hreflang="x-default" href="https://junuuon.github.io/en" />

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

  <!-- prettier-ignore -->
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
