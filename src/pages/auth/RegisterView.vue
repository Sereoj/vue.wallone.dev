<template>
  <!-- ! Оставить только это: -->
  <TextBox name="username" title="Логин" placeholder="Sergio Strange" />
  <TextBox name="email" title="Email" placeholder="user@wallone.ru" />
  <PassWord name="password" title="Пароль" />
  <PassWord name="password_confirmation" title="Повторите пароль" />

  <div class="text-center">
    <p class="fs-20">Создавая аккаунт, вы соглашаетесь с нашим <a href="#">пользовательским соглашением</a> и <a
        href="#">положением о
        конфиденциальности.</a></p>
  </div>

  <div class="d-flex align-items-center mt-5">
    <input type="submit" class="btn btn-primary" value="Регистрация" />
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
    document.title = 'Wallone • Регистрация' // TODO: Автоматизировать!
  }
}
</script>

<style lang="sass">
@import '@/assets/style/styles.sass'


</style>