<template>
  <a class="btn-circle p-1">{{ title }}</a>
</template>

<script setup>
import {defineProps} from 'vue'

defineProps(['title'])


</script>

<style lang="sass" scoped>
@import "@/assets/style/variables"
@import "@/assets/style/fonts"

.btn-circle
  height: 40px
  width: 40px
  border-radius: 50%
  color: $primary
  cursor: pointer
  font-size: $font-size
  background-color: $second
  border: 2px solid $second

  &:hover, &.active
    background-color: $background
</style>