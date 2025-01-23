import "./newAdd.scss";
import {Button, DatePicker, Input, NavBar} from "antd-mobile";
import {useState} from "react";
import IconItem from "../layout/month/components/IconItem";
import {billListData} from "../../constant";
import {useDispatch} from "react-redux";
import {asyncAddBillList} from "../../store/modules/billStore";
// import {v4 as uuidv4} from "uuid";
import {WholeTimeFormat} from "../../utils/TimeFormat";
import classNames from "classnames";
import {useNavigate} from "react-router-dom";

export default function NewAdd() {
	/**
	 * @控制按钮选中 支出 或者 收入
	 * 状态变量：type
	 *
	 * */
	const [type, setType] = useState("pay");
	const [money, setMoney] = useState();
	const [dateVisible, setDateVisible] = useState(false);
	// 当前支出或者消费的一种类型，状态变量useFor
	const [useFor, setUseFor] = useState("");
	// 限定时间选择器的最晚时间边界-当前时间，变量now
	const now = new Date();
	// 存储时间的变量
	const [date, setDate] = useState(WholeTimeFormat(now));
	// 定义一个状态量，维护图标的选中状态
	const dispatch = useDispatch();
	// 路由编程式导航
	const navigate = useNavigate();
	const back = () =>
		navigate(-1);
	/**
	 * @name:handleClick
	 * @description:控制时间选择器DatePicker显示或隐藏
	 *
	 * */
	const handleClick = () => {
		setDateVisible(true);
	}
	/**
	 * @name:dateHandler
	 * @description:DatePicker选中后的时间，存入date状态变量
	 *
	 * */
	const dateHandler = (val) => {
		console.log(val);
		setDate(WholeTimeFormat(val));
	}

	/**
	 * @name:saveBill
	 * @description:表单数据收集
	 * 点击"保存"按钮，将数据收集到
	 * 注：id可以用uuid插件处理
	 * 在json-server中，内部会为前端请求，增加一个随机的id;因此，id也可以不处理
	 *
	 * 表单数据；未传值时的兼容
	 * type：没传值时，设为 "food"
	 * money:没传值时，设为0;如：(type==="pay"?-money:+money)||0
	 * date:在useState声明时，就传入了默认值；没有切换DatePicker，就使用默认值
	 *
	 * */
	const saveBill = () => {
		let billData = {
			// id: uuidv4(),
			type,
			money: (type === "pay" ? -money : +money) || 0,
			date: date,
			useFor: useFor
		}
		console.log(billData);
		dispatch(asyncAddBillList(billData));
		asyncAddBillList(billData);
	}
	/**
	 * @name:handlerSonClick
	 * @params: type,描述一种支出 或者 收入 的类型
	 * @description:传给子组件Category的方法，每一个
	 *
	 * */
	const handlerSonClick = (type) => {
		type = type ? type : "food";
		console.log(type);
		setUseFor(type);
	}

	return (<div className="footer-container">
			<div className="card-header">
				{/*	导航栏 */}
				<NavBar onBack={back}>记一笔</NavBar>
				{/*	导航按钮支出、收入*/}
				<div className="btn">
					<Button block={false} shape='rounded' color='primary'
					        className={classNames(type === "pay" && "active")}
					        onClick={() => setType("pay")}>支出</Button>
					<Button block={false} shape='rounded' color='primary'
					        className={classNames(type === "income" && "active")}
					        onClick={() => setType("income")}>收入</Button>
				</div>
				{/*	输入文本框 */}
				<div className="text-input">
					<div className="time">
						<IconItem type="calendar"/>
						{/*<span onClick={handleClick}>今天</span>*/}
						{/*选好的时间，渲染在今天这个位置*/}
						<span
							onClick={handleClick}>{WholeTimeFormat(now) === WholeTimeFormat(date) ? "今天" : date + ""}</span>
					</div>
					<Input
						placeholder='0.00'
						value={money}
						onChange={val => {
							setMoney(val)
						}}
					/>
				</div>
				{/*	时间选择器 */}
				<DatePicker
					title='时间选择'
					visible={dateVisible}
					onClose={() => {
						setDateVisible(false)
					}}
					max={now}
					onConfirm={dateHandler}
				/>
			</div>
			<div className="main-fat">
				<div className="main-content">
					{
						billListData[type].map((bill, index) => {
							return <div className="cat-container" key={index}>
								<div className="title">{bill.name}</div>
								<div className="cat-fat">
									{
										bill.list.map((item, _index) => {
											return <div key={_index}
											            className={classNames("list", item.type === useFor && "selected")}>
												<IconItem type={item.type} clickHandler={handlerSonClick}/>
												<div className="cat-footer">{item.name}</div>
											</div>

										})
									}
								</div>

							</div>
						})
					}
				</div>
			</div>
			<div className="new-footer">
				<Button block color='primary' size='small' onClick={saveBill}>保存</Button>
			</div>
		</div>
	)
}