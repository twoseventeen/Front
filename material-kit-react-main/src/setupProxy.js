const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/search', {
            target: 'https://news.google.com/rss/',
            changeOrigin: true
        }),
        createProxyMiddleware('/api', {
            target: 'http://localhost:8080',
            changeOrigin: true
        }),
    );
};