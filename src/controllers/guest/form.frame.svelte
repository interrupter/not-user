<script>
    import { Elements } from "not-bulma";

    const { UISuccess } = Elements.Notifications;
    const { UIButtons } = Elements.Buttons;
    import LockBlockComponent from "./lock.block.svelte";

    import { onMount } from "svelte";

    /**
     * @typedef {Object} Props
     * @property {string} [status]
     * @property {boolean} [message]
     * @property {any} [MODES]
     * @property {string} [mode]
     * @property {boolean} [loading]
     * @property {any} [MODES_TITLES]
     */

    /** @type {Props} */
    let {
        status = "",
        message = false,
        MODES = [],
        mode = $bindable("login"),
        loading = $bindable(false),
        MODES_TITLES = {},
        onmode = () => {},
    } = $props();

    function setMode(val) {
        mode = val;
        onmode(val);
        updateModesButtons();
    }

    let MODES_BUTTONS = $state([]);

    function updateModesButtons() {
        MODES_BUTTONS = MODES.filter((thisMode) => {
            return mode !== thisMode;
        }).map((thisMode, index) => {
            return {
                id: index,
                title: MODES_TITLES[thisMode],
                outlined: true,
                type: "link",
                action() {
                    setMode(thisMode);
                },
            };
        });
        MODES_BUTTONS = MODES_BUTTONS;
    }

    onMount(() => {
        updateModesButtons();
    });
</script>

<div class="block-container">
    <LockBlockComponent bind:enable={loading} />
    {#if status === "ok"}
        <UISuccess title="" {message} />
    {:else}
        <div class="user-login-form-paper user-frame-form"></div>
        {#if status === "error"}
            <!--<UIError title="" message={message}></UIError>-->
        {/if}
        <UIButtons centered={true} values={MODES_BUTTONS} classes={"mb-4"} />
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
