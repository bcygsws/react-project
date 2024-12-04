import {createSlice} from "@reduxjs/toolkit";

const counterStore = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment(state, action) {
            state.count += action.payload
        },
        decrement(state, action) {
            state.count -= action.payload
        }
    }
})

const {increment, decrement} = counterStore.actions;
const reducer = counterStore.reducer;
export {increment, decrement};
export default reducer;
