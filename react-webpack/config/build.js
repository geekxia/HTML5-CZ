// 只有生产打包时需要的特殊配置

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: 'production',
  // 打包时，可以得到高质量的代码
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css'
    })
  ],

  module: {
    rules: [
      // 当webpack工作，遇到.scss结尾的模块，使用sass-loader进行加载，交给sass编译器进行编译，编译完成后返回.css文件，再使用css-loader加载并返回css代码，最后使用 MCEP.loader创建独立的css文件，并插入到index.html中去。
      // 注意：当多个loader同时工作时，一般都是有顺序的，先工作的loader要放在后面。
      {
        test: /\.(css|scss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  }
}
