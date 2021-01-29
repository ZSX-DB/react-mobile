/**
 * 防抖函数
 * 适应于无状态事件
 * @param fn
 * @param delay
 * @param args
 * @returns {function(...[*]=)}
 */
const debounce = (fn, delay, ...args) => {
    let timer = null
    return () => {
        if (timer) clearTimeout(timer)
        const callNow = !timer
        timer = setTimeout(() => {
            timer = null
        }, delay)
        if (callNow) fn.apply(this, args)
    }
}

export default debounce
