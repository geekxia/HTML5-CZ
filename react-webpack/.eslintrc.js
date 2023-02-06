// 这是ESLint的配置文件（它的优化级最高），除了这种配置方式，还要另外4个配置文件，大家参考文档。

// 意识：大家要有能力识别环境报错、配置文件报错、语法报错、ESLint报错、TS报错、编译器提示报错。
// 在工作中，遇到ESLint报错，有哪些可行的解决方案呢？
// 1、如果ESLint报错比较过分，修改ESLint的rules配置，关闭或降低报错级别。(在不影响他人的情况下定制规则)
// 2、根据ESLint报错信息，老老实实地找到代码修改成符合“规范”的。
// 3、灵活使用ESLint注释（单行注释、多行注释），忽略一些特殊的ESLint报错。（参见ESLint文档）
// 4、在项目根目录中添加一个名字叫 .eslintignore 文件，在其中指定要忽略哪些文件或目录的检测。

module.exports = {
  // 设置兼容Babel环境的ESLint解析器
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended"
  ],
  plugins: [ "react", "react-hooks", "jsx-a11y", "import" ],
  // 配置ESlint的解析选项
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,  // 开启对JSX语法兼容
    }
  },
  env:{ es6: true, browser: true, node: true },
  // 定制检测规则
  // ESLint检测的三种级别：
    // 2-"error"（如果代码违反当前规则，直接给Error错误）
    // 1-"warn"（如果代码违反当前规则，只给一个Warning警告）
    // 0-"off"（关闭当前这条规则，也就是说这条规则没用了）
  rules: {
    "semi": 0,
    "react/display-name": 0,
    "import/no-unresolved": 0
  }
}
