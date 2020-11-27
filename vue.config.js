module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://img4.mukewang.com',
        chageOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
