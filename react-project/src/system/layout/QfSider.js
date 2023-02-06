import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


import { Menu } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

import logo from '@/assets/logo.svg'
import routes from '@/views'
// 权限：省略了store.userinfo.roles 和 routes 的动态渲染权限菜单。

import useMenu from '@/hooks/useMenu'

const { SubMenu, Item } = Menu

export default ({value, onChange}) => {

  const { userinfo } = useSelector(state=>state.user)

  // 算法：根据后端返回的roles生成当前用户有权访问的菜单
  const curRoutes = useMemo(()=>{
    if (userinfo.roles) {
      console.log('---生成动态[菜单]')
    }
  }, [userinfo])

  const [openId, onId] = useMenu()

  return (
    <div className='sider'>
      <div className='logo'>
        <img src={logo} style={{width:value?'30px':'60px'}} />
      </div>
      <Menu
        mode="inline"
        theme="dark"
        defaultOpenKeys={[openId]}
        defaultSelectedKeys={[onId]}
      >
      {
        routes.map(ele=>(
          <Menu.SubMenu key={ele.id} title={ele.title} icon={ele.icon}>
          {
            ele.children.map(ele=>(
              !ele.notMenu &&
              <Menu.Item key={ele.id}>
                <Link to={ele.path}>{ele.title}</Link>
              </Menu.Item>
            ))
          }
          </Menu.SubMenu>
        ))
      }
      </Menu>
      <div onClick={onChange} className='toggle'>
        { value ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
      </div>
    </div>
  )
}
