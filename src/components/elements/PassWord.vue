<template>
  <div class="mb-3">
    <label :for="name" class="form-label">{{ title }}</label>
    <input type="password" :name="name" :id="name" class="form-control">
  </div>
</template>
<script>
export default {
  props:[
    'title',
    "name",
  ]
}
</script>
<style lang="sass" scoped>
label
  font-size: 24px
</style>