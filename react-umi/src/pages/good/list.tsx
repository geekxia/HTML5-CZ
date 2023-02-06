import { divide } from '@umijs/deps/compiled/lodash'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import { Button } from 'antd'

// 函数式组件
export default () => {

  const dispatch = useDispatch()
  const { list } = useSelector(state=>state.good)

  console.log('----list', list)

  useEffect(()=>{
    console.log('--')
    dispatch({type:'good/getList',payload:{}})
  }, [])
  return (
    <div>
      <h1>商品列表</h1>
      <Button type='primary'>点击</Button>
      <div>
        {
          list.map((ele:any)=>(<div key={ele}>{ele}</div>))
        }
      </div>
    </div>
  );
}
