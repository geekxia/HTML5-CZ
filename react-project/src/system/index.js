import { useEffect } from 'react'
import { Switch, Route, useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getInfo } from '@/store/actions'

import './style.scss'

import Layout from './layout'
import Login from './login'

// 实现antd的国际化
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'
// 其它语言包。。。

// 实现网站业务的国际化
import { IntlProvider } from 'react-intl'
import zhCNI from '@/lang/zh'
import enUSI from '@/lang/en'
// 其它语言包。。。

const langArr = {
  zh: [zhCN, zhCNI],
  en: [enUS, enUSI]
}

// System组件
export default () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  // 从状态管理中取出token
  const { token, userinfo, lang } = useSelector(state=>state.user)

  // 功能：当没有token，从内部系统中跳出来，到登录页
  useEffect(()=>{
    if (!token && pathname!=='/login') {
      history.replace('/login')
    }
  }, [])

  // 功能：如果用户已登录，就不能再访问/login
  useEffect(()=>{
    if (token && userinfo.roles) {
      if (pathname==='/login') {
        history.replace('/good/list')
      }
    }
  }, [pathname])

  useEffect(()=>{
    if (token && userinfo.roles) {
      // 登录成功，跳转系统内部
      console.log('-----')
      history.replace((pathname==='/login'?'/good/list':pathname))
    }
  }, [token, userinfo])

  useEffect(()=>{
    // 当有token、但没有userinfo时
    if (token && !userinfo.roles) {
      dispatch(getInfo())
    }
  }, [token])

  return (
    <ConfigProvider locale={langArr[lang][0]}>
      <IntlProvider messages={langArr[lang][1]} locale={lang}>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Layout} />
        </Switch>
      </IntlProvider>
    </ConfigProvider>
  )
}
