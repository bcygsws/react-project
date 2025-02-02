import './index.scss';
import {SearchBar} from "antd-mobile";
import {NavLink, Outlet} from "react-router-dom";

const Home = () => {
    return (<div className="home-container">
        {/*头部标签栏*/}
        <div className="tabbar">
            {/*点菜、评价、商家tabs*/}
            <div className="left">
                <NavLink to="/" style={({isActive}) => ({
                    fontWeight: isActive ? 700 : 400,
                    borderBottom: isActive ? '2px solid orange' : 'none'
                })}>点菜</NavLink>
                <NavLink to="/comment" style={({isActive}) => ({
                    fontWeight: isActive ? 700 : 400,
                    borderBottom: isActive ? '2px solid orange' : 'none'
                })}>评价</NavLink>
                <NavLink to="/merchant" style={({isActive}) => ({
                    fontWeight: isActive ? 700 : 400,
                    borderBottom: isActive ? '2px solid orange' : 'none'
                })}>商家</NavLink>

            </div>
            {/*检索*/}
            <div className="right">
                <SearchBar placeholder="搜索" style={{'--height': '16px'}}/>
            </div>
        </div>
        <Outlet/>
    </div>)
}
export default Home;