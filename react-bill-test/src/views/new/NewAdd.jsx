import "./newAdd.scss";
import {Button, DatePicker, Input, NavBar, Toast} from "antd-mobile";
import classNames from "classnames";
import {useState} from "react";
import IconItem from "../layout/month/components/IconItem";
import {billListData} from "../../constant";
import Category from "./components/Category";

export default function NewAdd() {
	const [value, setValue] = useState();
	const [dateVisible, setDateVisible] = useState(false);
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
	 * @name: btnHandle处理
	 * @description:控制按钮的显示
	 *
	 * */
	const btnHandler = (type) => {
		console.log(type);
		if (type === "pay") {
			setType("pay");
		} else {
			setType("income");
		}
	}
	/**
	 * @控制按钮选中 支出 或者 收入
	 * 状态变量：type
	 *
	 * */
	const [type, setType] = useState("pay");
	const btnInfo = [{type: "pay", name: "支出"}, {type: "income", name: "收入"}];
	return (<div className="footer-container">
		<div className="card-header">
			{/*	导航栏 */}
			<NavBar onBack={back}>记一笔</NavBar>
			{/*	导航按钮支出、收入*/}
			<div className="btn">
				{btnInfo.map((item, index) => {
					return <Button block={false} shape='rounded' color='primary' key={index}
					               className={classNames(type === item.type && "active")}
					               onClick={() => btnHandler(item.type)}>{item.name}</Button>
				})}
			</div>
			{/*	输入文本框 */}
			<div className="text-input">
				<div className="time">
					<IconItem type="calendar" onClick={handleClick}/>
					<span onClick={() => setDateVisible(true)}>今天</span>
				</div>
				<Input
					placeholder='0.00'
					value={value}
					onChange={val => {
						setValue(val)
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
						return <Category name={bill.name} list={bill.list} key={ind}/>

					})
				}
			</div>
		</div>
		<div className="new-footer">
			<Button block color='primary' size='small'>保存</Button>
		</div>
	</div>)
}