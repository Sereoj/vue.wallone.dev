<template>
    <div class="col-lg-6" v-html="html"></div>
</template>

<script>
export default {
  name: "adboxSplitView",
  props: [
    'html',
  ]
}
</script>

<style lang="sass" scoped>
.adbox-split
  min-height: 90px
  max-height: 120px
  object-fit: contain
</style>