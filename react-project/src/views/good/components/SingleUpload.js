import { useState, useEffect } from 'react'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'

export default props => {

  const { value, onChange } = props
  const [fileList, setFileList] = useState([])

  useEffect(()=>{
    // 根据商品详情的异步数据，给图片添加初始值
    if (value) {
      setFileList([
        {
          thumbUrl: 'http://localhost:9999'+value,
          name: Date.now()
        }
      ])
    } else {
      setFileList([])
    }
  }, [value])

  const imgChange = ({file, fileList, event}) => {
    console.log('----', file)
    // 解决fileList受控后，onChange只打印一次的问题。
    setFileList([...fileList])
    // console.log('-file', file)
    // console.log('--fileList', fileList)
    // console.log('---event', event)
    if (file.status==='done') {
      if (file.response.err===0) {
        const img = file.response.data.img
        // 图片已经上传成功，并且我拿到的可访问的图片地址（这个地址要入库）
        onChange(img)
      }
    }
  }

  const imgRemove = () => {
    onChange('')
  }

  const imgCheck = (file) => {
    console.log('----file', file)

    return (new Promise((resolve,reject)=>{
      if (file.size/1024/1024 > 1) {
        reject()
      }
    }))
  }

  return (
    <ImgCrop rotate>
      <Upload
        name='good'
        action="http://localhost:9090/api/v1/react/upload/img"
        listType="picture-card"
        fileList={fileList}
        onChange={imgChange}
        onRemove={imgRemove}
        beforeUpload={imgCheck}
      >
        { fileList.length===0 && '+ Upload' }
      </Upload>
    </ImgCrop>
  )
}
