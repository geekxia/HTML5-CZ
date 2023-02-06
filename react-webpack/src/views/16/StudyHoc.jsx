import React from 'react'

import test from '@/hoc/test'
import role from '@/hoc/role'
import page from '@/hoc/page'

// 使用高阶组件的第一种写法
// class StudyHoc extends React.PureComponent {
//   componentDidMount () {
//     this.props.onHandle(101)
//   }
//   render () {
//     console.log('page props', this.props)
//     return (
//       <div>
//         <h1>学习高阶组件</h1>
//       </div>
//     )
//   }
// }
// export default role(test(StudyHoc))

// 使用高阶组件的第二种写法（装饰器语法，只能配合class关键字一起使用）
@test
@role
@page(['editor','admin'])
class StudyHoc extends React.PureComponent {
  componentDidMount () {
    this.props.onHandle(101)
  }
  render () {
    console.log('--- page props', this.props)
    return (
      <div>
        <h1>学习高阶组件</h1>
      </div>
    )
  }
}
export default StudyHoc

// export default role(
//   test(
//     props=>{
//       console.log('page props', props)
//       return (
//         <div>
//           <h1>学习高阶组件</h1>
//         </div>
//       )
//     }
//   )
// )
