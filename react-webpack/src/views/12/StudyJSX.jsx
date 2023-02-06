import React from 'react'

import { inject, observer } from 'mobx-react'

// 装饰器语法：谁离class更近，谁就起使用。
// @inject(['study']) // @inject('study')
// @observer

// class StudyJSX extends React.PureComponent  {
//
//   click () {
//     const { study } = this.props
//     study.changeMsg(Math.random())
//     console.log('---clicked')
//   }
//
//   render () {
//     console.log('this props', this.props)
//     const { study } = this.props
//     return (
//       <>
//         <h1>学习JSX页面</h1>
//         <h1>{ study.msg }</h1>
//         <button onClick={()=>this.click()}>修改MSG</button>
//       </>
//     )
//   }
// }

// export default inject(['study'])(observer(StudyJSX))


export default inject(['study'])(
  observer(
    ({study}) =>  {

      const click = () => {
        study.changeMsg(Math.random())
        console.log('---clicked')
      }

      return (
        <>
          <h1>学习JSX页面</h1>
          <h1>{ study.msg }</h1>
          <button onClick={click}>修改MSG</button>
        </>
      )
    }
  )
)
