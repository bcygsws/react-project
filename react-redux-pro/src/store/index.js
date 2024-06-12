/**
 * @name:router.js
 * @description:将配置好的modules中的xxxStore.js模块连接起来，导出store
 * 供项目中，多处获得最新的state
 *
 *
 * */
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./modules/counterStore";
import channelReducer from "./modules/channelStore";
// 创建store
const store = configureStore({
	reducer: {
		counter: counterReducer,
		channels: channelReducer
	}
});
export default store;