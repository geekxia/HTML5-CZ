import React, { PureComponent } from 'react'

import ThemeContext from '@/styles/theme'

// 使用上下文数据的第一种语法
// class Page extends PureComponent {
//   render () {
//     console.log('page this context', this.context)
//     return (
//       <div>
//         <h1>学习上下文</h1>
//       </div>
//     )
//   }
// }
// Page.contextType = ThemeContext

// 使用上下文数据的第二种语法
class Page extends PureComponent {
  render () {
    return (
      <ThemeContext.Consumer>
      {
        theme => (
          <div style={ theme }>
            <h1>学习上下文</h1>
          </div>
        )
      }
      </ThemeContext.Consumer>
    )
  }
}

export default Page
