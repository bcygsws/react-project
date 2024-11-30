import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const channelStore = createSlice({
    name: 'channel',// 用以生成action的type,比如：setChannel这个action，它的type就是：channel/setChannel
    initialState: {
        list: []
    },
    reducers: {
        setChannel(state, action) {
            state.list = action.payload;
        }
    }
});

const channelReducer = channelStore.reducer;
const {setChannel} = channelStore.actions;
// 当涉及异步数据时，要对导出的action进行二次封装
const fetchList = () => {
    const URL = "http://geek.itheima.net/v1_0/channels";
    return async (dispatch: any) => {
        const res = await axios.get(URL);
        /*原数据：data:{channels:[]},axios自带res.data,所以是res.data.data.channels*/
        console.log("res.data===", res.data);
        // setChannel {payload:'',type:'channel/setChannel'}
        dispatch(setChannel(res.data.data.channels));// 为state.list赋值了
    }
}
export {
    fetchList
}
export default channelReducer;
