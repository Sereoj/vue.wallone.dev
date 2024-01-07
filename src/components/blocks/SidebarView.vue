<template>
  <div class="flex-nowrap">
<!--    <div class="col-auto col-md-3 col-xl-2">-->
    <div>
      <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start navbar-nav" id="menu">
        <li>
          <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Категории</span> </a>
          <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Абстракция</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Аниме</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Аниме</span></a>
            </li>
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Аниме</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Теги</span></a>
          <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Популярные</span> 1</a>
            </li>
            <li>
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Популярные</span> 2</a>
            </li>
            <li>
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Популярные</span> 2</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
          <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
            <li class="w-100">
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Product</span> 1</a>
            </li>
            <li>
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Product</span> 2</a>
            </li>
            <li>
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Product</span> 3</a>
            </li>
            <li>
              <a href="#" class="nav-link"><img src="@/assets/images/auth/1.jpg" alt="icon" class="nav-icon"> <span class="d-none d-sm-inline">Product</span> 4</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="nav-link px-0 align-middle">
            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
        </li>
      </ul>

      <ul class="nav navbar-nav gap-3 mt-5">
        <li class="nav-item">
          <a href="#">Помощь</a>
        </li>
        <li class="nav-item">
          <a href="#">О сайте</a>
        </li>
        <li class="nav-item">
          <a href="#">Политика конфиденциальности</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style lang="sass" scoped>
@import "@/assets/style/fonts"

.nav-link
  color: $primary
  display: flex
  align-items: center

.nav-link:hover
  color: $primary2
</style>