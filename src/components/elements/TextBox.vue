<script setup>
import { ref, defineProps  } from 'vue'

const props = defineProps(['title', 'name', 'placeholder'])
const model = ref([])
console.log(props)
</script>

<template>
  <div class="mb-3">
    <label :for="name" class="form-label">{{ title }}</label>
    <input type="text" :name="name" :id="name" :placeholder="placeholder" class="form-control" v-model="model">
    {{ model }}
    <div class="invalid-feedback">Текст ошибки</div>
  </div>
</template>
