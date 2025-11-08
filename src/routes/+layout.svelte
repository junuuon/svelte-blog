<script lang="ts">
  import "normalize.css"
  import "../app.css"
	import favicon from '$lib/assets/favicon.svg';
  import { onMount } from 'svelte';
  import {browser} from '$app/environment';

	let { children } = $props();

  onMount(() => {
    if (browser) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

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

{@render children()}
