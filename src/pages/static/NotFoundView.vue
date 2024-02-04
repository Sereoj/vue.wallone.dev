<template>
  <div class="mb-5 d-flex flex-column gap-5">
    <h2 class="text-center">Страница не найдена</h2>
    <img src="@/assets/images/404.svg" alt="Not found" class="col-12 col-lg-3 d-block m-auto">
    <div class="d-flex flex-column gap-2 text-center">
      <h4>Возможно Вы искали</h4>
      <ul class="navbar-nav">
        <li class="nav-item">
          <link-box name="find" title="Как опубликовать тему для Wallone?" path="/" class="text-center"/>
        </li>
        <li>
          <link-box name="find" title="Как загрузить тему в программу Wallone?" path="/" class="text-center"/>
        </li>
      </ul>
      <div>
        <link2-box name="find" title="#Природа " path="/"/>
        <link2-box name="find" title="#Светлые тона " path="/"/>
        <link2-box name="find" title="#Яблоки " path="/"/>
        <link2-box name="find" title="#Аниме " path="/"/>
        <link2-box name="find" title="#Девушка с бантиком " path="/"/>
      </div>
    </div>
  </div>
</template>

<script>

import linkBox from "@/components/elements/LinkBox";
import link2Box from "@/components/elements/Link2Box";

export default {
  name: "NotFoundView",
  components: {
    linkBox,
    link2Box
  }

}
</script>

<style scoped>

</style>
