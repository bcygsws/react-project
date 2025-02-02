import Item from "@/components/order/item";
import {useEffect, useState} from "react";
import {getFoodListAPI, IOrder} from "@/apis/order.tsx";


const Order = () => {
    const [list, setList] = useState<IOrder[]>([]);
    // 请求数据，注入Item子组件
    useEffect(() => {
        async function getOrder() {
            const res = await getFoodListAPI();
            console.log(res);
            setList([...res]);
        }

        getOrder();

    }, []);
    return (
        <>
            <Item list={list}/>
        </>
    )
}
export default Order;