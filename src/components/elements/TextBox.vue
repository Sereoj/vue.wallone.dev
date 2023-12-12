<template>
  <div>
    <label :for="name"></label>
    <input type="text" :name="name" :id="name" :placeholder="placeholder" value="" aria-valuetext="">
    <span>Текст ошибки</span>
  </div>
</template>
<script>
  export default {
    props:[
      "placeholder",
        "name"
    ]
  }
</script>