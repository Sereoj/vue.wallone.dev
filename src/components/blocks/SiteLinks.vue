<template>
  <div class="form-text" id="site-links">
    <router-link to="/images/new">#Новые </router-link>
    <router-link to="/images/popular">#Популярные </router-link>
    <!--      TODO: Важно понимать, что это объект первой видимости, он может пополняться, либо уменьшаться-->
    <router-link to="/images/popular">#Популярные </router-link>
    <router-link to="/images/popular">#Популярные </router-link>
    <router-link to="/images/popular">#Популярные </router-link>
    <router-link to="/images/soon">#Oжидаемые</router-link>
  </div>
</template>

<script>

export default {
  name: "SiteLinks",
  components: {}
}
</script>

<style scoped>

</style>