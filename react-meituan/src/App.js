import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/Cart/index';
import FoodsCategory from './components/FoodsCategory';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getFoodList} from "./store/modules/takeaway";

import './App.scss';
/**
 * @desc：json=-server的使用详解
 * 参考文档:https://blog.csdn.net/m0_67444449/article/details/141092022?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-141092022-blog-139607652.235^v43^pc_blog_bottom_relevance_base7&spm=1001.2101.3001.4242.1&utm_relevant_index=3
 * 参考文档1:https://blog.csdn.net/u012149969/article/details/108394159?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1-108394159-blog-139607652.235^v43^pc_blog_bottom_relevance_base7&spm=1001.2101.3001.4242.2&utm_relevant_index=4
 *
 * */

// const foodsList = [
// 	{
// 		"tag": "318569657",
// 		"name": "一人套餐",
// 		"foods": [
// 			{
// 				"id": 8078956697,
// 				"name": "烤羊肉串(10串)",
// 				"like_ratio_desc": "好评度100%",
// 				"month_saled": 40,
// 				"unit": "10串",
// 				"food_tag_list": ["点评网友推荐"],
// 				"price": 90,
// 				"picture": "https://s1.imagehub.cc/images/2024/06/10/fe56ebfd9247022687fccf6c568949c6.th.jpeg",
// 				"description": "",
// 				"tag": "318569657"
// 			},
// 			{
// 				"id": 7384994864,
// 				"name": "腊味煲仔饭",
// 				"like_ratio_desc": "好评度81%",
// 				"month_saled": 100,
// 				"unit": "1人份",
// 				"food_tag_list": [],
// 				"price": 39,
// 				"picture": "https://s1.imagehub.cc/images/2024/06/10/fe56ebfd9247022687fccf6c568949c6.th.jpeg",
// 				"description": "",
// 				"tag": "318569657"
// 			},
// 			{
// 				"id": 2305772036,
// 				"name": "鸡腿胡萝卜焖饭",
// 				"like_ratio_desc": "好评度91%",
// 				"month_saled": 300,
// 				"unit": "1人份",
// 				"food_tag_list": [],
// 				"price": 34.32,
// 				"picture": "https://s1.imagehub.cc/images/2024/06/10/fe56ebfd9247022687fccf6c568949c6.th.jpeg",
// 				"description": "主料：大米、鸡腿、菜心、胡萝卜",
// 				"tag": "318569657"
// 			},
// 			{
// 				"id": 2233861812,
// 				"name": "小份酸汤莜面鱼鱼+肉夹馍套餐",
// 				"like_ratio_desc": "好评度73%",
// 				"month_saled": 600,
// 				"unit": "1人份",
// 				"food_tag_list": ["“口味好,包装很好～点赞”"],
// 				"price": 34.32,
// 				"picture": "https://s1.imagehub.cc/images/2024/06/10/fe56ebfd9247022687fccf6c568949c6.th.jpeg",
// 				"description": "酸汤莜面鱼鱼，主料：酸汤、莜面 肉夹馍，主料：白皮饼、猪肉",
// 				"tag": "318569657"
// 			}
// 		]
// 	}
// ]

const App = () => {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getFoodList());
	}, [dispatch]);
	const {foodsList, activeIndex} = useSelector(state => state.food);
	return (
		<div className="home">
			{/* 导航 */}
			<NavBar/>

			{/* 内容 */}
			<div className="content-wrap">
				<div className="content">
					<Menu foodsList={foodsList}/>

					<div className="list-content">
						<div className="goods-list">
							{/* 外卖商品列表 */}
							{foodsList.map((item, index) => {
								return (
									index === activeIndex && <FoodsCategory
										key={item.tag}
										// 列表标题
										name={item.name}
										// 列表商品
										foods={item.foods}
									/>
								)
							})}
						</div>
					</div>
				</div>
			</div>

			{/* 购物车 */}
			<Cart/>
		</div>
	)
}

export default App
