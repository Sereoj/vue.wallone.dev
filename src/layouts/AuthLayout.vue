<template>
  <div class="container-fluid row">
    <div class="col-5 auth d-none d-md-block">

      <div class="logo">
        <div class="d-flex align-items-center">
          <a href="/" class="logo__name">
            <img src="@/assets/logo.png" alt="Logo" height="84">
            <div class="ms-3">
              <h1>Wallone</h1>
              <a href="/tags/popular" class="logo__brand">#One Day Container</a>
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="container col-7 m-auto">

      <!-- TODO: здесь располагается шапка с ссылками -->
      <div class="col-10 m-auto">
        <ul class="d-flex mb-5">
          <li>
            <router-link to="/login" id="tabLinkLogin" class="h2">Авторизация</router-link>
          </li>
          <li>
            <router-link to="/register" id="tabLinkRegister" class="h2 ms-4">Регистрация</router-link>
          </li>
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
@import "@/assets/style/variables"
@import "@/assets/style/fonts"

.h1
  color: $primary2
  margin: 0
  padding: 0

.h2
  color: $primary2

.logo
  margin: 38px 0 0 48px
  max-width: 15vw
  word-break: break-all
  color: $primary

.logo__name
  @extend %logo-font
  color: inherit

.logo__brand
  font-size: 1.25rem
  color: inherit
  font-family: "Roboto"

.active
  color: $primary
  padding-bottom: 0.375rem
  border-bottom: 0.125rem solid $seccond

.auth
  background: url('@/assets/images/auth.jpg') no-repeat center
  background-size: cover
  object-fit: cover
  height: 100vh

ul li
  list-style: none

</style>