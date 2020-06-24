<script>
  export let values = [];
</script>

<div class="buttons has-addons">
  {#each values as item (item) }
  {#if item.type === 'danger'}
  <button on:click="{item.action}" class="button is-small is-danger is-outlined">{item.title}</button>
  {:else }
  <button on:click="{item.action}" class="button is-small is-link">{item.title}</button>
  {/if}
  {/each}
</div>
