<template>
  <div class="">
    <p>Сайт разработан
      <link-box name="company" title="Opt Group" path="https://theoptgroup.ru"/>
    </p>
    <p><i class="i-inline-heart red"/> Love is Wallone</p>
    <p>© 2024 All Rights Reserved</p>
  </div>
</template>

<script>
import linkBox from "@/components/elements/LinkBox";

export default {
  name: "FooterView",
  components: {linkBox}

}
</script>

<style scoped>

</style>