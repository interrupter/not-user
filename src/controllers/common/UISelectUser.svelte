<script>
    import { Elements, notCommon } from "not-bulma";

    const { UIButtons } = Elements.Buttons;
    const { UIErrorsList } = Elements.Various;
    const { UIColumn, UIColumns } = Elements.Layouts;

    const { UICommon } = Elements;

    import UIUserInlineInfo from "./UIUserInlineInfo.svelte";

    import { createEventDispatcher, onMount } from "svelte";
    import { UIButton } from "not-bulma/src/elements/button";
    let dispatch = createEventDispatcher();

    export let value;
    export let inputStarted = false;
    export let fieldname = "user";

    //export let required = true;
    export let readonly = false;
    export let valid = true;
    export let validated = false;
    export let errors = false;
    export let formErrors = false;
    export let formLevelError = false;
    export let serviceName = "nsUser";
    export let userData = null;
    export let loading = false;

    export let narrow = false;

    function getService() {
        return notCommon.getApp().getService(serviceName);
    }

    $: allErrors = [].concat(
        errors ? errors : [],
        formErrors ? formErrors : []
    );
    $: showErrors = !(validated && valid) && inputStarted;
    $: invalid = valid === false || formLevelError;
    $: validationClasses =
        valid === true || !inputStarted
            ? UICommon.CLASS_OK
            : UICommon.CLASS_ERR;

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
                dispatch("change", {
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
        dispatch("change", {
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
            title: "not-node:field_select_label",
        },
        {
            id: 2,
            action: resetUser,
            icon: "times",
            color: "danger",
        },
    ];

    let VISIBLE_BUTTONS = [];
    $: {
        if (value) {
            VISIBLE_BUTTONS = [...AVAILABLE_BUTTONS];
        } else {
            VISIBLE_BUTTONS = [AVAILABLE_BUTTONS[0]];
        }
    }
</script>

<UIColumns>
    <UIColumn classes={validationClasses} {narrow}>
        <div class="control">
            {#if loading}
                <UIButton
                    loading={true}
                    disabled={true}
                    icon={"user"}
                    iconSide={"left"}
                    title={"not-node:loading_label"}
                />
            {:else if userData != null}
                <UIUserInlineInfo {...userData} />
            {:else}
                <UIButton
                    disabled={true}
                    icon={"user"}
                    iconSide={"left"}
                    title={"not-node:field_value_is_empty_placeholder"}
                />
            {/if}
        </div>
    </UIColumn>
    {#if !readonly}
        <UIColumn {narrow} +>
            <div class="control">
                <UIButtons values={VISIBLE_BUTTONS}></UIButtons>
            </div>
            <UIErrorsList
                bind:errors={allErrors}
                bind:show={showErrors}
                bind:classes={validationClasses}
                id="input-field-helper-{fieldname}"
            />
        </UIColumn>
    {/if}
</UIColumns>
