<script lang="ts">
  import Github from '$lib/components/Icon/Github.svelte';
  import Linkedin from '$lib/components/Icon/Linkedin.svelte';
  import Mail from '$lib/components/Icon/Mail.svelte';

  interface Props {
    githubLink?: string;
    linkedinLink?: string;
    mailLink?: string;
    title: string;
  }

  const { githubLink, linkedinLink, mailLink, title }: Props = $props();
</script>

<header class="header">
  <h1 class="title">{title}</h1>
  <div class="icons">
    {#if githubLink}
      <div class="icon">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Github page"
          title="Go to Github page"
        >
          <Github />
        </a>
      </div>
    {/if}

    {#if linkedinLink}
      <div class="icon">
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to Linkedin page"
          title="Go to Linkedin page"
        >
          <Linkedin />
        </a>
      </div>
    {/if}

    {#if mailLink}
      <div class="icon">
        <a href={mailLink} aria-label={`Mail to ${mailLink}`} title={`Mail to ${mailLink}`}>
          <Mail />
        </a>
      </div>
    {/if}
  </div>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
  }

  .title {
    font-size: 5rem;
    line-height: 1.1;
    margin: 0.67em 0;
    word-break: keep-all;
  }

  .icons {
    display: flex;
  }

  .icon {
    padding: 10px;
  }

  @media (max-width: 960px) {
    .header {
      flex-direction: column;
    }
    .title {
      font-size: 3rem;
    }
  }
</style>
