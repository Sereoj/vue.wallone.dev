<template>
    <div class="form-check">
        <input class="form-check-input"
               type="checkbox"
               v-on:input="checkInput"
               :id="name">
        <label class="form-check-label ms-3" :for="name">
            {{ title }}
        </label>
    </div>
</template>

<script>
export default {
    props: {
      'name': String,
      'title': String
    },
    data(props) {
      return {
        CheckBox: {
          name: props.name,
          title: props.title,
          checked: false
        }
      }
    },
    methods: {
      checkInput(e){
        let val = e.target.checked
        this.$emit('update:modelValue', val)
        this.CheckBox.checked = val
      }
    }

}
</script>

<style lang="sass">
  @import '@/assets/style/fonts.sass'

  .form-check-input
    height: 32px
    width: 32px

  .form-check-label
    font-size: 20px

  .form-check
    display: flex
    align-items: center !important
</style>