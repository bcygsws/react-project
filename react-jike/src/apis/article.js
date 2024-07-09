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
// 3.获取文章列表API
const getArticleListAPI = (params) => {
	return request({
		url: "/mp/articles",
		method: "GET",
		// 传递query参数
		params
	});

}
// 4.删除文章，根据id
const deleteArtByIdAPI = (data) => {
	return request({
		url: `/mp/articles/${data.id}`,
		method: "DELETE"
	});
}
// 5.根据id,获取文章详情-回显数据
const getDetailByIdAPI = (id) => {
	return request({
		url: `/mp/articles/${id}`,
		method: "GET"
	});

}
export {
	getChannelAPI,
	createArticleAPI,
	getArticleListAPI,
	deleteArtByIdAPI,
	getDetailByIdAPI
};