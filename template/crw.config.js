/**
 * @name: crw.config
 * @description: 工程配置文件
 * @author: qq2575896094
 * @time: 2024/1/8
 */

const { resolve } = require('path')

const resolveApp = (relativePath) => resolve(__dirname, 'src', relativePath)

module.exports = () => ({
    alias: {
        '@': resolveApp('.'),
        '@pages': resolveApp('pages'),
        '@components': resolveApp('components'),
        '@fonts': resolveApp('css/fonts'),
        '@framework': resolveApp('framework'),
	    '@helper': resolveApp('helper')
    },
    proxy: {
        '/user': 'http://123.56.143.21:8090/user'
    },
})
