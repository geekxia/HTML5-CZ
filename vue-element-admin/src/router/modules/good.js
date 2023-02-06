import Layout from '@/layout'

export default {
  path: '/good',   // 商品管理模块
  component: Layout,
  redirect: '/good/list',
  alwaysShow: true,
  name: 'Good',
  meta: {
    title: '商品管理',
    icon: 'shopping',
    roles: ['admin','editor']
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/good/good-list'),
      name: 'GoodList',
      meta: {
        title: '商品列表',
        roles: ['editor']
      }
    },
    {
      path: 'cate',
      component: () => import('@/views/good/good-cate'),
      name: 'GoodCate',
      meta: {
        title: '品类管理',
        roles: ['admin']
      }
    },
    {
      path: 'add',
      component: () => import('@/views/good/good-form'),
      name: 'GoodAdd',
      hidden: true,  // 这不是route字段，是自定义属性
      meta: {
        title: '商品新增',
        roles: ['editor'],
        noCache: true,
        noTag: true  // 是否将当前页面放在tagViews上
      }
    },
    {
      path: 'edit/:id',  // 动态路由
      component: () => import('@/views/good/good-form'),
      name: 'GoodEdit',
      hidden: true,  // 这不是route字段，是自定义属性
      props: true,   // 开启props接收动态路由参数
      meta: {
        title: '商品编辑',
        roles: ['editor'],
        noCache: true,
        noTag: true  // 是否将当前页面放在tagViews上
      }
    }
  ]
}
