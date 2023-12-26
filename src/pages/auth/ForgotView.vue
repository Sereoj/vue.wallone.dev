<template>
  <back-button/>

  <h2 class="mb-5">Восстановление пароля</h2>

  <TextBox name="email" title="Email" placeholder="help@wallone.ru" />

  <div class="d-flex align-items-center mt-5">
    <ButtonBox title="Восстановить пароль" name="ForgotPassword"/>
  </div>
</template>
<script>
import TextBox from "@/components/elements/TextBox"
import backButton from "@/components/elements/BackButton";
import ButtonBox from "@/components/elements/ButtonBox";

export default {
  components: {ButtonBox, TextBox, backButton },
  data() {
    return {
      //
    }
  },
  mounted() {
    // TODO: Механика восстановления пароля
    document.title = 'Wallone • Восстановление пароля'
  }
}
</script>

<style lang="sass">
</style>