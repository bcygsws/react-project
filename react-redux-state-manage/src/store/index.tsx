import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {thunk} from 'redux-thunk';
import countReducer from "@/store/modules/counter/reducer.tsx";
import NumReducer from '@/store/modules/counter1/reducer1.tsx';
import mapReducer from "@/store/modules/map/mapReducer.tsx";

const reducers = combineReducers({
    counter: countReducer,
    num: NumReducer,
    mapping: mapReducer
})
// 创建store,新增 应用中间件 applyMiddleware(thunk)处理异步action
const store = legacy_createStore(reducers, applyMiddleware(thunk));
export default store;
