import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

const app = createApp(App)
app.config.globalProperties.$bus = mitt()
app.mount('#app')
