created by xhf at 2022-04-22

# 环境搭建

- 全局安装脚手架（注意node版本必须v14以上）
  ```
  cnpm i create-react-app -g
  cnpm i yarn -g
  create-react-app --version
  ```

- 创建项目、运行项目
  ```
  create-react-app react-project
  # OR
  yarn create react-app react-project
  cd react-project
  npm start
  ```
- 执行“暴露”操作（得到Webpack文件）
  ```
  git init
  git add --all
  git commit -m 'first commit'
  npm run eject
  # 等待项目结构“暴露”成功后，在命令行“Ctrl+C”结束进程
  # 手动删除项目根目录中的node_modules包
  # 再用 yarn 或 镜像源安装相关依赖
  cnpm install
  npm start
  ```
- 整理项目目录
  - 删掉一些无用的文件
  - 关闭reportWebVitals功能
  - 根据公司需求设计目录结构

- 修改webpack若干配置
  - 改端口 start.js  DEFAULT_PORT
  - 配代理 start.js
  - 关闭自动打开浏览器 openBrowser
  - 修改入口文件名  config/paths.js  appIndexJs
  - 添加@别名 config/webpack.config.js  alias
  - 添加编译less的loader：** STOP ** Are you adding a new loader?
  ```
  {
    test: /\.less$/i,
    use: [
      isEnvDevelopment ? 'style-loader' : {
        loader: MiniCssExtractPlugin.loader,
        options: paths.publicUrlOrPath.startsWith('.')
          ? { publicPath: '../../' }
          : {},
      },
      "css-loader",
      "less-loader"
    ],
  }
  ```
