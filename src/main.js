import { createApp } from 'vue'
import router from './router/routes.js'
import App from './App.vue'
import 'amfe-flexible'
// import 'vant/lib/index.css';
import 'vant/es/toast/style';

import { Icon, Button, Toast, Form, Field, Skeleton, Swipe, SwipeItem } from 'vant'

const app = createApp(App)

app.use(Icon).use(Button).use(Toast).use(Form).use(Field).use(Skeleton).use(Swipe).use(SwipeItem)

app.use(router)
app.mount('#app')

