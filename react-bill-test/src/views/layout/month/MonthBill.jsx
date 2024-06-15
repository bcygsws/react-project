import {NavBar} from "antd-mobile"
import "./month.scss";

export default function MonthBill() {
	return (<div className="monthly-bill">
		<div className="header">
			<NavBar backArrow={false}>月度账单</NavBar>
		</div>
		<div className="content">
			<div className="time">12</div>
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
	</div>);

}