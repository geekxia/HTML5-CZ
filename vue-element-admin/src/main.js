import Vue from 'vue'

// 用于cookie操作的一个包
import Cookies from 'js-cookie'
// 重置浏览器中各种标签的默认样式
import 'normalize.css/normalize.css'

// 引入ElementUI这个组件库（常用于做管理系统）
import Element from 'element-ui'
// 定制主题
import './styles/element-variables.scss'
// 指定ElementUI组件库的语言包
// import enLang from 'element-ui/lib/locale/lang/en'
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})
// 我们自己业务需要的全局样式
import '@/styles/index.scss'

// 引入根组件、store实例、router实例
import App from './App'
import store from './store'
import router from './router'

import './icons' // 引入icon图标的全局组件
import './permission' // 导航守卫（权限设计）
import './utils/error-log' // 错误日志

// 导入过滤器函数，并遍历注册成全局过滤器
// 过滤器一般只用文本类（String|Number）的数据处理
import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 启动mock服务，如果你不想使用mock，把下方代码注释掉
// 启动mock服务
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

Vue.prototype.$base = process.env.VUE_APP_BASE_API

// 关闭生产下的vue各种提示
Vue.config.productionTip = false
// 创建vue响应式组件（根组件）
new Vue({
  el: '#app', // SPA单页面应用的DOM挂载
  router, // 挂载router
  store, // 挂载store
  render: h => h(App) // 渲染函数
})
