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
import {getToken, removeToken} from "./index";
import router from "../router/router";

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

/**
 * @name:
 * @description:路由失效处理
 * 登录后，如果长时间未对浏览器进行操作；超过token令牌的有效时间（如：2小时）后，
 * 再回来，已经不能用原令牌请求数据了
 *
 * 模拟：处理令牌失效后，401状态码
 * 1.在localstorage中，删除几位token,然后刷新页面，就可以返回401状态码
 * 2.超出2xx范围的状态码，在响应式拦截器error回调中
 * 3.error.response.status===401时，
 * a.清除token
 * b.跳转至登录页
 *
 * */
request.interceptors.response.use((res) => {
	// 2xx状态码都会触发该函数
	return res.data;
}, (error) => {
	// 不在2xx范围内的状态码都会触发该函数，错误处理
	// 处理401状态码
	console.log(error);// 打印一个AxiosError对象
	if(error.response.status===401){
		// 清除token
		removeToken();
		// 跳转至登录页(全局的跳转，类似vue中beforeEach)
		router.navigate("/");
		// 刷新一些浏览器页面后，才会跳转至登录页
		window.location.reload();
	}

	return Promise.reject(error);
})
export {request};