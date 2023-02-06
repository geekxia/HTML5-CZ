import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { Form, Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  Switch,
  message,
  AutoComplete } from 'antd'

// 自定义的表单验证方法
import { validatePrice } from '@/utils/validate'
// 三个自定义封装组件（二次封装）
import CateSelect from './components/CateSelect'
import SingleUpload from './components/SingleUpload'
import GoodQuill from './components/GoodQuill'

import { submitGood, resetGood, getGoodInfo } from '@/store/actions'

const { Option } = Select

export default () => {

  const [form] = Form.useForm()  // 得到Form实例
  const dispatch = useDispatch()
  const history = useHistory()
  const { id } = useParams()
  const { done, info } = useSelector(state=>state.good)

  console.log('--info', info)

  const submit = (values) => {
    console.log('提交', values)
    let data = {...values}
    if (id) data['id'] = id
    dispatch(submitGood(data))
  }

  useEffect(()=>{
    if (id) {
      dispatch(getGoodInfo(id))
    }
  }, [])

  useEffect(()=>{
    if (info._id) {
      form.setFieldsValue(info)
    }
  }, [info])

  useEffect(()=>{
    if (done) {
      message.success(`${id?'修改':'添架'}成功`, 1, ()=>{
        history.goBack()
      })
    }
    return () => {
      dispatch(resetGood())
    }
  }, [done])

  return (
    <div className='goodform'>
      <Form
        labelCol={{span: 3}}
        wrapperCol={{span: 12}}
        form={form}
        onFinish={submit}
        initialValues={{
          img: ''
        }}
        scrollToFirstError
      >
        <Form.Item
          name="name"
          label="商品名称"
          validateTrigger={['onBlur','onChange']}
          rules={[
            { required: true, message: '请输入商品名称' },
            { pattern: /^[\u4e00-\u9fa5]{4,6}/, message:'商品名称只能中文，并且4~6个字' }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="desc"
          label="商品描述"
          validateTrigger='onBlur'
          rules={[
            { required: true, message: '请输入商品描述' },
            { min: 10, max: 20, message: '商品描述要求10~20字' }
          ]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item
          name="price"
          label="商品价格"
          validateTrigger='onBlur'
          rules={[
            { required: true, message: '请输入价格' },
            // ({ getFieldValue }) => ({
            //   validator: (rule, value) => {
            //     if (value < 1) {
            //       return Promise.reject(new Error('商品价格不能小于1元'))
            //     } else {
            //       return Promise.resolve()
            //     }
            //   }
            // }),
            { validator: validatePrice(10) }
          ]}
        >
          <InputNumber/>
        </Form.Item>

        <Form.Item
          name="cate"
          label="商品品类"
          validateTrigger='onChange'
          wrapperCol={{span:3}}
          rules={[
            { required: true, message: '品类是必填属性', },
          ]}
        >
          <CateSelect />
        </Form.Item>

        <Form.Item
          name="hot"
          label="是否热销"
          valuePropName='checked'
        >
          {/* 被Form.Item包裹的表单，相当于给了value+onChange */}
          <Switch />
        </Form.Item>

        <Form.Item
          name="img"
          label="商品图片"
          rules={[
            { required: true, message: '请上传商品图片' }
          ]}
        >
          <SingleUpload />
        </Form.Item>

        <Form.Item wrapperCol={{span:12,offset:3}}>
          <Button type="primary" htmlType="submit">
            { id ? '修改' : '添加' }
          </Button>
        </Form.Item>
      </Form>

      <GoodQuill />
    </div>
  )
}
