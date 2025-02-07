import {createSlice} from "@reduxjs/toolkit";

/**
 * @desc:购物车相关状态
 * flag:指示购物车的激活状态
 *
 *
 * */
const cartStore = createSlice({
    name: 'cart',
    initialState: {
        flag: false,
        cartList: []// 购物车列表数据
    },
    reducers: {
        changeFlag(state) {
            state.flag = !state.flag;
        },
        // 分类列表中，点选物品，添加至购物车中
        setCartList(state, action) {
            const item = state.cartList.find(val => val.id === action.payload.id);
            if (item) {
                item.count++;
            } else {
                state.cartList.push(action.payload);
            }
        },
        // 购物车列表增加物品数量
        increment(state, action) {

        },
        // 购物车列表减少物品数量
        decrement(state, action) {

        },
        // 清空购物车
        clearAll(state, action) {

        }
    }
})
const {changeFlag, setCartList} = cartStore.actions;
const reducer = cartStore.reducer;
export {
    changeFlag,
    setCartList
}
export default reducer;