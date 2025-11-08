<script lang="ts">
  interface Props {
    dateFrom: string;
    dateTo?: string;
  }
  const { dateFrom, dateTo }: Props = $props();

  const timeFormatter = (time?: string) =>
    time ? `${time.split('-')[0]}. ${time.split('-')[1]}` : '';
</script>

<span>
  <time datetime={dateFrom}>{timeFormatter(dateFrom)}</time>
  {' ~ '}
  {#if dateTo}
    <time datetime={dateTo}>{timeFormatter(dateTo)}</time>
  {/if}
</span>
