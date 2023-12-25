<script>
export default {
  props:[
    'title',
    "name",
  ],
  data() {
    return {
      showPassword: false,
      password: ''
    }
  }
}
</script>

<template>
  <div class="mb-3">
    <label :for="name" class="form-label">{{ title }}</label>
    <input v-bind:type="[showPassword ? 'text' : 'password']" :name="name" :id="name" class="form-control" v-model="password">
    <button v-on:click="showPassword = !showPassword">
      Иконка нафиг
      <!--      TODO: Иконка нафиг-->
    </button>
  </div>
</template>

<style lang="sass" scoped>
label
  font-size: 24px
</style>