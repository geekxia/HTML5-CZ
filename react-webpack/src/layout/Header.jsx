import React, { useMemo } from 'react'
import { Dropdown, Menu } from 'antd'

import { NavLink } from 'react-router-dom'
import routes from '@/views'

export default () => {

  // 动态生成菜单结构
  const navs = useMemo(()=>{
    return routes.map(ele => {

      const menu = (
        <Menu>
        {
          ele.routes.map(ele=>(
            <Menu.Item key={ele.id}>
              <NavLink
                to={`/${ele.path}`}
                style={({isActive})=>({color:isActive?'red':'black'})}>
                {ele.text}
              </NavLink>
            </Menu.Item>
          ))
        }
        </Menu>
      )

      return (
        <div className='nav' key={ele.id}>
          <Dropdown overlay={menu}>
            <div>{ele.text}</div>
          </Dropdown>
        </div>
      )
    })
  }, [])

  return (
    <header>
      <div>
        { navs }
      </div>
    </header>
  )
}
