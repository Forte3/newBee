import { createApp } from 'vue'
import router from './router/routes.js'
import store from './store'
import App from './App.vue'
import 'amfe-flexible'
// import 'vant/lib/index.css';
import 'vant/es/toast/style';

import { Icon, Button, Toast, Form, Field, Skeleton, Swipe, SwipeItem, Tab, Tabs, PullRefresh, List, ActionBar, ActionBarIcon, ActionBarButton, SwipeCell, Checkbox, CheckboxGroup, SubmitBar, Stepper, Popup } from 'vant'

const app = createApp(App)

// 全局过滤器
app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith('http')) {
      return url
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`
      return url
    }
  }
}

app.use(Icon).use(Button).use(Toast).use(Form).use(Field).use(Skeleton).use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(PullRefresh).use(List).use(ActionBar).use(ActionBarIcon).use(ActionBarButton).use(SwipeCell).use(Checkbox).use(CheckboxGroup).use(SubmitBar).use(Stepper).use(Popup)

app.use(router)
app.use(store)
app.mount('#app')

