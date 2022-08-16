import { createApp } from 'vue'
import router from './router/routes.js'
import App from './App.vue'
import 'amfe-flexible'

import { Icon, Button, Toast } from 'vant'

const app = createApp(App)

app.use(Icon).use(Button).use(Toast)

app.use(router)
app.mount('#app')
