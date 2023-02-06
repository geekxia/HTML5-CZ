
// 你就把这种玩法，想象成vue-router的玩法。
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  // 管理员模块
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  // 文章管理模块
  {
    path: '/article',
    name: 'article',  // 国际化react-intl
    icon: 'snippets',
    access: 'canUser',  // 只有满足access.ts中canUser权限
    routes: [
      {
        path: 'list',
        component: './article/ArticleList',
        name: 'list'
      },
      {
        path: 'add',
        component: './article/ArticleForm',
        name: 'add',
        hideInMenu: true  // 当前路由不放在Menu上
      },
      {
        path: 'edit/:id',
        component: './article/ArticleForm',
        name: 'edit',
        hideInMenu: true
      }
    ]
  },


  // 重定向路由，一般也往后放
  { path: '/', redirect: '/welcome' },
  // 404 路由，必须是所有路由规则的最后一条
  { component: './404' }
];
