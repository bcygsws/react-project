import {DatePicker, NavBar, Toast} from "antd-mobile"
import "./month.scss";
import {useState} from "react";
// 时间格式化工具dayjs
import dayjs from "dayjs";
// css类格式化工具classnames
import classNames from "classnames";

export default function MonthBill() {
	const [visible, setVisible] = useState(false);
	const [dateVisible, setDateVisible] = useState(false);
	const [currentDate, setCurrentDate] = useState(() => {
			return dayjs(new Date()).format("YYYY-MM")
		}
	);
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
				<span>{currentDate + ''}月账单</span>
				<span className={classNames("arrow", dateVisible && "expand")}></span>
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
			onConfirm={val => {
				Toast.show(val.toDateString())
			}}
		/>
	</div>);

}