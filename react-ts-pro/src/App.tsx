import {Suspense} from 'react';
import './App.scss';
import routes from "./router/router.tsx";
import {NavLink, useRoutes} from "react-router-dom";

/**
 * @name:useRoutes
 * @description:
 * 1.useRoutes()作用：用于接收一个routes路由配置对象（数组），返回当前URL路径匹配的React组件
 *
 * 2.使用NavLink的好处是：内部有一个自带的active类样式，只要重写
 * .active{
 *   // css样式
 * }
 * 就可以设定路由选中时的样式
 *
 *
 *
 * */

function App() {
    // count会根据useState里的初始值自动推断类型，不需要给count加类型注解
    // const [count, setCount] = useState(0);

    return (
        <>
            <div className="card">
                <div className="header">
                    <NavLink to="/">首页</NavLink>
                    <NavLink to="/main">内容</NavLink>
                </div>
                <div className="content">
                    <Suspense fallback={'正在加载……'}>{useRoutes(routes)}</Suspense>
                </div>
            </div>
        </>
    )
}

export default App;
