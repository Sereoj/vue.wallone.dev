<template>
  <AuthLayout hidden/>
  <MainLayout/>
</template>

<script>
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  name: 'App',
  components: {
    AuthLayout,
    MainLayout
  }
}
</script>
<style lang="sass"></style>
