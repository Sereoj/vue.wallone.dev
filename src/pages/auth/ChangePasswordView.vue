<template>
  <back-button/>

  <h2 class="mb-5">Смена пароля</h2>

  <pass-word name="password"
            title="Пароль"
            v-model="password"
            placeholder="Забыл свой уникальный пароль"
            min-length="6"/>

  <pass-word name="password_configuration"
            title="Повторите пароль"
            v-model="password_configuration"
            placeholder="Запоминаю свой пароль"
            min-length="6"/>

  <div class="d-flex align-items-center mt-5">
    <button-box title="Сменить пароль" name="ChangePassword"/>
  </div>
</template>
<script>
import PassWord from "@/components/elements/PassWord";
import backButton from "@/components/elements/BackButton";
import ButtonBox from "@/components/elements/ButtonBox";
import {useHead} from "@unhead/vue";
export default {
  components: {ButtonBox, PassWord, backButton },
  data() {
    return {
      'password' : '',
      'password_configuration' : ''
    };
  },
  mounted() {
    useHead({
      title: 'Wallone • Смена пароля'
    })
  }
}
</script>

<style lang="sass">


</style>