<template>
  <header-view />
  <router-view />
</template>

<script>
import HeaderView from "@/components/blocks/HeaderView.vue";
export default {
  components: {
    HeaderView
  }
}
</script>

<style lang="sass">
@import "@/assets/style/fonts"

.dropdown-menu
  font-size: $font-size

.form-text
  margin-left: 1rem

.form-text a
  color: $primary
</style>