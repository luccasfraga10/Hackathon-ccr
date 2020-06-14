const proxy = require('http-proxy-middleware');

module.exports = function setupProxy(app) {
  app.use(
    proxy('/api', {
      target: process.env.REACT_APP_MAP_URL,
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
