<script>
  export let values = [];
</script>

{#each values as item (item) }
<button on:click="{item.action}" class="button is-link is-small">{item.title}</button>
{/each}
