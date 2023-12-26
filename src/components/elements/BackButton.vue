<template>
  <!--  Повторяющий элемент-->
  <router-link to="login" class="backButton">
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
      <rect width="23" height="23" rx="2" fill="#007AFF"/>
      <path fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.6131 6.08695C14.8287 6.30261 14.9498 6.59506 14.9498 6.9C14.9498 7.20494 14.8287 7.49739 14.6131 7.71305L10.8261 11.5L14.6131 15.2869C14.8226 15.5038 14.9385 15.7943 14.9359 16.0959C14.9333 16.3974 14.8123 16.6858 14.5991 16.899C14.3859 17.1123 14.0974 17.2332 13.7959 17.2358C13.4944 17.2384 13.2039 17.1225 12.987 16.913L8.387 12.313C8.17141 12.0974 8.05029 11.8049 8.05029 11.5C8.05029 11.1951 8.17141 10.9026 8.387 10.6869L12.987 6.08695C13.2027 5.87136 13.4951 5.75024 13.8 5.75024C14.105 5.75024 14.3974 5.87136 14.6131 6.08695Z"
            fill="white"/>
    </svg>
    Вернуться назад
  </router-link>
</template>

<script>
export default {
  name: "backButton"
}
</script>

<style lang="sass">
@import "@/assets/style/variables"

.backButton
  color: $primary3
  &:hover
    color: $primary

</style>