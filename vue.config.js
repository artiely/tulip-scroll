module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/scroll' : '',
  // publicPath: '/',
  // 扩展 webpack 配置，使 packages 加入编译
  // 修改 src 目录 为 examples 目录
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html'
  //   }
  // },
  css: { extract: false},
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
