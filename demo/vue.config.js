const path = require('path')

const devServer = {
  host: 'urvue.localhost',
  port: 8068,
  historyApiFallback: true,
}

module.exports = {
  lintOnSave: false,
  devServer,
  publicPath: '/unrest-vue',
  configureWebpack: {
    resolve: {
      alias: {
        '@unrest/vue': path.resolve(__dirname, '../src/index.js'),
      },
    },
  },
}
