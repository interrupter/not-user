<script>
  export let values = [];
</script>

{#each values as item (item.url) }
<a href="{item.url}" class="button is-link is-small">{item.title}</a>
{/each}
