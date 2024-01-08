<template>
  <header-view />
  <div class="container">

    <div class="row">
      <sidebar-view class="col-md-4 col-lg-3 col-xl-2 d-none d-md-block" />
      <!--    По макету SiteLinks, это отдельный блок, не входящий header -->
      <!--  Content -->
      <router-view class="col-md-8 col-lg-9 col-xl-10" />
    </div>
  </div>

  <div class="d-md-none mobile-sidebar fs-32">
    <ul class="d-flex justify-content-between text-center">
      <li class="nav-item col">
        <router-link to="/" class="nav-link"><i class="i-inline-view-grid"></i></router-link>
      </li>
      <li class="nav-item col">
        <router-link to="/" class="nav-link"><i class="i-inline-view-grid-add"></i></router-link>
      </li>
      <li class="nav-item col">
        <router-link to="/" class="nav-link"><i class="i-inline-userb"></i></router-link>
      </li>
    </ul>
  </div>

  <div class="fixed-object d-flex flex-wrap align-items-center gap-4">
    <div class="toast align-items-center text-bg-primary border-0 fade show fs-16 px-3 rounded-4" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex align-items-center">
        <i class="i-outline-information-circle fs-20"></i>
        <div class="toast-body">
          Мы используем cookie для обработки ваших персональных данных.
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Закрыть"></button>
      </div>
    </div>

    <button class="btn-up i-inline-arrow-up" :class="isVisible ? 'opacity-100' : 'opacity-0'" @click="scrollToTop()"></button>
  </div>
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
  transition: .2s
  &:hover
    background-color: $background
    border: 2px solid $second

.fixed-object
  position: fixed
  right: 1.5rem
  bottom: 2.5rem

@media (max-width: 768px)
  .fixed-object
    right: 2.4rem
    bottom: 6.7rem

  .toast
    max-width: 350px

.mobile-sidebar
  position: fixed
  bottom: 0
  left: 0
  right: 0
  padding: 1.6rem 2.5rem
  background: $background
  color: $primary2
  .active
    border: 0
    color: $primary
</style>