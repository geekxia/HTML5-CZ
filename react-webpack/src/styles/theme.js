import React from 'react'

// 上下文对象
const ThemeContext = React.createContext()
const { Provider, Consumer } = ThemeContext
// Provider组件，用于向组件树中注入数据
// Consumer组件，用于消费上下文中的数据

const QfProvider = Provider

export default ThemeContext
export { Provider, Consumer, QfProvider }
