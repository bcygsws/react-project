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

const request = axios.create({
	baseURL: "http://geek.itheima.net/v1_0",
	timeout: 5000
});
// 在请求发送之前，拦截一下，插入一些自定义配置-参数处理
request.interceptors.request.use((config) => {
	// 2xx状态码都会触发该函数
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