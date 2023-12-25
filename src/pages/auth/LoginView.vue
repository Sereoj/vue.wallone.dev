<template>
    <TextBox name="login" title="Email или логин" placeholder="help@wallone.ru"/>
    <PassWord name="password" title="Пароль"/>

    <CheckBox class="mt-5" name="rememberMe" title="Запомнить меня" checked />

    <div class="d-flex align-items-center mt-4">
      <input type="submit" class="btn btn-primary me-5" value="Войти" />
      <router-link to="/forgot-password" class="missing_pass">Забыли пароль?</router-link>
    </div>
</template>

<script>
import TextBox from "@/components/elements/TextBox";
import PassWord from "@/components/elements/PassWord";
import CheckBox from "@/components/elements/CheckBox";
import router from "@/router";

export default {
  components: { PassWord, TextBox, CheckBox },
  mounted() {
    document.title = 'Wallone • Авторизация'
  },
  methods: {
    router() {
      return router
    }
  },
}
</script>

<style lang="sass">
.missing_pass
  font-size: 24px

</style>