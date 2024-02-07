import React from 'react'
import { lazyLoad } from '@/helper'

const errorRoute = [
    {
        path: '/app-layout-layout/404',
        element: lazyLoad(React.lazy(() => import('@components/error-404'))),
        meta: {
            requireAuth: false,
            title: '404页面',
            key: '404',
        },
    },
    {
        path: '/app-layout-layout/500',
        element: lazyLoad(React.lazy(() => import('@components/error-500'))),
        meta: {
            requireAuth: false,
            title: '500页面',
            key: '500',
        },
    },
]

export default errorRoute
