import {DatePicker, NavBar, Toast} from "antd-mobile"
import "./month.scss";
import {useState} from "react";
// 时间格式化工具dayjs
import {genFormat} from "../../../utils/TimeFormat";
// css类格式化工具classnames
import classNames from "classnames";

export default function MonthBill() {
	const [visible, setVisible] = useState(false);
	const [dateVisible, setDateVisible] = useState(false);
	// currentDate上默认显示的时间，总是当时的 年份-月份
	const [currentDate, setCurrentDate] = useState(genFormat(new Date()));
	// 时间选择器切换时间
	const confirmHandler = (val) => {
		// Toast.show(val.toDateString());
		// 存储当前选择的时间数组
		setCurrentDate(genFormat(val));
	}
	// 获取当前时间
	const now = new Date();
	return (<div className="monthly-bill">
		<div className="header">
			<NavBar backArrow={false}>月度账单</NavBar>
		</div>
		<div className="content">
			{/*时间切换区域*/}
			<div className="time" onClick={() => {
				setDateVisible(true)
			}}>
				<span onClick={() => {
					setVisible(true)
				}}>{currentDate + ''}月账单</span>
				<span className={classNames("arrow", visible && "expand")}></span>
			</div>
			<div className="data">
				<div className="item">
					<span>支出</span>
					<span>0.00</span>
				</div>
				<div className="item">
					<span>收入</span>
					<span>0.00</span>
				</div>
				<div className="item">
					<span>结余</span>
					<span>0.00</span>
				</div>
			</div>
		</div>
		<DatePicker
			title='时间选择'
			visible={visible}
			onClose={() => {
				setVisible(false)
			}}
			max={now}
			onConfirm={val => confirmHandler(val)}
		/>
	</div>);

}