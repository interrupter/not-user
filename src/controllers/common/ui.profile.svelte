<script>
    import { Elements } from "not-bulma";
    const UITag = Elements.Various.UITag;

    const DEFAULT_USER_ROLE_COLOR = "danger";

    import { onMount } from "svelte";

    import UserCommon from "./user.js";

    /**
     * @typedef {Object} Props
     * @property {any} [user]
     * @property {boolean} [readonly]
     * @property {any} rolesColorScheme
     */

    /** @type {Props} */
    let {
        user = {},
        readonly = true,
        rolesColorScheme,
        onGoChangePassword = () => {},
    } = $props();

    let rolesTags = $state([]);

    function goChangePassword() {
        onGoChangePassword();
    }

    function findColorInScheme(roleTitle, scheme) {
        let color = DEFAULT_USER_ROLE_COLOR;
        Object.keys(scheme).forEach((userType) => {
            scheme;
        });
    }

    function colorInPredefined(roleTitle) {
        const item = UserCommon.ROLES.find((itm) => itm.title === roleTitle);
        return item && item.type ? item.type : DEFAULT_USER_ROLE_COLOR;
    }

    function createTagProps(roleTitle) {
        if (rolesColorScheme) {
            return {
                title: roleTitle,
                color: findColorInScheme(rolesColorScheme, roleTitle),
            };
        } else {
            return {
                title: roleTitle,
                color: colorInPredefined(roleTitle),
            };
        }
    }

    function initUserRoles(userRoleSet) {
        rolesTags = userRoleSet.map((roleTitle) => createTagProps(roleTitle));
    }

    onMount(() => {
        if (Array.isArray(user.role)) {
            initUserRoles(user.role);
        } else if (typeof user.role === "string") {
            initUserRoles([user.role]);
        }
    });
</script>

<h2 class="title is-2">Пользователь ({user.userID}#{user.username})</h2>
<div class="container mt-2">
    <div class="list">
        <div class="list-item">
            <div class="list-item-content">
                <div class="list-item-title">ID</div>
                <div class="list-item-description">{user.userID}</div>
            </div>
        </div>

        <div class="list-item">
            <div class="list-item-content">
                <div class="list-item-title">Имя пользователя</div>
                <div class="list-item-description">{user.username}</div>
            </div>
        </div>

        <div class="list-item">
            <div class="list-item-content">
                <div class="list-item-title">Email</div>
                <div class="list-item-description">
                    {user.email}
                    {#if typeof user.emailConfirmed === "boolean"}
                        {#if user.emailConfirmed}
                            <span class="tag is-success">Подтверждён</span>
                        {:else}
                            <span class="tag is-danger">Не подтверждён</span>
                        {/if}
                    {:else}
                        <span class="tag is-warning"
                            >Нет данных о валидности</span
                        >
                    {/if}
                </div>
            </div>
        </div>

        <div class="list-item">
            <div class="list-item-content">
                <div class="list-item-title">Телефон</div>
                <div class="list-item-description">
                    {#if user.telephone && typeof user.telephone !== "undefined" && user.telephone !== "undefined"}
                        {user.telephone}
                        {#if typeof user.telephoneConfirmed === "boolean"}
                            {#if user.telephoneConfirmed}
                                <span class="tag is-success">Подтверждён</span>
                            {:else}
                                <span class="tag is-danger">Не подтверждён</span
                                >
                            {/if}
                        {:else}
                            <span class="tag is-warning"
                                >Нет данных о валидности</span
                            >
                        {/if}
                    {:else}
                        Не указан
                    {/if}
                </div>
            </div>
        </div>

        {#if typeof user.created === "string"}
            <div class="list-item">
                <div class="list-item-content">
                    <div class="list-item-title">Дата создания</div>
                    <div class="list-item-description">
                        {user.created.split("T")[0]}
                    </div>
                </div>
            </div>
        {/if}

        <div class="list-item">
            <div class="list-item-content">
                <div class="list-item-title">Роли</div>
                <div class="list-item-description">
                    {#each rolesTags as roleTag}
                        <UITag {...roleTag}></UITag>
                    {/each}
                </div>
            </div>
        </div>

        {#if typeof user.active === "boolean"}
            <div class="list-item">
                <div class="list-item-content">
                    <div class="list-item-title">Активен</div>
                    <div class="list-item-description">
                        {#if user.active}
                            <span class="tag is-success">Активен</span>
                        {:else}
                            <span class="tag is-danger">Не активирован</span>
                        {/if}
                    </div>
                </div>
            </div>
        {/if}

        {#if user.ip}
            <div class="list-item">
                <div class="list-item-content">
                    <div class="list-item-title">IP</div>
                    <div class="list-item-description">
                        {user.ip}
                    </div>
                </div>
            </div>
        {/if}

        {#if typeof user.country === "string"}
            <div class="list-item">
                <div class="list-item-content">
                    <div class="list-item-title">Страна</div>
                    <div class="list-item-description">
                        {user.country}
                    </div>
                </div>
            </div>
        {/if}

        <div class="list-item">
            <div class="list-item-content">
                <div class="list-item-title">Пароль</div>
                <div class="list-item-description">
                    <button
                        onclick={goChangePassword}
                        class="button is-small is-warning">Измененить</button
                    >
                    <p class="help">Рекомендуется регулярно менять пароль.</p>
                </div>
            </div>
        </div>
    </div>
</div>
