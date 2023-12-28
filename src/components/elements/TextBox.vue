<script>
export default {
  name: "TextBox",
  props: [
      'title',
      'name',
      'placeholder',
      'message'
  ],
  emits: ['update:value'],
  data(props) {
    return {
      value: "",
      TextBox:
      {
        name: props.name,
        nameText: props.name + "_text",
        title: props.title,
        placeholder: props.placeholder,
        messageBox: props.message
      }
    }
  },
  computed:{
  },
  mounted() {
    // TODO: Механика восстановления пароля
    document.title = 'Wallone • Восстановление пароля'
  }
}
</script>

<template>
  <div class="mb-3">
    <label :for="name" class="form-label">{{ title }}</label>
    <input type="text" :name="name" :id="name" :placeholder="placeholder" class="form-control" v-model="value" @input="$emit('update:text', $event.target.value)" :aria-describedby="TextBox.nameText">
    <div :id="TextBox.nameText" class="invalid-feedback">{{message}}</div>
  </div>
</template>
