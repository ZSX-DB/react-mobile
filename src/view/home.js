import StoreDemo from '@/component/storeDemo'
import HookDemo from '@/component/hookDemo'
import StartDemo from '@/component/startDemo'
import React, {useState} from 'react'
import {TabBar} from 'zarm'

const Home = () => {
    const [activeKey, setActiveKey] = useState('hook')
    const page = {
        hook: <HookDemo/>,
        store: <StoreDemo/>,
        start: <StartDemo/>
    }
    const changeTabbar = path => {
        setActiveKey(path)
    }

    return (
        <div className="wrapper">

            {page[activeKey]}

            <TabBar
                activeKey={activeKey}
                onChange={changeTabbar}>
                <TabBar.Item
                    itemKey="hook"
                    title="hook"
                />
                <TabBar.Item
                    itemKey="store"
                    title="store"
                />
                <TabBar.Item
                    itemKey="start"
                    title="start"
                />
            </TabBar>
        </div>
    )
}

export default Home
