<script>
  import {LOCALE, Elements} from 'not-bulma';

  const {UISuccess, UIError} = Elements.Notifications;
  const {UIButtons} = Elements.Buttons;
  import LockBlockComponent from './lock.block.svelte';

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

  export let MODES_TITLES = {};

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
        title: MODES_TITLES[thisMode],
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
  <div class="user-login-form-paper user-frame-form"></div>
    {#if status==='error' }
    <!--<UIError title="" message={message}></UIError>-->
    {/if}
  <UIButtons centered={true} bind:values={MODES_BUTTONS} classes={'mt-4'} />
  {/if}
</div>

<style>
  .user-frame-form {
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
