<script>
  import {
    LOCALE,
    Elements
  } from 'not-bulma';

  const {UICommon} = Elements;

  import {
    createEventDispatcher,
    onMount
  } from 'svelte';

  let dispatch = createEventDispatcher();

  function enrich(val = []){
    if(Array.isArray(val)){
      return val.map((role) => {
        return getRoleTagObject(role);
      }).filter(itm => typeof itm !== 'undefined');;
    }else{
      return [];
    }
  }

  function getRoleTagObject(itm){
    if(typeof itm === 'string'){
      return variants.find(variant => variant.id === itm);
    }else{
      return itm;
    }
  }

  function deplete(val = []){
    if(Array.isArray(val)){
      return val.map((role) => {
        return getRoleString(role);
      }).filter(itm => typeof itm !== 'undefined');
    }else{
      return [];
    }
  }

  function getRoleString(itm){
    if(typeof itm === 'string'){
      return itm;
    }else if (
      typeof itm === 'object' &&
      Object.prototype.hasOwnProperty.call(itm, 'id') &&
      typeof itm.id === 'string'
      ){
      return itm.id;
    }else{
      return undefined;
    }
  }

  onMount(()=>{
    _value = enrich(value);
    _value = _value;
    value = deplete(value);
    value = value;
  });

  export let inputStarted = false;
  export let value = [];//exposed true form
  /**
  item = {
    id,        //unique
    title,     //some text
    type       //for coloring items, usual html template names danger, success, etc
  }
  **/
  let _value = [];//local copy enriched with data for gui
  export let variants = [];
  export let placeholder = 'placeholder';
  export let fieldname = 'role';
  //export let required = true;
  export let readonly = false;
  export let valid = true;
  export let validated = false;
  export let errors = false;
  export let formErrors = false;
  export let formLevelError = false;

  $: allErrors = [].concat(errors ? errors : [], formErrors ? formErrors : []);
  $: helper = allErrors ? allErrors.join(', ') : placeholder;
  $: invalid = ((valid === false) || (formLevelError));
  $: validationClasses = (valid === true || !inputStarted) ? UICommon.CLASS_OK : UICommon.CLASS_ERR;

  function remove(e) {
    e && e.preventDefault();
    let id = e.currentTarget.dataset.id;
    let item = _value.find(el => el.id === id);
    if (item) {
      _value.splice(_value.indexOf(item), 1);
      _value = _value;
      value = deplete(_value);
      value = value;
      inputStarted = true;
      dispatch('change', {
        field: 'role',
        value: value
      });
    }
    return false;
  }

  function add(e) {
    e && e.preventDefault();
    let id = e.currentTarget.parentNode.querySelector('select').value;
    let item = variants.find(el => el.id === id);
    if (item && (_value.indexOf(item) === -1)) {
      _value.push(item);
      _value = _value;
      value = deplete(_value);
      value = value;
      dispatch('change', {
        field: 'role',
        value: value
      });
    }
    return false;
  }

  $: classes = errors ? 'is-danger' : '';
</script>

<div class="columns">
  <div class="column {classes}">
    {#each _value as item}
    <span class="mx-1 tag is-{item.type}">{$LOCALE[item.title]}
      {#if !readonly }
      <button data-id="{item.id}" class="delete is-small" on:click="{remove}"></button>
      {/if}
    </span>
    {/each}
  </div>
  {#if !readonly }
  <div class="column">
    <div class="control">
      <div class="select is-small">
        <select>
          <option value="-1" selected>{$LOCALE['Выберите из списка...']}</option>
          {#each variants as variant}
          <option value="{variant.id}">{$LOCALE[variant.title]}</option>
          {/each}
        </select>
      </div>
      <button class="button is-primary is-small" on:click={add}>{$LOCALE['Добавить']}</button>
    </div>
    <p class="help {validationClasses}" id="input-field-helper-{fieldname}">
      {#if !(validated && valid) && (inputStarted) }
      {helper}
      {:else}&nbsp;{/if}
    </p>
  </div>
  {/if}
</div>
