// Babel编译器的配置文件（告诉Babel如何工作）

module.exports = {
  // Babel的预设
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // Babel的插件，支持vant的按需加载
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
