/**
 * @name:router.js
 * @description:react项目的入口文件
 * */
// react项目的两个最基本的包：react和react-dom
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 项目的根组件
import App from './App';
import reportWebVitals from './reportWebVitals';
// 导入路由文件
/**
 *
 * @ history和hash模式路由的区别
 *          路由格式      底层原理           需要后端支持不？
 * history  /login       history+pushState    需要后端的支持
 * hash     /#/login     hashChange事件       不需要后端的支持
 * 使用场景：
 * 如果后端能够很好的支持，就使用history;否则就使用hash模式的路由
 *
 * */
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import routes from "./router/router";

const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * useEffect在react 18版本中，会出现副作用函数cb里代码执行两次的问题，
 * 参考文档：https://www.jb51.net/javascript/292183sdn.htm
 * 1.这是react 18有意为之的
 * 2.仅仅在开发模式+使用了严格模式 的情形下，执行两次；在生产环境中还是执行一次的
 * 3.之所以，执行两次，是为了模拟立即卸载组件和重新挂载组件
 * 4.为了后续react 18退出新功能做铺垫
 *
 *
 * */
const router = createBrowserRouter(routes);

root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App/>
		</RouterProvider>
	</React.StrictMode>
);
// root.render(
// 		<App/>
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
