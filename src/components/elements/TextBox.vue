<script>
export default {
  name: "TextBox",
  props: {
      'title': String,
      'name': String,
      'placeholder': String,
      'modelValue' : String,
      'minLength' : String,
      'message': String,
      'isError' : Boolean
  },
  data(props) {
    return {
      TextBox:
      {
        name: props.name,
        nameText: props.name + "_text",
        title: props.title,
        placeholder: props.placeholder,
        value: ''
      }
    }
  },
  methods: {
    changeText(e)
    {
      let value = e.target.value
      this.TextBox.value = value
      this.$emit('update:modelValue', value)
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
           v-bind:class="{'form-control':true, 'is-invalid' : isError}"
           :placeholder="placeholder"
           v-on:input="changeText"
           :value="modelValue"
           :aria-describedby="TextBox.nameText"
           >
    <div :id="TextBox.nameText" v-bind:class ="{'d-block invalid-feedback' : isError}">{{message}}</div>
  </div>
</template>
