import {NavLink, Outlet, useLocation} from "react-router-dom";
import SearchParams from "@/components/router_params/SearchParams";

/**
 * @desc:九、路由参数
 *
 * */
const RouterParams = () => {
    const location = useLocation();
    console.log("location", location);
    return (
        <div>
            <h3>九、路由参数</h3>
            {/*1.state参数获取*/}
            <p>state参数：{location.state?.id}</p>
            {/*2.路径参数或者叫动态参数的获取，在对应的路由组件SonRouter中获取*/}
            <NavLink to="/home/path_params/256">路径参数</NavLink>
            <Outlet/>
            <hr/>
            {/*3.查询参数的的获取，在SearchParams子组件中拿到*/}
            <NavLink to="/home/path_params?id=8888">查询参数</NavLink>
            <SearchParams/>
            <hr/>
        </div>
    )
}
export default RouterParams;