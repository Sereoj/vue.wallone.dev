<template>
  <router-link :to="path" :id="name" :name="name" class="linkBox">{{ title }}</router-link>
</template>

<script>
export default {
  name: "LinkBox",
  props:{
    'title': String,
    'name': String,
    'path': String,
  },
}
</script>

<style lang="sass" scoped>
@import "@/assets/style/fonts"

.linkBox
    &:hover
       color: $second-80
</style>