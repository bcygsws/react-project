/**
 * @desc:导出reducer和actions
 *
 * */
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CountState {
    count: number
}

const initialState: CountState = {
    count: 0
};

const counterStore = createSlice({
    name: 'countStore',// 命名空间 name/reducers中方法名,构成action的type值
    initialState,
    reducers: {
        add: (state) => {
            // RTK内置了immer,打破了Redux实现统一状态管理时，reducer函数状态不可变的问题
            state.count++;
        },
        dec: (state) => {
            state.count--;
        },
        multiInc: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        }

    }
});

// 从store中解构出actions：add、increment方法
const {add, dec, multiInc} = counterStore.actions;
const counterReducer = counterStore.reducer;
export {
    add, dec, multiInc
}
export default counterReducer;
