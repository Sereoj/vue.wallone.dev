<template>
  <div class="nav-item mt-1" id="site-links">
    <link2-box name="newyear" path="https://wallone.ru/search?query=New year" title="#New year "/>
    <link2-box name="new" path="/images/new" title="#Новые "/>
    <link2-box name="popular" path="/images/popular" title="#Популярные "/>
    <link2-box name="soon" path="/images/soon" title="#Ожидающие"/>
  </div>
</template>

<script>
import link2Box from "@/components/elements/Link2Box";

export default {
  name: "SiteLinks",
  components: {
    link2Box
  }
}
</script>

<style lang="scss" scoped>
a {
  font-size: 0.875rem;
}
</style>