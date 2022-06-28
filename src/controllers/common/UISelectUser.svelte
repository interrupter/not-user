<script>

  import {
    LOCALE,
    Elements,
    notCommon
  } from 'not-bulma';
import Field from 'not-bulma/src/frame/components/form/field.svelte';
import Form from 'not-bulma/src/frame/components/form/form.svelte';
import UiUserInlineInfo from 'not-user/src/controllers/common/UIUserInlineInfo.svelte';

  const {UIButton} = Elements.Buttons;
  const {
    UIErrorsList
  } = Elements.Various;

  const {
    UICommon
  } = Elements;

  import UIUserInlineInfo from './UIUserInlineInfo.svelte';

  import {
    createEventDispatcher,
    onMount
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
  export let userData = null;
  export let loading = false;

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
        userData = results;
        return value;
      })
      .catch((e)=>{
        console.error(e);
      });
  }

  async function loadUserData(){
    try{
      if (value){
        loading = true;
        userData = await getService().loadUserData(value);
      }
    }catch(e){
      console.error(e);
    }finally{
      loading = false;
    }    
  }

  onMount(()=>{
    loadUserData();
  });
  

</script>

<div class="columns">
  <div class="column {validationClasses}">
    {#if loading}
      <span>{$LOCALE['not-node:loading_label']}</span>
    {:else if userData != null}
      <UIUserInlineInfo {...userData} />
    {:else}
      <span>{$LOCALE['not-node:field_value_is_empty_placeholder']}</span>
    {/if}
  </div>
  {#if !readonly}
    <div class="column">
      <div class="control">
        <UIButton action={openUserSearchAndSelect}
          >{$LOCALE["not-node:field_select_label"]}</UIButton
        >
      </div>
      <UIErrorsList
        bind:errors={allErrors}
        bind:show={showErrors}
        bind:classes={validationClasses}
        id="input-field-helper-{fieldname}"
      />
    </div>
  {/if}
</div>
