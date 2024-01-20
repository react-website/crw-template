import React, { memo, useEffect } from 'react'
import { Layout, Drawer } from 'antd'

import { useSelector, useDispatch } from 'react-redux'

import { getUserInfoAction } from '@pages/login/api'
import AppHeader from '../app-header'
import AppFooter from '../app-footer'
import AppSlider from '../app-slider'
import AppSetting from '../app-setting'

import './scss/index.scss'

function App() {
    const appSlider = useSelector((state) => state.global.appSlider)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserInfoAction())
    }, [])

    return (
        <Layout styleName="app-container">
            <Layout>
                <AppSlider systemName="WELCOME" />
                <Layout>
                    <AppHeader />
                    <Layout className="">
                        <Layout.Content>
                            content
                        </Layout.Content>
                        <AppFooter />
                    </Layout>
                </Layout>
            </Layout>
            <Drawer
                destroyOnClose
                visible={appSlider}
                size="458px"
                footer={false}
                header="页面配置"
            >
                <AppSetting />
            </Drawer>
        </Layout>
    )
}

export default memo(App)
