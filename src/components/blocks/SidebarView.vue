<template>
  <div class="flex-nowrap">
    <!--    <div class="col-auto col-md-3 col-xl-2">-->
    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start navbar-nav" id="menu">
      <li>
        <a href="#" class="nav-link">
          <i class="fs-4 i-inline-fire red"></i><span class="ms-1 d-none d-sm-inline">Тренды</span>
        </a>
      </li>
      <li>
        <a href="#main" data-bs-toggle="collapse" class="nav-link">
          <i class="fs-4 i-inline-lightning-bolt yellow"></i><span class="ms-1 d-none d-sm-inline">Основное</span></a>
        <ul class="collapse flex-column ms-4" id="main" data-bs-parent="#menu">
          <li class="w-100">
            <a href="#" class="nav-link"><i class="i-outline-photograph blue"/> <span class="d-none d-sm-inline">Мои изображения</span></a>
          </li>
          <li class="w-100">
            <a href="#" class="nav-link"><i class="i-outline-collection red"/> <span class="d-none d-sm-inline">Мои коллекции</span></a>
          </li>
          <li class="w-100">
            <a href="#" class="nav-link"><i class="i-outline-star yellow"/> <span class="d-none d-sm-inline">Мои закладки</span></a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#categories1" data-bs-toggle="collapse" class="nav-link">
          <i class="fs-4 i-outline-view-grid blue"></i><span class="ms-1 d-none d-sm-inline">Категории</span></a>
        <ul class="collapse flex-column ms-4" id="categories1" data-bs-parent="#menu">
          <li class="w-100" v-for="category in categories" :key="category">
            <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span
                class="d-none d-sm-inline">{{ category }}</span></a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#optional" data-bs-toggle="collapse" class="nav-link">
          <i class="fs-4 i-inline-adjustments red"></i><span class="ms-1 d-none d-sm-inline">Дополнительно</span></a>
        <ul class="collapse flex-column ms-4" id="optional" data-bs-parent="#menu">
          <li class="w-100">
            <a href="#" class="nav-link"><i class="i-outline-puzzle yellow"/><span
                class="d-none d-sm-inline">Все теги</span></a>
          </li>
          <li>
            <a href="#" class="nav-link"><i class="i-outline-view-grid blue"/><span class="d-none d-sm-inline">Все категории</span></a>
          </li>
          <li>
            <a href="#" class="nav-link"><i class="i-outline-users red"/><span class="d-none d-sm-inline">Все пользователи</span></a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="fs-4 i-inline-newspaper"></i><span class="ms-1 d-none d-sm-inline">Статьи</span></a>
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
        <link-box title="Для разработчиков" path="/devs" name="devs"/>
      </li>
      <li class="nav-item">
        <link-box title="Политика конфиденциальности" path="/privacy_statement" name="privacy_statement"/>
      </li>
    </ul>
  </div>
</template>

<script>
import linkBox from "@/components/elements/LinkBox";

export default {
  components: {
    linkBox
  },
  data() {
    return {
      categories: [
        'Абстракция',
        'Автомобили',
        'Аниме',
        'Видеоигры',
        'Визуализация',
        'Девушки',
        'Животные',
        'Космос',
        'Люди',
        'Моря',
        'Природа',
        'Самолеты',
        'Фантастика'
      ]
    }
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

.bg-component
  background: $componentColor
</style>