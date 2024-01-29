<template>
<div class="needs-validation">
  <!-- ! Оставить только это: -->
  <div class="register" v-if="getEmailStorage()">
    <h2>Регистрация недоступна</h2>
    <p class="mt-2 mb-2 fs-16">Привет, {{ getEmailStorage() }}!</p>
    <p class="mt-1">Данный аккаунт уже существует в системе. Если Вы забыли пароль от аккаунта <link-box title="восстановите его" name="forgot_password" path="/forgot-password"/></p>
    <p class="mt-1">Если у Вас есть вопросы, обратитесь в техническую поддержку: <link-box name="tech_email" title="help@wallone.ru" path="mailto:help@wallone.ru"/></p>
  </div>

  <div class="register" v-if="!getEmailStorage()">
    <!--Username-->
    <text-box name="username"
              :title="$t('RegisterForm.username.title')"
              :placeholder="$t('RegisterForm.username.placeholder')"
              v-model="username"
              v-on:change="validateUsername(4)"
              :message="usernameValidate"
              min-length="4"/>

    <!--Email-->
    <text-box name="email"
              :title="$t('RegisterForm.email.title')"
              :placeholder="$t('RegisterForm.email.placeholder')"
              v-model="email"
              v-on:change="validateEmail(6)"
              :message="emailValidate"
              min-length="6"/>

    <!--Password-->
    <pass-word name="password"
               :title="$t('RegisterForm.password.title')"
               :placeholder="$t('RegisterForm.password.placeholder')"
               v-model="password"
               v-on:change="validatePassword(6)"
               :message="passwordValidate"
               min-length="6"/>
    <div class="mt-2 mb-2">
      <p>{{ $t('RegisterForm.buttons.password.title') }} <link-box
          name="password_generation"
          :title="$t('RegisterForm.buttons.password.pass')"
          path="#"
          v-on:click="password_confirmation = password = passwordGeneration(16)"/></p>
    </div>

    <!--password_confirmation-->
    <pass-word name="password_confirmation"
               :title="$t('RegisterForm.password_confirmation.title')"
               :placeholder="$t('RegisterForm.password_confirmation.placeholder')"
               v-model="password_confirmation"
               v-on:change="validatePassword(6)"
               :message="passwordValidate"
               min-length="6"/>

    <!--user politics-->
    <div class="text-center">
      <p class="fs-20">{{ $t('RegisterForm.user_politics.title') }}
        <link-box path="/user_agreement"
                  :title="$t('RegisterForm.user_politics.user_agreement')"
                  name="user_agreement"/>
        {{ $t('RegisterForm.user_politics.and') }}
        <link-box path="/privacy_statement"
                  :title="$t('RegisterForm.user_politics.privacy_statement')"
                  name="privacy_statement"/>
      </p>
    </div>

    <div class="d-flex align-items-center mt-5">
      <button-box
          :title="$t('RegisterForm.buttons.register.title')"
          name="Register"
          v-on:click="autorize"/>
    </div>
  </div>
</div>
</template>
<script setup>
/**
 * Компоненты
 */
import TextBox from "@/components/elements/TextBox";
import PassWord from "@/components/elements/PassWord";
import LinkBox from "@/components/elements/LinkBox";
import ButtonBox from "@/components/elements/ButtonBox";

import { ref } from 'vue';
import {useI18n} from "vue-i18n/dist/vue-i18n";
import {useHead} from "@unhead/vue";
import router from "@/router";
import {getItem} from "@/js/storage";
import {passwordGeneration} from "@/js/password";

const emailValidator = require("email-validator");
/**
 * Переменные
 */
const username = ref("");
const usernameValidate = ref('');
const email = ref("");
const emailValidate = ref('');
const password = ref("");
const passwordValidate = ref('');
const password_confirmation = ref("");

// eslint-disable-next-line no-unused-vars
const {t} = useI18n({useScope: 'global'});

/**
 * Seo
 */
useHead({
  title: () => 'Wallone • Регистрация',
  meta: [
    {
      name: () => 'description',
      content: () => 'Wallone • Регистрация пользователя на сайте Wallone',
    },
  ],
})

/**
 * Валидаторы
 */
const validateEmail = (count) => {
  email.value.length <= count ?
      setEmailMessage(t('messages.symbols', {'count': count})) :
      setEmailMessage('')
  regularEmail()
}

const regularEmail = (email) => {
  console.log(emailValidator.validate(email))
  emailValidator.validate(email) ? setEmailMessage('Email не валидный') :
      setEmailMessage('')
}

const validateUsername = (count) => {
  username.value.length <= count ?
      setUsernameMessage(t('messages.symbols', {'count': count})) :
      setUsernameMessage('')
}

const validatePassword = (count) => {
  password.value.length <= count ?
      setPasswordMessage(t('messages.symbols', {'count': count})) :
      setPasswordMessage('')
}

const autorize = () => {
  router.push('/verify');
}

const setUsernameMessage = (message) => {
  usernameValidate.value = message;
}

const setEmailMessage = (message) => {
  emailValidate.value = message;
}

const setPasswordMessage = (message) => {
  passwordValidate.value = message;
}

const getEmailStorage = () => {
  return getItem('email');
}
</script>

<style lang="sass">
</style>