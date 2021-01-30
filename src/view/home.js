import logo from '@/image/logo.svg'
import github from '@/image/github.svg'
import {useEffect, useRef} from 'react'
import '@/style/home.scss'
import '@/style/usual.scss'


const Home = () => {

    let app = useRef(null)

    useEffect(()=>{

        let count = 0
        let startY, endY

        document.addEventListener('touchstart', event => {
            startY = event.touches[0].pageY
        })

        document.addEventListener('touchend', event => {
            endY = event.changedTouches[0].pageY
            if (startY < endY && count > 0) {
                count--
            } else if (startY > endY && count < 2) {
                count++
            }
            const {style, clientHeight} = app.current
            style.marginTop = `-${count * clientHeight}px`
        })
    })

    return (
        <div className="wrapper">
            <div className="page app" ref={app}>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <h1>
                        React Mobile
                    </h1>
                    <a
                        className="app-link"
                        href="https://react.docschina.org/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
            <div className="page zarm-box">
                <div className="zarm-label-box center">
                    <span className="test">ZARM</span>
                </div>
                <a className="zarm-link"
                   href="https://zarm.gitee.io/#/"
                   target="_blank"
                   rel="noopener noreferrer">
                    Use Zarm
                </a>
            </div>
            <div className="page github-box">
                <img src={github} className="github-icon" alt="github" />
                <div className="address center">
                    GitHub Address
                </div>
                <a className="address-link"
                     href="https://github.com/ZSX-DB/react-mobile"
                     target="_blank"
                     rel="noopener noreferrer">
                    https://github.com/ZSX-DB/react-mobile
                </a>
            </div>
        </div>
    )
}

export default Home
