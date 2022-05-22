const path = require('path')

const resolve = p => path.resolve(__dirname, p)

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '~assets': resolve('src/assets'),
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}