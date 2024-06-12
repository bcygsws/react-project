import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const createStore = createSlice({
	name: "takeaway",
	initialState: {
		foodsList: [],
		activeIndex: 0, // Menu组件中动态类样式选中状态变量
		cartList: []// 购物车数据列表
	},
	reducers: {
		setFood: (state, action) => {
			state.foodsList = action.payload;
		},
		setIndex: (state, action) => {
			state.activeIndex = action.payload;
		},
		setCartList: (state, action) => {
			// find找到一个元素，cartList中id和动态传入的对象中的id匹配，将count+1即可；否则：就是购物车列表中没有这件商品，push到cartList中
			const item = state.cartList.find(val => {
				return val.id === action.payload.id;
			});
			if (item) {
				item.count++;
			} else {
				state.cartList.push(action.payload);
			}
		},
		increment: (state, action) => {
			// dispatch(increment(id)) id参数，使用action.payload直接拿到；setCartList中，是以对象形式传参，action.payload拿到的是对象{id,……}，此处action.payload.id才能拿到id值
			const item = state.cartList.find(val => val.id === action.payload);
			item.count++;
		},
		decrement: (state, action) => {
			// 基本逻辑同上，但注意item.count=0了，就需要将该id所在对象元素，从cartList列表中删除
			const item = state.cartList.find(val => val.id === action.payload);
			item.count--;
			if (item.count === 0) {
				state.cartList = state.cartList.filter(val => val.id !== action.payload)
			}
		},
		clearAll: (state) => {// 清空购物车
			state.cartList = [];

		}
	}
});
// 获取reducer函数
const reducer = createStore.reducer;
// 获取action,并封装成支持异步的getFoodList()方法
const {setFood, setIndex, setCartList, increment, decrement, clearAll} = createStore.actions;

// 处理异步的action
function getFoodList() {
	const URL = "http://localhost:3004/takeaway";
	return async (dispatch) => {
		const result = await axios.get(URL);
		console.log(result);
		dispatch(setFood(result.data));
	}
}

export {getFoodList, setIndex, setCartList, increment, decrement, clearAll};
export default reducer;