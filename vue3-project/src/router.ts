import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 路由懒加载
const Study = () => import('@/pages/study/Study.vue')
const Home = () => import('@/pages/home/Home.vue')
const Find = () => import('@/pages/find/Find.vue')

// 创建路由实例
const router = createRouter({
  // 指定路由模式
  history: createWebHashHistory(),  // hash模式
  // history: createWebHistory(),  // history模式

  routes: [
    // { path: '/', component: Study },
    { path: '/', component: Home },
    { path: '/find', component: Find },
    { path: '/cnode', component: ()=>import('@/pages/cnode/index.vue') }
  ]
})

export default router
