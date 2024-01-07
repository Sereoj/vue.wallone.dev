<template>
  <header-view />
  <div class="container">

    <div class="row">
      <sidebar-view class="col-md-4 col-lg-3 col-xl-2" />
      <!--    По макету SiteLinks, это отдельный блок, не входящий header -->
      <!--  Content -->
      <router-view class="col-md-8 col-lg-9 col-xl-10" />
    </div>
  </div>

  <button class="btn-up i-inline-arrow-up" :class="isVisible ? 'opacity-100' : 'opacity-0'" @click="scrollToTop()"></button>
</template>

<script>
import HeaderView from "@/components/blocks/HeaderView.vue";
import SidebarView from "@/components/blocks/SidebarView";
export default {
  components: {
    SidebarView,
    HeaderView
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleScroll() {
      this.isVisible = window.scrollY > 300;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
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

.btn-up
  border: none
  border-radius: 50%
  height: 50px
  width: 50px
  background-color: $second
  color: $primary
  text-align: center
  position: fixed
  right: 24px
  bottom: 40px
  transition: .2s
  &:hover
    background-color: $background
    border: 2px solid $second
</style>