<template>
  <back-button/>

  <h2 class="mb-5">Восстановление пароля</h2>

  <TextBox name="email"
           title="Email"
           v-model="email"
           placeholder="help@wallone.ru"
           min-length="6" />

  <div class="d-flex align-items-center mt-5">
    <ButtonBox title="Восстановить пароль" name="ForgotPassword"/>
  </div>
</template>
<script>
import TextBox from "@/components/elements/TextBox"
import backButton from "@/components/elements/BackButton";
import ButtonBox from "@/components/elements/ButtonBox";
import {useHead} from "@unhead/vue";

export default {
  components: {ButtonBox, TextBox, backButton },
  data() {
    return {
      'email' : ''
    }
  },
  mounted() {
    useHead({
      title: 'Wallone • Восстановление пароля'
    })
  }
}
</script>

<style lang="sass">
</style>