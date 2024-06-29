import {DatePicker, NavBar} from "antd-mobile";
import {useEffect, useMemo, useState} from "react";
import "./year.scss";
import dayjs from "dayjs";
// 类样式简化工具
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {getBillList} from "../../../store/modules/billStore";
import MonthBill from "../month/MonthBill";
import EveryMonthBill from "./components/EveryMonthBill";

export default function YearBill() {
	// 状态变量：控制时间选择器的显示或者隐藏
	const [dateVisible, setDateVisible] = useState(false);
	// 状态变量：currentDate
	const [currentDate, setCurrentDate] = useState(dayjs(new Date()).format("YYYY"));
	// 获取当前时间，以限定时间选择器范围
	// 年份组成的数组
	const [currentYearList, setCurrentYearList] = useState([]);
	const now = new Date();
	/**
	 * @name:dateConfirmHandler
	 * @description:时间选择器-确认时，事件处理函数
	 *
	 * */
		// 获取数据列表
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getBillList())
	}, [dispatch]);
	const {billList} = useSelector(state => state.bill);
	console.log("TEST1", billList);
	/**
	 * @将billList数据，按照年分组
	 *
	 * */
	const GroupByYear = useMemo(() => {
		return _.groupBy(billList, item => dayjs(item.date).format("YYYY"));

	}, [billList]);
	console.log(GroupByYear);
	const dateConfirmHandler = (val) => {
		console.log(val);
		// 根据val，更新为选中的年份
		setCurrentDate(dayjs(val).format("YYYY"));
		setCurrentYearList(GroupByYear[dayjs(val).format("YYYY")] ? GroupByYear[dayjs(val).format("YYYY")] : []);

	}
	/**
	 * @name:useEffect
	 * @description:初始化时，年账单统计区域，展示的是当前年份的账单
	 *
	 * */
	useEffect(() => {
		setCurrentYearList(GroupByYear[dayjs(now).format("YYYY")] ? GroupByYear[dayjs(now).format("YYYY")] : []);
	}, [GroupByYear]);
	/**
	 * @name:
	 * @description:统计支出、收入和结余，reduce方法
	 * pay、income和total
	 *
	 * */
	const YearResult = useMemo(() => {
		const pay = currentYearList.filter((item) => item.type === "pay").reduce((a, c) => a + c['money'], 0);
		const income = currentYearList.filter((item) => item.type === "income").reduce((a, c) => a + c['money'], 0);
		return {
			pay,
			income,
			total: pay + income
		}
	}, [currentYearList]);
	/**
	 * @name:MonthGroup
	 * @description:
	 *
	 * */
	const MonthGroup = useMemo(() => {
		const monthList = _.groupBy(currentYearList, item => dayjs(item.date).format("YYYY-MM"));
		const keys = Object.keys(monthList);
		// 排序后，影响原数组，所以不用接收
		keys.sort((a, b) => b.localeCompare(a));// 将keys数组中日期按照 时间倒序 排列
		console.log("test0", keys);
		return {
			keys,
			monthList
		}
	}, [currentYearList]);


	return (<div className="year-bill">
		<div className="header">
			<NavBar backArrow={false}>
				<div className="year-header">
					<span onClick={() => setDateVisible(true)}>{currentDate + ""}</span>
					<div className={classNames("arrow", dateVisible && "expand")}></div>
				</div>
			</NavBar>
			{/*年度账单 展示区*/}
			<div className="year-container">
				<div className="year-content">
					{/*年度汇总*/}
					<div className="overview">
						<div className="item">
							<span>{YearResult.pay.toFixed(2)}</span>
							<span>支出</span>
						</div>
						<div className="item">
							<span>{YearResult.income.toFixed(2)}</span>
							<span>收入</span>
						</div>
						<div className="item">
							<span>{YearResult.total.toFixed(2)}</span>
							<span>结余</span>
						</div>
					</div>
					{/*每月列表渲染*/}
					<div className="list-container">
						{
							MonthGroup.keys.map((item, index) => {
								return (
									<EveryMonthBill everyMonth={MonthGroup.monthList[item]} key={index} item={item}/>
								)
							})
						}
					</div>
				</div>
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