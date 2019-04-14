module.exports = {
  devServer: {
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  }
}
