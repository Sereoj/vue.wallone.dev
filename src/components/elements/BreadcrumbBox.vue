<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/"><i class="i-inline-home"/></a></li>
      <li class="breadcrumb-item" aria-current="page"><a href="#">Page</a></li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "BreadcrumbBox"
}
</script>

<style lang="sass" scoped>
a
  color: white

.breadcrumb-item + .breadcrumb-item:before
  color: white
</style>