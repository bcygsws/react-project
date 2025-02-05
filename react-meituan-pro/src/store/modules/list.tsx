import {createSlice} from "@reduxjs/toolkit";
import {getFoodListAPI} from "@/apis/order.tsx";

const orderStore = createSlice({
    name: "order",
    initialState: {
        init_id: '' // 初始化id存储，路由重定向时使用
    },
    reducers: {
        getId(state, action) {
            state.init_id = action.payload;
        }
    }
});
const {getId} = orderStore.actions;
const reducer = orderStore.reducer;
const getInitialId = () => {
    return async (dispatch) => {
        const res = await getFoodListAPI();
        console.log("res ==========", res);
        const {id} = res?.find((item, index) => (index === 0));
        dispatch(getId(id))
    }
}
export {
    getInitialId
}
export default reducer;