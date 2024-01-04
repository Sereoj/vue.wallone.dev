<template>
  <header>
    <nav class="navbar navbar-expand-lg my-4" data-bs-theme="dark">
      <div class="container">
        <!--        Это логотип-->
        <logo-box name="logoBox" class="col-lg-4 col-xxl-2" />

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Переключатель навигации">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse align-items-start" id="navbarMenu">
          <!--            TODO: По макету: ширина поисковика должна быть на 70+% всей ширины объекта-->
          <search-box />

          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link class="nav-link active border-end border-primary" to="ru">RU</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="en">EN</router-link>
            </li>
          </ul>

          <ul class="navbar-nav me-0">
            <li class="nav-item dropdown">
              <a class="nav-link icon-link dropdown-toggle mb-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.126 28.572" class="bi" aria-hidden="true">
                  <path d="M 14.063 0 C 6.294 0 0 6.394 0 14.286 C 0 22.178 6.294 28.572 14.063 28.572 C 21.832 28.572 28.126 22.178 28.126 14.286 C 28.126 6.394 21.832 0 14.063 0 Z M 14.063 5.53 C 16.819 5.53 19.053 7.8 19.053 10.599 C 19.053 13.399 16.819 15.669 14.063 15.669 C 11.307 15.669 9.073 13.399 9.073 10.599 C 9.073 7.8 11.307 5.53 14.063 5.53 Z M 14.063 25.346 C 10.734 25.346 7.751 23.814 5.755 21.417 C 6.821 19.378 8.908 17.973 11.341 17.973 C 11.477 17.973 11.613 17.996 11.744 18.036 C 12.481 18.278 13.252 18.434 14.063 18.434 C 14.874 18.434 15.651 18.278 16.382 18.036 C 16.513 17.996 16.649 17.973 16.785 17.973 C 19.218 17.973 21.304 19.378 22.371 21.417 C 20.374 23.814 17.392 25.346 14.063 25.346 Z" transform="matrix(1, 0, 0, 1, -5.684341886080802e-14, 0)"/>
                </svg>
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