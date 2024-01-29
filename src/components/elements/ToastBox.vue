<template>
  <div class="toast align-items-center text-bg-primary border-0 fade fs-16 px-3 rounded-4" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex align-items-center">
      <i class="i-outline-information-circle fs-20"></i>
      <div class="toast-body">
        {{ text }}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Закрыть"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToastBox",
  props: {
    'text' : String,
    'color': String,
  }
}
</script>

<style scoped>

</style>