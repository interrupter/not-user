<script>
  import { Elements } from 'not-bulma';
	const {UITag} = Elements.Forms;

  import {createEventDispatcher, onMount} from 'svelte';
  let dispatch = createEventDispatcher();

  import UserCommon from './user.js';  

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
          {#if user.emailConfirmed }
          <span class="tag is-success">Подтверждён</span>
          {:else }
          <span class="tag is-danger">Не подтверждён</span>
          {/if}
        </div>
      </div>
    </div>

    <div class="list-item">
      <div class="list-item-content">
        <div class="list-item-title">Телефон</div>
        <div class="list-item-description">
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
    </div>

    <div class="list-item">
      <div class="list-item-content">
        <div class="list-item-title">Дата создания</div>
        <div class="list-item-description">{user.created.split('T')[0]}</div>
      </div>
    </div>


    <div class="list-item">
      <div class="list-item-content">
        <div class="list-item-title">Роли</div>
        <div class="list-item-description"><UITag variants={UserCommon.ROLES} items={userRoles} readonly={true} /></div>
      </div>
    </div>

    <div class="list-item">
      <div class="list-item-content">
        <div class="list-item-title">Активен</div>
        <div class="list-item-description">
          {#if user.active }
          <span class="tag is-success">Активен</span>
          {:else }
          <span class="tag is-danger">Не активирован</span>
          {/if}
        </div>
      </div>
    </div>

    <div class="list-item">
      <div class="list-item-content">
        <div class="list-item-title">IP</div>
        <div class="list-item-description">
          {user.ip}
        </div>
      </div>
    </div>

    <div class="list-item">
      <div class="list-item-content">
        <div class="list-item-title">Страна</div>
        <div class="list-item-description">
          {user.country}
        </div>
      </div>
    </div>

    <div class="list-item">
      <div class="list-item-content">
        <div class="list-item-title">Пароль</div>
        <div class="list-item-description">
          <button on:click={goChangePassword} class="button is-small is-warning">Измененить</button>
          <p class="help">Рекомендуется регулярно менять пароль.</p>
        </div>
      </div>
    </div>
  </div>

</div>
