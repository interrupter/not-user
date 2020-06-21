<script>
  import * as TableStores from './notTable.stores.js';
  import {onMount} from 'svelte';

  export let id;

  export let pages = [0];
  export let currentPageIndex = 0;
  export let pageSize = 40;
  export let helpers = {};

  let fields = [];
  let items = [];

  onMount(() => {
		TableStores.get(id).filtered.subscribe(value => {
			items = value;
		});
	});

</script>

<table class="table">
  <thead>
    {#each fields as field}
    <th>{field.title}</th>
    {/each}
  </thead>
<tbody>
  {#each items as item (item._id)}
    <tr>
    {#each fields as field}
      <td>
        {notPath.get(field.path, item, helpers)}
      </td>
    {/each}
    </tr>
  {/each}
</tbody>
</table>
