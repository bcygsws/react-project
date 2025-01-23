import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import fetchCount from "@/store/modules/counterAPI.tsx";

/**
 * @desc:React Redux中文网
 * https://cn.redux.js.org/tutorials/typescript-quick-start
 * 计数器：https://codesandbox.io/p/sandbox/github/reduxjs/redux/tree/master/examples/counter-ts?file=%2Fsrc%2Ffeatures%2Fcounter%2FcounterSlice.ts&from-embed
 *
 * */

// 处理异步函数fetchCount，创建异步action
/**
 *@createAsyncThunk的参数说明：
 * 1.typePrefix: action type的前缀，默认为""，如果为空，则action type为counter/fetchCount
 * 2.payloadCreator: 异步函数，返回值是action的payload，默认为异步函数，返回promise对象，
 * 如果返回值是promise对象，则自动处理promise对象的状态，并返回结果
 * 3.options:可选参数；额外的配置参数，默认为{}，可以配置thunkAPI参数，
 * 例如thunkAPI.dispatch，thunkAPI.getState
 *
 * */

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (val: number) => {
    const res = await fetchCount(val);
    return res.data;
});

const counterStore = createSlice({
    name: "counter",
    initialState: {
        count: 0,
        status: 'idle'
    },
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.count += action.payload;
        }
    },
    // 1.同reducers中的一样，方法名是actions;incrementAsync是createAsyncThunk创建的异步action
    // 2.一个带有builder参数的链式写法
    extraReducers: (builder) => {// 用于处理在其他地方定义的actions
        builder.addCase(incrementAsync.pending, (state) => {
            state.status = 'loading';
        }).addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.count += action.payload;
        }).addCase(incrementAsync.rejected, (state) => {
            state.status = 'failed';
        })

    }
})
// 如果count值为奇数，点击按钮才会工作
// 注：selectCount是useSelector钩子的回调函数参数，可以在组件中复用，此处可以导出
export const selectCount = (state: any) => state.counter.count;
const incrementIfOdd = (amount: number) => {
    return (dispatch: any, getState: any) => {
        // selectCount函数,state参数是getState()是，就是当前值
        const currentValue = selectCount(getState());
        console.log('当前值', currentValue);
        if (currentValue % 2 === 1) {
            dispatch(incrementByAmount(amount));
        }
    }
}

const {increment, decrement, incrementByAmount} = counterStore.actions;
const reducer = counterStore.reducer;
export {increment, decrement, incrementByAmount, incrementIfOdd};
export default reducer;
