<template>
  <div class="mb-3">
    <label :for="name" class="form-label">{{ title }}</label>
    <textarea class="form-control" :id="name" :name="name" rows="3" v-model="modelValue"/>
  </div>
</template>

<script setup>
import {defineModel, defineProps} from 'vue';

defineProps(['name', 'title'])
const modelValue = defineModel()
</script>

<style scoped>

</style>