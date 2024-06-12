/**
 * @react路由配置
 * history 模式需要后端支持，使用 createBrowserRouter 函数实现
 * hash 模式无需后端支持，路由上会带 # 号，使用 createHashRouter 函数实现
 *
 * */

// 路由配置
import {createBrowserRouter} from "react-router-dom";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import App from '../App';
// 创建路由对象实例
const router = createBrowserRouter([

		{
			path: '/',
			element: <App/>,
			routes: [
				{
					path: '/home',
					element: <HomeView/>,

				},
				{
					path: '/about',
					element: <AboutView/>
				},
				{
					path: '/think',
					element: <div>这是think</div>
				}
			]
		}
	]
);
export default router;