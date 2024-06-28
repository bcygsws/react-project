import {DatePicker, NavBar} from "antd-mobile";
import {useState} from "react";
import "./year.scss";
import dayjs from "dayjs";
// 类样式简化工具
import classNames from "classnames";

export default function YearBill() {
	// 状态变量：控制时间选择器的显示或者隐藏
	const [dateVisible, setDateVisible] = useState(false);
	// 状态变量：currentDate
	const [currentDate, setCurrentDate] = useState(dayjs(new Date()).format("YYYY"));
	// 获取当前时间，以限定时间选择器范围
	const now = new Date();
	/**
	 * @name:dateConfirmHandler
	 * @description:时间选择器-确认时，事件处理函数
	 *
	 * */
	const dateConfirmHandler = (val) => {
		console.log(val);
		// 根据val，更新为选中的年份
		setCurrentDate(dayjs(val).format("YYYY"));

	}
	return (<div className="year-bill">
		<div className="header">
			<NavBar backArrow={false}>
				<div className="year-header">
					<span onClick={() => setDateVisible(true)}>{currentDate + ""}</span>
					<div className={classNames("arrow", dateVisible && "expand")}></div>
				</div>
			</NavBar>
			{/*年度账单 展示区*/}
			<div className="year-content">
				{/*年度汇总*/}
				<div className="overview"></div>
				{/*每月列表渲染*/}
				<div className="month-list"></div>

			</div>
		</div>
		<DatePicker
			title='时间选择'
			visible={dateVisible}
			onClose={() => {
				setDateVisible(false)
			}}
			max={now}
			onConfirm={dateConfirmHandler}
			precision="year"
		/>
	</div>);

}