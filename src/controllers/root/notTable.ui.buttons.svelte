<script>
  export let values = [];
</script>

<div class="buttons has-addons">
  {#each values as item (item) }
  {#if item.type === 'danger'}
  <button on:click="{item.action}" class="button is-small is-danger">{item.title}</button>
  {:else }
  <button on:click="{item.action}" class="button is-link is-small">{item.title}</button>
  {/if}
  {/each}
</div>
