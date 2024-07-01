/**
 *
 * @name:路由配置文件router.js
 * 导出router
 *
 * */
import {createBrowserRouter} from "react-router-dom";
// import Login from "../pages/Login";
// import Layout from "../pages/Layout";
// 配置了 根路径下src路径的别名@
import Login from "@/pages/login/Login";
import Layout from "@/pages/Layout";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Login/>
		},
		{
			path: "/layout",
			element: <Layout/>
		}
	]
);
export default router;