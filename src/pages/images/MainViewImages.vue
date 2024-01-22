<template>
  <div class="mb-5">
    <div v-if="config" v-html="config.title"></div>
    <div v-if="config" v-html="config.description"></div>

      <div class="d-flex justify-content-center align-items-center row my-3" v-if="ads">
        <adbox-split-view v-for="ad in ads" :html="ad" v-bind:key="ad"/>
      </div>

    <div id="imageView" class="row g-3" v-if="images">
      <div class="col-12">
        <image-article-view class="card-main" :image="images[0]" :user="images[0].user"/>
      </div>
      <div :class="index === images.length - 2 ? 'col' : 'col-lg-6 col-xl-4 col-cxl-3'" v-for="(image, index) in images.slice(1)" :key="image">
        <image-article-view class="card" :image="image" :user="image.user"/>
      </div>
      <div class="col-lg-6 col-xl-4 col-cxl-3">
        <adbox-image-view class="card"/>
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

import adboxSplitView from "@/components/ads/AdboxSplitView";
import imageArticleView from "@/components/blocks/images/ImageArticleView";
import adboxImageView from "@/components/ads/AdboxImageView";

import apiRouter from "@/router/api";

export default {
  components: {
    adboxSplitView,
    imageArticleView,
    adboxImageView
  },
  data() {
    return {
      'config' : null,
      'images' : null,
      'ads': null,
      'randRender' : 0,
    }
  },
  mounted() {
    this.loaded(1)
    this.adsLoaded()
  },
  methods: {
    loaded(){
      let vm = this
      apiRouter.getRequest(`${apiRouter.api.index}`).then(function (response) {
        if(response.status === 200)
        {
          vm.images = response.data[1]
          vm.config = response.data[0]

          useHead({
            'title': vm.config.seo_title,
            'description': vm.config.seo_description
          })
        }
      })
    },
    adsLoaded(){
      let vm = this
      setTimeout(function (){
        apiRouter.getRequest(`${apiRouter.api.ads}?fields=main`).then(function (response) {
          if(response.status === 200)
          {
            vm.ads = response.data
          }
        })
      },2500)
    }
  }
}
</script>