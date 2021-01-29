/**
 * 节流函数
 * 适用于无状态事件
 * @param fn
 * @param delay
 * @param args
 * @returns {function(...[*]=)}
 */
const throttle = (fn, delay, ...args) => {
    let timer = null
    return () => {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, delay)
        }
    }
}

export default throttle
