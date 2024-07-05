/**
 * @name:article.js
 * @description:
 * 统一维护 文章 相关的请求API
 *
 *
 * */
import {request} from "../utils";

const getChannelAPI = () => {
	return request({
		method: "GET",
		url: "/channels"
	});
}
export {getChannelAPI};