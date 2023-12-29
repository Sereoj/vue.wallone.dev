<template>
  <router-link :to="path" :id="name" :name="name" class="tabLink">{{ title }}</router-link>
</template>

<script>
export default {
  name: "LinkTabBox",
  props:{
    'title': String,
    'name': String,
    'path': String
  },
}
</script>

<style lang="sass" scoped>
@import "@/assets/style/fonts"

.tabLink
    &:hover
      color: $primary3
</style>