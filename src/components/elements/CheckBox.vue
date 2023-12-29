<template>
    <div class="form-check">
        <input class="form-check-input" type="checkbox" :id="name">
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