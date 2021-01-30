import {observable, action} from 'mobx'

const AppStore = observable({
    count: 0,
    addCount: action(() => {
        AppStore.count++
    }),
    resetCount: action(() => {
        AppStore.count = 0
    })
})

export {
    AppStore
}
