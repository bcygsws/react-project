import {createSlice} from "@reduxjs/toolkit";
import {request} from "../../utils";

const userStore = createSlice({
	name: "user",
	initialState: {
		token: ""
	},
	reducers: {
		setToken(state, action) {
			state.token = action.payload;
		}
	}
});
// 获取reducer函数
const reducer = userStore.reducer;
// 获取多个action
const {setToken} = userStore.actions;
// 进一步封装异步请求
const fetchLogin = (loginForm) => {
// 导入二次封装过的axios模块request
	return async (dispatch) => {
		const res = await request.post("/authorizations", loginForm);
		dispatch(setToken(res.data.token));
	}
}
// export {setToken};
export {fetchLogin};
export default reducer;