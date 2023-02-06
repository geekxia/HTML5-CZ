import router from './router' // 导入路由实例
import store from './store' // 导入store实例

import { Message } from 'element-ui' // 引入消息提示组件
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式文件
NProgress.configure({ showSpinner: false }) // 进度条配置（参见官方仓库）

import { getToken } from '@/utils/auth' // 工具方法，用于从cookie中取出token
import getPageTitle from '@/utils/get-page-title' // 根据页面动态改变document.title

const whiteList = ['/login', '/auth-redirect'] // 无须登录就可以访问的页面列表

// 添加全局导航守卫的钩子 router.beforeEach(function(to,from,next))
// 这里的async是什么意思？在这个函数中，要使用await把Promise变成同步代码
// 知识点：async/await 是Promise同步语法的语法糖
// 这个路由钩子，每次访问路由或切换路由时，都会执行，相当于一个“保安”
router.beforeEach(async(to, from, next) => {
  NProgress.start() // 打开进度条
  document.title = getPageTitle(to.meta.title) // 使用元信息中title字段设置标题
  // 判断当前用户是否登录了，Y-有token，N-没有token
  const hasToken = getToken()
  // Y-有token的时候
  if (hasToken) {
    // 访问登录页
    if (to.path === '/login') {
      // 如果用户已登录，如果你访问/login，直接重定向到系统内部的首页
      // 也就是说，如果已登录，是不能再访问 /login页面了
      next({ path: '/' })
      NProgress.done()
    } else { // 访问非登录页面
      // 判断当前用户是否有“角色”信息（这个角色信息是后端返回的）
      // 用户信息（包括角色信息）放在Vuex中的
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      // 当Vuex中有用户角色信息时
      if (hasRoles) {
        next() // Vuex中有用户信息，不拦截
      } else { // Vuex中没有用户角色信息时
        try {
          // 如果Vuex中没有用户角色信息，触发user/getInfo调接口获取用户信息
          // 下面这行代码是同步代码，这个roles是后端接口返回的用户角色字段（数组）
          // 强调一下数据类型：roles是后端返回的，必须是个数组，比如 ['admin',...]
          const { roles } = await store.dispatch('user/getInfo')

          // 根据roles这个后端返回的角色信息，动态生成当前用户有权访问的路由规则
          // 下面这行代码也是同步代码，返回的是当前用户可以访问的路由规则
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // 手动向路由实例的 routes选项 中添加路由规则
          router.addRoutes(accessRoutes)
          // accessRoutes.forEach(route=>router.addRoute(route))
          // 一个重要问题：那些有权限的路由规则是如何添加到routes中呢？
          // 到这里，我们就已经有了答案。

          // 权限路由规则已经加入到了 routes选项中，你通过了，去访问吧
          next({ ...to, replace: true })
        } catch (error) {
          // 向后端获取用户信息，要使用token换取。token有可能是假的、或者是过期的？
          // 如果获取用户信息、生成路由规则报错，就重置token，让用户重新登录
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    // N-没有token时
    if (whiteList.indexOf(to.path) !== -1) {
      // 没有登录，并且访问的是白名单中的页面，不拦截
      next()
    } else {
      // 没有登录？访问非白名单，拦截，去登录吧
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})
// router.beforeResolve((to,from,next))
router.afterEach(() => {
  NProgress.done() // 关闭加载页面的进度条
})
