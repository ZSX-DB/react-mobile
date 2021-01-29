import '@/style/home.scss'

const Home = () => {
    let count = 0
    let startY, endY

    document.addEventListener('touchstart', event => {
        startY = event.touches[0].pageY
    })

    document.addEventListener('touchend', event => {
        endY = event.changedTouches[0].pageY

        // 当startY大于endY，向上滑动，反之向下移动
        if (startY < endY && count > 0) {
            count--
        } else if (startY > endY && count < 3) {
            count++
        }
        const {style, clientHeight} = document.querySelector('.one')
        style.marginTop = `-${count * clientHeight}px`

    })

    return (
        <div className="wrapper">
            <div className="page one">Page1</div>
            <div className="page two">Page2</div>
            <div className="page three">Page3</div>
            <div className="page four">Page4</div>
        </div>
    )
}

export default Home
