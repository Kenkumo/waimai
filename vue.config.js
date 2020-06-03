module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://elm.cangdu.org',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}