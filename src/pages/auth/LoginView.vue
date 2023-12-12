<template>
  <div class="container">
    <ul>
      <li><a href="" class="active">Авторизация</a></li>
      <li><a href="">Регистрация</a></li>
    </ul>

    <textBox name="login" title="Логин" placeholder="Привет" />
    <passWord />

    <input type="submit" class="btn btn-primary" value="Войти" />
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import TextBox from "@/components/elements/TextBox";
import PassWord from "@/components/elements/PassWord";

export default {
  components: { PassWord, TextBox }
}   
</script>