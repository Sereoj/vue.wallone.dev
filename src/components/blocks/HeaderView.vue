<template>
  <nav class="navbar navbar-expand-lg my-4" data-bs-theme="dark">
    <div class="container">
      <logo-box></logo-box>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Переключатель навигации">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-items-start" id="navbarMenu">
        <form class="m-auto w-50" role="search">
          <input class="form-control" type="search" placeholder="Поиск" aria-label="Поиск">
          <!--           Кнопку сюда!-->
          <div class="form-text" id="basic-addon4">
            <a href="#">#Popular </a>
            <a href="#">#Oldest </a>
            <a href="#">#Oldest </a>
          </div>
        </form>

        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">RU</a>
          </li>
          <li>
            <a class="nav-link" href="#">EN</a>
          </li>
        </ul>

        <ul class="navbar-nav me-0">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle mb-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <!--            Иконку сюда! -->
              Профиль
            </a>
            <ul class="dropdown-menu text-center">
              <li><a class="dropdown-item" href="#">Вход</a></li>
              <li><a class="dropdown-item" href="#">Регистрация</a></li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
import LogoBox from "@/components/blocks/LogoBox.vue";

export default {
  components: {
    LogoBox
  }
}
</script>