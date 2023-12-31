<script>
export default {
  name: "TextBox",
  props: {
      'title': String,
      'name': String,
      'placeholder': String,
      'modelValue' : String,
      'minLength' : String
  },
  data(props) {
    return {
      value : '',
      isError : false,
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
  methods: {
    changeText(value)
    {
      this.validation(value)
      this.$emit('update:modelValue', value)
    },
    validation(v)
    {
      if(v.target.value.length <= parseInt(this.minLength))
      {
        this.isError = true
        this.TextBox.messageBox = `Минимальное количество символов составляет: ${this.minLength}`
      }else{
        this.isError = false
        this.TextBox.messageBox = ''
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
           v-bind:class="{'form-control':true, 'is-invalid' : isError}"
           :placeholder="placeholder"
           v-on:input="changeText"
           :aria-describedby="TextBox.nameText"
           required>
    <div :id="TextBox.nameText" v-bind:class ="{'d-block invalid-feedback' : isError}">{{TextBox.messageBox}}</div>
  </div>
</template>
