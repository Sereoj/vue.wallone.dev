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
    props: [
        'name',
        'title'
    ]
}
</script>

<style lang="sass" scoped>
    @import '@/assets/style/styles.sass'


    label
        font-size: $default-font-p

    .form-check-input
        --bs-form-check-bg: $componentColor
        background-color: $componentColor
        border: none
        height: 32px
        width: 32px
        margin: 0
        padding: 0

    .form-check-input:checked
        background-color: $componentColor
        color: $primary
        border: 2px solid $primary2

    .form-check
        display: flex
        align-items: center !important

</style>