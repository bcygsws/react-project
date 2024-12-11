import axios from 'axios';

export interface IChannel {
    id: number;
    name: string;
}

const useChannelStore = (set: any, get: any) => {
    return {
        channelList: [] as Array<IChannel>,
        getChannelList: async () => {
            const URL = "http://geek.itheima.net/v1_0/channels";
            const res = await axios.get(URL);
            console.log("res.data===", res.data);
            set({channelList: res.data.data.channels});
            console.log("在钩子内部读取channelList", get().channelList);
        }
    }
}
export default useChannelStore;