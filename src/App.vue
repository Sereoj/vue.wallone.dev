<template>
  <AuthLayout/>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";

export default {
  name: 'App',
  components: {
    AuthLayout,
  }
}
</script>
<style lang="scss" scoped>
  @import url('assets/style/styles.scss');
  body{
    background: $main-color;
  }
</style>
