<template>
  <div class="container-fluid row" style="height: 100vh">
    <div class="col-5 auth d-none d-lg-block">
      <LogoBox class="m-3"/>
    </div>
    <div class="container col-sm-12 col-lg-7 m-auto">
      <div class="col-10 m-auto">
        <LogoBox class="m-3 mb-5 d-block d-md-none"/>
        <ul class="d-flex mb-5" v-if="isAuthPage">
          <li>
            <LinkTabBox title="Авторизация" name="tabLinkLogin" path="/login" class="h2"/>
          </li>
          <li>
            <LinkTabBox title="Регистрация" name="tabLinkRegister" path="/register" class="h2 ms-4"/>
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
import {useRoute} from 'vue-router'
import LinkTabBox from "@/components/elements/LinkTabBox";

export default {
  components: {
    LinkTabBox,
    LogoBox
  },
  data() {
    return {}
  },
  computed: {
    isAuthPage() {
      const route = useRoute();
      return route.path.slice(1) === 'register' || route.path.slice(1) === 'login'
    }
  },
  methods: {
  },
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