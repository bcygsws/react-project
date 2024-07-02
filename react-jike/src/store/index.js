import userReducer from "./modules/user";
import {configureStore} from "@reduxjs/toolkit";
// import {combineReducers, configureStore} from "@reduxjs/toolkit";
// 使用redux-persist
// import {persistStore, persistReducer} from "redux-persist";
// storage
// import storage from "redux-persist/lib/storage";

const store = configureStore({
	reducer: {
		user: userReducer
	}
});

// 1.创建 reducer(合并拆分的reducer)
// const rootReducer = combineReducers({
// 	user: userReducer
// });
// // 2 2.持久化配置
// const persistConfig = {
// 	key: "root",
// 	storage
// }
// // 2.3 创建持久化的reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// // 2.4. 创建store
// const store = configureStore({
// 	reducer: persistedReducer,
// 	devTools: true, // 是否开启开发者工具，默认true
// 	// 配置中间件：如果使用redux-persist，则需要设置为false，否则控制台报错（非序列化数据）
// 	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
// 		serializableCheck: false
// 	})
// });
// // 2.5 创建持久化的store
// const persistor = persistStore(store);
//
// export {
// 	store,
// 	persistor
// };

export {store};