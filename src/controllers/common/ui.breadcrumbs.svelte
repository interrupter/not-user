<script>

  export let links = [];

</script>


<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    {#each links as link, index}
    {#if (links.length === (index+1)) }
    <li class="is-active"><a href="{link.url}" aria-current="page">{link.title}</a></li>
    {:else }
    <li><a href="{link.url}">{link.title}</a></li>
    {/if}
    {/each}
  </ul>
</nav>
