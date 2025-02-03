import './index.scss';
import {NavLink, Outlet} from "react-router-dom";

const Item = ({list}) => {
    console.log('list=======', list);
    return (
        <div className="bot">
            <div className="bot-left">
                {
                    list.map((item) => {
                        return (<NavLink to={`/order/${item.id}`} key={item.id}
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