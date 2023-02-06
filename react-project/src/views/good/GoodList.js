import React, { useState, useEffect, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Row, Col, Input, Select, DatePicker, Table, Button, Modal } from 'antd'
import { ReloadOutlined, ColumnHeightOutlined, SettingOutlined, PlusOutlined, CloseCircleFilled, ExclamationCircleOutlined } from '@ant-design/icons'
import moment from 'moment'

// 在组件中使用国际化，有两种方式
import { FormattedMessage, useIntl } from 'react-intl'

import CateSelect from './components/CateSelect'
import { getGoodList, delGood } from '@/store/actions'

import './style.scss'

const { Option } = Select
const { RangePicker } = DatePicker
const { confirm } = Modal

export default () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const intl = useIntl() // 国际化

  const [filter, setFilter] = useState({
    page: 1,
    size: 2,
    cate: '',
    name: ''
  })
  const [count, setCount] = useState(0)
  const [ids, setIds] = useState([])
  const delBol = useMemo(()=>(ids.length===0), [ids])

  const { total, list, cates, done } = useSelector(state=>state.good)

  useEffect(()=>{
    dispatch(getGoodList(filter))
  }, [count])

  useEffect(()=>{
    if (done===1) setCount(count+1)
  }, [done])

  const rowDel = row => {
    confirm({
      title: `你确定要删除 ${row.name} 吗？`,
      icon: <ExclamationCircleOutlined />,
      onOk() {
        dispatch(delGood(row._id))
      }
    })
  }

  const columns = useMemo(()=>([
    {
      title: '商品',
      dataIndex: 'name',  // 从后端列表项目取出name字段作为渲染结果
      key: 'name',
      align: 'center',
      // 当dataIndex不满足渲染需求时，使用render自定义渲染视图
      render: (text, row) => {
        return (
          <div className='good'>
            <img src={'http://localhost:9999'+row.img} alt=""/>
            <div>{ text }</div>
          </div>
        )
      }
    },
    {
      title: '商品品类',
      dataIndex: 'cate',
      key: 'cate',
      render: text => {
        const [item] = cates.filter(ele=>ele.cate===text)
        // if (item) {
        //   return <div>{item?.cate_zh}</div>
        // }
        return <div>{item?.cate_zh}</div>
      }
    },
    {
      title: '商品价格',
      dataIndex: 'price',
      key: 'price',
      render: text => ('￥'+text)
    },
    {
      title: '是否热销',
      dataIndex: 'hot',
      key: 'hot',
      align: 'center',
      render: hot => (hot?'是':'否')
    },
    {
      title: '发布时间',
      key: 'create_time',
      dataIndex: 'create_time',
      align: 'center',
      render (text) {
        return (
          <div>{ moment(text).format('MM月DD日') }</div>
        )
      }
    },
    {
      title: '商品状态',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: (text) => {
        const ss = {0:'待审核',1:'审核未通过',2:'正常'}
        return <div>{ss[text]}</div>
      }
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text, row) => (
        <>
          <Button
            danger
            onClick={()=>rowDel(row)}
            disabled={!delBol}
            size='small'>
            删除
          </Button>
          <Button
            type='primary'
            size='small'
            onClick={()=>history.push(`/good/edit/${row._id}`)}
            style={{marginLeft:'10px'}}>
            编辑
          </Button>
        </>
      ),
    },
  ]), [list, ids])

  return (
    <div className='goodlist'>
      <div className='filter'>
        <Row align='middle'>
          <Col span={2}>
            <span>{intl.formatMessage({id:'good.list.name'})}</span>
          </Col>
          <Col span={4}>
            <Input.Search
              placeholder="请输入商品名称"
              allowClear
              loading
              value={filter.name}
              onChange={ev=>setFilter({...filter, name:ev.target.value, page:1})}
              onSearch={()=>setCount(count+1)}
            />
          </Col>
          <Col span={2}>
            <span>
              {/* <FormattedMessage id='good.list.cate' /> */}
              { intl.formatMessage({id:'good.list.cate'}) }
            </span>
          </Col>
          <Col span={4}>
            <CateSelect
              hasAll
              allowClear
              value={filter.cate}
              onChange={cate=>{
                console.log('---cate change', cate)
                setFilter({...filter,cate:(cate||''),page:1})
                setCount(count+1)
              }} />
          </Col>
          <Col span={2}>
            <span>日期筛选：</span>
          </Col>
          <Col span={6}>
            <RangePicker />
          </Col>
        </Row>
      </div>

      <div className='table' style={{margin:'20px 0'}}>
        <Table
          rowKey='_id'
          columns={columns}
          dataSource={list}
          pagination={{
            total,
            showTotal: (total,range) => `第${range[0]}-${range[1]}条 / 总共 ${total} 条`,
            defaultPageSize: filter.size,
            pageSize: filter.size,
            current: filter.page,
            showSizeChanger: true,
            pageSizeOptions: [2,5,10,20],
            onChange: (page, size) => {
              setFilter({...filter, size, page});
              setCount(count+1)
            }
          }}
          title={()=>(
            <Row>
              <Col span={4}>
                {/*<FormattedMessage id='good.list.title' />*/}
                { intl.formatMessage({id:'good.list.title'}) }
              </Col>
              <Col offset={14} span={6} style={{textAlign:'right'}}>
                <Button
                  type='primary'
                  icon={<PlusOutlined />}
                  onClick={()=>history.push('/good/add')}
                >
                  新增
                </Button>
                <span className='btns'>
                  <ReloadOutlined />
                  <ColumnHeightOutlined />
                  <SettingOutlined />
                </span>
              </Col>
            </Row>
          )}
          footer={()=>{
            return (<Button disabled={delBol} danger>删除选中的行</Button>)
          }}
          rowSelection={{
            type: 'checkbox',
            onChange: ids => setIds(ids)
          }}
        />
      </div>

    </div>
  )
}
