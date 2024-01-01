<template>
<div>
  <h2>Новые</h2>
</div>
</template>

<script>
import {useHead} from "@unhead/vue";

export default {
  name: "NewImagesView",
  data() {
    return {}
  },
  mounted() {
    useHead({
      title: `Wallone • Более 10тыс. новых изображений на рабочий стол`
    })
  }
}
</script>

<style scoped>

</style>