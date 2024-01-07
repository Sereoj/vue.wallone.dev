<template>
  <router-link :to="path" :id="name" :name="name" class="">{{ title }}</router-link>
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

<style lang="scss" scoped>
@import "@/assets/style/fonts.sass";

a {
  @extend %p;
  color: $primary2;
  &:hover {
    color: $primary;
  }
}
</style>