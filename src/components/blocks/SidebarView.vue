<template>
  <div class="flex-nowrap">
<!--    Абстракция-->
<!--    Автомобили-->
<!--    Аниме-->
<!--    Видеоигры-->
<!--    Визуализация-->
<!--    Девушки-->
<!--    Животные-->
<!--    Космос-->
<!--    Люди-->
<!--    Моря-->
<!--    Природа-->
<!--    Самолеты-->
<!--    Фантастика-->
<!--    <div class="col-auto col-md-3 col-xl-2">-->
    <div>
      <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start navbar-nav" id="menu">
        <li>
          <a href="#type" data-bs-toggle="collapse" class="nav-link">
            <i class="fs-4 i-inline-photograph"></i> <span class="ms-1 d-none d-sm-inline">Тип</span> </a>
          <ul class="collapse show nav flex-column ms-1" id="type" data-bs-parent="#menu">
            <li class="w-100">
              <a href="/themes" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Темы</span></a>
            </li>
            <li class="w-100">
              <a href="/images" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Изображения</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#trends" data-bs-toggle="collapse" class="nav-link">
            <i class="fs-4 i-inline-fire"></i> <span class="ms-1 d-none d-sm-inline">Тренды</span></a>
          <ul class="collapse nav flex-column ms-1" id="trends" data-bs-parent="#menu">
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Новинки</span></a>
            </li>
            <li>
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Просматриваемые</span></a>
            </li>
            <li>
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Самые скачиваемые</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#main" data-bs-toggle="collapse" class="nav-link">
            <i class="fs-4 i-inline-lightning-bolt"></i> <span class="ms-1 d-none d-sm-inline">Основное</span> </a>
          <ul class="collapse show nav flex-column ms-1" id="main" data-bs-parent="#menu">
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Мои изображения</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Мои коллекции</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Мои закладки</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#categories" data-bs-toggle="collapse" class="nav-link">
            <i class="fs-4 i-outline-view-grid"></i> <span class="ms-1 d-none d-sm-inline">Категории</span> </a>
          <ul class="collapse show nav flex-column ms-1" id="categories" data-bs-parent="#categories">
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Абстракция</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Автомобили</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Аниме</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Видеоигры</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Визуализация</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Девушки</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Животные</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Космос</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Люди</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Моря</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Природа</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Самолеты</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Фантастика</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#optional" data-bs-toggle="collapse" class="nav-link">
            <i class="fs-4 i-inline-adjustments"></i> <span class="ms-1 d-none d-sm-inline">Дополнительно</span> </a>
          <ul class="collapse nav flex-column ms-1" id="optional" data-bs-parent="#menu">
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Все теги</span></a>
            </li>
            <li>
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Все категории</span></a>
            </li>
            <li>
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Все пользователи</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="nav-link">
            <i class="fs-4 i-inline-newspaper"></i> <span class="ms-1 d-none d-sm-inline">Статьи</span> </a>
        </li>
      </ul>

      <ul class="nav navbar-nav gap-3 mt-5">
        <li class="nav-item">
          <link-box title="О проекте" path="/about" name="about"/>
        </li>
        <li class="nav-item">
          <link-box title="Помощь" path="/help" name="help"/>
        </li>
        <li class="nav-item">
          <link-box title="Для разработчиков" path="/dev" name="dev"/>
        </li>
        <li class="nav-item">
          <link-box title="Политика конфиденциальности" path="/policy" name="policy"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import linkBox from "@/components/elements/LinkBox";

export default {
  components: {
    linkBox
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/style/fonts"

.nav-link
  color: $primary
  display: flex
  align-items: center

.nav-link:hover
  color: $primary2

.i-outline-view-grid
  color: #007AFF
</style>