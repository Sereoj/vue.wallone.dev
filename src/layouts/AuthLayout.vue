<template>
  <div class="container-fluid row">
    <div class="col-5 auth">
     
      <div class="logo">
        <div class="d-flex align-items-center">
          <img src="@/assets/logo.png" alt="Logo" height="52">
          <div class="ms-3">
            <a href="/" class="logo__name">
              <h1>Wallone</h1>
            </a>
            <a href="/tags/popular" class="logo__brand">#One Day Container</a>
          </div>
        </div>
      </div>
    </div>

    <div class="container col-7 m-auto">
      <!-- TODO: здесь располагается шапка с ссылками -->
      <div class="col-10 m-auto">
        <ul class="d-flex mb-5">
          <li><router-link to="/login" id="tabLinkLogin" class="h2">Авторизация</router-link></li>
          <li><router-link to="/register" id="tabLinkRegister" class="h2 ms-4">Регистрация</router-link></li>
        </ul>

        <!-- ! Отображение страниц регистрации, авторизации и т.п. -->
          <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  components: {
    //
  }
}
</script>

<style lang="sass">
@import '@/assets/style/styles.sass'
.h2 
  @extend %h2
  color: $primary2

.active
  color: $primary
  padding-bottom: 6px
  border-bottom: 2px solid $seccond

.logo 
  margin: 38px 0 0 48px
  max-width: 15vw
  word-break: break-all
  color: $primary

.logo__name
  @extend %logo-font
  color: inherit

.logo__brand
  font-size: $default-font-p
  color: inherit

.auth
  background: url('@/assets/images/auth.jpg') no-repeat center
  background-size: cover
  object-fit: cover
  height: 100vh
</style>