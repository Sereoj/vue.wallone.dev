<template>
  <div class="row">
    <breadcrumb-box/>
    <p>Привет, user! Возникли вопросы? Наша техподдержка ответить на Ваши вопросы.</p>
    <textarea>
    </textarea>
    <combobox>
    </combobox>
    <button-box title="Отправить"/>
    <div>
      <p>Кроме того, мы отвечаем на ваши вопросы в социальных сетях и мессенджерах</p>
      <div>
        <img src="@/assets/images/sprites/vk.svg" alt="vk" srcset="">
        <img src="@/assets/images/sprites/telegram.svg" alt="telegram" srcset="">
      </div>
      <div>
        <p>Еще один способ связи с нами, написать напрямую на почту
          <link-box title="admin@wallone.ru" path="mailto:admin@wallone.ru" name="email"/>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBox from "@/components/elements/ButtonBox";
import LinkBox from "@/components/elements/LinkBox";
import BreadcrumbBox from "@/components/elements/BreadcrumbBox";

export default {
  name: "FeedbackView",
  components: {
    BreadcrumbBox,
    ButtonBox,
    LinkBox
  }
}
</script>

<style scoped>

</style>