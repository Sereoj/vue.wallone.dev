<template>
  <div class="container">
    <div class="form-text" id="basic-addon4">
      <router-link to="new">#Новые </router-link>
      <router-link to="popular">#Популярные </router-link>
      <!--      TODO: Важно понимать, что это объект первой видимости, он может пополняться, либо уменьшаться-->
      <router-link to="popular">#Популярные </router-link>
      <router-link to="popular">#Популярные </router-link>
      <router-link to="popular">#Популярные </router-link>

      <router-link to="soon">#Oжидаемые</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteLinks"
}
</script>

<style scoped>

</style>