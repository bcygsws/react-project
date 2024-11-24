import {NavLink, Outlet} from "react-router-dom";

function HomeView() {
    return <div className="home-container">
        {/*1.tsx或者jsx基本语法*/}
        <NavLink to={'/home/grammar'}>一、tsx或者jsx基本语法</NavLink>
        <NavLink to={'/home/bind'}>二、绑定事件时的注意事项</NavLink>
        <NavLink to={'/home/state'}>三、useState状态不可变</NavLink>
        <NavLink to={'/home/use_ref'}>四、useRef获取dom元素对象</NavLink>
        <NavLink to={'/home/fat_to_son'}>五、父子组件间的通信</NavLink>
        <NavLink to={'/home/son_to_fat'}>六、子组件向父组件传值</NavLink>
        <Outlet/>

    </div>
}

export default HomeView;