<template>
  <div class="needs-validation">
    <TextBox name="login"
             title="Email или логин"
             placeholder="user@wallone.ru"
             aria-autocomplete="both"
             v-model="email"
             :message="getMessageEmail()"
             :is-error="getMessageEmail() !== ''"
             min-length="4"/>

    <PassWord name="password"
              placeholder="Самый сложный пароль"
              title="Пароль"
              v-model="password"
              :message="getMessagePassword()"
              :is-error="getMessagePassword() !== ''"
              min-length="0"
              />

    <div class="justify-content-center">
      <CheckBox class="mt-5"
                name="rememberMe"
                v-model="rememberMe"
                title="Запомнить меня"/>
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

import apiRouter from "@/router/api";
import { useHead } from '@unhead/vue'
import router from "@/router";

export default {
  components: {LinkBox, PassWord, TextBox, CheckBox, ButtonBox, AdboxView },
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      messages: {
        email: '',
        password: ''
      }
    }
  },
  watch(){

  },
  mounted() {
    useHead({
      title: 'Wallone • Авторизация'
    })
  },
  methods: {
    clear(){
      this.messages.email = ""
      this.messages.password = ""
    },
    getResponse(){
      let vm = this
      apiRouter.postRequest(apiRouter.api.login, {
        email: this.email,
        password: this.password,
        remember: this.rememberMe
      })
      .then(function (response) {
        vm.messages = response.data
        if(vm.messages.token)
        {
          vm.clear()
          alert("Вы авторизировались")
          router.push('/')
        }
      })
      .catch(function (error) {
        let errors = error.response.data

        if(errors?.message && error.response.status === 401)
        {
          vm.messages.password = errors?.message
        }

        if(errors?.errors)
        {
          if(errors.errors?.email)
          {
            vm.messages.email = errors.errors?.email[0]
          }
          if(errors.errors?.password)
          {
            vm.messages.password = errors.errors?.password[0]
          }
        }
      })
    },
    getAuth(){
      this.clear()
      this.getResponse()
    },
    getMessageEmail() {
      return this.messages.email
    },
    getMessagePassword(){
      return this.messages.password
    }
  },
}
</script>

<style lang="scss">
</style>