<template>
  <div class="container-fluid row">
    <div class="col-5 auth">
      <div class="logo">
        <div class="d-flex align-items-center">
          <img src="@/assets/logo.png" alt="Logo" height="52">
          <div class="ms-2">
            <a href="#" class="logo-name"><h1>Wallone</h1></a>
            <a href="#" class="brand-name">#Brand</a>
          </div>
        </div>
      </div>
    </div>
  
    <div class="container col-7 m-auto">
      <login-view />
    </div>
  </div>
</template>

<script>
import LoginView from "@/pages/auth/LoginView";
export default {
  components: { LoginView }
}
</script>

<style lang="sass" scoped>
@import '@/assets/style/styles.sass'

a 
  color: $primary
  @extend %default

.logo 
  margin: 38px 0 0 48px
  width: 150px
  word-break: break-all

.logo-name
  @extend %logo-font

.brand-name
  font-size: $default-font-p

.auth
  background: url('@/assets/images/auth.jpg') no-repeat
  background-position: center
  background-size: cover
  object-fit: cover
  height: 100vh
</style>