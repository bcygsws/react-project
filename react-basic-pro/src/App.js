import './App.scss';
import avatar from './images/bozai.png';
import {useRef, useState, useEffect} from "react";
import useGettingList from "./utils/hook/useGettingList";
// 引入uuid模块
import {v4 as uuidv4} from 'uuid';
// 引入工具类-sort方法排序时的回调函数
import comFn from "./utils/ComFn";
// 引入工具类-时间格式化
// import TimeFormat from './utils/TimeFormat';
// 引入工具类-ctime都转化为时间戳的函数
import ArrayConverting from './utils/ArrayConverting';
// 引入工具类-产生随机名
import RandomName from "./utils/RandomName";
// 类名工具,classNames()是一个函数，语法：classNames("类名1"，{类名2:逻辑值（条件）})
import classNames from 'classnames';
import Item from "./components/Item";


/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
// 注：在html中不渲染它，而是渲染list,defaultList作为list的初始值
// const defaultList = [
// 	{
// 		// 评论id
// 		rpid: 3,
// 		// 用户信息
// 		user: {
// 			uid: '13258165',
// 			avatar: '',
// 			uname: '周杰伦',
// 		},
// 		// 评论内容
// 		content: '哎哟，不错哦',
// 		// 评论时间
// 		ctime: '10-18 08:15',
// 		like: 88,
// 	},
// 	{
// 		rpid: 2,
// 		user: {
// 			uid: '36080105',
// 			avatar: '',
// 			uname: '许嵩',
// 		},
// 		content: '我寻你千百度 日出到迟暮',
// 		ctime: '11-13 11:29',
// 		like: 88,
// 	},
// 	{
// 		rpid: 1,
// 		user: {
// 			uid: '30009257',
// 			avatar,
// 			uname: '前端框架',
// 		},
// 		content: '学前端义不容辞',
// 		ctime: '10-19 09:00',
// 		like: 66,
// 	},
// ]
// 当前登录用户信息
const user = {
	// 用户id
	uid: '30009257',
	// 用户头像
	avatar,
	// 用户昵称
	uname: '黑马前端',
}

/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */
// 导航 Tab 数组
const tabs = [
	{type: 'hot', text: '最热'},
	{type: 'time', text: '最新'},
]

