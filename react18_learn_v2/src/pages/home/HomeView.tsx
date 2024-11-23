import {NavLink, Outlet} from "react-router-dom";

function HomeView() {
    return <div className="home-container">
        {/*1.tsx或者jsx基本语法*/}
        <NavLink to={'/home/grammar'}>一、tsx或者jsx基本语法</NavLink>
        <NavLink to={'/home/bind'}>二、绑定事件时的注意事项</NavLink>
        <Outlet/>

    </div>
}

export default HomeView;