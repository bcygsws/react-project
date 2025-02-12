import {createSlice} from "@reduxjs/toolkit";

/**
 * @desc:购物车状态管理
 * cartList：购物车列表
 * 注1：cartList是全局维护的状态后，cartList.length，也是响应式的了，不用再使用useMemo等钩子维护
 *
 * */
const cartStore = createSlice({
    name: 'cart',
    initialState: {
        cartList: []// 购物车列表数据
    },
    reducers: {
        // 分类列表中，点选物品，添加至购物车中
        setCartList(state, action) {
            const item = state.cartList.find(val => val.id === action.payload.id);
            if (item) {
                item.count++;
            } else {
                state.cartList.push(action.payload);// 每个item中添加的默认count是1，而不是0
            }
        },
        // 购物车列表增加物品数量
        increment(state, action) {
            const item = state.cartList.find(val => val.id === action.payload);
            item.count++;
        },
        // 购物车列表减少物品数量
        decrement(state, action) {
            const item = state.cartList.find(val => val.id === action.payload);
            item.count--;
            if (item.count === 0) {
                // 过滤掉当前action.payload(id值)，保留不包含当前id值的那些购物车对象数组的元素
                state.cartList = state.cartList.filter(val => val.id !== action.payload);
            }

        },
        // 清空购物车
        clearAll(state) {
            state.cartList = [];

        }
    }
})
const {setCartList, increment, decrement, clearAll} = cartStore.actions;
const reducer = cartStore.reducer;
export {
    setCartList,
    increment,
    decrement,
    clearAll
}
export default reducer;