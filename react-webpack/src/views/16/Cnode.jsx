import React, { useState, useEffect } from 'react'
import './style.scss'
import { inject, observer } from 'mobx-react'

import CnCate from './components/CnCate'
import CnPage from './components/CnPage'
import CnList from './components/CnList'

export default inject(['cnode'])(
  observer(
    ({cnode}) => {
      console.log('---cnode', cnode)
      const [cates] = useState([
        { id: 1, tab: '', label: '全部' },
        { id: 2, tab: 'good', label: '精华' },
        { id: 3, tab: 'share', label: '分享' },
        { id: 4, tab: 'ask', label: '问答' },
        { id: 5, tab: 'job', label: '招聘' }
      ])
      const [tab, setTab] = useState('')
      const [page, setPage] = useState(1)

      useEffect(()=>{
        console.log('调接口')
        cnode.getList({page,tab,limit:5})
      }, [tab, page])

      return (
        <div>
          <CnCate cates={cates} value={tab} onChange={ev=>setTab(ev)} />
          <CnList list={cnode.list} />
          <CnPage value={page} onChange={ev=>setPage(ev)} />
        </div>
      )
    }
  )
)
