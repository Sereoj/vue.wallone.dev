<template>
  <back-button/>

  <h2 class="mb-5">Смена пароля</h2>

  <PassWord name="password" title="Пароль"/>
  <PassWord name="password_configuration" title="Повторите пароль"/>

  <div class="d-flex align-items-center mt-5">
    <ButtonBox title="Сменить пароль" name="ChangePassword"/>
  </div>
</template>
<script>
import PassWord from "@/components/elements/PassWord";
import backButton from "@/components/elements/BackButton";
import ButtonBox from "@/components/elements/ButtonBox";
export default {
  components: {ButtonBox, PassWord, backButton },
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