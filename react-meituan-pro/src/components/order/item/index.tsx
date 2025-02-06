import './index.scss';
import {NavLink, Outlet} from "react-router-dom";
import NavBar from "@/components/navbar";

const Item = ({list}) => {
    console.log('list=======', list);
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
            <NavBar/>
        </div>
    )
}
export default Item;