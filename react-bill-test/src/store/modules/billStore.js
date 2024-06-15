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
		}
	}
});

const reducer = billStore.reducer;
const {setBillList} = billStore.actions;
// setBillList是异步action,需要进一步封装
const getBillList = () => {
	const URL = "http://localhost:8888/ka";
	return async (dispatch) => {
		const result = await axios.get(URL);
		console.log(result.data);
		dispatch(setBillList(result.data));
	}
}
export {getBillList};
export default reducer;