<template>
  <header-view />
  <div class="container">

    <div class="row">
      <sidebar-view class="col-md-3 col-lg-2" />
      <!--    По макету SiteLinks, это отдельный блок, не входящий header -->
      <!--  Content -->
      <router-view class="col-md-9 col-lg-10" />
    </div>
  </div>
</template>

<script>
import HeaderView from "@/components/blocks/HeaderView.vue";
import SidebarView from "@/components/blocks/SidebarView";
export default {
  components: {
    SidebarView,
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

h2, .title
  @extend %default
  font-size: $font-size-label

p, .description
  @extend %p
  color: $primary3
  font-size: $font-p
  text-overflow: ellipsis
  white-space: normal
</style>