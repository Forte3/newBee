import { createApp } from 'vue'
import router from './router/routes.js'
import App from './App.vue'
import 'amfe-flexible'

import { Icon, Button } from 'vant'

const app = createApp(App)

app.use(Icon, Button)

app.use(router)
app.mount('#app')
