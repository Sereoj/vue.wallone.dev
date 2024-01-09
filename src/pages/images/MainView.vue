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

    <div class="row g-3" v-if="images">
      <div class="col-12">
        <image-article-view class="card-main" :title="images[0].name" :image="images[0].preview"/>
      </div>
      <div :class="index === images.length - 2 ? 'col' : 'col-lg-6 col-xl-4 col-cxl-3'" v-for="(image, index) in images.slice(1)" :key="image">
        <image-article-view class="card" :title="image.name" :image="image.preview" :user="image.user"/>
      </div>
<!--      <div class="col-lg-6 col-xl-4 col-cxl-9">-->
<!--        <image-article-view class="card" :title="image.name" :image="image.preview"/>-->
<!--      </div>-->
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

import apiRouter from "@/router/api";

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
    return {
      'images' : null
    }
  },
  mounted() {
    useHead({
      title: `Wallone • Красивые изображения на рабочий стол`
    })
    this.loaded(1)
  },
  methods: {
    loaded(){
      let vm = this
      apiRouter.getRequest(`${apiRouter.api.index}`).then(function (response) {
        if(response.status === 200)
        {
          vm.images = response.data
        }
      })
    }
  }
}

</script>