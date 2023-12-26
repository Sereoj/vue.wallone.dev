<template>
  <div class="container mb-2">
    <h2 class="mb-2">Красивые обои на рабочий стол</h2>
    <div>
      <p>Wallone - Огромная коллекция красивых изображений на рабочий стол. Cкачивайте, создайте персонализированные темы для приложения  WinDesktopDynamic (описание).  Подберите интересные фоновые изображения и скачайте их на компьютер в разрешении 2к.</p>
    </div>
    <IconBox/>
    <IconBox/>
    <IconBox/>
  </div>
</template>
<style lang="sass">
@import "@/assets/style/fonts.sass"

h2
  @extend %h2
p
  @extend %p
</style>
<script>
import IconBox from "@/components/elements/IconBox";
export default {
  components: {
    IconBox
    //
  }
}

</script>