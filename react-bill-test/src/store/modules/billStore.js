import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
	name: "bill",// name是一个必填项
	initialState: {
		billList: []
	},
	reducers: {
		setBillList: (state, action) => {
			state.billList = action.payload;
		},
		addBillList: (state, action) => {
			state.billList.push(action.payload);
		}
	}
});

const reducer = billStore.reducer;
// console.log(reducer);
const {setBillList, addBillList} = billStore.actions;
// setBillList是异步action,需要进一步封装
const getBillList = () => {
	const URL = "http://localhost:8888/ka";
	return async (dispatch) => {
		const result = await axios.get(URL);
		console.log(result.data);
		dispatch(setBillList(result.data));
	}
}
// 向服务器添加表单数据，post
const asyncAddBillList = (data) => {
	const URL = "http://localhost:8888/ka";
	return async (dispatch) => {
		const result = await axios.post(URL, data);
		// 请求发出后，result.date拿到的是当前提交的数据
		console.log(result.data);// {"id": "4ca1","type": "pay","money": -12,"date": "2024-06-29","useFor": "drinks"}
		dispatch(addBillList(result.data));
	}

}
export {getBillList, asyncAddBillList};
export default reducer;