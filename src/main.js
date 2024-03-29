import '@/assets/style/iconly/iconly.sass'
import '@/assets/style/styles.scss'
import 'bootstrap/dist/js/bootstrap.bundle'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import {defaultLocale, languages} from '@/js/i18n'
import {createI18n, useI18n} from 'vue-i18n'
import {createHead} from '@unhead/vue'

const messages = Object.assign(languages)

const I18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'ru',
  messages
});

createApp(App, {
  setup() {
    const {t} = useI18n()
    return {t}
  }
})
    .use(router)
    .use(I18n)
    .use(createHead())
    .mount('#app')

console.log(`Wallone %c❤`, 'color: #EB4747')
console.log(`Welcome Developer! Please read the link %cwallone.ru/devs`, 'color: #007AFF')