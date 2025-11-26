<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { getLanguage, type Language } from '$lib/utils/language';
  import { getLabels } from '$lib/data/labels';

  let labels = $state(getLabels('en'));

  onMount(() => {
    if (browser) {
      const pathname = window.location.pathname;
      const langMatch = pathname.match(/^\/(ko|en)/);
      const lang = langMatch ? (langMatch[1] as Language) : getLanguage();
      labels = getLabels(lang);
    }
  });
</script>

<footer class="wrapper">
  <a
    href="https://github.com/junuuon"
    target="_blank"
    rel="author me external noopener noreferrer"
    aria-label={labels.goToGithub}
  >
    <p class="link-text">@junuuon</p>
  </a>
</footer>

<style>
  .wrapper {
    display: flex;
    border-top: 1px solid var(--color-bg-divider);
    padding: 10px;
    justify-content: center;
  }

  .link-text {
    margin: 0px 20px;
  }
</style>
