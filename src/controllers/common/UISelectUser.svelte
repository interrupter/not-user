<script>
    import { run } from 'svelte/legacy';

    import { Elements, notCommon } from "not-bulma";

    const { UIButtons } = Elements.Buttons;
    const { UIErrorsList } = Elements.Various;
    const { UIColumn, UIColumns } = Elements.Layouts;

    const { UICommon } = Elements;

    import UIUserInlineInfo from "./UIUserInlineInfo.svelte";

    import { createEventDispatcher, onMount } from "svelte";
    import { UIButton } from "not-bulma/src/elements/button";
    let dispatch = createEventDispatcher();


    

    /**
     * @typedef {Object} Props
     * @property {any} value
     * @property {boolean} [inputStarted]
     * @property {string} [fieldname]
     * @property {boolean} [readonly] - export let required = true;
     * @property {boolean} [valid]
     * @property {boolean} [validated]
     * @property {boolean} [errors]
     * @property {boolean} [formErrors]
     * @property {boolean} [formLevelError]
     * @property {string} [serviceName]
     * @property {any} [userData]
     * @property {boolean} [loading]
     * @property {boolean} [narrow]
     */

    /** @type {Props} */
    let {
        value = $bindable(),
        inputStarted = $bindable(false),
        fieldname = "user",
        readonly = false,
        valid = true,
        validated = false,
        errors = false,
        formErrors = false,
        formLevelError = false,
        serviceName = "nsUser",
        userData = $bindable(null),
        loading = $bindable(false),
        narrow = false
    } = $props();

    function getService() {
        return notCommon.getApp().getService(serviceName);
    }

    let allErrors;
    run(() => {
        allErrors = [].concat(
            errors ? errors : [],
            formErrors ? formErrors : []
        );
    });
    let showErrors;
    run(() => {
        showErrors = !(validated && valid) && inputStarted;
    });
    let invalid = $derived(valid === false || formLevelError);
    let validationClasses;
    run(() => {
        validationClasses =
            valid === true || !inputStarted
                ? UICommon.CLASS_OK
                : UICommon.CLASS_ERR;
    });

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

    let VISIBLE_BUTTONS = $state([]);
    run(() => {
        if (value) {
            VISIBLE_BUTTONS = [...AVAILABLE_BUTTONS];
        } else {
            VISIBLE_BUTTONS = [AVAILABLE_BUTTONS[0]];
        }
    });
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
