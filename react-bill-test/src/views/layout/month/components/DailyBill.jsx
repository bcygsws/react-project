import classNames from "classnames";
import "./index.scss";
import {useMemo} from "react";

const DailyBill = ({date, dailyList}) => {
	const dailyInfo = useMemo(() => {
		const pay = dailyList.filter(item => item.type === "pay").reduce((a, c) => a + c['money'], 0);
		const income = dailyList.filter(item => item.type === "income").reduce((a, c) => a + c['money'], 0);
		return {
			pay,
			income,
			total: pay + income
		}
	}, [dailyList]);
	return (<div className="day-bill">
		<div className="card">
			<div className="dateIcon">
				<div className="date">{date}</div>
				<div className="arrow"></div>
			</div>
			<div className="oneLineOverview">
				<div className="pay item">
					<span>支出</span>
					<span>{dailyInfo.pay}</span>
				</div>
				<div className="income item">
					<span>收入</span>
					<span>{dailyInfo.income}</span>
				</div>
				<div className="balance item">
					<span>{dailyInfo.total}</span>
					<span>结余</span>
				</div>
			</div>
		</div>
	</div>)
}
export default DailyBill;