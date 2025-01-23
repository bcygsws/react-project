import './index.scss';
import {Tabs} from "antd-mobile";
import useTabs from "./useTabs";
import ListItem from "@/pages/home/listItem/index";

const Home = () => {
    // tabs组件 title值组成的列表
    const {channels} = useTabs();
    // 将获取数据的逻辑和渲染数据的逻辑分开，获取列表数据的逻辑，抽象成
    // hook,useTabs

    // const [channels, setChannels] = useState<ChannelItem[]>([]);
    // useEffect(() => {
    //     const getChannels = async () => {
    //         try {
    //             const res = await getChannelsAPI();
    //             console.log(res);
    //             // 更新channels列表
    //             setChannels(res.data.data.channels);
    //         } catch (error) {
    //             throw new Error(`出现${error}`);
    //         }
    //     }
    //     getChannels();
    //
    // }, []);


    return (<div className="home-container">
        <div className="tabContainer">
            {/*defaultActiveKey规定，标签页默认选中项，由于Tabs.Tab的key来自item.id(string),所有默认值
            为{'0'} */}
            <Tabs defaultActiveKey={'0'}>
                {
                    channels.map(item => {
                        return (<Tabs.Tab title={item.name} key={item.id}>
                            <div className="listContainer">
                            <ListItem id={item.id}/>
                            </div>
                        </Tabs.Tab>)
                    })
                }
            </Tabs>
        </div>
    </div>)
}
export default Home;