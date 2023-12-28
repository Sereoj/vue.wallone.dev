<template>
    <TextBox name="login" title="Email или логин" placeholder="help@wallone.ru" ref="model"/>
    <PassWord name="password" title="Пароль"/>
    <div class="row justify-content-center">
      <CheckBox class="mt-5" name="rememberMe" title="Запомнить меня" checked />
    </div>
    <div class="d-flex align-items-center mt-4">
      <ButtonBox class="me-5" title="Войти" name="loginBtn" v-on="auth"/>
      <LinkBox name="forgot_password" title="Забыли пароль?" path="/forgot-password"/>
    </div>
  <AdboxView/>
</template>

<script>
import TextBox from "@/components/elements/TextBox";
import PassWord from "@/components/elements/PassWord";
import CheckBox from "@/components/elements/CheckBox";
import LinkBox from "@/components/elements/LinkBox";
import ButtonBox from "@/components/elements/ButtonBox";
import AdboxView from "@/components/ads/AdboxView";

import router from "@/router";
import { ref } from 'vue'


export default {
  components: {LinkBox, PassWord, TextBox, CheckBox, ButtonBox, AdboxView },
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

<style lang="scss">
</style>