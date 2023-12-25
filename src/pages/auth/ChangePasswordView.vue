<template>
  <back-button/>

  <h2 class="mb-5">Смена пароля</h2>

  <PassWord name="password" title="Пароль"/>
  <PassWord name="password_configuration" title="Повторите пароль"/>

  <div class="d-flex align-items-center mt-5">
    <input type="submit" class="btn btn-primary" value="Сменить пароль" />
  </div>
</template>
<script>
import PassWord from "@/components/elements/PassWord";
import backButton from "@/components/elements/BackButton";
export default {
  components: { PassWord, backButton },
  data() {
    return {
      //
    };
  },
  mounted() {
    document.title = 'Wallone • Смена пароля' // TODO: Механика смены пароля
  }
}
</script>

<style lang="sass">


</style>