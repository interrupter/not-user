<script>

  import {
    LOCALE,
    Elements,
    notCommon
  } from 'not-bulma';

  const {UIButton} = Elements.Buttons;
  const {
    UIErrorsList
  } = Elements.Various;

  const {
    UICommon
  } = Elements;

  import {
    createEventDispatcher,
  } from 'svelte';
  let dispatch = createEventDispatcher();

  export let value;
  export let inputStarted = false;
  export let fieldname = 'user';
  //export let required = true;
  export let readonly = false;
  export let valid = true;
  export let validated = false;
  export let errors = false;
  export let formErrors = false;
  export let formLevelError = false;
  export let serviceName = 'nsUser';

  function getService(){
    return notCommon.getApp().getService(serviceName);
  }
  
  $: allErrors = [].concat(errors?errors:[], formErrors?formErrors:[]);
  $: showErrors = (!(validated && valid) && (inputStarted));
  $: invalid = ((valid===false) || (formLevelError));
  $: validationClasses = (valid===true || !inputStarted)?UICommon.CLASS_OK:UICommon.CLASS_ERR;

  function openUserSearchAndSelect(){
    getService().openSelector()
      .then((results)=>{
        value = results._id;
      })
      .catch((e)=>{
        console.error(e);
      });
  }
  

</script>

<div class="columns">
  <div class="column {validationClasses}">
    {value}
  </div>
  {#if !readonly }
  <div class="column">
    <div class="control">
      <UIButton action={openUserSearchAndSelect}>{$LOCALE['not-node:field_select_label']}</UIButton>
    </div>
    <UIErrorsList bind:errors={allErrors} bind:show={showErrors} bind:classes={validationClasses} id="input-field-helper-{fieldname}" />
  </div>
  {/if}
</div>
