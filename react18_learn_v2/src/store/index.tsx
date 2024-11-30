import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from "@/store/modules/counterStore.tsx";
import channelReducer from "@/store/modules/channelStore.tsx";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// 配置redux-persist之前
// const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         channels: channelReducer,
//     }
// });
// export default store;

/**
 * @desc:配置redux-persist之后
 *
 * */

// 1.合并多个reducer
const reducers = combineReducers({
    counter: counterReducer,
    channels: channelReducer
});

// 2.配置存储键和存储方式localStorage
const persistConfig = {
    key: 'root',// 存储键名
    storage,// 持久化存储引擎
    // blacklist: ['counter'],// 黑名单，不缓存的reducer
    whitelist: ['counter'],// 白名单，要缓存的reducer;此时channels不在白名单中，即channels不会持久化了
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);
export default store;
