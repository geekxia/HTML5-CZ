import Vue from 'vue'
import App from './App'
import store from '@/store'

// 全局导入组件库
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App,
    store
})
app.$mount()
