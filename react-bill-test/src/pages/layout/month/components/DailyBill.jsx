import classNames from "classnames";
import "./index.scss";
import {useMemo, useState} from "react";
import DailyItem from "./DailyItem";


const DailyBill = ({date, dailyList}) => {
	const [itemVisible, setItemVisible] = useState(false);
	console.log(dailyList);
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
				<div
					className="date">{new Date(date).getFullYear() + '年' + (new Date(date).getMonth() + 1) + '月' + new Date(date).getDate() + '日'}</div>
				<div className={classNames("arrow", itemVisible && "expand")} onClick={() => {
					setItemVisible(!itemVisible)
				}}></div>
			</div>
			<div className="oneLineOverview">
				<div className="pay item">
					<span>支出</span>
					<span>{dailyInfo.pay.toFixed(2)}</span>
				</div>
				<div className="income item">
					<span>收入</span>
					<span>{dailyInfo.income.toFixed(2)}</span>
				</div>
				<div className="balance item">
					<span>{dailyInfo.total.toFixed(2)}</span>
					<span>结余</span>
				</div>
			</div>
			{itemVisible && <div className="detail">
				{
					dailyList.map(item => {
						return <DailyItem useFor={item.useFor} money={item.money} key={item.id}/>
					})
				}
			</div>}
		</div>
	</div>)
}
export default DailyBill;