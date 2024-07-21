import {useEffect, useState} from "react";
import {ChannelItem, getChannelsAPI} from "@/apis/list";

const useTabs = () => {
    // tabs组件 title值组成的列表
    const [channels, setChannels] = useState<ChannelItem[]>([]);
    useEffect(() => {
        const getChannels = async () => {
            try {
                const res = await getChannelsAPI();
                console.log(res);
                // 更新channels列表
                setChannels(res.data.data.channels);
            } catch (error) {
                throw new Error(`出现${error}`);
            }
        }
        getChannels();

    }, []);
    return {channels};
}
export default useTabs;