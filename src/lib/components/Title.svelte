<script lang="ts">
  import Github from '$lib/components/Icon/Github.svelte';
  import Linkedin from '$lib/components/Icon/Linkedin.svelte';

  interface Props {
    date?: string;
    githubLink?: string;
    linkedinLink?: string;
    title: string;
  }

  const { date, githubLink, linkedinLink, title }: Props = $props();
  const originalDate = date ? new Date(date) : null;
  const formattedDate = originalDate
    ? originalDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';
</script>

<div>
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
    </div>
  </header>
  {#if formattedDate}
    <p>{formattedDate}</p>
  {/if}
</div>

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
