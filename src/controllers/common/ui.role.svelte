<script>
  import { run } from 'svelte/legacy';

    import { LOCALE, Elements } from "not-bulma";

    const { UIErrorsList } = Elements.Various;

    const { UICommon } = Elements;

    import { createEventDispatcher, onMount } from "svelte";

    let dispatch = createEventDispatcher();

    function enrich(val = []) {
        if (Array.isArray(val)) {
            return val
                .map((role) => {
                    return getRoleTagObject(role);
                })
                .filter((itm) => typeof itm !== "undefined");
        } else {
            return [];
        }
    }

    function getRoleTagObject(itm) {
        if (typeof itm === "string") {
            if (Array.isArray(variants)) {
                return variants.find((variant) => variant.id === itm);
            } else {
                return undefined;
            }
        } else {
            return itm;
        }
    }

    function deplete(val = []) {
        if (Array.isArray(val)) {
            return val
                .map((role) => {
                    return getRoleString(role);
                })
                .filter((itm) => typeof itm !== "undefined");
        } else {
            return [];
        }
    }

    function getRoleString(itm) {
        if (typeof itm === "string") {
            return itm;
        } else if (
            typeof itm === "object" &&
            Object.hasOwn(itm, "id") &&
            typeof itm.id === "string"
        ) {
            return itm.id;
        } else {
            return undefined;
        }
    }

    onMount(() => {
        _value = enrich(value);
        _value = _value;
        value = deplete(value);
        value = value;
    });

    /**
  item = {
    id,        //unique
    title,     //some text
    type       //for coloring items, usual html template names danger, success, etc
  }
  **/
    let _value = $state([]); //local copy enriched with data for gui
    
    
  /**
   * @typedef {Object} Props
   * @property {boolean} [inputStarted]
   * @property {any} [value]
   * @property {any} [variants]
   * @property {string} [fieldname] - export let placeholder = 'placeholder';
   * @property {boolean} [readonly] - export let required = true;
   * @property {boolean} [valid]
   * @property {boolean} [validated]
   * @property {boolean} [errors]
   * @property {boolean} [formErrors]
   * @property {boolean} [formLevelError]
   */

  /** @type {Props} */
  let {
    inputStarted = $bindable(false),
    value = $bindable([]),
    variants = [],
    fieldname = "role",
    readonly = false,
    valid = true,
    validated = false,
    errors = false,
    formErrors = false,
    formLevelError = false
  } = $props();

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

    function remove(e) {
        e && e.preventDefault();
        let id = e.currentTarget.dataset.id;
        let item = _value.find((el) => el.id === id);
        if (item) {
            _value.splice(_value.indexOf(item), 1);
            _value = _value;
            value = deplete(_value);
            value = value;
            inputStarted = true;
            dispatch("change", {
                field: "role",
                value: value,
            });
        }
        return false;
    }

    function add(e) {
        e && e.preventDefault();
        let id = e.currentTarget.parentNode.querySelector("select").value;
        let item = Array.isArray(variants)
            ? variants.find((el) => el.id === id)
            : null;
        if (item && _value.indexOf(item) === -1) {
            _value.push(item);
            _value = _value;
            value = deplete(_value);
            value = value;
            dispatch("change", {
                field: "role",
                value: value,
            });
        }
        return false;
    }

    let classes = $derived(errors ? "is-danger" : "");
</script>

<div class="columns">
    <div class="column {classes}">
        {#each _value as item}
            <span class="mx-1 tag is-{item.type}"
                >{$LOCALE[item.title]}
                {#if !readonly}
                    <button
                        data-id={item.id}
                        class="delete is-small"
                        onclick={remove}
></button>
                {/if}
            </span>
        {/each}
    </div>
    {#if !readonly}
        <div class="column">
            <div class="control">
                <div class="select is-small">
                    <select>
                        <option value="-1" selected
                            >{$LOCALE["Выберите из списка..."]}</option
                        >
                        {#each variants as variant}
                            {#if !variant.notSelectable}
                                <option value={variant.id}
                                    >{$LOCALE[variant.title]}</option
                                >
                            {/if}
                        {/each}
                    </select>
                </div>
                <button class="button is-primary is-small" onclick={add}
                    >{$LOCALE["Добавить"]}</button
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
