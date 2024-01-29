<template>
    <div class="form-check">
        <input class="form-check-input"
               type="checkbox"
               v-model="modelValue"
               :id="name"
               :required="required"
        >
        <label class="form-check-label ms-3" :for="name">
            {{ title }}
        </label>
    </div>
</template>

<script setup>
import {defineProps, defineModel} from 'vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps(['name', 'title', 'required']);
const modelValue = defineModel();

</script>

<style lang="sass">
  @import '@/assets/style/fonts.sass'

  .form-check-input
    height: 32px
    width: 32px

  .form-check-label
    font-size: 20px

  .form-check
    display: flex
    align-items: center !important
</style>