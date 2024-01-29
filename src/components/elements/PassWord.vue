<template>
  <div class="mb-3">
    <label :for="name" class="form-label">{{ title }}</label>
    <div class="input-group">

      <input
          v-bind:type="[showPassword ? 'text' : 'password']"
          :name="name"
          :id="name"
          :placeholder="placeholder"
          v-bind:class="{'form-control':true, 'is-invalid' : message !== ''}"
          v-model="modelValue"
          :aria-describedby="inputName(name)">

      <button class="input-group-text" @click="showPassword = !showPassword">
        <i class="i-inline-eye-off" v-if="showPassword"></i>

        <i class="i-inline-eye" v-else></i>
      </button>
    </div>
    <div :id="inputName(name)" v-bind:class ="{'d-block invalid-feedback' : message !== ''}">{{ message }}</div>
  </div>
</template>

<script setup>

import {defineProps, defineModel, ref} from 'vue';
// eslint-disable-next-line no-unused-vars
const props = defineProps(['title', 'name','placeholder', 'minLength', 'message']);
const showPassword = ref(false)

const modelValue = defineModel();

const inputName = (name) => {
  return  name + "_message"
}
</script>

<style lang="sass" scoped>
label
  font-size: 24px
</style>