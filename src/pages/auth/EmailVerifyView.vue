<template>
  <back-button/>

  <h2 class="mb-5">Подверждение почтового ящика</h2>

  <text-box name="code"
           title="Введите код"
           v-model="code"
           placeholder="000000"
           max-length="6" />

  <div class="d-flex align-items-center mt-5">
    <button-box title="Подтвердить" name="Apply"/>
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
      'code' : ''
    }
  },
  mounted() {
    useHead({
      title: 'Wallone • Подверждение почтового ящика'
    })
  }
}
</script>

<style lang="sass">
</style>