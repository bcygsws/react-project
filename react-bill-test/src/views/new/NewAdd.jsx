import "./newAdd.scss";
import {Button, DatePicker, Input, NavBar, Toast} from "antd-mobile";
import classNames from "classnames";
import {useState} from "react";
import IconItem from "../layout/month/components/IconItem";
import {billListData} from "../../constant";
import Category from "./components/Category";

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
	const back = () =>
		Toast.show({
			content: '点击了返回区域',
			duration: 1000,
		});
	/**
	 * @name:handleClick
	 * @description:控制时间选择器DatePicker显示或隐藏
	 *
	 * */
	const handleClick = () => {
		setDateVisible(true);
	}

	/**
	 * @name:saveBill
	 * @description:表单数据收集
	 * 点击"保存"按钮，将数据收集到
	 *
	 * */
	const saveBill = () => {
		const billData = {
			type,
			money: type === "pay" ? -money : +money,
			date: new Date(),
			useFor: useFor
		}
		console.log(billData);
	}
	/**
	 * @name:handlerSonClick
	 * @params: type,描述一种支出 或者 收入 的类型
	 * @description:传给子组件Category的方法，每一个
	 *
	 * */
	const handlerSonClick = (type) => {
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
					<IconItem type="calendar" onClick={handleClick}/>
					<span onClick={() => setDateVisible(true)}>今天</span>
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
				onConfirm={val => {
					Toast.show(val.toDateString())
				}}
			/>
		</div>
		<div className="main-fat">
			<div className="main-content">
				{
					billListData[type].map((bill, ind) => {
						return <Category name={bill.name} list={bill.list} key={ind} handlerSonClick={handlerSonClick}/>

					})
				}
			</div>
		</div>
		<div className="new-footer">
			<Button block color='primary' size='small' onClick={saveBill}>保存</Button>
		</div>
	</div>)
}