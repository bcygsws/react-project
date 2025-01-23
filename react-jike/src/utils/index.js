/**
 *
 * @description:中转导出
 * 会有多个类似useRequest的处理，都引入到当前index.js文件中，然后统一导出
 *
 * */
import {request} from "./request";
import {setToken, getToken, removeToken} from "./token";

export {
	request,
	setToken,
	getToken,
	removeToken
};