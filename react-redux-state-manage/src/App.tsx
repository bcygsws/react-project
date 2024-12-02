import './App.scss';
import {NavLink, useRoutes} from "react-router-dom";
import {routes} from "@/router/index.tsx";

function App() {
    return (
        <div className="app-container">
            <div className="header">
                {/*注意：style中选中样式参数：isActive是对象参数 ({isActive})=>()*/}
                <NavLink to="/home" style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>主页</NavLink>
                <NavLink to="/about" style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>关于</NavLink>
            </div>
            <div className="main">
                {useRoutes(routes)}
            </div>
        </div>
    )
}

export default App
