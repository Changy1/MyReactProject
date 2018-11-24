const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy('/api',{
        target: 'https://m.juanpi.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }))
}