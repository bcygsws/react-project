import {useEffect, useState} from "react";
import {getFoodListAPI, IOrder} from "@/apis/order.tsx";
import {NavLink, Outlet} from "react-router-dom";
import NavBar from "@/components/cart/index.tsx";
import './index.scss';


const Order = () => {
    const [list, setList] = useState<IOrder[]>([]);
    // 请求数据，注入Item子组件
    useEffect(() => {
        async function getOrder() {
            const res = await getFoodListAPI();
            console.log("res  init", res);
            setList([...res]);
        }

        getOrder();

    }, []);
    return (
        <>
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
        </>
    )
}
export default Order;