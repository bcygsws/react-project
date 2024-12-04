import './App.scss';
import {NavLink, useRoutes} from "react-router-dom";
import routes from "@/router/router.tsx";

function App() {

    return (
        <div className={'app-container'}>
            <div className="header">
                <NavLink to={'/home'} style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>首页</NavLink>
                <NavLink to={'/about'} style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>关于</NavLink>
            </div>
            <div className="content">
                {useRoutes(routes)}
            </div>
        </div>
    )
}

export default App
