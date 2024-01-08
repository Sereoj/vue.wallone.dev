<template>
  <a :href="path" :id="name" class="">{{ title }}</a>
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