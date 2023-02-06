// 当 @babel/* 工作时，会根据下面的配置进行工作。
// 语法：和webpack配置中的语法一样。

module.exports = {
  // 预设（专门用于编译各种JS版本的Babel包）
  // 常见的预设有：ES6、JSX、TS、Flow、CoffeeScript...
  presets: [
    ['@babel/preset-env', { targets: "defaults" }],
    ['@babel/preset-react', {}]
  ],
  // 插件（用于弥补预设无法编译的零零碎碎的小语法）
  // 以后在代码中使用了若干新语法，如果预设报错，我们通常寻找插件来弥补编译。
  plugins: [
    // 这两个插件，用于支持装饰器语法的编译
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties"],
    // 用于支持 ()=>import() 动态导入语法
    ["@babel/plugin-syntax-dynamic-import"]
  ]
}
