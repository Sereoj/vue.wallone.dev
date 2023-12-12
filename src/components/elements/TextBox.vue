<template>
  <div class="mb-2">
    <label :for="name" class="form-label">{{ title }}</label>
    <input type="text" :name="name" :id="name" :placeholder="placeholder" class="form-control">
    <div class="form-text">Текст ошибки</div>
  </div>
</template>
<script>
  export default {
    props:[
      'title',
      "name",
      "placeholder"
    ]
  }
</script>