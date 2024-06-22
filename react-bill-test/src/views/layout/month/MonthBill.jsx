import {DatePicker, NavBar, Toast} from "antd-mobile"
import "./month.scss";
import {useState} from "react";
// 时间格式化工具dayjs
import {genFormat} from "../../../utils/TimeFormat";
// css类格式化工具classnames
import classNames from "classnames";

export default function MonthBill() {
	const [visible, setVisible] = useState(false);
	// 时间选择器，状态变量：true，打开；false,关闭
	const [dateVisible, setDateVisible] = useState(false);
	// currentDate上默认显示的时间，总是当时的 年份-月份
	const [currentDate, setCurrentDate] = useState(genFormat(new Date()));
	// 时间选择器切换时间
	const confirmHandler = (val) => {
		// Toast.show(val.toDateString());
		// 存储当前选择的时间数组
		setCurrentDate(genFormat(val));
	}
	// 变量now,获取当前时间
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
				{/*注意："" 拼接成字符串的目的是，react的规则，对象不能直接渲染*/}
				<span>{currentDate + ''}月账单</span>
				<span className={classNames("arrow", dateVisible && "expand")}></span>
			</div>
			<div className="data">
				<div className="item">
					<span>0.00</span>
					<span>支出</span>
				</div>
				<div className="item">
					<span>0.00</span>
					<span>收入</span>
				</div>
				<div className="item">
					<span>0.00</span>
					<span>结余</span>
				</div>
			</div>
		</div>
		{/*时间选择器，使用dateVisible控制打开和关闭状态*/}
		<DatePicker
			title='时间选择'
			visible={dateVisible}
			onClose={() => {
				setDateVisible(false)
			}}
			max={now}
			onConfirm={val => confirmHandler(val)}
		/>
	</div>);

}