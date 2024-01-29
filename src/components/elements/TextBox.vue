<template>
  <div class="mb-3">
    <label :for="name" class="form-label">{{ title }}</label>
    <input type="text"
           :name="name"
           :id="name"
           v-bind:class="{'form-control':true, 'is-invalid' : message !== ''}"
           v-model="modelValue"
           :placeholder="placeholder"
           :aria-describedby="inputName(name)"
           >
    <div :id="inputName(name)" v-bind:class ="{'d-block invalid-feedback' : message !== ''}">{{message}}</div>
  </div>
</template>

<script setup>
import {defineProps, defineModel} from 'vue';
// eslint-disable-next-line no-unused-vars
const props = defineProps(['title', 'name','placeholder', 'message']);
const modelValue = defineModel()

const inputName = (name) => {
  return  name + "_message"
}
</script>
