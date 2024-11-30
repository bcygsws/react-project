/**
 * @desc:导出reducer和actions
 *
 * */
import {createSlice} from "@reduxjs/toolkit";

const counterStore = createSlice({
    name: 'countStore',// 命名空间 name/reducers中方法名,构成action的type值
    initialState: {
        count: 0
    },
    reducers: {
        add: (state) => {
            // RTK内置了immer,打破了Redux实现统一状态管理时，reducer函数状态不可变的问题
            state.count++;
        },
        dec: (state) => {
            state.count--;
        },
        multiInc: (state, action) => {
            state.count += action.payload;
        }

    }
});

// 从store中解构出actions：add、increment
const {add, dec, multiInc} = counterStore.actions;
const counterReducer = counterStore.reducer;
export {
    add, dec, multiInc
}
export default counterReducer;
