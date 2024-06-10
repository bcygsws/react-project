import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const createStore = createSlice({
	name: "takeaway",
	initialState: {
		foodsList: [],
		activeIndex: 0// Menu组件中动态类样式选中状态变量
	},
	reducers: {
		setFood: (state, action) => {
			state.foodsList = action.payload;
		},
		setIndex: (state, action) => {
			state.activeIndex = action.payload;
		}
	}
});
// 获取reducer函数
const reducer = createStore.reducer;
// 获取action,并封装成支持异步的getFoodList()方法
const {setFood, setIndex} = createStore.actions;

// 处理异步的action
function getFoodList() {
	const URL = "http://localhost:3004/takeaway";
	return async (dispatch) => {
		const result = await axios.get(URL);
		console.log(result);
		dispatch(setFood(result.data));
	}
}

export {getFoodList, setIndex};
export default reducer;