<template>
  <input type="submit" class="btn btn-primary" :class="{'disabled' : disabled}" :name="name" :value="title" />
</template>

<script>
export default {
  name: "ButtonBox",
  props:{
    'title': String,
    'name': String,
    'disabled' : Boolean
  }
}
</script>

<style scoped>

</style>