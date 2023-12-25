<template>
  <back-button/>

  <h2 class="mb-5">Восстановление пароля</h2>

  <TextBox name="email" title="Email" placeholder="help@wallone.ru" />

  <div class="d-flex align-items-center mt-5">
    <input type="submit" class="btn btn-primary" value="Восстановить пароль" />
  </div>
</template>
<script>
import TextBox from "@/components/elements/TextBox"
import backButton from "@/components/elements/BackButton";

export default {
  components: { TextBox, backButton },
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
@import "@/assets/style/variables"
.backButton
  color: $primary2

</style>