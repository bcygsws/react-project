import {createSlice} from "@reduxjs/toolkit";

/**
 * @desc:购物车相关状态
 *
 * */
const cartStore = createSlice({
    name: 'cart',
    initialState: {
        flag: true
    },
    reducers: {
        changeFlag(state) {
            state.flag = !state.flag;
        }
    }
})
const {changeFlag} = cartStore.actions;
const reducer = cartStore.reducer;
export {
    changeFlag
}
export default reducer;