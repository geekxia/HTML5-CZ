import { createApp, h } from 'vue'
// 分别引入根组件、引入路由系统、引入状态管理实例
import App from './App.vue'
import router from './router.ts'
import store from './store/index.ts'

// 按需引入Vant(v3)的组件
import { Button } from 'vant'

// 两种创建根实例的方式
// const app = createApp(App)
const app = createApp({
  data () {
    return {}
  },
  render() {
    return h(App)
  }
}, {version:'v3'}) // 给App组件传递props属性

// 挂载第三方插件
app.use(router)  // 注册路由系统
app.use(store)   // 注册状态管理

app.use(Button)  // 注册全局组件

// 全局数据（相当于Vue2的原型链功能）
app.config.globalProperties.baseUrl = 'http://localhost:9999'

app.mount('#app') // 挂载，把Vue3单页面应用挂载在DOM上
