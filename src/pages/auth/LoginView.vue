<template>
  <div class="needs-validation">
    <text-box name="login"
             title="Email или логин"
             placeholder="user@wallone.ru"
             aria-autocomplete="both"
             v-model="email"
             :message="getMessageEmail()"
             :is-error="getMessageEmail() !== ''"
             min-length="4"/>

    <pass-word name="password"
              placeholder="Самый сложный пароль"
              title="Пароль"
              v-model="password"
              :message="getMessagePassword()"
              :is-error="getMessagePassword() !== ''"
              min-length="0"
              />

    <div class="justify-content-center">
      <check-box class="mt-5"
                name="rememberMe"
                v-model="rememberMe"
                title="Запомнить меня"/>
    </div>

    <div class="d-flex align-items-center mt-4">
      <button-box class="me-5" title="Авторизироваться" name="loginBtn" v-on:click="getAuth"/>
      <link-box name="forgot_password" title="Забыли пароль?" path="/forgot-password"/>
    </div>

    <adbox-view/>
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

import { useHead } from '@unhead/vue'
import router from "@/router";
import Authorization from "@/js/auth/authorization";

export default {
  components: {LinkBox, PassWord, TextBox, CheckBox, ButtonBox, AdboxView },
  data() {
    return {
      user: null,
      email: "",
      password: "",
      rememberMe: false,
      messages: {
        email: '',
        password: ''
      },
      authorization : null
    }
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
      //let vm = this
      let values = {
        email: this.email,
        password: this.password,
        remember: this.rememberMe
      }
      new Authorization().login(values)

      router.push('/')

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