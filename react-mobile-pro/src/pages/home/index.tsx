import {Tabs} from 'antd-mobile';
import './index.scss';
import {getTabList} from "@/apis/header.tsx";
import {useEffect, useState} from "react";
import ListItem from "@/pages/home/item/index.tsx";

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
    }, []);
    return (<div className="home-container">
        <div className="tabContainer">

            {/*顶部滑动条*/}
            {/*defaultActiveKey属性，设置为默认'0'，也即"推荐"频道选中*/}
            <Tabs
                defaultActiveKey={'0'}
            >
                {
                    channel?.map((item) => {
                        return <Tabs.Tab title={item.name} key={item.id}>
                            {/*列表内容区*/}
                            <div className="listContainer">
                                <ListItem id={item.id + ''}/>
                            </div>
                        </Tabs.Tab>
                    })
                }
            </Tabs>
        </div>
    </div>)
}
export default HomeView;