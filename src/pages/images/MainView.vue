<template>
  <div class="mb-5">
    <h2 class="mb-2 title">Красивые обои на рабочий стол</h2>
      <p class="description mb-2">
        Wallone - Огромная коллекция красивых изображений на рабочий стол. Cкачивайте, создайте персонализированные темы для приложения
        <link-box title="Wallone (описание)." name="wallone" path="/landing/wallone"/> Подберите интересные фоновые изображения и скачайте их на компьютер в разрешении 2к.
      </p>

      <div class="d-flex justify-content-center align-items-center row my-3">
        <adbox-split-view/>
        <adbox-split-view/>
      </div>

    <div class="row g-3">
      <div class="col-12">
        <image-article-view class="card-main"/>
      </div>
      <div class="col-lg-6 col-xl-4 col-cxl-3">
        <image-article-view class="card"/>
      </div>
      <div class="col-lg-6 col-xl-4 col-cxl-9">
        <image-article-view class="card"/>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import "@/assets/style/fonts.sass"

.AD-box
  min-height: 90px
  max-height: 120px
  object-fit: contain
</style>

<script>
import {useHead} from "@unhead/vue";

import LinkBox from "@/components/elements/LinkBox";
import adboxSplitView from "@/components/ads/AdboxSplitView";
import imageArticleView from "@/components/blocks/images/ImageArticleView";


export default {
  components: {
    LinkBox,
    adboxSplitView,
    imageArticleView
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