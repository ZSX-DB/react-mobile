import {useRef, useEffect, useCallback} from 'react'

const useThrottle = (fn, delay, deps = []) => {
    const {current} = useRef({fn, timer: null})
    useEffect(() => {
        current.fn = fn
    }, [fn])

    return useCallback((...args) => {
        if (!current.timer) {
            current.timer = setTimeout(() => {
                delete current.timer
            }, delay)
            current.fn.call(this, ...args)
        }
    }, deps)
}

export default useThrottle
