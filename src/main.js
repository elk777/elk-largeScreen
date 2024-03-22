// import './assets/main.css'
// import './styles/reset.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import chartView from './components/Chart/index.vue'

const app = createApp(App)

app.component('chart-view', chartView)
app.use(createPinia())
app.use(router)

app.mount('#app')
