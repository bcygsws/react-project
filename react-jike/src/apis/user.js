import {request} from "../utils";

/**
 * @name:user.js
 * @description:封装跟user请求相关
 *
 * */
const loginAPI = (formData) => {
	// 返回的是promise
	return request({
		url: '/authorizations',
		method: 'POST',
		data: formData
	});

}
const getUserAPI = () => {
	// 返回的是promise
	return request({
		url: '/user/profile',
		method: 'GET'
	});

}
export {
	loginAPI,
	getUserAPI
}