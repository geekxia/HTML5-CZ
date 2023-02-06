import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from 'antd'

import { getCates } from '@/store/actions'
const { Option } = Select

export default props => {

  const { hasAll, onChange, value, allowClear } = props

  const dispatch = useDispatch()
  const { cates } = useSelector(state=>state.good)

  useEffect(()=>{
    dispatch(getCates())
  }, [])

  return (
    <Select
      value={value}
      onChange={onChange}
      style={{display:'block'}}
      placeholder='选择商品品类'
      allowClear={allowClear}
    >
      { hasAll && <Option key='-1' value=''>全部</Option> }
      {
        cates.map(ele=>(
          <Option key={ele._id} value={ele.cate}>{ele.cate_zh}</Option>
        ))
      }
    </Select>
  )
}
