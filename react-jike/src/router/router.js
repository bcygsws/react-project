/**
 *
 * @name:路由配置文件router.js
 * 导出router
 *
 * */
import {createBrowserRouter} from "react-router-dom";
// import Login from "../pages/login/Login";
// import HomeView from "../pages/layout/HomeView";
// 配置了 根路径下src路径的别名@
import Login from "@/pages/login/Login";
import HomeView from "@/pages/layout/HomeView";
import App from "@/App";
import AuthRoute from "@/components/AuthRoute";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <App/>,
			children: [
				{
					index: true,
					element: <Login/>
				},
				{
					path: "/layout",
					// 传入Layout，Layout组件，就会在AuthRoute高阶组件（HOC）中以参数children的形式注入
					element: <AuthRoute><HomeView/></AuthRoute>
				}
			]
		}

	]
);
export default router;