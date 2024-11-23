import './App.scss'
import {NavLink, useRoutes} from "react-router-dom";
import routes from "@/router/router";

function App() {

    return (
        <div className="app-container">
            {/*NavLink的好处，可以通过返回一个函数来，重新设置路由匹配成功时的样式*/}
            <div className="nav-link">
                <NavLink to={'/home'} style={({isActive}) => ({
                    color: isActive ? 'red' : 'black'
                })}>主页</NavLink>
                <NavLink to={'/about'} style={({isActive}) => ({
                    color: isActive ? 'red' : 'black'
                })}>关于</NavLink>
            </div>
            {/*路由匹配规则+组件的占位符, 此处带有了Outlet的作用*/}
            {useRoutes(routes)}
        </div>
    )
}

export default App;
