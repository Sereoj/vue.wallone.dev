<template>
      <TextBox name="login" title="Email или логин" placeholder="help@wallone.ru" />
    <PassWord name="password" title="Пароль"/>

    <CheckBox class="mt-5" name="rememberMe" title="Запомнить меня" checked />

    <div class="d-flex align-items-center mt-4">
      <input type="submit" class="btn btn-primary" value="Войти" />
      <a href="/forgot-password" class="missing_pass ms-5">Забыли пароль?</a>
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
.missing_pass
  font-size: $default-font-size-label
  &:hover
    color: $btn-hover
</style>