<template>
  <div class="needs-validation">
    <TextBox name="login"
             title="Email или логин"
             placeholder="help@wallone.ru"
             aria-autocomplete="both"
             min-length="4"/>

    <PassWord name="password"
              title="Пароль"
              required/>

    <div class="justify-content-center">
      <CheckBox class="mt-5" name="rememberMe" title="Запомнить меня"/>
    </div>
    <div class="d-flex align-items-center mt-4">
      <ButtonBox class="me-5" title="Авторизироваться" name="loginBtn" v-on:click="getAuth"/>
      <LinkBox name="forgot_password" title="Забыли пароль?" path="/forgot-password"/>
    </div>
    <AdboxView/>
  </div>
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
      email: "",
      password: "",
      rememberMe: false,
    };
  },
  watch(){

  },
  mounted() {
    document.title = 'Wallone • Авторизация'
  },
  methods: {
    getEmail(e){
      this.email = e.target.value
      this.test(e)
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
        console.log(response?.data)
      })
      .catch(function (error) {
        let result = error?.response.data
        this.messages.email = result.errors.email
      })
      e.preventDefault();
    }
  },
}
</script>

<style lang="scss">
</style>