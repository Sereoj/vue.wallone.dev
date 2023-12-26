<template>
  <div class="logo">
      <a href="/" class="d-flex align-items-center">
        <img src="@/assets/logo.png" alt="Logo" height="52" class="me-3">
        <div>
          <h1 class="logo__name">Wallone</h1>
          <a href="/tags/popular" class="logo__brand">#One Day Container</a>
        </div>
      </a>
  </div>
</template>

<script>

</script>

<style lang="sass">
@import "@/assets/style/fonts"

.logo
  max-width: 20rem
  word-break: break-all

.logo__name
  @extend %logo-font
  color: $primary

.logo__brand
  font-size: 1rem
  color: $primary3
  font-family: "Roboto", serif
  &:hover
    color: $primary

</style>