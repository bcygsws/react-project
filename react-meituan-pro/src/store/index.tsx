import {combineReducers, configureStore} from "@reduxjs/toolkit";
import defaultReducer from './modules/list.tsx';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';

// const store = configureStore({
//     reducer: {
//         default: defaultReducer
//     }
// })
// export default store;
// 数据持久化配置

// 组合多个reducer
const reducers = combineReducers({
    default: defaultReducer
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['default']// 注意：黑白名单数组中，是reducer的别名
}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: persistedReducer,
});
const persistor = persistStore(store);
export {store};
export default persistor;
