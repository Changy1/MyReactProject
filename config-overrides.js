
const { injectBabelPlugin } = require('react-app-rewired');
const PATH = require('path')

function resolve(url) {
    return PATH.resolve(__dirname, 'src/', url)
}

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { "legacy": true }], config)
  
    // 配置别名
    config.resolve.alias = {
        ...config.resolve.alias,
        //这里虽然是src/，但是它代表的就是src，所以使用的时候需要@/
        '@': resolve(''),
        '@as': resolve('assets'),
        '@c': resolve('components'),
        '@pages': resolve('pages'),
        '@lib': resolve('lib'),
        '@connect': resolve('connect'),
        '@util': resolve('util')
    }

    return config;
};