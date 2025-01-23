import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './modules/counterSlice.tsx';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})
export default store;