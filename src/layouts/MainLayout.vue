<template>
  <header-view />
  <div class="container">

    <div class="row">
      <sidebar-view class="col-md-4 col-lg-3 col-cxl-2 d-none d-md-block" />
      <router-view class="col-md-8 col-lg-9 col-cxl-10" />
    </div>
  </div>

  <div class="d-md-none mobile-sidebar fs-32">
    <ul class="d-flex justify-content-between text-center">
      <li class="nav-item col">
        <router-link to="/categories" class="nav-link"><i class="i-inline-view-grid"></i></router-link>
      </li>
      <li class="nav-item col">
        <router-link to="/" class="nav-link"><i class="i-inline-view-grid-add"></i></router-link>
      </li>
      <li class="nav-item col">
        <router-link to="/login" class="nav-link"><i class="i-inline-userb"></i></router-link>
      </li>
    </ul>
  </div>

  <div class="fixed-object d-flex flex-column align-items-end gap-3 d-none">
    <toast-box text="Добро пожаловать в Wallone" class="bg-success"/>
    <toast-box text="Мы используем cookie для обработки ваших персональных данных."/>

    <button class="btn-up i-inline-arrow-up" :class="isVisible ? 'opacity-100' : 'opacity-0'" @click="scrollToTop()"></button>
  </div>
</template>

<script>
import HeaderView from "@/components/blocks/HeaderView.vue";
import SidebarView from "@/components/blocks/SidebarView";
import toastBox from "@/components/elements/ToastBox";

export default {
  components: {
    SidebarView,
    HeaderView,
    toastBox
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
