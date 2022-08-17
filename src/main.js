import { createApp } from 'vue'
import router from './router/routes.js'
import App from './App.vue'
import 'amfe-flexible'

import { Icon, Button, Toast, Form, Field, Skeleton } from 'vant'

const app = createApp(App)

app.use(Icon).use(Button).use(Toast).use(Form).use(Field).use(Skeleton)

app.use(router)
app.mount('#app')

