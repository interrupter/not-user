<script>
  export let user = {};

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
      {user.telephone}
      {#if user.telephoneConfirmed }
      <span class="tag is-success">Подтверждён</span>
      {:else }
      <span class="tag is-danger">Не подтверждён</span>
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
      {user.role.join(', ')}
    </div>
  </div>

  <div class="columns">
    <div class="column title is-5">Активен</div>
    <div class="column subtitle is-5">
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

</div>
