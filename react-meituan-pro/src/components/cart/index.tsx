import './index.scss';
import {useDispatch, useSelector} from "react-redux";
import classNames from 'classnames';
import {useEffect, useMemo, useState} from "react";
import {clearAll, decrement, increment} from "@/store/modules/cart.tsx";

const NavBar = () => {
    // 定义状态量flag: 维护底部导航条操作的激活和禁止
    const [flag, setFlag] = useState(false);
    // 定义状态量visible：控制购物车列表的显示与隐藏
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const {cartList} = useSelector(state => state.cart);
    useEffect(() => {
        setFlag(cartList.length > 0);
    }, [cartList]);
    console.log(flag);
    // 优化：维护总价格，由于cartList是redux维护的全局量，此处可以不使用useMemo接收
    // const total = useMemo(() => {
    //     return cartList.reduce((sum, cur) => sum + cur.count * cur.price, 0);
    // }, [cartList]);
    const total = cartList.reduce((sum, cur) => sum + cur.count * cur.price, 0);
    /**
     * @desc:清空购物车方法clear
     *
     * */
    const clear = () => {
        // 1.置空cartList购物车列表
        dispatch(clearAll());
        // 2.visible变量设置为false
        setVisible(false);
    }


    return (<>
        {/*点菜列表底部导航条*/}
        <div className="nav-container">
            <div className="nav-left" onClick={() => setVisible(true)}>{
                !flag ? <div className="icon"></div> : <div className="icon-active">
                    {/*与total变量同理：cartList是redux维护的状态量，此处购物车选中商品种类数已经是响应式*/}
                    <div className="count">{cartList.length}</div>
                </div>
            }
            </div>
            <div className="nav-middle">
                <div className="total">￥<span>{total}</span></div>
                <div className="carry-fee">预估另需配送费:￥2</div>
            </div>
            <div className={classNames('nav-right' as any, {'active': flag} as any)}>{flag ? '结算' : '￥10起送'}</div>
        </div>
        {/*购物车列表*/}
        {
            (flag && visible) && (<>
                <div className="shopping-container">
                    <div className="title">
                        <div className="txt">购物车</div>
                        <div className="clear-cart" onClick={clear}>清空购物车</div>
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
                                    <div className="inc" onClick={() => dispatch(increment(item.id))}>+</div>
                                    <div className="total">{item.count}</div>
                                    <div className="dec" onClick={() => dispatch(decrement(item.id))}>-</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                {/*购物车展开时遮罩*/}
                <div className="mask" onClick={() => setVisible(false)}></div>
            </>)
        }


    </>)

}
export default NavBar;