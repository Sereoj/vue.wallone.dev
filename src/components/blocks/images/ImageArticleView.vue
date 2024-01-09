<template>
<div class="card" v-if="user && image">
  <img :src="image.preview" alt="card">
  <a :href="slug" class="d-flex flex-column justify-content-between p-2 overflow-hidden card-thumbnail">
    <div class="d-flex justify-content-between align-items-center">
          <span>
            <i class="i-tag-popular" v-if="image.fields.popular"></i>
            <i class="i-tag-star" v-if="image.fields.favorite"></i>
          </span>
      <span class="badge bg-purple">{{ image.type }}</span>
    </div>
    <h2 class="text-center fs-32">{{ image.name }}</h2>
    <a :href="userSlug" class="username">
      <div class="d-flex align-items-center">
        <img :src="user.avatar" alt="user" class="nav-icon ms-2">
        <p class="text-overflow me-2">{{ user.username }}</p>

        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="user.verify">
          <path d="M16.2902 9.83054L17.9069 8.24833C18.3888 7.79211 18.1641 6.98134 17.532 6.83017L15.3294 6.26802L15.9503 4.0878C16.1258 3.46069 15.5345 2.86919 14.9075 3.04468L12.7281 3.66579L12.1661 1.46251C12.0174 0.840285 11.1976 0.612719 10.7484 1.08747L9.16677 2.71668L7.58512 1.0875C7.14109 0.618133 6.31784 0.833183 6.16744 1.46255L5.6055 3.66582L3.42598 3.04472C2.7989 2.86915 2.20778 3.46086 2.38321 4.08784L3.00411 6.26805L0.801565 6.8302C0.169173 6.98141 -0.0550895 7.79232 0.426623 8.24833L2.04329 9.83054L0.426623 11.4127C-0.0553004 11.8689 0.169419 12.6797 0.801529 12.8309L3.00407 13.393L2.38318 15.5732C2.20771 16.2004 2.79904 16.7919 3.42595 16.6164L5.60543 15.9952L6.16737 18.1985C6.32343 18.8516 7.14106 19.0429 7.58505 18.5736L9.16677 16.9563L10.7484 18.5736C11.1879 19.0478 12.0136 18.8368 12.1661 18.1985L12.728 15.9952L14.9075 16.6164C15.5346 16.7919 16.1257 16.2002 15.9503 15.5732L15.3294 13.393L17.5319 12.8309C18.1643 12.6796 18.3886 11.8688 17.9068 11.4127L16.2902 9.83054Z" fill="#007AFF"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.694 6.65613C13.8205 6.78271 13.8916 6.95437 13.8916 7.13335C13.8916 7.31234 13.8205 7.484 13.694 7.61058L8.29399 13.0106C8.16741 13.1371 7.99575 13.2082 7.81676 13.2082C7.63778 13.2082 7.46612 13.1371 7.33954 13.0106L4.63953 10.3106C4.51657 10.1833 4.44854 10.0128 4.45008 9.83578C4.45161 9.6588 4.5226 9.4895 4.64775 9.36435C4.77291 9.2392 4.9422 9.16821 5.11919 9.16667C5.29617 9.16513 5.46668 9.23317 5.59398 9.35613L7.81676 11.5789L12.7395 6.65613C12.8661 6.52959 13.0378 6.4585 13.2168 6.4585C13.3958 6.4585 13.5674 6.52959 13.694 6.65613Z" fill="white"/>
        </svg>
      </div>
    </a>
  </a>
</div>
</template>

<script>
export default {
  name: "ImageArticleView",
  props: {
    'image': Object,
    'user': Object
  },
  data(props){
    return {
      'userSlug': `/profile/${props.user.slug}`,
      'slug': props.image === 'IMG' ? `/images/${props.image.slug}` : `/themes/${props.image.slug}`
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/assets/style/fonts.sass"

.card
  border-radius: 0.625rem
  box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.05)

.card>img
  object-fit: cover
  height: 200px
  border-radius: inherit

.card-thumbnail
  opacity: 0
  background-color: #0008
  color: $primary
  border-radius: inherit
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  transition: .5s
  &:hover
    opacity: 1

.card-main
  h2
    font-size: 3rem
  &>img
    height: 300px

.bg-purple
  background-color: $purple
</style>