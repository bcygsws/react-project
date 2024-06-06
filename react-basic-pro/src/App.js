import './App.scss'
import avatar from './images/bozai.png'
import {useState} from "react";
// 引入时间格式化
import TimeFormat from './utils/timeFormat';
// 引入uuid模块
import {v4 as uuidv4} from 'uuid';
// 引入比较大小回调函数
import comFn from "./utils/ComFn";

/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */

// 评论列表数据
const defaultList = [
	{
		// 评论id
		rpid: 3,
		// 用户信息
		user: {
			uid: '13258165',
			avatar: '',
			uname: '周杰伦',
		},
		// 评论内容
		content: '哎哟，不错哦',
		// 评论时间
		ctime: '10-18 08:15',
		like: 88,
	},
	{
		rpid: 2,
		user: {
			uid: '36080105',
			avatar: '',
			uname: '许嵩',
		},
		content: '我寻你千百度 日出到迟暮',
		ctime: '11-13 11:29',
		like: 88,
	},
	{
		rpid: 1,
		user: {
			uid: '30009257',
			avatar,
			uname: '前端框架',
		},
		content: '学前端义不容辞',
		ctime: '10-19 09:00',
		like: 66,
	},
]
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
	const [textVal, setTextVal] = useState("");
	// 注意：在html模板中渲染的一定是list,数组它是个变量；而defaultList只是一个初始值
	const [list, setList] = useState(defaultList);
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
	 *
	 * */
	const clickHandler = () => {
		// 构建一个item对象
		let newItem = {
			rpid: Date.now(),
			user: {
				uid: uuidv4(),
				avatar: "",
				uname: "科技树"
			},
			content: textVal,
			ctime: Date.now(),
			like: Math.floor(Math.random() * 100)
		};
		// 1.1.展开符，达到unshift的效果
		setList([newItem, ...list]);
		// 1.2.清空输入文本域textarea,方便下一次输入
		setTextVal("");
		// console.log(list);

	}
	/**
	 * @name: sortItem
	 * @description:点击处理事件，按照时间排序、按照点赞数多少排序
	 *
	 * */
	const sortItem = (item) => {
		let newArr = [...list].slice();
		if (item.type === 'hot') {
			// newArr调用sort排序后，影响了源数组newArray,所以不用将排序后的结果在赋值给newArr
			newArr.sort(comFn('like'));
			setList(newArr);

		} else if (item.type === 'time') {
			// newArray中ctime数据有的是字符串，有的是数字，需要统一处理成时间戳，方便比较
			newArr = newArr.map((val) => ({
				rpid: val.rpid,
				user: {
					uid: val.user.uid,
					avatar: val.user.avatar,
					uname: val.user.uname
				},
				content: val.content,
				ctime: (new Date(TimeFormat(val.ctime))).getTime(),// new Date("2012-12-12 10:11").getTime()可以转化为数字
				like: val.like
			}));
			newArr.sort(comFn('ctime'));
			setList(newArr);
		}
	}
	/**
	 * @name：delItem
	 * @description:
	 *
	 * */
	const delItem = ({rpid}) => {
		let newArr = [...list];
		newArr.some((val, index) => {
			if (val.rpid === rpid) {
				newArr.splice(index, 1);
				return true;
			}
		});
		// 更新list
		setList(newArr);

	}
	return (
		<div className="app">
			{/* 导航 Tab */}
			<div className="reply-navigation">
				<ul className="nav-bar">
					<li className="nav-title">
						<span className="nav-title-text">评论</span>
						{/* 评论数量 */}
						<span className="total-reply">{10}</span>
					</li>
					<li className="nav-sort">
						{/* 高亮类名： active */}
						{/*渲染最新、最热*/}
						{tabs.map((item) => <span className="nav-item" key={item.type}
						                          onClick={() => sortItem(item)}>{item.text}</span>)}
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
						<div className="reply-item" key={item.rpid}>
							{/* 头像 */}
							<div className="root-reply-avatar">

								<div className="bili-avatar">
									<img
										className="bili-avatar-img"
										alt=""
										src={item.user.avatar}
									/>
								</div>
							</div>

							<div className="content-wrap">

								{/* 用户名 */}
								<div className="user-info">
									<div className="user-name">{item.user.uname}</div>
								</div>
								{/* 评论内容 */}
								<div className="root-reply">
									<span className="reply-content">{item.content}</span>
									<div className="reply-info">
										{/* 评论时间 */}
										<span className="reply-time">{TimeFormat(item.ctime)}</span>
										{/* 评论数量 */}
										<span className="reply-time">点赞数:{item.like}</span>
										<span className="delete-btn" onClick={() => delItem(item)}>删除</span>

									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default App