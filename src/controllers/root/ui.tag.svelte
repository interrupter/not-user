<script>
  let select;
  /*
  item = {
    id,        //unique
    title,     //some text
    type       //for coloring items, usual html template names danger, success, etc
  }
  */

  export let items = [];
  export let variants = [];
  export let error = false;

  function remove(e){
    e && e.preventDefault();
    let id = parseInt(e.currentTarget.dataset.id);
    let item = items.find(el => el.id === id);
    if(item){
      items.splice(items.indexOf(item), 1);
      items = items;
    }
    return false;
  }

  function add(e){
    e && e.preventDefault();
    let id = parseInt(select.value);
    let item = variants.find(el => el.id === id);
    if(item && (items.indexOf(item) === -1)){
      items.push(item);
      items = items;
    }
    return false;
  }

  $: classes = error?'is-danger':'';

</script>

<div class="columns">
  <div class="column {classes}">
    {#each items as item (item.id)}
    <span class="tag is-{item.type}">{item}<button data-id="{item.id}" class="delete is-small" on:click="{remove}"></button></span>
    {/each}
  </div>
  <div class="column">
    <div class="control">
      <div class="select is-small">
        <select this:bind={select}>
          <option value="-1" selected>Выберите из списка...</option>
          {#each variants as variant}
          <option value="{variant.id}">{variant.title}</option>
          {/each}
        </select>
      </div>
    </div>
    <div class="control">
      <button class="button is-primary is-small" on:click={add}>Добавить</button>
    </div>
  </div>
</div>
