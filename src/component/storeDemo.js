// 如果是需要同时使用多个store
import {inject, useObserver} from "mobx-react"
import {Button} from "zarm"

// 使用多个store e.g. inject('AppStore', 'ElseStore')({AppStore, ElseStore} => {})
const StoreDemo = inject('AppStore')(({AppStore}) => {

    return useObserver(() => (
        <div className="top-margin page-padding text-center">
            <h1>Mobx示例</h1>
            <h2>Count: {AppStore.count}</h2>
            <Button theme="primary"
                    className="common-margin"
                    onClick={AppStore.addCount}>
                AddCount
            </Button>
            <br/>
            <Button theme="danger"
                    className="common-margin"
                    onClick={AppStore.resetCount}>
                ResetCount
            </Button>
        </div>
    ))
})

export default StoreDemo
