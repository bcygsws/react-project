import {NavLink, Outlet} from "react-router-dom";

const HomeView = () => {
    return (<div className={'home-container'}>
        <h6>一、HomeView组件</h6>
        <div>HomeView组件</div>
        <NavLink to={'/home/react_redux'}>一、react-redux+redux+redux-thunk处理异步操作</NavLink>
        <Outlet/>
    </div>)
}
export default HomeView;