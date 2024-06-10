import classNames from 'classnames';
import './index.scss';
// import {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {setIndex} from "../../store/modules/takeaway";


const Menu = ({foodsList}) => {
	// console.log(foodsList);
	const menus = foodsList.map(item => ({tag: item.tag, name: item.name}));
	// 方式一：使用useState
	// const [activeIndex, setActiveIndex] = useState(0);
	// 方式二：使用RTK+react-redux；注：解构时，为index起了别名，myIndex
	const {activeIndex} = useSelector(state => state.food);
	const dispatch = useDispatch();
	const selectCat = (index) => {
		// 方式一：
		// setMyIndex(index);
		// 	方式二：
		dispatch(setIndex(index));
		/**
		 * @description：承接上面，当前条目信息的index索引值，已经被状态变量记录
		 * 将点击事件，传入的index，和数据中index匹配，来重新构造foodsList就可以了
		 *
		 * */

	}
	// active动态添加，维护一个状态变量flag
	return (
		<nav className="list-menu">
			{/* 添加active类名会变成激活状态 */}
			{menus.map((item, index) => {
				return (
					<div
						key={item.tag}
						className={classNames('list-menu-item', activeIndex === index ? 'active' : '')}
						onClick={() => selectCat(index)}
					>
						{item.name}
					</div>
				)
			})}
		</nav>
	)
}

export default Menu
