<script>
    import { run } from "svelte/legacy";

    import { Elements } from "not-bulma";

    const { UICommon } = Elements;
    const { UISuccess, UIError } = Elements.Notifications;

    /**
     * @typedef {Object} Props
     * @property {string} [oldPassword]
     * @property {string} [newPassword]
     * @property {function} onChangePassword
     * @property {function} onreject
     */

    /** @type {Props} */
    let {
        oldPassword = $bindable(""),
        newPassword = $bindable(""),
        onChangePassword = (ev) => {},
        onreject = () => {},
    } = $props();

    let newPassword2 = $state("");
    let waiting = $state(false);
    let success = $state(false);
    let fatalError = $state(false);

    let error = $state({
        oldPassword: false,
        newPassword: false,
        newPassword2: false,
    });

    run(() => {
        error.newPassword2 =
            newPassword !== newPassword2 ? "Не совпадает с первым" : false;
        error = error;
    });

    function reject(e) {
        e && e.preventDefault();
        onreject();
        return false;
    }

    function requestChangePassword(e) {
        e && e.preventDefault();
        fatalError = false;
        onChangePassword({
            oldPassword,
            newPassword,
        });
        waiting = true;
        return false;
    }

    export function showRequestResult(result) {
        waiting = false;
        if (result.status === "error") {
            if (Object.hasOwn(result, "errors")) {
                showError(result.errors);
            } else if (Object.hasOwn(result, "error")) {
                showFatalError(result.error);
            }
        } else {
            showSuccess();
        }
    }

    function resetErrors() {
        Object.keys(error).forEach((key) => {
            error[key] = false;
        });
    }

    function showError(errs) {
        resetErrors();
        Object.keys(errs).forEach((key) => {
            if (Object.hasOwn(errs, key)) {
                error[key] = errs[key];
            }
        });
        error = error;
    }

    function showFatalError(message) {
        fatalError = message;
    }

    function showSuccess() {
        success = true;
        setTimeout(reject, UICommon.DEFAULT_REDIRECT_TIMEOUT);
    }
</script>

{#if success}
    <UISuccess
        title="Пароль изменён"
        message="Пароль изменён, уведомление отправленно на ваш email. Сообщение будет скрыто через {parseInt(
            UICommon.DEFAULT_REDIRECT_TIMEOUT / 1000
        )} секунд."
    ></UISuccess>
{:else}
    <div class="field">
        <label for="oldPassword" class="label">Текущий пароль</label>
        <div class="control has-icons-left has-icons-right">
            <input
                class="input"
                name="oldPassword"
                type="password"
                bind:value={oldPassword}
            />
            <span class="icon is-left">
                <i class="fas fa-lock"></i>
            </span>
            <span class="icon is-right">
                <i class="fas fa-check"></i>
            </span>
        </div>
        {#if error.oldPassword}
            <p class="help {UICommon.CLASS_ERR}">{error.oldPassword}</p>
        {/if}
    </div>

    <div class="field">
        <label class="label" for="newPassword">Новый пароль</label>
        <div class="control has-icons-left has-icons-right">
            <input
                class="input"
                type="password"
                name="newPassword"
                bind:value={newPassword}
            />
            <span class="icon is-left">
                <i class="fas fa-lock"></i>
            </span>
            <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
            </span>
        </div>
        {#if error.newPassword}
            <p class="help {UICommon.CLASS_ERR}">{error.newPassword}</p>
        {/if}
    </div>

    <div class="field">
        <label for="newPassword2" class="label">Повторите новый пароль</label>
        <div class="control has-icons-left has-icons-right">
            <input
                class="input"
                type="password"
                name="newPassword2"
                bind:value={newPassword2}
            />
            <span class="icon is-left">
                <i class="fas fa-lock"></i>
            </span>
            <span class="icon is-right">
                <i class="fas fa-check"></i>
            </span>
        </div>
        {#if error.newPassword2}
            <p class="help {UICommon.CLASS_ERR}">{error.newPassword2}</p>
        {/if}
    </div>
    {#if fatalError}
        <UIError title="Fatal error" message={fatalError}></UIError>
    {/if}

    <div class="field is-grouped is-grouped-centered">
        <p class="control">
            <a
                class="button is-primary {waiting ? 'is-loading' : ''}"
                href
                onclick={requestChangePassword}>Сохранить</a
            >
        </p>
        <p class="control">
            <a class="button is-light" href onclick={reject}> Отмена </a>
        </p>
    </div>
{/if}
