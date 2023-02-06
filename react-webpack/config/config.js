// 这是webpack官方推荐的配置文件 configuration
// 语法：CommonJS语法，在这里编写代码可以用ES5、大多数的ES6语法、Node API、第三方包。
// module.exports = {}
// module.exports = function() { return {} }
// module.exports = () => ({})

const { merge } = require('webpack-merge')
const { resolve } = require('./utils.js')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const serve = require('./serve.js')
const build = require('./build.js')


// 说明：当拆分了生产环境和开发环境后，这里是两个环境都需要的公共配置。
const config = {
  // 入口（两个环境都需要）
  // entry: '../src/main.js',
  // entry: path.resolve(__dirname, '../src/main.js'),
  entry: {
    // 把react全家桶的第三方包抽离出来（便于以后部署优化）
    venders: ['react','react-dom','react-router-dom'],
    // 把业务代码和第三方包的代码，分离开来
    app: {
      import: resolve('src/main.js'),  // 业务代码
      dependOn: 'venders'
    }
  },
  // 出口（两个环境都需要）
  output: {
    // 指定打包结果放在哪个目录中（这个路径必须写成绝对路径）
    path: resolve('dist'),
    // 打包后的文件名
    // [name] 这个格式化自符串，是entry中入口文件的名字
    // [chunkhash] 这个格式化自符中，可以根据文件依赖来动态生成hash值。当文件模块依赖中的代码发生变化时，打包后hash会变化；否则不变。
    filename: 'js/[name].[chunkhash].js',  // bundle 一束、一捆
    clean: true,  // 每次打包时自动清除dist目录，在v4中使用clean-webpack-plugin来处理。
  },

  // 插件，一般是工具包，处理一些特殊需求的
  // 所有webpack插件，都是class类
  plugins: [
    // 把入口文件和index.html联系起来
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      filename: 'index.html',
      inject: 'body',  // 指定把js注入到HTML文件中的什么地址
      title: '学习',
      // 给打包结果添加favicon图标
      favicon: resolve('public/favicon.ico')
    }),
    // 给编译添加进度条提示
    new webpack.ProgressPlugin({
      handler(percentage, message) {
        console.info(`${Math.floor(percentage*100)}% ：${message}`)
      }
    })
  ],
  // 理解：在webpack眼中，一切皆模块。
  // loader 用于加载（处理）各种各样的文件模块。
  module: {
    // loader 规则，在这里进行配置
    rules: [
      // [v4] 当webpack工作，遇到.png结尾的模块，就使用file-loader进行加载和处理。
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   loader: 'file-loader',
      //   options: { name: 'img/[name].[hash].[ext]' }
      // },
      // [v5]中处理图片模块的写法
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash].[ext]'
        }
      },
      // 配置编译JS代码的loader规则：当webpack工作，遇到下面这四种后缀的JS文件，使用babel-loader进行加载，交给 @babel/* 系列编译器进行编译，得到能够兼容主流浏览器的ES5代码。
      // 注意：当 @babel/* 工作时，会根据项目根目录中的babel.config.js的配置进行工作。
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,  // 对第三方包不编译(性能提升)
        loader: 'babel-loader'
      }
    ]
  },
  // 解析（与模块路径有关）
  resolve: {
    // 路径别名
    alias: {
      '@': resolve('src')
    },
    // 允许忽略后缀
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    // 指定寻找第三方模块的位置，提升加载第三方包的速度
    modules: ["node_modules"]
  }
}

// 抛出webpack配置，这个形参env来自启动命令行时的--env选项
module.exports = function(env) {
  const { development } = env
  // 根据--env判断是什么环境，返回不同的webpack配置
  // 公共配置要写在前面，以config为基准进行合并
  return merge(config, development?serve:build)
}
