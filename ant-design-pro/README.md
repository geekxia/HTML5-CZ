# 学习目标

- TS环境（会编写TS代码）
- 对项目整体结构要足够理解（各个目录、配置文件）
- 路由（配置路由、权限配置、。。。）
- 会编写页面组件（ProComponent、Antd）
- 调接口（request、数据流、TS约束）
- redux-saga数据流
- 业务逻辑（增删改查）
- 等等。。。。。

# 开发细节

- 启动项目，如果出现swagger-ui-react报错，建议重新安装它的V4最新版本。
- Umi的两种配置：config/config.ts（优先级更高、路由、布局、代理。。。）  .umirc.ts
- src/app.ts 在这里是入口文件（@umijs/plugin-initial-state、@ant-design/pro-components）
- src/access.ts 这就是整个的权限配置（@umijs/plugin-access）
- src/locales 这是业务国际化配置（@umijs/plugin-locale）
- src/models 这是redux-saga数据流（@umijs/plugin-model、dva的范式）
- src/services 这就是编写API接口（@umijs/plugin-request）
- src/pages 这是所有的业务页面组件


#　预览版本

- 预览：http://preview.pro.ant.design
- 首页：http://pro.ant.design/index-cn
- 使用文档：http://pro.ant.design/docs/getting-started-cn
- 更新日志: http://pro.ant.design/docs/changelog-cn
- 常见问题：http://pro.ant.design/docs/faq-cn
- 国内镜像：http://ant-design-pro.gitee.io

## 5.0 已经发布! 🎉🎉🎉

[Ant Design Pro 5.0.0](https://github.com/ant-design/ant-design-pro/issues/8656)
## 特性

- :bulb: **TypeScript**: 应用程序级 JavaScript 的语言
- :scroll: **区块**: 通过区块模板快速构建页面
- :gem: **优雅美观**：基于 Ant Design 体系精心设计
- :triangular_ruler: **常见设计模式**：提炼自中后台应用的典型页面和场景
- :rocket: **最新技术栈**：使用 React/umi/dva/antd 等前端前沿技术开发
- :iphone: **响应式**：针对不同屏幕大小设计
- :art: **主题**：可配置的主题满足多样化的品牌诉求
- :globe_with_meridians: **国际化**：内建业界通用的国际化方案
- :gear: **最佳实践**：良好的工程实践助您持续产出高质量代码
- :1234: **Mock 数据**：实用的本地数据调试方案
- :white_check_mark: **UI 测试**：自动化测试保障前端产品质量

## 模板

```
- Dashboard
  - 分析页
  - 监控页
  - 工作台
- 表单页
  - 基础表单页
  - 分步表单页
  - 高级表单页
- 列表页
  - 查询表格
  - 标准列表
  - 卡片列表
  - 搜索列表（项目/应用/文章）
- 详情页
  - 基础详情页
  - 高级详情页
- 用户
  - 用户中心页
  - 用户设置页
- 结果
  - 成功页
  - 失败页
- 异常
  - 403 无权限
  - 404 找不到
  - 500 服务器出错
- 帐户
  - 登录
  - 注册
  - 注册成功
```
