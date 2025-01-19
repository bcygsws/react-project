import {Tabs} from 'antd-mobile';
import './index.scss';
import {getTabList} from "@/apis/header.tsx";
import {useEffect, useState} from "react";

export interface IChannel {
    id: number;
    name: string;
}

const HomeView = () => {
    // 定义存储顶部滑动条channel频道列表的变量
    const [channel, setChannel] = useState<IChannel[]>();
    // 获取顶部滑动条channel频道列表
    useEffect(() => {
        async function getChannels() {
            const res = await getTabList();
            console.log(res);
            // 为channel数据赋值
            setChannel(res.data.channels);
        }

        getChannels();
    }, [])
    return (<div className="home-container">
        {/*顶部滑动条*/}
        <div className="header">
            <Tabs
                className="tabs"
            >
                {
                    channel?.map((item) => {
                        return <Tabs.Tab title={item.name} key={item.id}>
                            {item.name}
                        </Tabs.Tab>
                    })
                }
            </Tabs>
        </div>
        {/*列表内容区*/
        }
        <div className="content"></div>
    </div>)
}
export default HomeView;