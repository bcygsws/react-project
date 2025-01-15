import axios from 'axios';

export interface IChannel {
    id: number;
    name: string;
}

// 注：其中的set()和get()方法
// 1.set()：用于修改state中的数据；

// set方法传值类型：
// a.set()可以传一个对象
// b.也可以传递一个参数为state的回调函数

// 语法：inc:()=>set({count: 100})
// 语法：dec:()=>set(state=>({count: state.count - 1}))
// 2.get()：用于读取state中的数据，返回值是state对象
const useChannelStore = (set: any, get: any) => {
    return {
        channelList: [] as Array<IChannel>,
        getChannelList: async () => {
            const URL = "http://geek.itheima.net/v1_0/channels";
            const res = await axios.get(URL);
            console.log("res.data===", res.data);
            // 类似react-redux+RTK的dispatch参数的函数中处理的内容
            set({channelList: res.data.data.channels});
            console.log("在钩子内部读取channelList", get().channelList);
        }
    }
}
export default useChannelStore;