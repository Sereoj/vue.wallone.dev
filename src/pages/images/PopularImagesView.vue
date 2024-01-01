<template>
<div>
  <h2>Популярные</h2>
</div>
</template>

<script>
import {useHead} from "@unhead/vue";

export default {
  name: "PopularImagesView",
  data() {
    return {}
  },
  mounted() {
    useHead({
      title: `Wallone • Огромное количество популярных изображений на рабочий стол`
    })
  }
}
</script>

<style scoped>

</style>