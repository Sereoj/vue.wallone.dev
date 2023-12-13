<template>
  <div class="col-10 m-auto">
    <ul class="d-flex mb-5">
      <li><a href="" id="tabLinkLogin" class="h2">Авторизация</a></li>
      <li><a href="" id="tabLinkRegister" class="h2 ms-4 active">Регистрация</a></li>
    </ul>

    <TextBox name="username" title="Логин" placeholder="Sergio Strange" />
    <TextBox name="email" title="Email" placeholder="user@wallone.ru" />
    <PassWord name="password" title="Пароль"/>
    <PassWord name="password_confirmation" title="Повторите пароль"/>

    <div class="text-center">
      <p>Создавая аккаунт, вы соглашаетесь с нашим <a href="#">пользовательским соглашением</a> и <a href="#">положением о конфиденциальности.</a></p>
    </div>

    <div class="d-flex align-items-center mt-3">
      <input type="submit" class="btn btn-primary" value="Регистрация" />
    </div>
  </div>
</template>

<script>
import TextBox from "@/components/elements/TextBox";
import PassWord from "@/components/elements/PassWord";

export default {
  components: { PassWord, TextBox },
  data() {
    return {
      //
    };
  },
  mounted() {
    document.title = 'Wallone • Регистрация'
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
</style>