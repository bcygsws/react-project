/**
 * @name:article.js
 * @description:
 * 统一维护 文章 相关的请求API
 *
 *
 * */
import {request} from "../utils";
// 1.渲染下拉框列表
const getChannelAPI = () => {
	return request({
		method: "GET",
		url: "/channels"
	});
}
// 2.提交文章表单
const createArticleAPI = (data) => {
	return request({
		url: "/mp/articles?draft=false",
		method: "POST",
		data
	});
}

export {getChannelAPI, createArticleAPI};