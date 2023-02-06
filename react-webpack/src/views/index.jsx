import React from 'react'

// 为什么要使用@loadable/component？它是React.lazy()和Suspense的一种优雅封装。
import loadable from "@loadable/component"

// 代码分割：Webpack打包，从入口文件，根据依赖关系，把所有依赖合并一个大的文件。
// 原理：Webpack打包时，如果遇到动态导入技术（()=>import()）会自动拆分切割代码，创建新的JS文件。

const StudyJSX = loadable(()=>import('./12/StudyJSX'), {fallback: <div>Loading</div>})
const StudyProps = loadable(()=>import('./12/StudyProps'))
const StudyState = loadable(()=>import('./12/StudyState'))
const StudyLife = loadable(()=>import('./12/StudyLife'))
const StudyRender = loadable(()=>import('./12/StudyRender'))
const StudyForm = loadable(()=>import('./12/StudyForm'))

const StudyLift = loadable(()=>import('./14/StudyLift'))
const StudyCombine = loadable(()=>import('./14/StudyCombine'))

const StudyContext = loadable(()=>import('./16/StudyContext'))
const StudyHoc = loadable(()=>import('./16/StudyHoc'))
const StudyHooks = loadable(()=>import('./16/StudyHooks'))

const Cnode = loadable(()=>import('./16/Cnode'))

const CzStudy = loadable(()=>import('./cz/index'))

const routes = [
  {
    id: 10,
    text:'12K',
    routes: [
      { id: 1001, text:'学习JSX', path: 'jsx', element: <StudyJSX /> },
      { id: 1002, text:'学习Props', path: 'props', element: <StudyProps /> },
      { id: 1003, text:'学习State', path: 'state', element: <StudyState />},
      { id: 1004, text: '学习Form', path: 'form', element: <StudyForm /> },
      { id: 1005, text: '学习Life', path: 'life', element: <StudyLife /> }

    ]
  },
  {
    id: 11,
    text: '14K',
    routes: [
      { id: 1101, text: '状态提升', path:'lift', element: <StudyLift /> },
      { id: 1102, text: '组合模式', path:'combine', element: <StudyCombine /> }
    ]
  },
  {
    id: 12,
    text: '16K',
    routes: [
      { id: 1201, text: '上下文', path:'ctx', element: <StudyContext /> },
      { id: 1202, text: '高阶组件', path:'hoc', element: <StudyHoc /> },
      { id: 1203, text: 'Hooks编程', path:'hooks', element: <StudyHooks /> },
      { id: 1204, text: 'Cnode', path:'cnode', element: <Cnode /> }
    ]
  },
  {
    id: 13,
    text: 'cz',
    routes: [
      { id: 1301, text: '学习', path: 'cz', element: <CzStudy /> }
    ]
  }
]

export default routes
