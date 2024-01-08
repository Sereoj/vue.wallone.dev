import '@/assets/style/iconly/iconly.sass'
import '@/assets/style/styles.scss'
import 'bootstrap/dist/js/bootstrap.bundle'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@unhead/vue'

createApp(App)
    .use(router)
    .use(createHead())
    .mount('#app')

console.log(`%cWallone is started`, 'color: #007AFF')
console.log(`Welcome Developer! Please read the link %cwallone.ru/devs`, 'color: #007AFF')