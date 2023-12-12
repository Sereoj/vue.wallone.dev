<template>
  <div>
    <ul>
      <li class="active"><a href="#">Авторизация</a></li>
      <li><a href="#">Регистрация</a></li>
    </ul>
    <text-box name="login" placeholder="Привет"/>
    <pass-word/>

    <button>Вход</button>
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