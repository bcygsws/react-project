import {useParams} from "react-router-dom";
import {getOrderObjAPI, IOrder} from "@/apis/order.tsx";
import {useEffect, useState} from "react";
import './index.scss';

const Category = () => {
    // 接收根据id请求到的数据
    const [cat, setCat] = useState<Partial<IOrder>>({});
    const {id} = useParams();
    // console.log('id===', id);
    // 根据id,请求当前分类下的数据
    useEffect(() => {
        async function getOrder() {
            if (id) {
                const res = await getOrderObjAPI(id);
                console.log("res===",res);
                setCat({foods: undefined, id: "", name: "", tag: "", ...res});

            }
        }

        getOrder();
    }, [id]);

    return (
        <div className="cat-container">
            <div className="content">
                <div className="title">{cat.name}</div>
                {cat.foods?.map(item => (
                    <div className="list" key={item.id}>
                        <img src={item.picture} width="95" height="95" alt=""/>
                        <div className="right">
                            <div className="goods-top">
                                <div className="goods-title">{item.name}</div>
                                <div className="goods-detail">
                                    <div className="goods-unit">{item.unit}</div>
                                    <div className="goods-detail-text">{item.description ?? ''}</div>
                                </div>
                                {item.food_tag_list?.join(',') &&
                                    <span className="goods-tag">{item.food_tag_list?.join(',')}</span>}
                                <div className="goods-sales-volume">
                                    <span>月售{item.month_saled}</span>
                                    <span>好评度{item.like_ratio_desc}</span>
                                </div>
                            </div>
                            <div className="goods-price">
                                <span>¥{item.price}</span>
                                <div className="icon-plus">+</div>
                            </div>
                        </div>

                    </div>))}
            </div>
        </div>
    )
}
export default Category;