import React, { memo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Layout } from 'antd'
import CustomIcon from '@components/custom-icon'
import UserDropdown from '@components/user-dropdown'
import AppLanguage from '@components/app-language'
import { updateCollapsedAppSlider } from '@framework/reducer'

import './scss/index.scss'

function AppHeader() {
    const userInfo = useSelector((state) => state.userInfo)
    const collapsedAppSlider = useSelector((state) => state.global.collapsedAppSlider)

    const dispatch = useDispatch()

    const setCollapsed = useCallback(() => {
        dispatch(updateCollapsedAppSlider(true))
    }, [dispatch])

    const dropdownList = [
        {
            label: '个人信息',
            key: 'userInfo',
            disabled: false,
            divider: false,
        },
        {
            label: '修改密码',
            key: 'changePassword',
            disabled: false,
            divider: false,
        },
        {
            label: '退出',
            key: 'logout',
            disabled: false,
            divider: true,
        },
    ]

    const userDropdownClick = ({ key }) => {
        console.log(key, 'userDropdownClick')
    }

    return (
        <Layout.Header styleName="app-header">
            <div className="slider-collapse-btn">
                { !collapsedAppSlider && <CustomIcon type="icon-wanggebuju1" onClick={setCollapsed} /> }
            </div>
            <div className="header-menu-wrapper" />
            <div className="header-action-wrapper">
                <AppLanguage />
                <UserDropdown
                    username={userInfo.username}
                    avatar={userInfo.avatar}
                    list={dropdownList}
                    onClick={userDropdownClick}
                />
            </div>
        </Layout.Header>
    )
}

AppHeader.propTypes = {

}

AppHeader.defaultProps = {
}

export default memo(AppHeader)
