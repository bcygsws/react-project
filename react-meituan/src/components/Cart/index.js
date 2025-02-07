import classNames from 'classnames'
import Count from '../Count'
import './index.scss'
import {
	useSelector,
	useDispatch
} from "react-redux";
import {
	increment,
	decrement,
	clearAll
} from "../../store/modules/takeaway";
import {
	useState
} from "react";

const Cart = () => {
		// const cart = [];
		// 拿到购物车列表数据
		const {
			cartList
		} = useSelector(state => state.food);
		console.log('cartList=====', cartList);
		// 添加至购物车的商品总价值
		const totalPrice = cartList.reduce((sum, cur) => sum + cur.price * cur.count, 0);
		const dispatch = useDispatch();
		/**
		 * @visible状态量控制，购物车的显示或者隐藏
		 *
		 * */
		const [visible, setVisible] = useState(false);
		return ( <
			div className = "cartContainer" > {
				/* 遮罩层 添加visible类名可以显示出来 */ } {
				/*visible类的添加 条件加强，visible&&cartList.length>0为true,才显示购物列表；遮罩同理*/ } <
			div className = {
				classNames('cartOverlay', visible && cartList.length > 0 ? 'visible' : '')
			}
			onClick = {
				() => setVisible(false)
			}
			/> <
			div className = "cart" > {
				/* fill 添加fill类名可以切换购物车状态*/ } {
				/* 购物车数量(是有多少种商品？而不是商品总件数) */ } <
			div className = {
				classNames('icon', cartList.length > 0 ? 'fill' : '')
			}
			onClick = {
				() => {
					setVisible(true)
				}
			} > {
				cartList.length > 0 && < div className = "cartCornerMark" > {
					cartList.length
				} < /div>} <
				/div> {
					/* 购物车价格 */ } <
				div className = "main" >
				<
				div className = "price" >
				<
				span className = "payableAmount" >
				<
				span className = "payableAmountUnit" > ¥ < /span> {
					totalPrice.toFixed(2)
				} <
				/span> <
				/div> <
				span className = "text" > 预估另需配送费¥ 5 < /span> <
				/div> {
					/* 结算 or 起送 */ } {
					cartList.length > 0 ? ( <
						div className = "goToPreview" > 去结算 < /div>
					) : ( <
						div className = "minFee" > ¥10 起送 < /div>
					)
				} <
				/div> {
					/* 添加visible类名 div会显示出来 */ } {
					/*优化：visible的true/false,控制购物车的显示或隐藏，但是当购物车为空时，点击"小人"，购物车仍然显示，是不允许的*/ } {
					/*<div className={classNames('cartPanel', visible ? 'visible' : '')}>*/ } {
					/*visible类的添加 条件加强，visible&&cartList.length>0为true,才显示购物列表；遮罩同理*/ } <
				div className = {
					classNames('cartPanel', visible && cartList.length > 0 ? 'visible' : '')
				} >
				<
				div className = "header" >
				<
				span className = "text" > 购物车 < /span> <
				span className = "clearCart"
				onClick = {
					() => {
						dispatch(clearAll())
					}
				} >
				清空购物车 <
				/span> <
				/div>

				{
					/* 购物车列表 */ } <
				div className = "scrollArea" > {
					cartList.map(item => {
						return ( <
							div className = "cartItem"
							key = {
								item.id
							} >
							<
							img className = "shopPic"
							src = {
								item.picture
							}
							alt = "" / >
							<
							div className = "main" >
							<
							div className = "skuInfo" >
							<
							div className = "name" > {
								item.name
							} < /div> <
							/div> <
							div className = "payableAmount" >
							<
							span className = "yuan" > ¥ < /span> <
							span className = "price" > {
								item.price
							} < /span> <
							/div> <
							/div> <
							div className = "skuBtnWrapper btnGroup" >
							<
							Count count = {
								item.count
							}
							onMinus = {
								() => {
									dispatch(decrement(item.id))
								}
							}
							onPlus = {
								() => {
									dispatch(increment(item.id))
								}
							}
							/> <
							/div> <
							/div>
						)
					})
				} <
				/div> <
				/div> <
				/div>
			)
		}

		export default Cart