import './index.scss';
import {NavLink, Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import classNames from "classnames";

const Item = ({list}) => {
    console.log('list=======', list);
    const location = useLocation();
    console.log("location····", location);
    const navigate = useNavigate();
    useEffect(() => {
        // if (location.pathname === '/order') {
        //     const obj = list.find((item, index) => index === 0);
        //     console.log("obj===", obj);
        //     navigate(`/order/${obj.id}`)
        //
        // }
    }, []);

    return (
        <div className="bot">
            <div className="bot-left">
                {
                    list.map((item, index) => {
                        console.log(index);
                        return (<NavLink
                            to={`/order/${item.id}`}
                            key={item.id}
                            style={({isActive}) => ({
                                backgroundColor: isActive ? '#ffffff' : '#eeeeee',
                                color: isActive ? '#444444' : '#666666'
                            })}>
                            {item.name}
                        </NavLink>)
                    })
                }
            </div>
            <div className="bot-right"><Outlet/></div>
        </div>
    )
}
export default Item;