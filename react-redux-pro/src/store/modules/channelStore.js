import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const createStore = createSlice({
	name: "channel",
	initialState: {
		list: []
	},
	reducers: {
		setChannel: (state, action) => {
			state.list = action.payload;
		}
	}
})
// 获取并导出reducer
const channelReducer = createStore.reducer;
const {setChannel} = createStore.actions;
// 当出现异步传参时，要对从reducer导出的action进行二次封装
const fetchList = () => {
	const URL = "http://geek.itheima.net/v1_0/channels";
	return async (dispatch) => {
		// 1.自带fetch请求，需要分两步：采用更加简便的axios
		// const res = await fetch(URL);
		// const result = await res.json();
		// console.log(result);
		// 2.使用axios请求数据
		const result = await axios.get(URL);
		// console.log(result);
		const {channels} = result.data.data;
		// console.log(channels);
		dispatch(setChannel(channels));
	}
}
export {fetchList};
export default channelReducer;
