import {useRef, useEffect, useCallback} from 'react'

const useDebounce = (fn, delay, deps = []) => {
    const {current} = useRef({fn, timer: null})
    useEffect(() => {
        current.fn = fn
    }, [fn])

    return useCallback((...args) => {
        if (current.timer) clearTimeout(current.timer)
        const callNow = !current.timer
        current.timer = setTimeout(() => {
            current.timer = null
        }, delay)
        if (callNow) current.fn.call(this, ...args)
    }, deps)

}

export default useDebounce
