<template>
    <div class="d-flex mt-5 d-none d-lg-block">
      <div class="container adbox">
        <p class="text-center" v-if="isEnable">Отключите пожалуйста Adblock</p>
        <p class="text-center" v-if="!isEnable">Реклама, не мобильная</p>
      </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { detectAnyAdblocker } from 'vue-adblock-detector'

const isEnable = ref(false);

detectAnyAdblocker().then((detected) => {
  isEnable.value = detected
})
</script>

<style lang="scss" scoped>
.adbox
{
  background: #2B2B2B;
  width: 45vw;
  height: 4rem ;
}
</style>