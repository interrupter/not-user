<script>

    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    import { UIBox } from "not-bulma/src/elements/block";
    import { UITitle } from "not-bulma/src/elements/various";
    
   // export let _id = '';
    export let userID = -1;
    export let username = 'no_name';

    $: usernameString = `${userID}#${username}`;

</script>

<UIBox classes="px-2 user-inline-info" on:click>
    <UITitle title={usernameString} size={6} align='center' />
</UIBox>
