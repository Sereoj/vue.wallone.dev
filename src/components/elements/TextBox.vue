<script>
export default {
  name: "TextBox",
  props: {
      'title': String,
      'name': String,
      'placeholder': String,
      'message': String,
      'isValid': Boolean,
  },
  emits: ['modelValue'],
  data(props) {
    return {
      modelValue : '',
      TextBox:
      {
        name: props.name,
        nameText: props.name + "_text",
        title: props.title,
        placeholder: props.placeholder,
        messageBox: props.message
      }
    }
  }
}
</script>

<template>
  <div class="mb-3">
    <label :for="name" class="form-label">{{ title }}</label>
    <input type="text"
           :name="name"
           :id="name"
           v-bind:class="{'form-control':true, 'is-invalid' : !isValid}"
           v-on:blur="!isValid"
           :placeholder="placeholder"
           class="form-control"
           v-model="modelValue"
           :aria-describedby="TextBox.nameText">
    <div :id="TextBox.nameText" class="invalid-feedback">{{message}}</div>
  </div>
</template>
