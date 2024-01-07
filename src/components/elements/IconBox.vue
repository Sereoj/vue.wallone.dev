<template>
  <i class="icon" :class="name"></i>
</template>
<script>
export default {
  name: "IconBox",
  props:{
    'name': String,
  }
}
</script>
<style lang="sass">
@import "@/assets/style/iconly/iconly.scss"

.icon
  width: 1.875rem
  height: 1.875rem
</style>