import { Navigate} from "react-router-dom";
import HomeView from "@/pages/home/HomeView.tsx";
import AboutView from "@/pages/about/AboutView.tsx";

// const BaseGrammar = lazy(() => import("@/components/primary_grammar/BaseGrammar.tsx"));
import BaseGrammar from "@/components/primary_grammar/BaseGrammar.tsx";
import BindEvent from "@/components/event/BindEvent.tsx";

/**
 * @desc:路由配置
 * ts文件都进必须写成tsx后缀，否则在路由配置过程中，报错：
 *  can use namespace HomeView as a type
 *
 * */
const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: <HomeView />,
        children: [
            {
                path: "grammar",
                element: <BaseGrammar />
            },
            {
                path: "bind",
                element: <BindEvent />
            }]
    },
    {
        path: "/about",
        element: <AboutView />,
    }

];


export default routes;