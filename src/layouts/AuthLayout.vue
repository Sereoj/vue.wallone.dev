<template>
  <div class="container-fluid row" style="height: 100vh">
    <div class="col-5 auth d-none d-lg-block">
      <LogoBox class="m-3"/>
    </div>

    <div class="container col-sm-12 col-lg-7 m-auto">

      <!-- TODO: здесь располагается шапка с ссылками -->
      <div class="col-10 m-auto">
        <ul class="d-flex mb-5" v-if="isAuthPage()">
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
import LogoBox from "@/components/blocks/LogoBox.vue";
export default {
  components: {
    LogoBox
  },
  data() {
    return {
      //
    }
  },
  methods: {
    isAuthPage() {
      return this.$route.name === 'Register' || this.$route.name === 'Login'
    }
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

.active
  color: $primary
  padding-bottom: 0.375rem
  border-bottom: 0.125rem solid $second

.auth
  background: url('@/assets/images/auth.jpg') no-repeat center
  background-size: cover
  object-fit: cover
  height: 100vh
</style>