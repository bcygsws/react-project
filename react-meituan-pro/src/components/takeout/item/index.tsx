import {useDispatch} from "react-redux";
import {setCartList} from "@/store/modules/cart.tsx";

const FoodItem = ({list}) => {
    const dispatch = useDispatch();
    return (
        <div className="list">
            <img src={list.picture ?? ''} width="95" height="95" alt=""/>
            <div className="right">
                <div className="goods-top">
                    <div className="goods-title">{list.name}</div>
                    <div className="goods-detail">
                        <div className="goods-unit">{list.unit}</div>
                        <div className="goods-detail-text">{list.description ?? ''}</div>
                    </div>
                    {list.food_tag_list?.join(',') &&
                        <span className="goods-tag">{list.food_tag_list?.join(',')}</span>}
                    <div className="goods-sales-volume">
                        <span>月售{list.month_saled}</span>
                        <span>好评度{list.like_ratio_desc}</span>
                    </div>
                </div>
                <div className="goods-price">
                    <span>¥{list.price}</span>
                    <div className="icon-plus" onClick={() => dispatch(setCartList({...list, count: 1}))}>+</div>
                </div>
            </div>
        </div>)
}
export default FoodItem;