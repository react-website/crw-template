import React, { memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import CustomIcon from '../custom-icon'

import './scss/index.scss'

const getRoutes = () => {
    const routes = []
    const routeContext = require.context('@/routers/routes', false, /\.js(x)$/)

    routeContext.keys().forEach((key) => {
        const context = routeContext(key)
        const route = context.default || context

        routes.push(...route)
    })
    return routes
}

const walk = (routes = [], baseUrl = '/app') => {
    let results = []
    routes.forEach(({ path, meta, children }) => {
        const {
            menuIndex,
            label,
            icon
        } = meta

        if (menuIndex > 0) {
            const curPath = path.startsWith('/') ? `${baseUrl}${path}` : `${baseUrl}/${path}`
            const item = {
                key: curPath,
                path: curPath,
                label,
                icon: <CustomIcon type={icon} />,
                menuIndex
            }

            if (children && children.length > 0) {
                item.children = walk(children, curPath)
            }

            results.push(item)
        }
    })
    results = results.sort((a, b) => a.menuIndex - b.menuIndex).map(({ menuIndex, ...item }) => (item))
    return results
}

function AppMenu() {
    const menuItems = walk(getRoutes())
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = (e) => {
        navigate(e.key)
    }

    return (
        <div styleName="app-menu-comp">
            <Menu
                mode="inline"
                onClick={handleClick}
                defaultSelectedKeys={location.pathname}
                items={menuItems}
            />
        </div>
    )
}

export default memo(AppMenu)
