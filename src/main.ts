import { createApp } from 'vue'
import './resetStyle.sass'
import './variablesStyle.sass'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './index.css'

// create store
const pinia = createPinia();
// create app
const app = createApp(App);

app.use(router)
app.use(pinia)
app.mount('#app')
