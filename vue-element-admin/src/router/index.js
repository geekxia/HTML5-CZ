import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router) // 注册路由

/* 整个管理系统的布局 */
import Layout from '@/layout'

import { commonRoutes, referRoutes } from './backup'

import good from './modules/good'


/* 与权限无关的路由规则，是所有用户都有权访问的页面。*/
export const constantRoutes = [
  // ...commonRoutes,
  // 用人话解释：当你访问 /redirect/xxx，Redirect这个组件在 Layout组件内部中的 <router-view>中显示，Layout在 App.vue中 <router-view>中显示。这就是“嵌套路由”。
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        // 比如这个组件叫 Redirect 页面组件
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',  // 每个用户都有首页
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页大屏', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/* 与权限有关的路由规则，要根据当前登录用户的角色来动态添加的路由规则 */
export const asyncRoutes = [
  // ...referRoutes,
  good,
  // 文章管理模块
  {
    path: '/article',
    component: Layout,
    alwaysShow: true,
    name: 'Article',
    meta: {
      title: '文章管理',
      icon: 'documentation',
      roles: ['editor']
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/article/article-list'),
        name: 'ArticleList',
        meta: {
          title: '文章列表',
          roles: ['editor']
        }
      },
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

// 工厂函数：用于创建路由实例
const createRouter = () => new Router({
  mode: 'hash', // require service support
  scrollBehavior: () => ({ y: 0 }),
  // 指定路由规则（只考虑了没有权限的页面）
  // 问题：那些有权限的 asyncRoutes路由规则是何时生效呢？（导航守卫）
  routes: constantRoutes
})
// 创建路由实例
const router = createRouter()

// router.beforeEach()代码原本是可以在这里编写的
// 因为权限设计非常重要，所以作者将封装成 permission.js

// 当切换用户或角色时，需要重置路由
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
