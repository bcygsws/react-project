import './index.scss';
import {useDispatch, useSelector} from "react-redux";

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const {cartList} = useSelector(state => state.cart);
    console.log("cartList===", cartList);
    return (<>
         <div className="shopping-container">
            <div className="title">
                <div className="txt">购物车</div>
                <div className="clear-cart">清空购物车</div>
            </div>
            <div className="shopping">
                {cartList?.map(item => (
                        <div className="list" key={item.id}>
                            <div className="left">
                                <img
                                    src={item.picture}
                                    width="60" height="60" alt=""/>
                                {/*购物车单件物品的简略信息：名称、单价*/}
                                <div className="simple">
                                    <div className="name">{item.name}</div>
                                    <div className="price">{'￥' + item.price}</div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="inc">+</div>
                                <div className="total">{item.count}</div>
                                <div className="dec">-</div>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
        {/*购物车展开时遮罩*/}
        {false && <div className="mask"></div>}
    </>)
}
export default ShoppingCart;