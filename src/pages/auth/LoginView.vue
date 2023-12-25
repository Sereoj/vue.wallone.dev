<template>
    <TextBox name="login" title="Email или логин" placeholder="help@wallone.ru" ref="model"/>
    <PassWord name="password" title="Пароль"/>
    <CheckBox class="mt-5" name="rememberMe" title="Запомнить меня" checked />

    <div class="d-flex align-items-center mt-4">
      <input type="submit" class="btn btn-primary me-5" value="Войти" v-on="auth"/>
      <router-link to="/forgot-password" class="missing_pass">Забыли пароль?</router-link>
    </div>
<!--  <div class="d-flex mt-5 d-none d-lg-block">-->
<!--    <div style="background: #2B2B2B; width: 47vw; height: 4rem;" class="container">-->
<!--      <img src="@/assets/banners/appwizard.png" style="width: 80%; height: 100%">-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import TextBox from "@/components/elements/TextBox";
import PassWord from "@/components/elements/PassWord";
import CheckBox from "@/components/elements/CheckBox";
import router from "@/router";
import { ref } from 'vue'

export default {
  components: { PassWord, TextBox, CheckBox },
  data() {
    return {
      response: null,
      email: null,
      password: null,
      rememberMe: false
    };
  },
  setup() {
    const data = ref(null)
    console.log(data)
  },
  mounted() {
    document.title = 'Wallone • Авторизация'
  },
  methods: {
    router() {
      return router
    },
    auth(){
    }
  },
}
</script>

<style lang="sass">
.missing_pass
  font-size: 24px
</style>