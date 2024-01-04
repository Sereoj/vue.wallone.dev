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
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" v-if="showPassword">
          <g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.72059 2.29292C3.53199 2.11076 3.27939 2.00997 3.01719 2.01224C2.75499 2.01452 2.50418 2.11969 2.31877 2.3051C2.13336 2.49051 2.0282 2.74132 2.02592 3.00352C2.02364 3.26571 2.12443 3.51832 2.30659 3.70692L16.3066 17.7069C16.4952 17.8891 16.7478 17.9899 17.01 17.9876C17.2722 17.9853 17.523 17.8801 17.7084 17.6947C17.8938 17.5093 17.999 17.2585 18.0013 16.9963C18.0035 16.7341 17.9028 16.4815 17.7206 16.2929L16.2476 14.8199C17.8051 13.578 18.9569 11.8998 19.5556 9.99992C18.2816 5.94292 14.4916 2.99992 10.0136 2.99992C8.44602 2.99779 6.90009 3.36577 5.50159 4.07392L3.72159 2.29292H3.72059ZM7.98159 6.55292L9.49559 8.06792C9.83468 7.97787 10.1915 7.97847 10.5303 8.06965C10.869 8.16083 11.1779 8.3394 11.426 8.58748C11.6741 8.83557 11.8527 9.14446 11.9439 9.48325C12.035 9.82204 12.0356 10.1788 11.9456 10.5179L13.4596 12.0319C13.9106 11.2679 14.0948 10.3757 13.9832 9.49559C13.8717 8.61548 13.4707 7.79741 12.8434 7.1701C12.2161 6.54278 11.398 6.14181 10.5179 6.03027C9.6378 5.91872 8.74557 6.10293 7.98159 6.55392V6.55292Z" fill="#fff"/>
            <path d="M12.4677 16.6969L9.76368 13.9919C8.79137 13.931 7.87471 13.5173 7.18574 12.8285C6.49677 12.1397 6.08285 11.2232 6.02168 10.2509L2.34868 6.57788C1.50389 7.5839 0.866029 8.7468 0.47168 9.99988C1.74568 14.0569 5.53668 16.9999 10.0137 16.9999C10.8607 16.9999 11.6827 16.8949 12.4677 16.6969Z" fill="#fff"/>
          </g>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" v-else>
          <g>
            <path d="M10.0137 12C10.5441 12 11.0528 11.7893 11.4279 11.4142C11.803 11.0391 12.0137 10.5304 12.0137 10C12.0137 9.46957 11.803 8.96086 11.4279 8.58579C11.0528 8.21071 10.5441 8 10.0137 8C9.48324 8 8.97453 8.21071 8.59946 8.58579C8.22439 8.96086 8.01367 9.46957 8.01367 10C8.01367 10.5304 8.22439 11.0391 8.59946 11.4142C8.97453 11.7893 9.48324 12 10.0137 12Z" fill="#fff"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.47168 10C1.74568 5.943 5.53568 3 10.0137 3C14.4917 3 18.2817 5.943 19.5557 10C18.2817 14.057 14.4917 17 10.0137 17C5.53568 17 1.74568 14.057 0.47168 10ZM14.0137 10C14.0137 11.0609 13.5923 12.0783 12.8421 12.8284C12.092 13.5786 11.0745 14 10.0137 14C8.95281 14 7.9354 13.5786 7.18525 12.8284C6.43511 12.0783 6.01368 11.0609 6.01368 10C6.01368 8.93913 6.43511 7.92172 7.18525 7.17157C7.9354 6.42143 8.95281 6 10.0137 6C11.0745 6 12.092 6.42143 12.8421 7.17157C13.5923 7.92172 14.0137 8.93913 14.0137 10Z" fill="#fff"/>
          </g>
        </svg>
      </button>
    </div>
    <div :id="PasswordBox.nameText" v-bind:class ="{'d-block invalid-feedback' : isError}">{{ message }}</div>
  </div>
</template>

<style lang="sass" scoped>
label
  font-size: 24px
</style>