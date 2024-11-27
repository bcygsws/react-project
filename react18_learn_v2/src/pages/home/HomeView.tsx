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
        <NavLink to={'/home/sibling'}>七、兄弟组件之间的通信</NavLink>
        <NavLink to={'/home/context'}>八、context上下文实现各层级组件之间的通信</NavLink>
        <NavLink to={'/home/path_params'} state={{id: 88888888}}>九、参数的传递</NavLink>
        <NavLink to={'/home/use_effect'}>十、useEffect的有、无和空依赖三种使用场景和清除副作用</NavLink>
        <Outlet/>

    </div>
}

export default HomeView;