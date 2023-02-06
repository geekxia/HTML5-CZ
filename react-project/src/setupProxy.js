const { createProxyMiddleware } = require('http-proxy-middleware')
// 官方推荐的专门用于代理API接口的
module.exports = function(app) {

  app.use(
    '/splcloud',
    createProxyMiddleware({
      target: 'https://c.y.qq.com',
      changeOrigin: true,
    })
  )

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:9999',
      changeOrigin: true,
    })
  )

}
