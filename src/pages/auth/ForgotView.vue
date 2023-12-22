<template>
  <h2>Восстановление пароля</h2>
  <TextBox name="email" title="Email" placeholder="help@wallone.ru" />
  <div class="d-flex align-items-center mt-5">
    <input type="submit" class="btn btn-primary" value="Восстановить пароль" />
  </div>
</template>
<script>
import TextBox from "@/components/elements/TextBox";

export default {
  components: { TextBox },
  data() {
    return {
      //
    };
  },
  mounted() {
    document.title = 'Wallone • Восстановление пароля' // TODO: Механика восстановления пароля
  }
}
</script>

<style lang="sass">


</style>