import React, { memo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { Layout } from 'antd'
import classNames from 'classnames'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import { updateCollapsedAppSlider } from '@framework/reducer'

import './scss/index.scss'

function AppSlider({
    systemName
}) {
    const collapsedAppSlider = useSelector((state) => state.global.collapsedAppSlider)
    const dispatch = useDispatch()

    const setCollapsed = useCallback(() => {
        dispatch(updateCollapsedAppSlider(false))
    }, [dispatch])

    return (
        <Layout.Sider
            styleName="app-slider"
            collapsed={collapsedAppSlider}
            onCollapse={setCollapsed}
        >
            <header className={classNames('app-slider-header', { collapsed: collapsedAppSlider })}>
                <i className="logo" />
                <span>{systemName}</span>
            </header>
            <main className="app-slider-main">
                内容
            </main>
            {
                collapsedAppSlider && (
                    <footer className="app-slider-footer">
                        <MenuUnfoldOutlined onClick={setCollapsed} />

                    </footer>
                )
            }
        </Layout.Sider>
    )
}

AppSlider.propTypes = {
    systemName: PropTypes.string,
}

AppSlider.defaultProps = {
    systemName: ''
}

export default memo(AppSlider)
