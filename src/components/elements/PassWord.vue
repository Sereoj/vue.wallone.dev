<script>
export default {
  props:{
    'title': String,
    'name': String,
    'placeholder': String,
    'minLength' : String,
    'message': String,
    'isError' : Boolean
  },
  data(props) {
    return {
      showPassword: false,
      PasswordBox:
      {
            name: props.name,
            title: props.title,
            placeholder: props.placeholder,
            nameText: props.name + "_text",
            messageBox: props.message,
            value: ''
      },
    }
  },
  methods: {
    changeText(e)
    {
      let value = e.target.value
      this.PasswordBox.value = value
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<template>
  <div class="mb-3">
    <label :for="name" class="form-label">{{ title }}</label>
    <div class="input-group">

      <input
          v-bind:type="[showPassword ? 'text' : 'password']"
          :name="name"
          :id="name"
          :placeholder="placeholder"
          v-bind:class="{'form-control':true, 'is-invalid' : isError}"
          v-on:input="changeText"
          :aria-describedby="PasswordBox.nameText">

      <button class="input-group-text" @click="showPassword = !showPassword">
        <i class="i-inline-eye-off" v-if="showPassword"></i>

        <i class="i-inline-eye" v-else></i>
      </button>
    </div>
    <div :id="PasswordBox.nameText" v-bind:class ="{'d-block invalid-feedback' : isError}">{{ message }}</div>
  </div>
</template>

<style lang="sass" scoped>
label
  font-size: 24px
</style>