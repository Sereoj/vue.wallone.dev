<template>
  <div class="col-10 m-auto">
    <ul class="d-flex mb-5">
      <li><a href="/login" id="tabLinkLogin" class="h2 active">Авторизация</a></li>
      <li><a href="/register" id="tabLinkRegister" class="h2 ms-4">Регистрация</a></li>
    </ul>

    <TextBox name="login" title="Email или логин" placeholder="help@wallone.ru" />
    <PassWord name="password" title="Пароль"/>

    <CheckBox class="mt-5" name="rememberMe" title="Запомнить меня" checked />

    <div class="d-flex align-items-center mt-3">
      <input type="submit" class="btn btn-primary" value="Войти" />
      <a href="/forgot-password" class="missing_pass ms-5">Забыли пароль?</a>
    </div>
  </div>
</template>

<script>
import TextBox from "@/components/elements/TextBox";
import PassWord from "@/components/elements/PassWord";
import CheckBox from "@/components/elements/CheckBox";

export default {
  components: { PassWord, TextBox, CheckBox },
  data() {
    return {
      //
    };
  },
  mounted() {
    document.title = 'Wallone • Авторизация'
  }
}
</script>

<style lang="sass">
@import '@/assets/style/styles.sass'

.h2 
  @extend %h2
  color: $primary2

.active
  color: $primary
  padding-bottom: 6px
  border-bottom: 2px solid $seccond


.missing_pass
  font-size: $default-font-size-label
  &:hover
    color: $btn-hover
</style>