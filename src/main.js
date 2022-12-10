import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import 'bootstrap-icons/font/bootstrap-icons.css'

const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter

app.mount('#app')