import {useState} from 'react';
import {Icon, TabBar} from 'zarm'

const Home = () => {
    const [activeKey, setActiveKey] = useState('home')

    return (
        <div className="wrapper">

            <TabBar
                activeKey={activeKey}
                onChange={setActiveKey}>
                <TabBar.Item
                    itemKey="home"
                    title="home"
                    icon={<Icon type="home"/>}
                />
                <TabBar.Item
                    itemKey="store"
                    title="store"
                    icon={<Icon type="arrow-top"/>}
                />
                <TabBar.Item
                    itemKey="mine"
                    title="mine"
                    icon={<Icon type="user"/>}
                />
            </TabBar>
        </div>
    );
}

export default Home
