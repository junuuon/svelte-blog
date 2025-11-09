<script lang="ts">
  import 'normalize.css';
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Footer from '$lib/components/Footer.svelte';

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
  <meta property="og:image" content="/images/preview.webp" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Junwon Park | Portfolio" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Junwon Park | Portfolio" />
  <meta name="twitter:description" content="Junwon's portfolio" />
  <meta name="twitter:image" content="/images/preview.webp" />
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
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Junwon Park",
      "jobTitle": "Front-end Developer",
      "url": "https://junuuon.github.io",
      "sameAs": ["https://github.com/junuuon", "https://www.linkedin.com/in/junuuon/"],
      "image": "https://junuuon.github.io/images/preview.webp",
      "description": "5년 차 프론트엔드 개발자. AI 챗봇 앱 스타트업 공동 창업자이자 프론트엔드 리드로 Expo 기반 앱 기획부터 배포, 운영, 수익화까지의 전 과정을 주도했습니다."
    }
  </script>
  <link rel="icon" href={favicon} />
</svelte:head>

<a href="#main-content" class="skip-link">본문으로 건너뛰기</a>
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
</style>
