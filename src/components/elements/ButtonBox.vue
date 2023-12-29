<template>
  <input type="submit" class="btn btn-primary" :name="name" :value="title" />
</template>

<script>
export default {
  name: "ButtonBox",
  props:{
    'title': String,
    'name': String,
  }
}
</script>

<style scoped>

</style>