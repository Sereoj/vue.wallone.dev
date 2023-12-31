<template>
<div class="needs-validation">
  <!-- ! Оставить только это: -->
  <TextBox name="username"
           title="Логин"
           placeholder="Sergio Strange"
           min-length="4"/>

  <TextBox name="email"
           title="Email"
           placeholder="user@wallone.ru"
           min-length="6"/>

  <PassWord name="password"
            title="Пароль"
            placeholder="Мой уникальный пароль"
            min-length="6"/>

  <PassWord name="password_confirmation"
            title="Повторите пароль"
            placeholder="Повторяю уникальный пароль"
            min-length="6"/>

  <div class="text-center">
    <p class="fs-20">Создавая аккаунт, вы соглашаетесь с нашим <link-box path="/user_agreement" title="пользовательским соглашением" name="user_agreement"/> и
      <link-box path="/privacy_statement" title="положением о конфиденциальности." name="privacy_statement"/></p>
  </div>

  <div class="d-flex align-items-center mt-5">
    <ButtonBox title="Зарегистрироваться" name="Register"/>
  </div>
</div>
</template>

<script>
import TextBox from "@/components/elements/TextBox";
import PassWord from "@/components/elements/PassWord";
import LinkBox from "@/components/elements/LinkBox";
import ButtonBox from "@/components/elements/ButtonBox";

export default {
  components: {ButtonBox, LinkBox, PassWord, TextBox},
  data() {
    return {
      //
    };
  },
  mounted() {
    document.title = 'Wallone • Регистрация' // TODO: Автоматизировать!
  }
}
</script>

<style lang="sass">
</style>