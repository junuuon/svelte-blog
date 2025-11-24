<script lang="ts">
  import type { Snippet } from 'svelte';
  import Period from './Period.svelte';

  interface Props {
    additional?: Snippet;
    children: Snippet;
    companyName: string;
    role: string;
    dateFrom: string;
    dateTo?: string;
  }

  const { additional, children, companyName, role, dateFrom, dateTo }: Props = $props();
</script>

<div class="row">
  <div class="left">
    <h3>{companyName}</h3>
    <span>{role}</span>
    <Period {dateFrom} {dateTo} />
    {#if additional}
      {@render additional()}
    {/if}
  </div>
  <div class="right">
    {@render children()}
  </div>
</div>

<style>
  .row {
    display: flex;

    @media (max-width: 960px) {
      -ms-flex-direction: column;
      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
      flex-direction: column;
    }

    @media (max-width: 576px) {
      padding: 1.5rem 0;
    }
  }

  .left {
    -ms-flex-negative: 0;
    display: flex;
    flex-basis: 18rem;
    flex-direction: column;
    flex-shrink: 0;
    padding-right: 1rem;

    @media (max-width: 960px) {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      padding-bottom: 1rem;
      padding-right: 0;
    }
  }

  .right {
    -ms-flex-positive: 1;
    -webkit-box-flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 3rem;

    @media (max-width: 576px) {
      gap: 1.5rem;
    }

    :global(> *:first-child) {
      padding-top: 0;
    }
  }
</style>
