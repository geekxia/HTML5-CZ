import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import { ThemeToggle} from '@/components'
import { Provider } from '@/styles/theme'
import './style.scss'

export default () => {

  const [theme, setTheme] = React.useState({
    color: '#000000', background: '#ffffff'
  })

  return (
    <Provider value={ theme }>
      <Header />
      <main>
        {/* 相当于vue路由的<router-view> */}
        <Outlet />
      </main>
      <footer>
        <ThemeToggle
          value={theme}
          onChange={ev=>setTheme({theme:ev})}
        />
      </footer>
    </Provider>

  )
}
