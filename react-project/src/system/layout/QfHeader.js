import { useDispatch } from 'react-redux'
import { Dropdown, Space, Menu, Row, Col } from 'antd'
import { GlobalOutlined, FullscreenOutlined, FullscreenExitOutlined }　from '@ant-design/icons'
import { useRef, useState, useEffect } from 'react'
import screenfull from 'screenfull'

import { toggleLang } from '@/store/actions'


export default () => {
  const dispatch = useDispatch()

  const toggle = lang => {
    dispatch(toggleLang(lang))
  }

  const [full, setFull] = useState(false)

  const menu = (
    <Menu>
      <Menu.Item key='zh' onClick={()=>toggle('zh')}>中文</Menu.Item>
      <Menu.Item key='en' onClick={()=>toggle('en')}>English</Menu.Item>
    </Menu>
  )

  const handler = (flag) => {
    console.log('-----flag', flag)
    if (screenfull.isEnabled) {
      if (flag) screenfull.request()
      else screenfull.exit()
    }
    setFull(flag)
  }

  useEffect(()=>{
    console.log('---full', full)
  }, [full])

  return (
    <div className='header'>
      <Row>
        <Col span={1} offset={21}>
          <div style={{color:'white',cursor:'pointer'}}>
          {
            !full
              ? <FullscreenExitOutlined onClick={()=>handler(true)} />
              : <FullscreenOutlined onClick={()=>handler(false)} />
          }
          </div>
        </Col>
        <Col span={2} >
          <div style={{textAlign:'right'}}>
            <Dropdown overlay={menu} placement='bottomRight'>
              <a onClick={e => e.preventDefault()}>
                <Space>
                  <GlobalOutlined style={{fontSize:'18px',color:'white'}} />
                </Space>
              </a>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </div>
  )
}
