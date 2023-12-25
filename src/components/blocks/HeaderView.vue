<template>
  <header>
    <nav class="navbar navbar-expand-lg my-4" data-bs-theme="dark">
      <div class="container">
        <!--        Это логотип-->
        <logo-box name="logoBox"/>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Переключатель навигации">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse align-items-start" id="navbarMenu">
          <!--            TODO: По макету: ширина поисковика должна быть на 70+% всей ширины объекта-->
          <search-box/>

          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link class="nav-link active" to="ru">RU</router-link>
            </li>
            <li class="nav-item">
              <p>|</p>
            </li>
            <li>
              <router-link class="nav-link" to="en">EN</router-link>
            </li>
          </ul>

          <ul class="navbar-nav me-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle mb-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Профиль
              </a>
              <ul class="dropdown-menu text-center">
                <li><router-link class="dropdown-item" to="login">Вход</router-link></li>
                <li><router-link class="dropdown-item" to="register">Регистрация</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="sass">
  .w-70
    width: 70%
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