const App = () => {
// 获取文本域dom对象
	const textareaRef = useRef(null);
	const [textVal, setTextVal] = useState("");
	// 注意：在html模板中渲染的一定是list,数组它是个变量；而defaultList只是一个初始值
	const [list, setList] = useState([]);
	// 维护状态变量type,来表征当前状态
	const [type, setType] = useState("hot");
	// 维护状态变量count,评论条数
	const [count, setCount] = useState(0);
	// useEffect空以赖项，组件初次渲染时，执行一次；正好模拟挂在前请求数据
	// useEffect(() => {
	// 	// getList函数从服务端请求数据
	// 	async function getList() {
	// 		const result = await axios.get("http://localhost:3004/list");
	// 		// console.log(result);
	// 		const {status, data} = result;
	// 		if (status === 200) {
	// 			setList(data.sort(comFn("like")));
	// 		}
	// 	}
	//
	// 	getList();
	//
	// }, []);

	// 封装成自定义hook
	useGettingList("http://localhost:3004/list", setList);
	/**
	 * @name：inputHandler
	 * @description:textarea框onChange事件
	 * 功能：实现输入内容，textarea文本域内同步显示
	 *
	 * */
	const inputHandler = (e) => {
		// 测试：onChange事件是否生效
		// console.log(e.target.value);
		setTextVal(e.target.value);
	}
	/**
	 * @name：clickHandler
	 * @description:1.评论内容提交事件
	 * 更新列表
	 * 清空文本域
	 * 获取焦点
	 *
	 * */
	const clickHandler = () => {
		// 构建一个item对象
		let newItem = {
			rpid: Date.now(),
			user: {
				uid: uuidv4(),
				avatar,
				uname: RandomName("微博用户", 8)
			},
			content: textVal,
			ctime: Date.now(),
			like: Math.floor(Math.random() * 100)
		};
		/**
		 * @上面用type状态变量，表示：当前是按照 最热或者是最新排序的
		 *
		 * */
		type === 'hot' ? setList([newItem, ...list].sort(comFn("like"))) :
			setList([newItem, ...list].map(val => ArrayConverting(val)).sort(comFn('ctime')));
		// 1.1.展开符，达到unshift的效果
		// setList([newItem, ...list]);
		// 1.2.清空输入文本域textarea,方便下一次输入
		setTextVal("");
		// console.log(list);
		// 1.3.textarea获得焦点
		textareaRef.current.focus();
	}
	/**
	 * @name: sortItem
	 * @description:
	 * 功能一、tab选择【最热】时，为此时的标签加上一个active类样式
	 * tab选择【最新】时，为此时的标签加上一个active类样式
	 * 解决：维护一个转态变量type，来表征当前是"最新"还是"最热"
	 *
	 * 功能二、点击处理事件，按照时间排序、按照点赞数多少排序
	 * 方式一：对于对象数组，为了避免出现更改原数组的bug,通常先对数组进行一层浅拷贝，
	 * newArr.slice(),然后，使用sort(cb)方法排序
	 *
	 * 方式二：或者借助第三方插件，lodash来实现对象数组的排序
	 * import _ from lodash;
	 * lodash有一个对象数组的排序方法
	 * _.orderBy(数组名，属性名，方式)
	 *例如：
	 * _.orderBy(newArr,'like','desc')
	 *
	 * */
	const sortItem = (item) => {
		let newArr = [...list].slice();// 得到list数组的一个浅拷贝，因为sort排序，会影响源数组
		if (item.type === 'hot') {
			setType("hot");
			// newArr调用sort排序后，影响了源数组newArray,所以不用将排序后的结果在赋值给newArr
			newArr.sort(comFn('like'));
			setList(newArr);

		} else if (item.type === 'time') {
			setType("time");
			// newArray中ctime数据有的是字符串，有的是数字，需要统一处理成时间戳，方便比较
			setList(newArr.map((val) => (ArrayConverting(val))).sort(comFn('ctime')));

		}
	}
	/**
	 * @name：delItem
	 * @description:关于删除功能，有两种做法：
	 * 方法1.构建新数组newArr,使用splice方法（会改变原数组newArr），删除传入id对应的那个元素
	 * 方法2.使用filter方法(不会改变原数组)，留下不等于rpid的那些项组成的数组,更改list
	 *
	 * 逻辑上，只有自己的评论，才能开放【删除】功能
	 * 当前用户，使用user变量模拟
	 * const user = {
	 * 	// 用户id
	 * 	uid: '30009257',
	 * 	// 用户头像
	 * 	avatar,
	 * 	// 用户昵称
	 * 	uname: '黑马前端',
	 * }
	 * user的uid和list中的uid匹配，才开放【删除】功能
	 *
	 *
	 * */
	const delItem = ({rpid}) => {
		// 方式一：splice方法会改变newArr
		// let newArr = [...list];
		// newArr.some((val, index) => {
		// 	if (val.rpid === rpid) {
		// 		newArr.splice(index, 1);
		// 		return true;
		// 	}
		// });
		// // 更新list
		// setList(newArr);

		// 方式二:filter方法，不会改变源数组，可以直接调用list的filter方法，只保留数组中那些不等于rpid的项
		setList(list.filter(val => val.rpid !== rpid));

	}
	/**
	 *@评论条数的监听
	 * useEffect
	 * useEffect(cb[,依赖项])
	 *
	 * */
	useEffect(() => {
		setCount(list.length);
	}, [list]);
	return (
		<div className="app">
			{/* 导航 Tab */}
			<div className="reply-navigation">
				<ul className="nav-bar">
					<li className="nav-title">
						<span className="nav-title-text">评论</span>
						{/* 评论数量 */}
						<span className="total-reply">{count}</span>
					</li>
					<li className="nav-sort">
						{/* 高亮类名： active */}
						{/*渲染最新、最热*/}
						{/*	这种拼接，className={`nav-item ${item.type === type ? 'active' : ''}`}，局限性：当类名多起来极容易出错*/}
						{/*优化：使用classnames插件 */}
						{tabs.map((item) =>
							<span
								// className={`nav-item ${item.type === type ? 'active' : ''}`}
								className={classNames("nav-item", {active: item.type === type})}
								key={item.type}
								onClick={() => sortItem(item)}>
								{item.text}
							</span>)}
					</li>
				</ul>
			</div>

			<div className="reply-wrap">
				{/* 发表评论 */}
				<div className="box-normal">
					{/* 当前用户头像 */}
					<div className="reply-box-avatar">
						<div className="bili-avatar">
							<img className="bili-avatar-img" src={avatar} alt="用户头像"/>
						</div>
					</div>
					<div className="reply-box-wrap">
						{/* 评论框 */}
						<textarea
							className="reply-box-textarea"
							placeholder="发一条友善的评论"
							value={textVal}
							onChange={(e) => inputHandler(e)}
							ref={textareaRef}
						/>
						{/* 发布按钮 */}
						<div className="reply-box-send">
							<div className="send-text" onClick={clickHandler}>发布</div>
						</div>
					</div>
				</div>
				{/* 评论列表 */}
				<div className="reply-list">
					{/*渲染评论列表*/}
					{list.map((item) =>
						<Item item={item} delItem={delItem} user={user} key={item.rpid}></Item>
					)}
				</div>
			</div>
		</div>
	)
}

export default App