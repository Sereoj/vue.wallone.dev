<template>
  <form class="needs-validation" novalidate>
    <TextBox name="login" title="Email или логин" placeholder="help@wallone.ru" aria-autocomplete="both" @input="getEmail" :message="messages.email" required/>
    <PassWord name="password" title="Пароль" @input="getPassword" :message="messages.password" required/>
    <div class="justify-content-center">
      <CheckBox class="mt-5" name="rememberMe" title="Запомнить меня"/>
    </div>
    <div class="d-flex align-items-center mt-4">
      <ButtonBox class="me-5" title="Войти" name="loginBtn" v-on:click="getAuth"/>
      <LinkBox name="forgot_password" title="Забыли пароль?" path="/forgot-password"/>
    </div>
    <AdboxView/>
  </form>
</template>

<script>
/**
 * Компоненты
 */
import TextBox from "@/components/elements/TextBox";
import PassWord from "@/components/elements/PassWord";
import CheckBox from "@/components/elements/CheckBox";
import LinkBox from "@/components/elements/LinkBox";
import ButtonBox from "@/components/elements/ButtonBox";
import AdboxView from "@/components/ads/AdboxView";

import router from "@/router";
import apiRouter from "@/router/api";

export default {
  components: {LinkBox, PassWord, TextBox, CheckBox, ButtonBox, AdboxView },
  data() {
    return {
      response: "",
      email: "",
      password: "",
      rememberMe: false,
      messages: {
        email: "",
        password: "",
        message: ""
      }
    };
  },
  setup() {
    // console.log(this.email)
  },
  mounted() {
    document.title = 'Wallone • Авторизация'
  },
  methods: {
    getEmail(e){
      this.email = e.target.value
    },
    getPassword(e){
      this.password = e.target.value
    },
    router(){
      return router
    },
    getAuth(e){
      apiRouter.postRequest(apiRouter.api.login, {
        email: this.email,
        password: this.password
      })
      .then(function (response) {
        this.response = response?.data
      })
      .catch(function (error) {
        this.response = error?.response?.data
      })
      e.preventDefault();
    }
  },
}
</script>

<style lang="scss">
</style>