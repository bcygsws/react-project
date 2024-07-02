import {createSlice} from "@reduxjs/toolkit";
import {request} from "../../utils";
import {getToken, setToken} from "../../utils";

const userStore = createSlice({
	name: "user",
	initialState: {
		token: getToken() || ""
	},
	reducers: {
		setTokenKey(state, action) {
			state.token = action.payload;
			setToken(action.payload);
		}
	}
});
// 获取reducer函数
const reducer = userStore.reducer;
// 获取多个action
const {setTokenKey} = userStore.actions;
// 进一步封装异步请求
const fetchLogin = (loginForm) => {
// 导入二次封装过的axios模块request
	return async (dispatch) => {
		const res = await request.post("/authorizations", loginForm);
		dispatch(setTokenKey(res.data.token));
	}
}
// export {setTokenKey};
export {fetchLogin};
export default reducer;