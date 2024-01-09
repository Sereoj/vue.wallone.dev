<template>
  <div v-if="data">
    <div class="title" v-html="data?.title"/>
    <div class="description" v-html="data?.content.text"/>
    <div v-for="(content,index) in data?.content" :key="index">
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
import {useHead} from "@unhead/vue";
import apiRouter from "@/router/api";

export default {
  name: "PrivacyStatementView",
  data() {
    return {
      'data' : null
    }
  },
  mounted() {
    useHead({
      title: `Wallone • Красивые изображения на рабочий стол`
    })
    this.loaded()
  },
  methods: {
    loaded(){
      let vm = this
      apiRouter.getRequest(`https://dev.w2me.ru/api/v1/privacy_statement`).then(function (response) {
      vm.data = response.data
      })
    }
  }
}
</script>

<style scoped>

</style>