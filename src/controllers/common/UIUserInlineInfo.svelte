<script>
    import { UIButton } from "not-bulma/src/elements/button";
    import { UITitle } from "not-bulma/src/elements/various";

    /**
     * @typedef {Object} Props
     * @property {any} [userID]
     * @property {string} [username]
     * @property {any} [usernameFormatter]
     */

    /** @type {Props} */
    let {
        userID = -1,
        username = "no_name",
        usernameFormatter = (data) => `${data.userID}#${data.username}`,
        onclick = () => {},
    } = $props();

    let usernameString = $derived(usernameFormatter({ username, userID }));
</script>

<UIButton
    classes="user-inline-info"
    {onclick}
    icon={"user"}
    iconSide={"left"}
    title={usernameString}
/>
