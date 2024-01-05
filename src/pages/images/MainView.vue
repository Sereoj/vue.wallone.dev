<template>
  <div>
    <h2 class="mb-2 title">Красивые обои на рабочий стол</h2>
      <p class="description">Wallone - Огромная коллекция красивых изображений на рабочий стол. Cкачивайте, создайте персонализированные темы для приложения
        <link-box title="Wallone" name="wallone" path="/landing/wallone"/>(описание).
        Подберите интересные фоновые изображения и скачайте их на компьютер в разрешении 2к.</p>
  </div>
</template>
<style lang="sass">
@import "@/assets/style/fonts.sass"
</style>
<script>
import LinkBox from "@/components/elements/LinkBox";
import {useHead} from "@unhead/vue";
export default {
  components: {
    LinkBox
  },
  data() {
    return {}
  },
  mounted() {
    useHead({
      title: `Wallone • Красивые изображения на рабочий стол`
    })
  }
}

</script>