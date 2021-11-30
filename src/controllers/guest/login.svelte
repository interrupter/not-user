<script>
  import {LOCALE} from 'not-bulma';
  import LockBlockComponent from './lock.block.svelte';

  import {
    UISuccess,
    UIError,
    UIButtons
  } from 'not-bulma';

  import {
    createEventDispatcher,
    onMount
  } from 'svelte';
  let dispatch = createEventDispatcher();

  export let status = '';
  export let message = false;

  export let MODES = [];
  export let mode = 'login';

  export let loading = false;

  export let title = {
    __enabled: true,
    login: 'not-user:form_mode_login_label',
    requestLoginCodeOnEmail: 'not-user:form_mode_requestLoginCodeOnEmail_label',
    requestLoginCodeOnTelephone: 'not-user:form_mode_requestLoginCodeOnTelephone_label',
    loginByCode: 'not-user:form_mode_loginByCode_label'
  };

  function setMode(val) {
    mode = val;
    dispatch('mode', val);
    updateModesButtons();
  }

  let MODES_BUTTONS = [];

  function updateModesButtons() {
    MODES_BUTTONS = MODES.filter(thisMode => {
      return (mode !== thisMode);
    }).map(thisMode => {
      return {
        title: title[thisMode],
        outlined: true,
        type: 'link',
        action() {
          setMode(thisMode);
        }
      };
    });
    MODES_BUTTONS = MODES_BUTTONS;
  }

  onMount(() => {
    updateModesButtons();
  });
</script>

<div class="block-container">
  <LockBlockComponent bind:enable={loading}></LockBlockComponent>
  {#if status==='ok' }
  <UISuccess title="" message={message}></UISuccess>
  {:else}
  <div class="user-login-form-paper user-login-form"></div>
  {#if status==='error' }
  <UIError title="" message={message}></UIError>
  {/if}
  <UIButtons centered={true} bind:values={MODES_BUTTONS} classes={'mt-4'} />
  {/if}
</div>

<style>
  .user-login-form {
    display: block;
    width: 100%;
  }

  .block-container {
    position: relative;
    max-width: 600px;
    max-height: 600px;
    padding: 2em;
  }
</style>
