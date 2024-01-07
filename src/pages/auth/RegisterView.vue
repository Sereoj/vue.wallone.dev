<template>
<div class="needs-validation">
  <!-- ! Оставить только это: -->
  <text-box name="username"
           title="Логин"
           placeholder="Sergio Strange"
           v-model="username"
           :message="getMessageUsername()"
           :is-error="getMessageUsername() !== ''"
           min-length="4"/>

  <text-box name="email"
           title="Email"
           v-model="email"
           :message="getMessageEmail()"
           :is-error="getMessageEmail() !== ''"
           placeholder="user@wallone.ru"
           min-length="6"/>

  <pass-word name="password"
            v-model="password"
            :message="getMessagePassword()"
            :is-error="getMessagePassword() !== ''"
            title="Пароль"
            placeholder="Мой уникальный пароль"
            min-length="6"/>

  <pass-word name="password_confirmation"
            v-model="password_confirmation"
            :message="getMessagePassword()"
            :is-error="getMessagePassword() !== ''"
            title="Повторите пароль"
            placeholder="Повторяю уникальный пароль"
            min-length="6"/>

  <div class="text-center">
    <p class="fs-20">Создавая аккаунт, вы соглашаетесь с нашим <link-box path="/user_agreement" title="пользовательским соглашением" name="user_agreement"/> и
      <link-box path="/privacy_statement" title="положением о конфиденциальности." name="privacy_statement"/></p>
  </div>

  <div class="d-flex align-items-center mt-5">
    <button-box title="Зарегистрироваться" name="Register" v-on:click="getAuth"/>
  </div>
</div>
</template>

<script>
import TextBox from "@/components/elements/TextBox";
import PassWord from "@/components/elements/PassWord";
import LinkBox from "@/components/elements/LinkBox";
import ButtonBox from "@/components/elements/ButtonBox";
import {useHead} from "@unhead/vue";
import apiRouter from "@/router/api";
import router from "@/router";

export default {
  components: {ButtonBox, LinkBox, PassWord, TextBox},
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      messages: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  mounted() {
    useHead({
      title: 'Wallone • Регистрация'
    })
  },
  methods: {
    clear(){
      this.messages.username = ""
      this.messages.email = ""
      this.messages.password = ""
    },
    getResponse(){
      let vm = this
      apiRouter.postRequest(apiRouter.api.register, {
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
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
              if(errors.errors?.username)
              {
                vm.messages.username = errors.errors?.username[0]
              }
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
    getMessageUsername(){
      return this.messages.username
    },
    getMessageEmail() {
      return this.messages.email
    },
    getMessagePassword(){
      return this.messages.password
    }
  }
}
</script>

<style lang="sass">
</style>