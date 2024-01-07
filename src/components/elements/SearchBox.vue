<template>
  <form class="col-lg-7 col-xl-8 col-cxl-9 ms-xxl-5 ms-cxl-0" role="search">
    <div class="input-group">
      <input class="form-control" type="search" placeholder="Поиск" aria-label="Поиск" @click="isSearch = !isSearch" v-model="searchText" maxlength="64">
      <button class="input-group-text">
        <i class="i-outline-search"></i>
      </button>
    </div>

    <site-links />

    <ul class="dropdown-menu m-auto" :class="isSearch && 'show'">
      <li><a class="dropdown-item" href="#">{{ searchText }}</a></li>
      <li><a class="dropdown-item" href="#">{{ searchText }}</a></li>
      <li><a class="dropdown-item" href="#">{{ searchText }}</a></li>
      <li><a class="dropdown-item" href="#">{{ searchText }}</a></li>
      <li><p class="dropdown-item">Не найдено</p></li>
    </ul>
  </form>
</template>

<script>
import SiteLinks from "@/components/blocks/SiteLinks.vue";

export default {
  name: "SearchBox",
  components: {SiteLinks},
  data() {
    return {
      searchText : "",
      isSearch: false
    }
  }
}
</script>

<style scoped>

</style>