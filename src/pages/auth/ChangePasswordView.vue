<template>
  <PassWord name="password" title="Пароль"/>
  <PassWord name="password_configuration" title="Повторите пароль"/>
  <div class="d-flex align-items-center mt-5">
    <input type="submit" class="btn btn-primary" value="Сменить пароль" />
  </div>
</template>
<script>
import PassWord from "@/components/elements/PassWord";

export default {
  components: { PassWord },
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
@import '@/assets/style/styles.sass'


</style>