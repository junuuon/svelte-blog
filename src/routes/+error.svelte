<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/state';
  import { getLanguage, type Language } from '$lib/utils/language';
  import { getLabels } from '$lib/data/labels';

  const errorStatus = page.status || 500;

  let currentLang = $state<Language>('en');
  let labels = $state(getLabels('en'));

  onMount(() => {
    if (browser) {
      const pathname = window.location.pathname;
      const langMatch = pathname.match(/^\/(ko|en)/);
      const lang = langMatch ? (langMatch[1] as Language) : getLanguage();
      currentLang = lang;
      labels = getLabels(lang);
    }
  });

  const errorMessage = $derived(page.error?.message || labels.errorOccurred);

  const goHome = () => {
    goto(`/${currentLang}`);
  };
</script>

<svelte:head>
  <title>
    {errorStatus === 404 ? `404 - ${labels.pageNotFound}` : labels.errorOccurred}
  </title>
</svelte:head>

<div class="error-wrapper">
  <div class="error-content">
    <h1 class="error-code">{errorStatus}</h1>
    <h2 class="error-message">
      {#if errorStatus === 404}
        {labels.pageNotFound}
      {:else}
        {labels.errorOccurred}
      {/if}
    </h2>
    {#if errorMessage && errorStatus !== 404}
      <p class="error-detail">{errorMessage}</p>
    {/if}
    <button class="home-button" onclick={goHome}>{labels.goHome}</button>
  </div>
  <Footer />
</div>

<style>
  .error-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background-color: var(--color-basic-bg);
  }

  .error-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 2rem;
    text-align: center;
  }

  .error-code {
    font-size: 8rem;
    font-weight: bold;
    margin: 0;
    line-height: 1;
    color: var(--color-bold);
  }

  .error-message {
    font-size: 2rem;
    margin: 1rem 0;
    color: var(--color-bold);
  }

  .error-detail {
    font-size: 1rem;
    color: var(--color-sub);
    margin: 1rem 0;
  }

  .home-button {
    margin-top: 2rem;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  .home-button:hover {
    opacity: 0.85;
  }

  .home-button:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
    opacity: 1;
  }

  @media (max-width: 768px) {
    .error-code {
      font-size: 5rem;
    }

    .error-message {
      font-size: 1.5rem;
    }
  }
</style>
