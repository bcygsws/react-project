import {useMemo} from "react";

const EveryMonthBill = ({item, everyMonth}) => {
	console.log(everyMonth);
	/**
	 * @name:EveryMonthResult
	 * @description:当前年份每个月的支出、收入、结余统计
	 * pay、income、total
	 *
	 * */
	const EveryMonthResult = useMemo(() => {
		const pay = everyMonth.filter((item) => item.type === 'pay').reduce((a, c) => a + c['money'], 0);
		const income = everyMonth.filter((item) => item.type === 'income').reduce((a, c) => a + c['money'], 0);
		return {
			pay,
			income,
			total: pay + income
		};
	}, [everyMonth])
	return (
		<div className="month-card">
			<div className="title">{new Date(item).getMonth() + 1}月</div>

			<div className="month-bill">
				<div className="item">
					<span className="txt">支出</span>
					<span>{EveryMonthResult.pay.toFixed(2)}</span>
				</div>
				<div className="item">
					<span className="txt">收入</span>
					<span>{EveryMonthResult.income.toFixed(2)}</span>
				</div>
				<div className="item">
					<span>{EveryMonthResult.total.toFixed(2)}</span>
					<span className="txt">结余</span>
				</div>
			</div>
		</div>
	)
}
export default EveryMonthBill;