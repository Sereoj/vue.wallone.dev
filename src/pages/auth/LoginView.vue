<template>
  <div class="needs-validation">
    <!--Login-->
    <text-box name="login"
             :title="$t('LoginForm.email.title')"
             :placeholder="$t('LoginForm.email.placeholder')"
              v-model="username"
              v-on:change="validateEmail(EmailMinLen)"
              :message="emailValidate"
             :min-length="EmailMinLen"/>
    <!--Password-->
    <pass-word name="password"
               :placeholder="$t('LoginForm.password.placeholder')"
               :title="$t('LoginForm.password.title')"
               v-model="password"
               :message="getMessagePassword(message)"
               v-on:keyup.enter="autorize()"
               v-on:change="enableButton()"
              min-length="0"
              />
    <!--Checkbox-->
    <div class="justify-content-center">
      <check-box class="mt-5"
                name="rememberMe"
                v-model="rememberMe"
                 v-on:click="setRememberMeStorage()"
                 :title="$t('LoginForm.rememberMe.title')"
                :required="true"
      />
    </div>
    <!--  Actions  -->
    <div class="d-flex align-items-center mt-4">
      <button-box
          class="me-5"
          :title="$t('LoginForm.buttons.loginBtn.title')"
          name="loginBtn"
          :disabled="btnDisabled"
          v-on:click="autorize()"/>
      <link-box
          name="forgot_password"
          :title="$t('LoginForm.buttons.forgot_password.title')"
          path="/forgot-password"/>
    </div>
    <!--Adbox-->
    <adbox-view/>
  </div>
</template>

<script setup>
/**
 * Компоненты
 */
import TextBox from "@/components/elements/TextBox";
import PassWord from "@/components/elements/PassWord";
import CheckBox from "@/components/elements/CheckBox";
import LinkBox from "@/components/elements/LinkBox";
import ButtonBox from "@/components/elements/ButtonBox";
import AdboxView from "@/components/ads/AdboxView";

import { ref } from 'vue';
import {useI18n} from "vue-i18n";
import { useHead } from '@unhead/vue';
import apiRouter from "@/router/api";
import router from "@/router";
import {getItem, setItem} from "@/js/storage";

/**
 * Переменные
 */
const username = ref('');
const emailValidate = ref('');
const password = ref('');
const message = ref('');
const rememberMe = ref(false);

const EmailMinLen = ref(4);
const NOT_AUTHORIZED = ref(false);
const btnDisabled = ref(true);
// eslint-disable-next-line no-unused-vars
const {t} = useI18n({useScope: 'global'});

/**
 * Seo
 */
useHead({
  title: () => 'Wallone • Авторизация',
  meta: [
    {
      name: () => 'description',
      content: () => 'Wallone • Авторизация пользователя на сайте Wallone',
    },
  ],
})

/**
 * Валидаторы
 */
const validateEmail = (count) => {
  username.value.length <= count ?
      setEmailMessage(t('messages.symbols', {'count': count})) :
      setEmailMessage('');
  enableButton();
  setEmailStorage();
}

/**
 * Функции
 */
const setEmailMessage = (message) => {
  emailValidate.value = message;
}

const getMessagePassword = (message) => {
  return message;
}

const enableButton = () => {
  btnDisabled.value = !(emailValidate.value === '' && message.value === '');
}

const setEmailStorage = () => {
  setItem('username', username.value)
}

const getEmailStorage = () => {
  username.value =  getItem('username');
}

const setRememberMeStorage = () => {
  let val = !rememberMe.value
  setItem('rememberMe', val)
  console.log(val)
}

const getRememberMeStorage = () => {
  rememberMe.value = getItem('rememberMe') !== 'false';
}


const autorize = () => {
  let values = {
    username: username.value,
    password: password.value,
    remember: rememberMe.value
  }
  apiRouter.postRequest(apiRouter.api.login, values)
      .then(function (response) {
        let data = response.data
        let token = data.token

        if(token)
        {
          router.push('/')
        }
      })
      .catch(function (error) {
        let errors = error.response.data

        if(errors?.message && error.response.status === 401)
        {
          NOT_AUTHORIZED.value = true;
          alert(errors?.message);
        }

        if(errors?.message && error.response.status === 422)
        {
          setEmailMessage(errors?.message?.email)
          message.value = errors?.message?.password
        }
      })
}

getEmailStorage();
getRememberMeStorage();
</script>