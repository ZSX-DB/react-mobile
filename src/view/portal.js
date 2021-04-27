import logo from '@/image/logo.svg'
import github from '@/image/github.svg'
import styles from '@/style/portal.module.scss'
import {useEffect, useRef} from 'react'

const Portal = () => {

    let app = useRef(null)

    useEffect(() => {

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
            console.log(app.current, clientHeight, style.marginTop)
        })
    })

    return (
        <div className={styles['page-wrapper']}>
            <div className={`${styles.page} ${styles['app-box']}`} ref={app}>
                <header className={styles['app-header']}>
                    <img src={logo} className={styles['app-logo']} alt="logo"/>
                    <h1>
                        React Mobile
                    </h1>
                    <a
                        className={styles['app-link']}
                        href="https://react.docschina.org/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
            <div className={`${styles.page} ${styles['zarm-box']}`}>
                <div className={`${styles['zarm-label-box']} center`}>
                    <span>ZARM</span>
                </div>
                <a className={styles['zarm-link']}
                   href="https://zarm.gitee.io/#/"
                   target="_blank"
                   rel="noopener noreferrer">
                    Use Zarm
                </a>
            </div>
            <div className={`${styles.page} ${styles['github-box']}`}>
                <img src={github} className={`${styles['github-icon']}`} alt="github"/>
                <div className={`${styles.address} center`}>
                    GitHub Address
                </div>
                <a className={`${styles['address-link']}`}
                   href="https://github.com/ZSX-DB/react-mobile"
                   target="_blank"
                   rel="noopener noreferrer">
                    https://github.com/ZSX-DB/react-mobile
                </a>
            </div>
        </div>
    )
}

export default Portal
