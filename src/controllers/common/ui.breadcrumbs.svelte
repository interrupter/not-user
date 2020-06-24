<script>

  export let items = [];
  export let go = null;

  function onClick(ev){
    if(typeof go === 'function'){
      ev.preventDefault();
      console.log(ev, ev.currentTarget.getAttribute("href"));
      go(ev.currentTarget.getAttribute("href"));
      return false;
    }else{
      return true;
    }
  }

</script>


<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    {#each items as link, index}
    {#if (items.length === (index+1)) }
    <li class="is-active"><a href="{link.url}" aria-current="page">{link.title}</a></li>
    {:else }
    <li><a href="{link.url}" on:click="{onClick}">{link.title}</a></li>
    {/if}
    {/each}
  </ul>
</nav>
