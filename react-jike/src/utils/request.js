/**
 * @name:useRequest
 * @description:封装axios请求
 * timeout 超时时间
 * baseURL 根域名
 * 请求拦截器 axios.interceptors.request.use
 * 响应拦截器 axios.interceptors.response.use
 *
 *
 * */
import axios from "axios";
import {getToken} from "./index";

const request = axios.create({
	baseURL: "http://geek.itheima.net/v1_0",
	timeout: 5000
});
// 在请求发送之前，拦截一下，插入一些自定义配置-参数处理
// 2xx状态码都会触发该函数
/**
 * @将token加入到请求头，向后端发送请求时，需要验证token字段，才能获得响应数据
 *
 * */
request.interceptors.request.use((config) => {
	// 1.获取token
	const token = getToken();
	// 2.token有值，就为请求头添加token值
	// 3.在layout组件中测试
	if (token) {// 注：token的拼接方式，要遵循后端的要求
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
}, (error) => {
	// 非2xx状态码都会触发该函数，错误处理
	return Promise.reject(error);
});
// 在响应返回客户端之前，拦截一下，对数据进行处理
request.interceptors.response.use((res) => {
	// 2xx状态码都会触发该函数
	return res.data;
}, (error) => {
	// 非2xx状态码都会触发该函数，错误处理
	return Promise.reject(error);
})
export {request};