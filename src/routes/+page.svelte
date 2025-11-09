<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { getLanguage, type Language } from '$lib/utils/language';

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
