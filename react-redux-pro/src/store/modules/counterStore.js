/**
 *
 * @注意：组件中需要调用一下，reducers对象的键名作为方法名的方法，才能拿到action
 * console.log(increment());// {type: 'counter/increment', payload: undefined}
 *
 * */
import {createSlice} from "@reduxjs/toolkit";

const counterStore = createSlice({
	name: "counter",
	// 1.state初始状态
	initialState: {
		count: 0
	},
	reducers: {// 编写修改数据的方法，可以直接修改count变量了（因为@reduxjs/toolkit默认支持了immer）
		increment: (state) => {
			state.count++;
		},
		decrement: (state) => {
			state.count--;
		},
		// 上面每次都是+1或者-1，实现每次+10，就需要在组件Counter.jsx中传参
		addToNum: (state, action) => {
			state.count += action.payload;
		}
	}
});
// 解构出创建action对象的方法,actionCreator
const {increment, decrement, addToNum} = counterStore.actions;

// 获取reducer函数并导出
const counterReducer = counterStore.reducer;
// 组件中必须调用increment、decrement才能拿到action
console.log(increment());// {type: 'counter/increment', payload: undefined}
export {increment, decrement, addToNum};
export default counterReducer;