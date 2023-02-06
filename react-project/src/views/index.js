// 这个@loadable/component包，相当于React.lazy()+<Suspense>
import loadable from '@loadable/component'
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  SettingOutlined,
  CoffeeOutlined
} from '@ant-design/icons'

import { FormattedMessage } from 'react-intl'

// 代码分割（相当于Vue路由懒加载）
const Dashboard = loadable(()=>import('./dashboard'))

const GoodList = loadable(()=>import('./good/GoodList'))
const GoodForm = loadable(()=>import('./good/GoodForm'))

const UserList = loadable(()=>import('./user/UserList'))
const UserInfo = loadable(()=>import('./user/UserInfo'))
const MusicList = loadable(()=>import('./music/MusicList'))

export default [
  {
    id: 9,
    title: <FormattedMessage id='menu.dash' />,
    icon: <AppstoreOutlined />,
    children: [
      {
        id: 901,
        title: <FormattedMessage id='menu.dash.data' />,
        path: '/dashboard',
        component: Dashboard,
      }
    ]
  },
  {
    id: 10,
    title: <FormattedMessage id='menu.good' />,
    icon: <AppstoreOutlined />,
    children: [
      {
        id: 1001,
        title: <FormattedMessage id='menu.good.list' />,
        path: '/good/list',
        component: GoodList,
        children: [
          {
            id: 1002,
            title: '商品新增',
            path: '/good/add',
            component: GoodForm,
            notMenu: true
          },
          {
            id: 1003,
            title: '商品编辑',
            path: '/good/edit/:id',
            component: GoodForm,
            notMenu: true
          }
        ]
      },

    ]
  },
  {
    id: 11,
    title: '用户管理',
    icon: <PieChartOutlined />,
    children: [
      {
        id: 1101,
        title: '用户列表',
        path: '/user/list',
        component: UserList
      },
      {
        id: 1102,
        title: '用户详情',
        path: '/user/info',
        component: UserInfo
      },
    ]
  },
  {
    id: 14,
    title: '音乐管理',
    icon: <CoffeeOutlined />,
    children: [
      {
        id: 1401,
        title: '音乐列表',
        path: '/music/list',
        component: MusicList
      },
    ]
  }
]
