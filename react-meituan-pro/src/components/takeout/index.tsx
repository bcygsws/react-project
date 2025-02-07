import {useParams} from "react-router-dom";
import {getOrderObjAPI, IOrder} from "@/apis/order.tsx";
import {useEffect, useState} from "react";
import './index.scss';
import {useDispatch} from "react-redux";
import FoodItem from "@/components/takeout/item/index.tsx";

const Takeout = () => {
    // 接收根据id请求到的数据
    const [order, setOrder] = useState<Partial<IOrder>>({});
    const {id} = useParams();
    console.log('id===', id);

    // 根据id,请求当前分类下的数据
    useEffect(() => {
        async function getOrder() {
            const res = await getOrderObjAPI(id as string);
            console.log("res===", res);
            setOrder({foods: undefined, id: "", name: "", tag: "", ...res});

        }

        getOrder();
    }, [id]);
    const dispatch = useDispatch();

    return (
        <div className="cat-container">
            <div className="content">
                <div className="title">{order.name}</div>
                {
                    order.foods?.map(item => (<FoodItem list={item} key={item.id}/>))
                }
            </div>
        </div>
    )
}
export default Takeout;