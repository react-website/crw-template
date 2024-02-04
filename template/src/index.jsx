import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import RootView from '@framework/root'
import store from '@framework/store'

import './css/index.scss'

createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <Provider store={store}>
                <RootView />
            </Provider>
        </React.StrictMode>,
    )
