import './index.scss';
import {SearchBar} from "antd-mobile";
import {NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getInitialId} from "@/store/modules/list.tsx";

const Home = () => {
    const dispatch: any = useDispatch();
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getInitialId());
    }, []);

    const {init_id} = useSelector(state => state._list);
    console.log('init_id=======', init_id);
    useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/order') {
            navigate(`/order/${init_id}`);
        }
    }, [location]);
    return (<div className="home-container">
        {/*头部标签栏*/}
        <div className="tabbar">
            {/*点菜、评价、商家tabs*/}
            <div className="left">
                <NavLink to="/order" style={({isActive}) => ({
                    fontWeight: isActive ? 700 : 400,
                    borderBottom: isActive ? '2px solid #FFD433' : 'none'
                })}>点菜</NavLink>
                <NavLink to="/comment" style={({isActive}) => ({
                    fontWeight: isActive ? 700 : 400,
                    borderBottom: isActive ? '2px solid #FFD433' : 'none'
                })}>评价</NavLink>
                <NavLink to="/merchant" style={({isActive}) => ({
                    fontWeight: isActive ? 700 : 400,
                    borderBottom: isActive ? '2px solid #FFD433' : 'none'
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