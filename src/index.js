import React from 'react'
import ReactDOM from 'react-dom'
import 'lib-flexible'
import 'zarm/dist/zarm.min.css'
import '@/index.css'
import {Provider} from 'mobx-react'
import App from '@/App'
import reportWebVitals from '@/reportWebVitals'
import * as stores from '@/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider {...stores}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
