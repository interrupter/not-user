<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    import { UIButton } from "not-bulma/src/elements/button";
    import { UITitle } from "not-bulma/src/elements/various";

    export let userID = -1;
    export let username = "no_name";
    export let usernameFormatter = (data) => `${data.userID}#${data.username}`;

    $: usernameString = usernameFormatter({ username, userID });
</script>

<UIButton
    classes="user-inline-info"
    on:click
    icon={"user"}
    iconSide={"left"}
    title={usernameString}
/>
