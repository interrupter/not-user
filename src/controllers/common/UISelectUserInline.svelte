<script>
    import { run } from "svelte/legacy";

    import { Elements, notCommon } from "not-bulma";

    const { UIButtons } = Elements.Buttons;

    import { onMount } from "svelte";

    /**
     * @typedef {Object} Props
     * @property {any} value
     * @property {boolean} [inputStarted]
     * @property {string} [fieldname]
     * @property {boolean} [readonly] - export let required = true;
     * @property {string} [serviceName]
     * @property {any} [userData]
     * @property {boolean} [loading]
     * @property {any} [usernameFormatter]
     */

    /** @type {Props} */
    let {
        value = $bindable(),
        inputStarted = $bindable(false),
        fieldname = "user",
        readonly = false,
        serviceName = "nsUser",
        userData = $bindable(null),
        loading = $bindable(false),
        usernameFormatter = (data) => `${data.userID}#${data.username}`,
        onchange = () => {},
    } = $props();

    function getService() {
        return notCommon.getApp().getService(serviceName);
    }

    function openUserSearchAndSelect() {
        getService()
            .openSelector()
            .then((results) => {
                value = results._id;
                userData = results;
                return value;
            })
            .then((value) => {
                inputStarted = true;
                onchange({
                    field: fieldname,
                    value,
                });
            })
            .catch((e) => {
                notCommon.report(e);
            });
    }

    function resetUser() {
        value = undefined;
        userData = null;
        onchange({
            field: fieldname,
            value,
        });
    }

    async function loadUserData() {
        try {
            if (value) {
                loading = true;
                userData = await getService().loadUserData(value);
            }
        } catch (e) {
            notCommon.report(e);
        } finally {
            loading = false;
        }
    }

    onMount(() => {
        loadUserData();
    });

    const AVAILABLE_BUTTONS = [
        {
            id: 1,
            action: openUserSearchAndSelect,
            icon: "user-edit",
            color: "warning",
        },
        {
            id: 2,
            action: resetUser,
            icon: "times",
            color: "danger",
        },
    ];

    function getUserButton() {
        if (loading) {
            return {
                disabled: true,
                loading,
                title: "not-node:loading_label",
            };
        } else {
            if (userData) {
                return {
                    disabled: readonly,
                    action: openUserSearchAndSelect,
                    title: usernameFormatter(userData),
                };
            } else {
                return {
                    disabled: true,
                    title: "not-node:field_value_is_empty_placeholder",
                };
            }
        }
    }

    let VISIBLE_BUTTONS = $state([]);
    run(() => {
        if (value) {
            VISIBLE_BUTTONS = [
                getUserButton(),
                ...(readonly ? [] : AVAILABLE_BUTTONS),
            ];
        } else {
            VISIBLE_BUTTONS = [
                getUserButton(),
                ...(readonly ? [] : [AVAILABLE_BUTTONS[0]]),
            ];
        }
    });
</script>

<div class="control">
    <UIButtons values={VISIBLE_BUTTONS}></UIButtons>
</div>
