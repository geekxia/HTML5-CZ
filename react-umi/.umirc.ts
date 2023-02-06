import { defineConfig, history } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置式路由（尽量不要使用约定式路由）
  routes: [
    { path: '/', component: '@/pages/dashboard/index' },
    {
      name: '商品管理',
      icon: 'apple',  // <AppstoreOutlined />
      path: '/good',
      // 二级路由
      routes: [
        {
          name: '商品列表',
          path: 'list',
          component: '@/pages/good/list'
        },
        {
          name: '商品新增',
          path: 'add',
          component: '@/pages/good/form'
        },
        {
          name: '学习TS',
          path: 'study',
          component: '@/pages/good/study'
        }
      ]
    }
  ],
  fastRefresh: {},
  // 重要
  layout: {
    logo: '/logo.png',
    name: '千锋教育',
    siderWidth: 170,
    theme: 'tech'
  },
  // 配置代理
  devServer: {
    port: 8080
  },
  proxy: {},

  dynamicImportSyntax: {},

  favicon: '/favicon.ico',

  hash: true,  // 打包时是否带有hash值

  history: { type: 'hash' },  // hash路由

  mfsu: {},  // 编译加速

  publicPath: './',  // 打包时在script加前缀的

  webpack5: {},  // 开启webpack5

  dva: { immer: true }  // 状态管理
})
