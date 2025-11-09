<script lang="ts">
  import { goto } from '$app/navigation';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/state';

  const errorStatus = page.status || 500;
  const errorMessage = page.error?.message || '오류가 발생했습니다';

  const goHome = () => {
    goto('/');
  };
</script>

<svelte:head>
  <title>{errorStatus === 404 ? '404 - 페이지를 찾을 수 없습니다' : '오류 발생'}</title>
</svelte:head>

<div class="error-wrapper">
  <div class="error-content">
    <h1 class="error-code">{errorStatus}</h1>
    <h2 class="error-message">
      {#if errorStatus === 404}
        페이지를 찾을 수 없습니다
      {:else}
        오류가 발생했습니다
      {/if}
    </h2>
    {#if errorMessage && errorStatus !== 404}
      <p class="error-detail">{errorMessage}</p>
    {/if}
    <button class="home-button" onclick={goHome}>홈으로 돌아가기</button>
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
    color: var(--color-text);
  }

  .error-message {
    font-size: 2rem;
    margin: 1rem 0;
    color: var(--color-text);
  }

  .error-detail {
    font-size: 1rem;
    color: var(--color-text-secondary, #666);
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
