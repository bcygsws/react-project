import './App.css';
import {NavLink, useRoutes} from "react-router";
import routes from "@/router";

function App() {

    return (
        <>
            <div className="app-container">
                <NavLink to={'/'}>主页</NavLink>
                <NavLink to={'/about'}>关于</NavLink>
                {
                    useRoutes(routes)
                }
            </div>
        </>
    )
}

export default App
