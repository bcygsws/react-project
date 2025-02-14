import {combineReducers, configureStore} from "@reduxjs/toolkit";
import listReducer from './modules/list.tsx';
import cartReducer from './modules/cart.tsx';
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
    _list: listReducer,
    _cart: cartReducer
})
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['default']// 注意：黑白名单数组中，是reducer的别名

}

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false // 关闭redux的序列化检查
        })
});
const persistor = persistStore(store);
export {store};
export default persistor;
/**
 * @bug:在使用redux-persist时，提示如下：
 * A non-serializable value was detected in an action, in the path: register. Value: ƒ register(key) {   _pStore.
 * dispatch({   type: _constants__WEBPACK_IMPORTED_MODULE_0__.REGISTER,   key: key   });   }    Take a look at the
 * logic that dispatched this action: {type: 'persist/PERSIST', register: ƒ, rehydrate: ƒ}……
 *
 * 解决：提示action中有非序列化的数据；在configureStore参数中，添加middleware配置项，
 * 关闭redux序列化检查
 * 参考文档：https://juejin.cn/post/7118170599444185101?from=search-suggest
 * 参考文档2：https://juejin.cn/post/7428215337505013787
 *
 *
 * */