<script>
  export let user = {};
</script>

<h2 class="h2">Пользователь ({user.userID}#{user.username})</h2>
<div class="container">

  <div class="columns">
    <div class="column">ID</div>
    <div class="column">{user.userID}</div>
  </div>

  <div class="columns">
    <div class="column">Имя пользователя</div>
    <div class="column">{user.username}</div>
  </div>

  <div class="columns">
    <div class="column">Email</div>
    <div class="column">
      {user.email}
      {#if user.emailConfirmed }
      <span class="tag is-success">Подтверждён</span>
      {:else }
      <span class="tag is-danger">Не подтверждён</span>
      {/if}
    </div>
  </div>

  <div class="columns">
    <div class="column">Телефон</div>
    <div class="column">
      {user.telephone}
      {#if user.telephoneConfirmed }
      <span class="tag is-success">Подтверждён</span>
      {:else }
      <span class="tag is-danger">Не подтверждён</span>
      {/if}
    </div>
  </div>

  <div class="columns">
    <div class="column">Дата создания</div>
    <div class="column">{user.created}</div>
  </div>

  <div class="columns">
    <div class="column">Роли</div>
    <div class="column">{user.role.join(', ')}</div>
  </div>

  <div class="columns">
    <div class="column">Активен</div>
    <div class="column">
      {#if user.active }
      <span class="tag is-success">Активен</span>
      {:else }
      <span class="tag is-danger">Не активирован</span>
      {/if}
    </div>
  </div>

  <div class="columns">
    <div class="column">IP</div>
    <div class="column">{user.ip}</div>
  </div>

  <div class="columns">
    <div class="column">Страна</div>
    <div class="column">{user.country}</div>
  </div>

</div>
