/**
 * @name: loadRoute
 * @description:加载路由文件
 * @author: qq2575896094
 * @time: 2024/2/2
 */

const loadRoute = (routeDir) => {
// 获取routes下面的所有的路由
    const routes = []
    const routeContext = require.context(routeDir, false, /\.js(x)$/)

    routeContext.keys().forEach((key) => {
        const context = routeContext(key)
        const route = context.default || context

        routes.push(...route)
    })

    return routes
}

export default loadRoute
