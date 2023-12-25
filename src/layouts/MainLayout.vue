<template>
  <header-view/>
  <sidebar-view/>
  <!--    По макету SiteLinks, это отдельный блок, не входящий header -->
  <SiteLinks/>
  <!--  Content -->
  <router-view/>
</template>

<script>
import HeaderView from "@/components/blocks/HeaderView.vue";
import SidebarView from "@/components/blocks/SidebarView";
import SiteLinks from "@/components/blocks/SiteLinks";
export default {
  components: {
    SiteLinks,
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
</style>