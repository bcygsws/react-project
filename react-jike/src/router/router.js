import {createBrowserRouter} from "react-router-dom";
/**
 *
 * @name:路由配置文件router.js
 * 导出router
 *
 * */
// import Login from "../pages/login/Login";
// import HomeView from "../pages/layout/HomeView";
// 配置了 根路径下src路径的别名@
import Login from "@/pages/login/Login";
import HomeView from "@/pages/layout/HomeView";
import App from "@/App";
import AuthRoute from "@/components/AuthRoute";
import {lazy, Suspense} from "react";
// import Home from "@/pages/home/Home";
// import Article from "@/pages/article/Article";
// import Publish from "@/pages/publish/Publish";

// 优化:将三个侧边栏导航栏路由改造成懒加载路由

const Home = lazy(() => import("@/pages/home/Home"));
const Article = lazy(() => import("@/pages/article/Article"));
const Publish = lazy(() => import("@/pages/publish/Publish"));
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
                    element: <AuthRoute><HomeView/></AuthRoute>,
                    children: [
                        {index: true, element: <Suspense><Home/></Suspense>},
                        {path: "article", element: <Suspense><Article/></Suspense>},
                        {path: "publish", element: <Suspense><Publish/></Suspense>},
                    ]
                }
            ]
        }

    ]
);
export default router;