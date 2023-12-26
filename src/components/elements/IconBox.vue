<template>
  <div style=""></div>
</template>
<script>
export default {
  name: "IconBox",
  props:[
    'title',
    'name',
  ],
}
</script>
<style lang="sass">
@import "src/assets/style/sprites"

.icon
  @include sprite('x')
  fill: #007AFF
  width: 20px
  height: 20px
</style>