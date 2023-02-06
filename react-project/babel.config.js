module.exports = {
  plugins: [
    // 支持()=>import()动态导入语法（路由懒加载、代码分割）
    ["@babel/plugin-syntax-dynamic-import"],
    // 支持装饰器语法
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
}
