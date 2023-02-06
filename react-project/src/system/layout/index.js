import { useState } from 'react'
import { Layout } from 'antd'

import QfHeader from './QfHeader'
import QfSider from './QfSider'
import QfContent from './QfContent'

const { Header, Footer, Sider, Content } = Layout

export default () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <Sider width={175} collapsed={collapsed}>
        <QfSider value={collapsed} onChange={()=>setCollapsed(!collapsed)} />
      </Sider>
      <Layout>
        <Header height={60}>
          <QfHeader />
        </Header>
        <Content>
          <QfContent />
        </Content>
      </Layout>
    </Layout>
  )
}
