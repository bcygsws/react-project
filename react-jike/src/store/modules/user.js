import {createSlice} from "@reduxjs/toolkit";
import {removeToken} from "../../utils";
import {getToken, setToken} from "../../utils";
// 获取封装的axios请求API
import {loginAPI, getUserAPI} from "../../apis/user";

const userStore = createSlice({
    name: "user",
    initialState: {
        token: getToken() || "",
        userInfo: {}
    },
    reducers: {
        setTokenKey(state, action) {
            state.token = action.payload;
            setToken(action.payload);
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload;
        },
        clearUserInfo(state) {
            state.token = "";
            removeToken();
            state.userInfo = {};
        }
    }
});
// 获取reducer函数
const reducer = userStore.reducer;
// 获取多个action
const {setTokenKey, setUserInfo, clearUserInfo} = userStore.actions;
// 进一步封装异步请求
const fetchLogin = (loginForm) => {
// 导入二次封装过的axios模块request
    return async (dispatch) => {
        const res = await loginAPI(loginForm);
        dispatch(setTokenKey(res.data.token));
    }
}
// 封装获取用户信息异步action
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await getUserAPI();
        dispatch(setUserInfo(res.data));
    }
}
// export {setTokenKey};
export {fetchLogin, fetchUserInfo, clearUserInfo};
export default reducer;