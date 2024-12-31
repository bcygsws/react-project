import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit';
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
 * 配置好react-redux+RTK可以管理状态之后，再配置redux-persist实现持久化的步骤
 * 1.store需要传入persistStore,得到persistor也要导出，给main文件
 * <Provider store={store}>
 *   <PersistGate loading={null} persistor={persistor}>
 *   </PersistGate>
 * </Provider>
 *
 * 2.创建store,configStore传入的reducer是合并后的persistedReducer
 *
 * 3.persistedReducer由persistReducer函数返回的
 * const persistedReducer = persistReducer(persistConfig, reducers);
 *
 * 4.persistConfig配置对象，以指明持久化的键名和存储方式：key和localStorage,以及
 * whitelist和blacklist，白名单和黑名单，白名单中的reducer会被持久化，黑名单中的reducer不会被持久化
 *
 * 5.reducers 由combineReducers函数返回的
 * 伪代码
 * const reducers = combineReducers({
 *     counter: counterReducer,
 *     channels: channelReducer
 * })
 *
 *
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

// 从store本身推断出RootState和AppDispatch类型
// 参考文档：https://cn.redux.js.org/tutorials/typescript-quick-start

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>