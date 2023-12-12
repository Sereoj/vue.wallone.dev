<template>
  <div class="container">
    <text-box name="login" title="Логин" placeholder="Привет"/>
    <pass-word/>

    <input type="submit" class="btn btn-primary" value="Войти" />
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import TextBox from "@/components/elements/TextBox";
import PassWord from "@/components/elements/PassWord";
export default {
  components: {PassWord, TextBox}
}
</script>