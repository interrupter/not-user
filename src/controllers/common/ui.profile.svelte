<script>
  import { FormElements } from 'not-bulma';
	const {UITagControl} = FormElements;
  import {createEventDispatcher, onMount} from 'svelte';
  import UserCommon from './user.js';
  let dispatch = createEventDispatcher();

  export let user = {};
  export let userRoles = [];

	function goChangePassword(){
		dispatch('goChangePassword');
	}

  function initUserRoles(userRoleSet){
		userRoleSet.forEach((userRole)=>{
			userRoles.push(UserCommon.ROLES.find(el => el.title === userRole ));
		});
    userRoles = userRoles;
	}

  onMount(()=>{
    if(Array.isArray(user.role)){
      initUserRoles(user.role);
    }
  });
</script>

<h2 class="title is-2">Пользователь ({user.userID}#{user.username})</h2>
<div class="container mt-2">

  <div class="columns">
    <div class="column title is-5">ID</div>
    <div class="column subtitle is-5">{user.userID}</div>
  </div>

  <div class="columns">
    <div class="column title is-5">Имя пользователя</div>
    <div class="column subtitle is-5">{user.username}</div>
  </div>

  <div class="columns">
    <div class="column title is-5">Email</div>
    <div class="column subtitle is-5">
      {user.email}
      {#if user.emailConfirmed }
      <span class="tag is-success">Подтверждён</span>
      {:else }
      <span class="tag is-danger">Не подтверждён</span>
      {/if}
    </div>
  </div>

  <div class="columns">
    <div class="column title is-5">Телефон</div>
    <div class="column subtitle is-5">
      {#if user.telephone && typeof user.telephone !== 'undefined' && user.telephone !== 'undefined'}
      {user.telephone}
      {#if user.telephoneConfirmed }
      <span class="tag is-success">Подтверждён</span>
      {:else }
      <span class="tag is-danger">Не подтверждён</span>
      {/if}
      {:else }
      Не указан
      {/if}
    </div>
  </div>

  <div class="columns">
    <div class="column title is-5">Дата создания</div>
    <div class="column subtitle is-5">{user.created}</div>
  </div>

  <div class="columns">
    <div class="column title is-5">Роли</div>
    <div class="column subtitle is-5">
      <UITagControl variants={UserCommon.ROLES} items={userRoles} readonly={true} />
    </div>
  </div>

  <div class="columns">
    <div class="column title is-5">Активен</div>
    <div class="column">
      {#if user.active }
      <span class="tag is-success">Активен</span>
      {:else }
      <span class="tag is-danger">Не активирован</span>
      {/if}
    </div>
  </div>

  <div class="columns">
    <div class="column title is-5">IP</div>
    <div class="column subtitle is-5">{user.ip}</div>
  </div>

  <div class="columns">
    <div class="column title is-5">Страна</div>
    <div class="column subtitle is-5">{user.country}</div>
  </div>

  <div class="columns">
    <div class="column title is-5">Пароль</div>
    <div class="column subtitle is-5">
      <button on:click={goChangePassword} class="button is-small is-warning">Измененить</button>
      <p class="help">Рекомендуется регулярно менять пароль.</p>
    </div>
  </div>

</div>
