<template>
  <header>
    <nav class="navbar navbar-expand-lg my-4" data-bs-theme="dark">
      <div class="container align-items-start">

        <!--        Это логотип-->
        <logo-box name="logoBox" class="col-lg-3 col-xxl-2" />

        <a class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Переключатель навигации">
          <span class="i-inline-menu"></span>
        </a>
        <div class="collapse navbar-collapse align-items-start justify-content-between" id="navbarMenu">

          <search-box class="my-3 m-lg-0" />

          <ul class="navbar-nav text-center d-none d-md-flex">
            <li class="nav-item">
              <router-link class="nav-link active" to="ru">RU</router-link>
            </li>
            <li class="nav-item border-end border-primary d-none d-lg-block"></li>
            <li class="nav-item">
              <router-link class="nav-link" to="en">EN</router-link>
            </li>
          </ul>

          <ul class="navbar-nav text-center d-none d-md-block">
            <li class="nav-item dropdown">
              <a class="nav-link icon-link dropdown-toggle mb-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="i-inline-userb"></i>
                Профиль
              </a>
              <ul class="dropdown-menu text-center">
                <li><router-link class="dropdown-item" to="/login">Вход</router-link></li>
                <li><router-link class="dropdown-item" to="/register">Регистрация</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
@import "@/assets/style/fonts"

.w-70
  width: 70%

.active
  border-bottom: 0
  padding-bottom: 0

</style>

<script>
import LogoBox from "@/components/blocks/LogoBox.vue";
import SearchBox from "@/components/elements/SearchBox";
export default {
  components: {
    LogoBox, SearchBox
  }
}
</script>