import { createApp } from 'vue'
import router from './router/routes.js'
import App from './App.vue'
import 'amfe-flexible'

import { Icon, Button, Toast, Form, Field, } from 'vant'

const app = createApp(App)

app.use(Icon).use(Button).use(Toast).use(Form).use(Field)

app.use(router)
app.mount('#app')

// Vue.prototype.$md5 = md5;
