<template>
  <div class="mb-5">
    <div v-if="seo" v-html="seo.title"></div>
    <div v-if="seo" v-html="seo.description"></div>

      <div class="d-flex justify-content-center align-items-center row my-3" v-if="adbox">
        <adbox-split-view v-for="ad in adbox" :html="ad" v-bind:key="ad"/>
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
<script setup>
import AdboxSplitView from "@/components/ads/AdboxSplitView";
import ImageArticleView from "@/components/blocks/images/ImageArticleView";
import AdboxImageView from "@/components/ads/AdboxImageView";

import {useHead} from "@unhead/vue";
import { ref, onMounted } from "vue"
import apiRouter from "@/router/api";


const images = ref();
const seo = ref();
const adbox = ref();

useHead({
  title: "Wallone • Главная страница"
})

const loadImages = () => {
  apiRouter.getRequest(`${apiRouter.api.index}`).then(function (response) {
    if(response.status === 200)
    {
      images.value = response.data[1]
      seo.value = response.data[0]

      useHead({
        title: () => seo.value.seo_title,
        meta: [
          {
            name: () => 'description',
            content: () => seo.value.seo_description,
          },
        ],
      })
    }
  })
}

const loadAds = () => {
  setTimeout(function (){
    apiRouter.getRequest(`${apiRouter.api.ads}?fields=main`).then(function (response) {
      if(response.status === 200)
      {
        adbox.value = response.data
      }
    })
  },2500)
}
onMounted(() => {
  loadImages();
  loadAds();
})
</script>