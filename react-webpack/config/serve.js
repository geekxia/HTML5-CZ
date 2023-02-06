// 只有开发环境需要的特定配置

const ESLintPlugin = require('eslint-webpack-plugin')
const { resolve } = require('./utils')

module.exports = {
  mode: 'development',
  // 当代码报错，显示源码行数
  devtool: 'inline-source-map',
  // 本地服务，它背后要使用webpack-dev-server
  // 本地服务一定要有端口号
  // 本地服务要有静态资源目录，默认就是public
  devServer: {
    port: 9000,
    hot: true,   // 支持本地服务下的代码热更新
    open: true,  // 自动打开默认浏览器
    // 配置devServer在浏览器中的覆盖层
    client: {
      overlay: {
        errors: true,   // 当出现Error时，弹出覆盖层
        warnings: false // 当出现Warning时，不弹覆盖层
      }
    },
    proxy: {
      '/api': {
        target: 'https://cnodejs.org',
        changeOrigin: true
      }
    }
  },
  plugins: [
    new ESLintPlugin({
      eslintPath: 'eslint',  // 指定代码检测工具
      extensions: ['js','jsx','ts','tsx'], // 指定检测哪些类型的文件
      exclude: 'node_modules'  // 不检测第三方包
    })
  ],
  module: {
    rules: [
      // 当webpack工作，遇到.scss结尾的模块，使用sass-loader进行加载，交给sass编译器进行编译，编译完成后返回.css文件，再使用css-loader加载并返回css代码，最后使用style-loader把css代码注入到DOM中。
      // 注意：当多个loader同时工作时，一般都是有顺序的，先工作的loader要放在后面。
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'react': resolve('node_modules/react/umd/react.development.js')
    }
  }
}
