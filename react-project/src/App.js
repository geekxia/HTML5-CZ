// 路由V5
import { HashRouter } from 'react-router-dom'
// 状态管理Redux
import { Provider } from 'react-redux'  // 用于连接Redux和React组件
import store from '@/store'

// 业务组件
import System from '@/system'
import './style/init.css'

function App() {
  return (
    <HashRouter>
      {/* 向组件树中注入store数据 */}
      <Provider store={store}>
        { /* 要么显示Login、要么显示Layout */ }
        <System />
      </Provider>
    </HashRouter>
  )
}

export default App
